#!/usr/bin/env bash
#
# Sync the Kripto-Kurs web app (HTML/SPA version of the cryptography lectures)
# from the upstream repo into ./kripto/, served at /kripto/ on the site.
#
# Upstream: https://github.com/SuleimanHajizadeh/Kripto-Kurs (private; needs access)
# Only the ASCII-named files are copied - the Mühazirə_*/Əlavə_* duplicates are
# skipped to avoid NFC/NFD filename trouble.
#
# Usage: bash tools/sync-kripto.sh [git-ref]

set -euo pipefail

REPO="https://github.com/SuleimanHajizadeh/Kripto-Kurs.git"
REF="${1:-master}"
SRC_SUBDIR="Kripto_WebApp-HTML-SPA"
DEST="$(cd "$(dirname "$0")/.." && pwd)/kripto"

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

# Sparse checkout of the SPA folder only: the rest of upstream has filenames that
# are invalid on Windows (e.g. colons under wiki/).
git -c core.protectNTFS=false clone --quiet --depth 1 --branch "$REF" --filter=blob:none --no-checkout "$REPO" "$tmp/repo"
git -c core.protectNTFS=false -C "$tmp/repo" sparse-checkout set --no-cone "$SRC_SUBDIR/"
git -c core.protectNTFS=false -C "$tmp/repo" checkout --quiet "$REF"
src="$tmp/repo/$SRC_SUBDIR"
sha="$(git -C "$tmp/repo" rev-parse HEAD)"

rm -rf "$DEST"
mkdir -p "$DEST"

cp "$src"/index.html "$src"/app.js "$src"/style.css \
  "$src"/lectures_bundle.js "$src"/references_data.js \
  "$src"/manifest.json "$src"/sw.js "$src"/aes_penguin.png "$DEST"/
cp "$src"/lecture_*.html "$src"/supplement_*.html "$DEST"/
cp -r "$src"/assets "$DEST"/

printf '%s\n' "$REPO" "$sha" > "$DEST/UPSTREAM.txt"

echo "Synced $SRC_SUBDIR @ ${sha:0:7} -> kripto/ ($(du -sh "$DEST" | cut -f1))"
