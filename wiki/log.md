---
title: Журнал вики
type: log
updated: 2026-06-26
---

# Журнал вики

Хронологический, append-only журнал. Каждая запись начинается с префикса
`## [YYYY-MM-DD] <ingest|query|lint> | Заголовок`.

## [2026-06-26] setup | Инициализация вики

Создан каркас LLM-вики в репозитории сайта `alov-ai.github.io`:

- Схема `CLAUDE.md` (домен: организация и её сайт; ингест по одному, с участием).
- Структура `wiki/` (index, log, overview, entities, concepts, decisions, sources)
  и `raw/` (источники + assets/).
- Папки `wiki/` и `raw/` добавлены в `exclude` в `_config.yml` — не публикуются Jekyll.

## [2026-06-26] ingest | Снимок репозитория сайта

Источник: сам репозиторий на момент старта (см. [[2026-06-26-repo-snapshot]]).
Создано: [[website]], [[decision-chirpy-theme]], [[overview]]. Затронут [[index]].
Ключевое: сайт — нетронутый стартовый шаблон Chirpy; конфиг содержит плейсхолдеры.
