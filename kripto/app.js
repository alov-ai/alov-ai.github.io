/* ==========================================================================
   KRİPTOQRAFİYA KURSU - MASTER INTERACTION SCRIPT (app.js)
   Universal Hash Router (30 Mühazirə + 4 Əlavə) | Dynamic Content Engine
   Pure Academic Light Theme | Mobile Responsive Drawer | Interactive Crypto Calculators
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
    // Clean up any legacy dark theme preference in local storage
    try {
        localStorage.removeItem("kripto-theme");
    } catch(e) {}

    // ----------------------------------------------------------------------
    // 2. UNIVERSAL RESPONSIVE SIDEBAR TOGGLE & BACKDROP
    // ----------------------------------------------------------------------
    const sidebarDrawer = document.getElementById("app-sidebar");
    const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
    const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

    let backdrop = document.querySelector(".sidebar-backdrop");
    if (!backdrop) {
        backdrop = document.createElement("div");
        backdrop.className = "sidebar-backdrop";
        document.body.appendChild(backdrop);
    }

    function isMobileViewport() {
        return window.innerWidth < 992;
    }

    function toggleSidebar(forceState) {
        if (!sidebarDrawer) return;

        if (isMobileViewport()) {
            const shouldOpen = forceState !== undefined ? forceState : !sidebarDrawer.classList.contains("open");
            if (shouldOpen) {
                sidebarDrawer.classList.add("open");
                if (backdrop) backdrop.classList.add("active");
            } else {
                sidebarDrawer.classList.remove("open");
                if (backdrop) backdrop.classList.remove("active");
            }
        } else {
            const isCurrentlyCollapsed = document.body.classList.contains("sidebar-collapsed");
            const shouldCollapse = forceState !== undefined ? !forceState : !isCurrentlyCollapsed;

            if (shouldCollapse) {
                document.body.classList.add("sidebar-collapsed");
                localStorage.setItem("kripto-sidebar-desktop", "collapsed");
            } else {
                document.body.classList.remove("sidebar-collapsed");
                localStorage.setItem("kripto-sidebar-desktop", "expanded");
            }
        }
    }

    function toggleMobileDrawer(open) {
        if (isMobileViewport()) {
            toggleSidebar(open);
        }
    }

    if (!isMobileViewport()) {
        if (localStorage.getItem("kripto-sidebar-desktop") === "collapsed") {
            document.body.classList.add("sidebar-collapsed");
        }
    }

    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleSidebar();
        });
    }

    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleSidebar(false);
        });
    }

    if (backdrop) {
        backdrop.addEventListener("click", () => {
            toggleSidebar(false);
        });
    }

    // ----------------------------------------------------------------------
    // 3. MASTER COURSE FILE REGISTRY (30 LECTURES + 4 SUPPLEMENTS)
    // ----------------------------------------------------------------------
    const LECTURES_MAP = {
        "lecture-1": { title: "Mühazirə 1: Kriptoqrafiyaya Giriş", file: "Mühazirə_1.html", asciiFile: "lecture_1.html", group: "b1" },
        "lecture-2": { title: "Mühazirə 2: Klassik Şifrələr", file: "Mühazirə_2.html", asciiFile: "lecture_2.html", group: "b1" },
        "lecture-3": { title: "Mühazirə 3: Polialfabetik Şifrələr və Vijener", file: "Mühazirə_3.html", asciiFile: "lecture_3.html", group: "b1" },
        "lecture-4": { title: "Mühazirə 4: Ehtimal Nəzəriyyəsi və Kriptoanaliz", file: "Mühazirə_4.html", asciiFile: "lecture_4.html", group: "b1" },
        "lecture-5": { title: "Mühazirə 5: İnformasiya Nəzəriyyəsi və Mütləq Məxfilik", file: "Mühazirə_5.html", asciiFile: "lecture_5.html", group: "b1" },
        "lecture-6": { title: "Mühazirə 6: Axın Şifrələri və LFSR", file: "Mühazirə_6.html", asciiFile: "lecture_6.html", group: "b1" },

        "lecture-7": { title: "Mühazirə 7: Müasir Axın Şifrələri (Trivium, ChaCha20)", file: "Muhazirə_7.html", asciiFile: "lecture_7.html", group: "b2" },
        "lecture-8": { title: "Mühazirə 8: Feystel Şəbəkələri və DES", file: "Mühazirə_8.html", asciiFile: "lecture_8.html", group: "b2" },
        "lecture-9": { title: "Mühazirə 9: Diferensial və Xətti Kriptoanaliz", file: "Mühazirə_9.html", asciiFile: "lecture_9.html", group: "b2" },
        "lecture-10": { title: "Mühazirə 10: AES Alqoritmi", file: "Mühazirə_10.html", asciiFile: "lecture_10.html", group: "b2" },
        "lecture-11": { title: "Mühazirə 11: Blok Şifrə Rejimıəri", file: "Mühazirə_11.html", asciiFile: "lecture_11.html", group: "b2" },
        "lecture-12": { title: "Mühazirə 12: Hash Funksiyaları", file: "Mühazirə_12.html", asciiFile: "lecture_12.html", group: "b2" },
        "lecture-13": { title: "Mühazirə 13: SHA-3 və Süngər Konstruksiyaları", file: "Mühazirə_13.html", asciiFile: "lecture_13.html", group: "b2" },
        "lecture-14": { title: "Mühazirə 14: Keccak Alqoritmi", file: "Mühazirə_14.html", asciiFile: "lecture_14.html", group: "b2" },
        "lecture-15": { title: "Mühazirə 15: MAC və Hibrid Şifrləmə", file: "Mühazirə_15.html", asciiFile: "lecture_15.html", group: "b2" },

        "lecture-16": { title: "Mühazirə 16: Asimmetrik Kriptoqrafiya", file: "Mühazirə_16.html", asciiFile: "lecture_16.html", group: "b3" },
        "lecture-17": { title: "Mühazirə 17: Ədədlər Nəzəriyyəsi və Modul Arifmetika", file: "Mühazirə_17.html", asciiFile: "lecture_17.html", group: "b3" },
        "lecture-18": { title: "Mühazirə 18: Evler Funksiyası və CRT", file: "Mühazirə_18.html", asciiFile: "lecture_18.html", group: "b3" },
        "lecture-19": { title: "Mühazirə 19: RSA Kriptosistemi", file: "Mühazirə_19.html", asciiFile: "lecture_19.html", group: "b3" },
        "lecture-20": { title: "Mühazirə 20: Difi-Hellman Açar Mübadiləsi", file: "Mühazirə_20.html", asciiFile: "lecture_20.html", group: "b3" },
        "lecture-21": { title: "Mühazirə 21: Elliptik Əyrilər Kriptoqrafiyası (ECC)", file: "Mühazirə_21.html", asciiFile: "lecture_21.html", group: "b3" },
        "lecture-22": { title: "Mühazirə 22: ECDH və ECDSA Protokolları", file: "Mühazirə_22.html", asciiFile: "lecture_22.html", group: "b3" },
        "lecture-23": { title: "Mühazirə 23: Rəqəmsal İmzalar", file: "Mühazirə_23.html", asciiFile: "lecture_23.html", group: "b3" },

        "lecture-24": { title: "Mühazirə 24: Açar İdarəetməsi və PKI", file: "Mühazirə_24.html", asciiFile: "lecture_24.html", group: "b4" },
        "lecture-25": { title: "Mühazirə 25: Təhlükəsiz Şəbəkə Protokolları (TLS/IPsec)", file: "Mühazirə_25.html", asciiFile: "lecture_25.html", group: "b4" },
        "lecture-26": { title: "Mühazirə 26: Sıfır Biliyi Sübutları (ZKP)", file: "Mühazirə_26.html", asciiFile: "lecture_26.html", group: "b4" },
        "lecture-27": { title: "Mühazirə 27: Yan Kanal Hücumları", file: "Mühazirə_27.html", asciiFile: "lecture_27.html", group: "b4" },
        "lecture-28": { title: "Mühazirə 28: Post-Kvant Kriptoqrafiya (PQC)", file: "Mühazirə_28.html", asciiFile: "lecture_28.html", group: "b4" },
        "lecture-29": { title: "Mühazirə 29: Kod Əsaslı və Xeş Əsaslı PQC", file: "Mühazirə_29.html", asciiFile: "lecture_29.html", group: "b4" },
        "lecture-30": { title: "Mühazirə 30: Müasir Kriptoqrafik Tətbiqlər", file: "Mühazirə_30.html", asciiFile: "lecture_30.html", group: "b4" },

        "supplement-A": { title: "Əlavə A: Kriptoqrafiyanın Böyük Tarixi", file: "Kripto_kurs_Əlavə_A_Tarixi.html", asciiFile: "supplement_a.html", group: "b5" },
        "supplement-B": { title: "Əlavə B: Qrup, Meydan və Cəbr Təməlləri", file: "Kripto_kurs_Əlavə_B_Qrup_Meydan_vəsair.html", asciiFile: "supplement_b.html", group: "b5" },
        "supplement-C": { title: "Əlavə C: Hesablama Mürəkkəbliyi Nəzəriyyəsi", file: "Kripto_Kurs_Əlavə_C_Mürəkkəblik.html", asciiFile: "supplement_c.html", group: "b5" },
        "supplement-D": { title: "Əlavə D: Faktorizasiya və Diskret Loqarifmləmə", file: "Kripto_kurs_Əlavə_D_faktorizasiya.html", asciiFile: "supplement_d.html", group: "b5" },
        "supplement-E": { title: "Əlavə E: Kriptoqrafiya Onlayn (Açıq Resurslar)", file: "Kripto_kurs_Əlavə_E_Onlayn_Resurslar.html", asciiFile: "supplement_e.html", group: "b5" },
        "glossary-compact": { title: "Kriptoqrafiya Lüğəti (Yığcam Versiya)", file: "Kripto_lüğət_kiçik.html", asciiFile: "glossary_compact.html", group: "lugat" },
        "glossary-full": { title: "İngilis–Azərbaycan Kriptoqrafiya Lüğəti (Tam Versiya)", file: "Kriptoqrafia_lüğəti_tam.html", asciiFile: "glossary_full.html", group: "lugat" }
    };

    const lectureCache = (window.KRIPTO_PRELOADED_LECTURES && typeof window.KRIPTO_PRELOADED_LECTURES === "object")
        ? Object.assign({}, window.KRIPTO_PRELOADED_LECTURES)
        : {};
    const dynamicViewport = document.getElementById("lecture-content-viewport");
    const embeddedViews = {
        "home": document.getElementById("view-catalog"),
        "catalog": document.getElementById("view-catalog"),
        "tools": document.getElementById("view-tools"),
        "quiz": document.getElementById("view-quiz"),
        "bib": document.getElementById("view-bib"),
        "bibliography": document.getElementById("view-bib"),
        "references": document.getElementById("view-bib")
    };

    // ----------------------------------------------------------------------
    
    // ----------------------------------------------------------------------
    // 3.5. DYNAMIC CITATION ENGINE & MASTER BIBLIOGRAPHY
    // ----------------------------------------------------------------------
    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    window.copyBibtex = function(citeKey) {
        const bib = window.KRIPTO_BIBLIOGRAPHY || {};
        const item = bib[citeKey];
        if (!item || !item.rawBibtex) {
            showToast("Mənbə tapılmadı!");
            return;
        }
        const text = item.rawBibtex;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                showToast(`"${citeKey}" üçün BibTeX uğurla kopyalandı!`);
            }).catch(() => {
                fallbackCopy(text, citeKey);
            });
        } else {
            fallbackCopy(text, citeKey);
        }
    };

    function fallbackCopy(text, citeKey) {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand("copy");
            showToast(`"${citeKey}" üçün BibTeX uğurla kopyalandı!`);
        } catch(e) {
            showToast("Kopyalamaq mümkün olmadı.");
        }
        document.body.removeChild(ta);
    }

    function showToast(message) {
        let toast = document.getElementById("kripto-dynamic-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.id = "kripto-dynamic-toast";
            toast.className = "kripto-toast";
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<i class="bi bi-check2-circle text-success fs-5"></i> <span>${escapeHtml(message)}</span>`;
        toast.classList.add("show");
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }

    function initInlineCitations(container) {
        if (!container) return;
        const bib = window.KRIPTO_BIBLIOGRAPHY || {};
        const spans = container.querySelectorAll("span.citation[data-cites]");

        spans.forEach((span) => {
            const citeAttr = span.getAttribute("data-cites") || "";
            const keys = citeAttr.split(/\s+/).filter(Boolean);
            if (keys.length === 0) return;

            const badgeHtml = keys.map((key) => {
                const item = bib[key];
                if (item) {
                    const title = item.title || key;
                    const author = item.author || "";
                    const year = item.year || "";
                    const venue = item.journal || item.publisher || "";
                    const popoverHtml = `<div class='citation-popover-content'><div class='fw-bold mb-1'>${escapeHtml(title)}</div><div class='small text-muted'>${escapeHtml(author)} ${year ? `(${escapeHtml(year)})` : ''}</div>${venue ? `<div class='small text-secondary fst-italic mt-1'>${escapeHtml(venue)}</div>` : ''}</div>`;

                    return `<a href="#bib-${key}" class="citation-ref-badge" data-bib-id="${key}" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover focus" data-bs-html="true" data-bs-title="Akademik Mənbə" data-bs-content="${escapeHtml(popoverHtml)}">[${escapeHtml(item.shortLabel || key)}]</a>`;
                } else {
                    return `<span class="citation-ref-badge">[${escapeHtml(key)}]</span>`;
                }
            }).join(" ");

            span.outerHTML = badgeHtml;
        });
    }

    function buildLectureBibliography(container, lectureId) {
        if (!container) return "";
        const bib = window.KRIPTO_BIBLIOGRAPHY || window.REFERENCES_DATA || {};
        const badges = container.querySelectorAll(".citation-ref-badge[data-bib-id]");
        const seenKeys = new Set();
        const items = [];

        badges.forEach((b) => {
            const key = b.getAttribute("data-bib-id");
            if (key && !seenKeys.has(key) && bib[key]) {
                seenKeys.add(key);
                items.push(bib[key]);
            }
        });

        if (items.length === 0) return "";

        return `
            <div class="lecture-bib-section mt-5" id="istinadlar">
                <div class="lecture-bib-header d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h2 class="h4 fw-bold mb-0 text-primary" id="istinadlar-basliq">
                        <i class="bi bi-journal-bookmark-fill me-2"></i> İstinadlar (${items.length})
                    </h2>
                    <a href="#bibliography" class="btn btn-sm btn-outline-primary fw-semibold">
                        <i class="bi bi-collection me-1"></i> Bütün Kitabxana (${Object.keys(bib).length}+)
                    </a>
                </div>
                <div class="lecture-bib-list">
                    ${items.map((it, idx) => `
                        <div class="lecture-bib-item" id="bib-${it.id}">
                            <div class="d-flex align-items-start justify-content-between gap-2 flex-wrap mb-1">
                                <span class="badge bg-primary-subtle text-primary fw-bold">[${idx + 1}] ${escapeHtml(it.shortLabel)}</span>
                                <div class="d-flex align-items-center gap-1.5">
                                    <button type="button" class="btn btn-sm btn-outline-dark py-0 px-2" style="font-size: 0.78rem;" onclick="window.copyBibtex('${it.id}')" title="BibTeX Kopyala">
                                        <i class="bi bi-clipboard me-1"></i>BibTeX
                                    </button>
                                </div>
                            </div>
                            <h6 class="fw-bold mb-1 text-heading">${escapeHtml(it.title)}</h6>
                            <p class="small text-secondary mb-1">${escapeHtml(it.author)} ${it.year ? `(${it.year})` : ''}</p>
                            ${it.journal || it.publisher ? `<p class="small text-muted mb-0 fst-italic">${escapeHtml(it.journal || it.publisher)}${it.volume ? `, Vol. ${it.volume}` : ''}${it.number ? `, No. ${it.number}` : ''}${it.pages ? `, pp. ${it.pages}` : ''}</p>` : ''}
                            ${it.abstract ? `<div class="small text-muted mt-2 p-2 bg-white rounded border border-light-subtle"><strong>Xülasə:</strong> ${escapeHtml(it.abstract)}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let masterBibState = {
        filterType: "all",
        searchQuery: "",
        sortBy: "year-desc",
        displayCount: 30
    };

    function initMasterBibliography() {
        const bib = window.KRIPTO_BIBLIOGRAPHY || {};
        const entries = Object.values(bib);
        if (entries.length === 0) return;

        // Update Category Counters
        const countAll = entries.length;
        const countBook = entries.filter(e => e.type === "book").length;
        const countArticle = entries.filter(e => e.type === "article").length;
        const countInproceedings = entries.filter(e => e.type === "inproceedings" || e.type === "conference" || e.type === "incollection").length;
        const countTechreport = entries.filter(e => e.type === "techreport" || e.type === "standard" || e.type === "rfc" || e.type === "misc" || e.type === "manual" || e.type === "patent" || e.type === "phdthesis" || e.type === "online").length;

        const elCountAll = document.getElementById("count-all");
        const elCountBook = document.getElementById("count-book");
        const elCountArticle = document.getElementById("count-article");
        const elCountInproceedings = document.getElementById("count-inproceedings");
        const elCountTechreport = document.getElementById("count-techreport");

        if (elCountAll) elCountAll.textContent = countAll;
        if (elCountBook) elCountBook.textContent = countBook;
        if (elCountArticle) elCountArticle.textContent = countArticle;
        if (elCountInproceedings) elCountInproceedings.textContent = countInproceedings;
        if (elCountTechreport) elCountTechreport.textContent = countTechreport;

        // Search Input
        const searchInput = document.getElementById("bib-search-input");
        const searchClear = document.getElementById("bib-search-clear");
        if (searchInput && !searchInput._hasListener) {
            searchInput._hasListener = true;
            searchInput.addEventListener("input", (e) => {
                masterBibState.searchQuery = e.target.value.toLowerCase().trim();
                masterBibState.displayCount = 30;
                renderMasterBibList();
            });
        }
        if (searchClear && !searchClear._hasListener) {
            searchClear._hasListener = true;
            searchClear.addEventListener("click", () => {
                if (searchInput) {
                    searchInput.value = "";
                    masterBibState.searchQuery = "";
                    masterBibState.displayCount = 30;
                    renderMasterBibList();
                }
            });
        }

        // Sort Select
        const sortSelect = document.getElementById("bib-sort-select");
        if (sortSelect && !sortSelect._hasListener) {
            sortSelect._hasListener = true;
            sortSelect.addEventListener("change", (e) => {
                masterBibState.sortBy = e.target.value;
                renderMasterBibList();
            });
        }

        // Filter Buttons
        document.querySelectorAll(".bib-filter-btn").forEach((btn) => {
            if (!btn._hasListener) {
                btn._hasListener = true;
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".bib-filter-btn").forEach(b => {
                        b.classList.remove("active", "btn-primary");
                        b.classList.add("btn-outline-primary");
                    });
                    btn.classList.add("active", "btn-primary");
                    btn.classList.remove("btn-outline-primary");

                    masterBibState.filterType = btn.getAttribute("data-type") || "all";
                    masterBibState.displayCount = 30;
                    renderMasterBibList();
                });
            }
        });

        // Load More Button
        const loadMoreBtn = document.getElementById("bib-load-more-btn");
        if (loadMoreBtn && !loadMoreBtn._hasListener) {
            loadMoreBtn._hasListener = true;
            loadMoreBtn.addEventListener("click", () => {
                masterBibState.displayCount += 30;
                renderMasterBibList();
            });
        }

        renderMasterBibList();
    }

    function renderMasterBibList() {
        const bib = window.KRIPTO_BIBLIOGRAPHY || {};
        let list = Object.values(bib);
        const container = document.getElementById("bib-results-container");
        const visibleCountEl = document.getElementById("bib-visible-count");
        const loadMoreWrapper = document.getElementById("bib-load-more-wrapper");
        if (!container) return;

        // 1. Filter by Type
        if (masterBibState.filterType !== "all") {
            if (masterBibState.filterType === "techreport") {
                list = list.filter(e => e.type === "techreport" || e.type === "standard" || e.type === "rfc" || e.type === "misc" || e.type === "manual" || e.type === "patent" || e.type === "phdthesis" || e.type === "online");
            } else if (masterBibState.filterType === "inproceedings") {
                list = list.filter(e => e.type === "inproceedings" || e.type === "conference" || e.type === "incollection");
            } else {
                list = list.filter(e => e.type === masterBibState.filterType);
            }
        }

        // 2. Filter by Search Query
        if (masterBibState.searchQuery) {
            const q = masterBibState.searchQuery;
            list = list.filter(e => {
                const t = (e.title || "").toLowerCase();
                const a = (e.author || "").toLowerCase();
                const y = (e.year || "").toLowerCase();
                const j = (e.journal || e.publisher || "").toLowerCase();
                const abs = (e.abstract || "").toLowerCase();
                const k = (e.id || "").toLowerCase();
                return t.includes(q) || a.includes(q) || y.includes(q) || j.includes(q) || abs.includes(q) || k.includes(q);
            });
        }

        // 3. Sort
        if (masterBibState.sortBy === "year-desc") {
            list.sort((a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0));
        } else if (masterBibState.sortBy === "year-asc") {
            list.sort((a, b) => (parseInt(a.year) || 0) - (parseInt(b.year) || 0));
        } else if (masterBibState.sortBy === "author-asc") {
            list.sort((a, b) => (a.author || "").localeCompare(b.author || ""));
        } else if (masterBibState.sortBy === "title-asc") {
            list.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        }

        if (visibleCountEl) visibleCountEl.textContent = list.length;

        if (list.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search fs-1 text-muted d-block mb-2"></i>
                    <h5 class="text-secondary">Axtarışınıza uyğun heç bir mənbə tapılmadı</h5>
                    <p class="text-muted small">Zəhmət olmasa axtarış sözünü dəyişin və ya filterləri sıfırlayın.</p>
                </div>
            `;
            if (loadMoreWrapper) loadMoreWrapper.style.display = "none";
            return;
        }

        const visibleItems = list.slice(0, masterBibState.displayCount);
        if (loadMoreWrapper) {
            loadMoreWrapper.style.display = list.length > masterBibState.displayCount ? "block" : "none";
        }

        const typeLabels = {
            "book": { label: "Kitab", cls: "bg-primary-subtle text-primary" },
            "article": { label: "Məqalə", cls: "bg-success-subtle text-success" },
            "inproceedings": { label: "Konfrans", cls: "bg-warning-subtle text-dark" },
            "conference": { label: "Konfrans", cls: "bg-warning-subtle text-dark" },
            "incollection": { label: "Məcmuə", cls: "bg-warning-subtle text-dark" },
            "techreport": { label: "Hesabat / Standart", cls: "bg-info-subtle text-info" },
            "standard": { label: "Standart", cls: "bg-info-subtle text-info" },
            "rfc": { label: "IETF RFC", cls: "bg-info-subtle text-info" },
            "manual": { label: "Təlimat", cls: "bg-info-subtle text-info" },
            "phdthesis": { label: "Dissertasiya", cls: "bg-danger-subtle text-danger" },
            "patent": { label: "Patent", cls: "bg-secondary-subtle text-secondary" },
            "online": { label: "Veb Resurs", cls: "bg-secondary-subtle text-secondary" },
            "misc": { label: "Elmi Resurs", cls: "bg-secondary-subtle text-secondary" }
        };

        container.innerHTML = visibleItems.map((it) => {
            const typeBadge = typeLabels[it.type] || { label: it.type.toUpperCase(), cls: "bg-secondary-subtle text-secondary" };
            return `
                <div class="col-md-6 col-lg-4" id="bib-${it.id}" data-bib-key="${it.id}">
                    <div class="bib-card" id="card-bib-${it.id}">
                        <div>
                            <div class="d-flex align-items-center justify-content-between gap-2 mb-2">
                                <span class="badge ${typeBadge.cls} fw-bold">${typeBadge.label}</span>
                                <span class="badge bg-light text-secondary border fw-semibold">${escapeHtml(it.year || 'Tarixsiz')}</span>
                            </div>
                            <h6 class="fw-bold mb-1.5 text-heading" style="line-height: 1.35;">${escapeHtml(it.title)}</h6>
                            <p class="small text-secondary mb-2">${escapeHtml(it.author)}</p>
                            ${it.journal || it.publisher ? `<p class="small text-muted mb-2 fst-italic"><i class="bi bi-geo-alt-fill me-1"></i>${escapeHtml(it.journal || it.publisher)}${it.volume ? `, Vol. ${it.volume}` : ''}${it.pages ? `, pp. ${it.pages}` : ''}</p>` : ''}
                            ${it.abstract ? `<div class="small text-muted mb-3 p-2 bg-body-tertiary rounded border" style="max-height: 100px; overflow-y: auto;"><strong>Xülasə:</strong> ${escapeHtml(it.abstract)}</div>` : ''}
                        </div>
                        <div class="d-flex align-items-center justify-content-between pt-2 border-top mt-auto gap-2">
                            <div>
                                ${it.doi ? `<a href="https://doi.org/${encodeURIComponent(it.doi)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary py-1 px-2 fw-semibold" style="font-size:0.8rem;"><i class="bi bi-box-arrow-up-right me-1"></i>DOI</a>` : ''}
                                ${it.url ? `<a href="${it.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary py-1 px-2 fw-semibold" style="font-size:0.8rem;"><i class="bi bi-link-45deg me-1"></i>URL</a>` : ''}
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-dark py-1 px-2.5 fw-semibold" style="font-size:0.8rem;" onclick="window.copyBibtex('${it.id}')" title="BibTeX Formatında Kopyala">
                                <i class="bi bi-clipboard me-1"></i>BibTeX Kopyala
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }

    // ----------------------------------------------------------------------
    // 3.5 ENTERPRISE SCROLL CONTROLLER & HIGHLIGHT ENGINE
    // ----------------------------------------------------------------------
    function normalizeAzText(str) {
        if (!str) return "";
        return str
            .toLowerCase()
            .replace(/ə/g, 'e')
            .replace(/ı/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ü/g, 'u')
            .replace(/ş/g, 's')
            .replace(/ç/g, 'c')
            .replace(/ğ/g, 'g')
            .replace(/[\s\-_.:,;!?()\[\]{}'"`/\\#$*+=<>]+/g, ' ')
            .trim();
    }

    function scrollToAndHighlight(targetEl, highlightClass = "highlight-target") {
        if (!targetEl) return;

        // 1. Auto-expand any collapsed accordion, details, or Bootstrap collapse ancestors
        let parent = targetEl.parentElement;
        while (parent && parent !== document.body) {
            if (parent.classList && parent.classList.contains("accordion-answer-body") && parent.style.display === "none") {
                parent.style.display = "block";
                const header = parent.previousElementSibling;
                if (header && header.classList && header.classList.contains("accordion-toggle-head")) {
                    header.classList.add("active-accordion");
                    const icon = header.querySelector(".toggle-icon");
                    if (icon) icon.className = "bi bi-chevron-down toggle-icon ms-auto fs-6";
                }
            }
            if (parent.tagName === "DETAILS" && !parent.open) {
                parent.open = true;
            }
            const collapsedParent = parent.closest ? parent.closest(".collapse:not(.show)") : null;
            if (collapsedParent && window.bootstrap && bootstrap.Collapse) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapsedParent);
                bsCollapse.show();
            }
            parent = parent.parentElement;
        }

        // 2. Clear old highlights
        document.querySelectorAll(".highlight-target, .highlight-bib").forEach((el) => {
            el.classList.remove("highlight-target", "highlight-bib");
        });

        // 3. Apply target highlight
        targetEl.classList.add(highlightClass);

        // 4. Perform offset-aware smooth scroll with fallback
        const performScroll = (behavior = "smooth") => {
            if (!targetEl.isConnected) return;
            const headerOffset = 85;
            const rect = targetEl.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetY = rect.top + scrollTop - headerOffset;
            window.scrollTo({
                top: Math.max(0, targetY),
                behavior: behavior
            });
        };

        performScroll("auto");
        requestAnimationFrame(() => performScroll("smooth"));

        // Staged re-scroll to compensate for MathJax / image / font layout reflows
        setTimeout(() => performScroll("smooth"), 80);
        setTimeout(() => performScroll("smooth"), 250);
        setTimeout(() => performScroll("smooth"), 600);
        setTimeout(() => performScroll("smooth"), 1100);
        setTimeout(() => performScroll("smooth"), 1800);

        setTimeout(() => {
            if (targetEl.isConnected) {
                targetEl.classList.remove(highlightClass);
            }
        }, 5000);
    }

    function findAndScrollToTarget(container, isTasksRequest = false, elemTargetId = null, searchQuery = null, mathJaxPromise = null) {
        if (!container) return;

        let targetEl = null;

        // 1. Handle Tasks Request
        if (isTasksRequest) {
            const headings = container.querySelectorAll("h1, h2, h3, h4");
            for (let heading of headings) {
                const text = heading.textContent.toLowerCase();
                if (text.includes("tapşırıq") && !text.includes("cavab") && !text.includes("həlli")) {
                    targetEl = heading;
                    break;
                }
            }
        }

        // 2. Handle Explicit Element Target ID
        if (!targetEl && elemTargetId) {
            const rawId = elemTargetId.trim();
            let decodedId = rawId;
            try { decodedId = decodeURIComponent(rawId); } catch(e) {}

            // Direct ID match
            targetEl = document.getElementById(rawId) || document.getElementById(decodedId);

            // Container queries with CSS.escape
            if (!targetEl) {
                try {
                    targetEl = container.querySelector(`[id="${CSS.escape(rawId)}"]`) ||
                               container.querySelector(`[id="${CSS.escape(decodedId)}"]`) ||
                               container.querySelector(`[id="${rawId}"]`) ||
                               container.querySelector(`[id="${decodedId}"]`);
                } catch(e) {}
            }

            // Slug match against headings
            if (!targetEl) {
                const normId = normalizeAzText(decodedId);
                const idWords = normId.split(" ").filter(w => w.length > 2);
                if (idWords.length > 0) {
                    for (let h of container.querySelectorAll("h1, h2, h3, h4, h5, .definition, .theorem, .keyconcept, .example, [id]")) {
                        const hNorm = normalizeAzText(h.id + " " + h.textContent);
                        if (idWords.every(w => hNorm.includes(w))) {
                            targetEl = h;
                            break;
                        }
                    }
                }
            }
        }

        // 3. Handle Search Query
        if (!targetEl && searchQuery) {
            let searchDecoded = searchQuery;
            try { searchDecoded = decodeURIComponent(searchQuery); } catch(e) {}
            
            // Clean up query: remove parentheticals
            const cleanQuery = searchDecoded.replace(/\([^)]*\)/g, ' ').trim();
            const normQuery = normalizeAzText(cleanQuery);
            const queryWords = normQuery.split(" ").filter(w => w.length > 1);

            if (queryWords.length > 0) {
                const candidates = container.querySelectorAll("h1, h2, h3, h4, h5, .definition, .theorem, .algorithm, .keyconcept, .example, strong, b, dt, p, li, blockquote, .tool-card");
                let bestMatch = null;
                let highestScore = 0;

                candidates.forEach((cand) => {
                    const text = cand.textContent;
                    const normText = normalizeAzText(text + " " + (cand.id || ""));
                    let score = 0;

                    const isHeading = ['H1', 'H2', 'H3', 'H4', 'H5'].includes(cand.tagName);
                    const isCallout = cand.matches('.definition, .theorem, .algorithm, .keyconcept, .example, dt, .tool-card');
                    const multiplier = isHeading ? 4 : (isCallout ? 3 : 1);

                    queryWords.forEach((word) => {
                        if (normText.includes(word)) {
                            score += (word.length >= 4 ? 35 : 20) * multiplier;
                        }
                    });

                    // Bonus for exact normalized phrase
                    if (normQuery.length > 3 && normText.includes(normQuery)) {
                        score += 200 * multiplier;
                    }

                    if (score > highestScore) {
                        highestScore = score;
                        bestMatch = cand;
                    }
                });

                if (bestMatch && highestScore >= 35) {
                    targetEl = bestMatch;
                }
            }
        }

        // 4. Scroll to target or top
        if (targetEl) {
            scrollToAndHighlight(targetEl, "highlight-target");
            if (mathJaxPromise) {
                mathJaxPromise.then(() => {
                    setTimeout(() => scrollToAndHighlight(targetEl, "highlight-target"), 50);
                    setTimeout(() => scrollToAndHighlight(targetEl, "highlight-target"), 350);
                });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    // 4. DYNAMIC CONTENT FETCHING & RENDERING ENGINE
    // ----------------------------------------------------------------------
    async function loadLectureContent(lectureId, isTasksRequest = false, elemTargetId = null, searchQuery = null) {
        if (!LECTURES_MAP[lectureId]) return false;

        const info = LECTURES_MAP[lectureId];
        document.body.setAttribute("data-active-view", lectureId);

        // Hide static embedded views
        const allUniqueViews = new Set(Object.values(embeddedViews).filter(Boolean));
        allUniqueViews.forEach((viewEl) => {
            viewEl.style.display = "none";
        });

        if (dynamicViewport) {
            dynamicViewport.style.display = "block";
        }

        // 1. Check in-memory preloaded bundle cache (Instant 0ms render)
        if (window.LECTURES_PRELOADED_BUNDLE && window.LECTURES_PRELOADED_BUNDLE[lectureId]) {
            lectureCache[lectureId] = window.LECTURES_PRELOADED_BUNDLE[lectureId];
        } else if (window.KRIPTO_PRELOADED_LECTURES && window.KRIPTO_PRELOADED_LECTURES[lectureId]) {
            lectureCache[lectureId] = window.KRIPTO_PRELOADED_LECTURES[lectureId];
        }
        
        if (lectureCache[lectureId]) {
            renderDynamicHtml(lectureCache[lectureId], lectureId, isTasksRequest, elemTargetId, searchQuery);
            return true;
        }

        // 2. Multi-Candidate Resilient Network Fetch
        try {
            if (dynamicViewport) {
                dynamicViewport.innerHTML = `
                    <div class="text-center py-5">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Yüklənir...</span>
                        </div>
                        <p class="mt-3 text-muted">${info.title} yüklənir...</p>
                    </div>`;
            }

            const candidateUrls = [
                `./${info.asciiFile}`,
                `./${info.file}`,
                `./Kripto_WebApp-HTML-SPA/${info.asciiFile}`,
                `./Kripto_WebApp-HTML-SPA/${info.file}`,
                `/${info.asciiFile}`,
                `/${info.file}`
            ];

            let htmlContent = null;
            for (const url of candidateUrls) {
                try {
                    const response = await fetch(url);
                    if (response.ok) {
                        const text = await response.text();
                        if (text && text.length > 50 && (!text.includes("<!DOCTYPE html>") || text.includes("id=") || text.includes("<h1") || text.includes("<section") || text.includes("<div"))) {
                            htmlContent = text;
                            break;
                        }
                    }
                } catch (fetchErr) {
                    // Try next candidate
                }
            }

            if (!htmlContent) throw new Error("All fetch candidates failed");

            lectureCache[lectureId] = htmlContent;
            renderDynamicHtml(htmlContent, lectureId, isTasksRequest, elemTargetId, searchQuery);
            return true;
        } catch (err) {
            console.warn("Dynamic fetch failed:", err);
            if (dynamicViewport) {
                dynamicViewport.innerHTML = `
                    <div class="alert alert-warning my-4">
                        <h5><i class="bi bi-exclamation-triangle me-2"></i> Mühazirə Yüklənə Bilmədi</h5>
                        <p class="mb-0">Fayl: <code>${info.file}</code>. Lütfən səhifəni yeniləyin və ya internet bağlantınızı yoxlayın.</p>
                    </div>`;
            }
            return false;
        }
    }

    
    // ----------------------------------------------------------------------
    // RESPONSIVE LECTURE NAVIGATION (ƏVVƏLKİ / NÖVBƏTİ MÜHAZİRƏ)
    // ----------------------------------------------------------------------
    const LECTURE_SEQUENCE = [
        "lecture-1", "lecture-2", "lecture-3", "lecture-4", "lecture-5", "lecture-6",
        "lecture-7", "lecture-8", "lecture-9", "lecture-10", "lecture-11", "lecture-12",
        "lecture-13", "lecture-14", "lecture-15", "lecture-16", "lecture-17", "lecture-18", "lecture-19", "lecture-20", "lecture-21",
        "lecture-22", "lecture-23", "lecture-24", "lecture-25", "lecture-26", "lecture-27",
        "lecture-28", "lecture-29", "lecture-30",
        "supplement-A", "supplement-B", "supplement-C", "supplement-D", "supplement-E", "glossary-compact", "glossary-full"
    ];

    function buildLectureNavFooter(currentId) {
        const idx = LECTURE_SEQUENCE.indexOf(currentId);
        if (idx === -1) return "";

        const prevId = idx > 0 ? LECTURE_SEQUENCE[idx - 1] : null;
        const nextId = idx < LECTURE_SEQUENCE.length - 1 ? LECTURE_SEQUENCE[idx + 1] : null;

        let prevHtml = "";
        if (prevId && LECTURES_MAP[prevId]) {
            const prevInfo = LECTURES_MAP[prevId];
            prevHtml = `
                <a href="#${prevId}" class="lecture-nav-btn prev-btn" title="${prevInfo.title}">
                    <i class="bi bi-arrow-left fs-5 flex-shrink-0"></i>
                    <div class="overflow-hidden">
                        <div class="nav-direction">Əvvəlki Mühazirə</div>
                        <div class="nav-title">${prevInfo.title}</div>
                    </div>
                </a>
            `;
        } else {
            prevHtml = `
                <a href="#home" class="lecture-nav-btn prev-btn" title="Ana Səhifə Mündəricat">
                    <i class="bi bi-house-door fs-5 flex-shrink-0"></i>
                    <div class="overflow-hidden">
                        <div class="nav-direction">Kurs Mündəricatı</div>
                        <div class="nav-title">Ana Səhifə</div>
                    </div>
                </a>
            `;
        }

        const catalogHtml = `
            <a href="#home" class="lecture-nav-catalog-btn d-none d-md-flex" title="Bütün Mühazirələrin Mündəricatı">
                <i class="bi bi-grid-3x3-gap"></i>
                <span>Mündəricat</span>
            </a>
        `;

        let nextHtml = "";
        if (nextId && LECTURES_MAP[nextId]) {
            const nextInfo = LECTURES_MAP[nextId];
            nextHtml = `
                <a href="#${nextId}" class="lecture-nav-btn next-btn" title="${nextInfo.title}">
                    <div class="overflow-hidden">
                        <div class="nav-direction">Növbəti Dərsə Keçid</div>
                        <div class="nav-title">${nextInfo.title}</div>
                    </div>
                    <i class="bi bi-arrow-right fs-5 flex-shrink-0"></i>
                </a>
            `;
        } else {
            nextHtml = `
                <a href="#quiz" class="lecture-nav-btn next-btn" title="Sınaq və İmtahan Mərkəzi">
                    <div class="overflow-hidden">
                        <div class="nav-direction">Kursu Yoxla</div>
                        <div class="nav-title">Sınaq İmtahanı Mərkəzi</div>
                    </div>
                    <i class="bi bi-award-fill fs-5 flex-shrink-0"></i>
                </a>
            `;
        }

        return `
            <nav class="lecture-nav-footer" aria-label="Mühazirə Naviqasiyası">
                ${prevHtml}
                ${catalogHtml}
                ${nextHtml}
            </nav>
        `;
    }

    // ----------------------------------------------------------------------
    // INTERACTIVE EXERCISE ACCORDION TOGGLE ENGINE (CLOSED BY DEFAULT)
    // ----------------------------------------------------------------------
    function initExerciseAccordions(container) {
        if (!container) return;

        // Target solution headers in lectures & quiz hubs
        const solutionHeadings = container.querySelectorAll("h2[id*='tapşırıq'], h2[id*='cavab'], h2[id*='sual']");
        solutionHeadings.forEach((header) => {
            if (header.classList.contains("accordion-initialized")) return;
            
            const text = header.textContent.trim();
            if (text.toLowerCase().includes("tapşırıq") || text.toLowerCase().includes("cavab") || text.toLowerCase().includes("sual")) {
                header.classList.add("accordion-initialized", "accordion-toggle-head");
                
                // Single chevron right icon
                const icon = document.createElement("i");
                icon.className = "bi bi-chevron-right toggle-icon ms-auto fs-6";
                header.appendChild(icon);

                // Collect content until next section, heading, hr, or navigation footer
                const wrapper = document.createElement("div");
                wrapper.className = "accordion-answer-body";
                wrapper.style.display = "none"; // Closed by default on refresh

                let curr = header.nextElementSibling;
                while (
                    curr && 
                    !['H1', 'H2', 'SECTION', 'NAV', 'FOOTER', 'HR'].includes(curr.tagName) && 
                    !curr.classList.contains('lecture-nav-footer') && 
                    !curr.classList.contains('lecture-bib-section') && 
                    curr.id !== 'edebiyyat' && 
                    curr.id !== 'ədəbiyyat'
                ) {
                    const temp = curr;
                    curr = curr.nextElementSibling;
                    wrapper.appendChild(temp);
                }

                header.parentNode.insertBefore(wrapper, curr);

                // Toggle click listener
                header.addEventListener("click", () => {
                    const isOpen = wrapper.style.display === "block";
                    if (isOpen) {
                        wrapper.style.display = "none";
                        icon.className = "bi bi-chevron-right toggle-icon ms-auto fs-6";
                        header.classList.remove("active-accordion");
                    } else {
                        wrapper.style.display = "block";
                        icon.className = "bi bi-chevron-down toggle-icon ms-auto fs-6";
                        header.classList.add("active-accordion");
                        
                        if (window.MathJax && MathJax.typesetPromise) {
                            try {
                                MathJax.typesetPromise([wrapper]).catch(() => {});
                            } catch(e) {}
                        }
                    }
                });
            }
        });
    }


    function cleanLatexInHtml(html) {
        if (!html) return html;
        // Fix LaTeX math expressions in memory dynamically (preserves static files untouched)
        let res = html.replace(/\\\(([\s\S]*?)\\\)/g, (match, p1) => {
            let clean = p1.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\\mod\s+/g, '\\bmod ')
                          .replace(/\\#/g, '__ESCAPED_HASH__').replace(/#/g, '\\#').replace(/__ESCAPED_HASH__/g, '\\#');
            return '\\(' + clean + '\\)';
        });
        res = res.replace(/\\\[([\s\S]*?)\\\]/g, (match, p1) => {
            let clean = p1.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\\mod\s+/g, '\\bmod ')
                          .replace(/\\#/g, '__ESCAPED_HASH__').replace(/#/g, '\\#').replace(/__ESCAPED_HASH__/g, '\\#');
            return '\\[' + clean + '\\]';
        });
        res = res.replace(/\$([^\$]+)\$/g, (match, p1) => {
            let clean = p1.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\\mod\s+/g, '\\bmod ')
                          .replace(/\\#/g, '__ESCAPED_HASH__').replace(/#/g, '\\#').replace(/__ESCAPED_HASH__/g, '\\#');
            return '$' + clean + '$';
        });
        return res;
    }

    function buildLectureNavTop(currentId) {
        const idx = LECTURE_SEQUENCE.indexOf(currentId);
        if (idx === -1) return "";

        const prevId = idx > 0 ? LECTURE_SEQUENCE[idx - 1] : null;
        const nextId = idx < LECTURE_SEQUENCE.length - 1 ? LECTURE_SEQUENCE[idx + 1] : null;

        const prevBtn = prevId && LECTURES_MAP[prevId]
            ? `<a href="#${prevId}" class="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"><i class="bi bi-chevron-left"></i> <span class="d-none d-sm-inline">Əvvəlki:</span> ${LECTURES_MAP[prevId].title.split(':')[0]}</a>`
            : `<a href="#home" class="btn btn-sm btn-outline-secondary d-flex align-items-center gap-1"><i class="bi bi-house-door"></i> <span class="d-none d-sm-inline">Mündəricat</span></a>`;

        const nextBtn = nextId && LECTURES_MAP[nextId]
            ? `<a href="#${nextId}" class="btn btn-sm btn-primary d-flex align-items-center gap-1 fw-bold"><span class="d-none d-sm-inline">Növbəti:</span> ${LECTURES_MAP[nextId].title.split(':')[0]} <i class="bi bi-chevron-right"></i></a>`
            : `<a href="#quiz" class="btn btn-sm btn-primary d-flex align-items-center gap-1 fw-bold">Sınaq Mərkəzi <i class="bi bi-award-fill"></i></a>`;

        return `
            <div class="lecture-top-quicknav d-flex align-items-center justify-content-between p-2.5 mb-4 rounded-3 border bg-card shadow-sm">
                ${prevBtn}
                ${nextBtn}
            </div>
        `;
    }

    function renderDynamicHtml(htmlContent, lectureId, isTasksRequest = false, elemTargetId = null, searchQuery = null) {
        if (!dynamicViewport) return;

        // Clean LaTeX math entities in memory dynamically
        const sanitizedHtml = cleanLatexInHtml(htmlContent);

        // Parse and clean HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(sanitizedHtml, "text/html");

        // Remove any embedded in-document TOC (<nav id="TOC">) to keep UI clean and consistent with the sidebar TOC
        if (doc.body) {
            const embeddedTocs = doc.body.querySelectorAll("nav#TOC, nav[role='doc-toc'], #TOC, .embedded-toc");
            embeddedTocs.forEach((el) => el.remove());

            // Remove existing static bibliography sections to prevent duplicate display when enhanced dynamically
            const staticBibs = doc.body.querySelectorAll("#istinadlar, #lecture-bibliography-block, #edebiyyat");
            staticBibs.forEach((el) => el.remove());
        }

        // Transform inline citation tags in doc.body
        initInlineCitations(doc.body);

        // Build lecture-end bibliography block
        const bibHtml = lectureId ? buildLectureBibliography(doc.body, lectureId) : "";

        // Extract body content
        const bodyContent = doc.body ? doc.body.innerHTML : sanitizedHtml;
        const navTop = lectureId ? buildLectureNavTop(lectureId) : "";
        const navFooter = lectureId ? buildLectureNavFooter(lectureId) : "";
        
        dynamicViewport.innerHTML = navTop + bodyContent + bibHtml + navFooter;
        initExerciseAccordions(dynamicViewport);

        // Initialize popovers on live elements
        if (window.bootstrap && window.bootstrap.Popover) {
            const popovers = dynamicViewport.querySelectorAll('[data-bs-toggle="popover"]');
            popovers.forEach((el) => {
                new window.bootstrap.Popover(el, {
                    trigger: "hover focus",
                    html: true,
                    container: "body"
                });
            });
        }

        // Attach smooth scroll on citation badges to jump to reference in bibliography
        dynamicViewport.querySelectorAll(".citation-ref-badge[data-bib-id]").forEach((badge) => {
            badge.addEventListener("click", (e) => {
                const bibId = "bib-" + badge.getAttribute("data-bib-id");
                const targetEl = document.getElementById(bibId);
                if (targetEl) {
                    e.preventDefault();
                    scrollToAndHighlight(targetEl, "highlight-bib");
                }
            });
        });

        // Safe MathJax Typeset with cleanup
        let mathJaxPromise = null;
        if (window.MathJax && MathJax.typesetPromise) {
            try {
                if (MathJax.texReset) MathJax.texReset();
                if (MathJax.typesetClear) MathJax.typesetClear([dynamicViewport]);
                mathJaxPromise = MathJax.typesetPromise([dynamicViewport]).catch((err) => console.log("MathJax typeset info:", err));
            } catch(e) {
                console.log("MathJax typeset exception:", e);
            }
        }

        // Unified resilient target finder and smooth scroller
        findAndScrollToTarget(dynamicViewport, isTasksRequest, elemTargetId, searchQuery, mathJaxPromise);
    }

    // ----------------------------------------------------------------------
    // 5. UNIVERSAL HASH ROUTER
    // ----------------------------------------------------------------------
    function switchActiveView(targetId, isTasksRequest = false, elemTargetId = null, searchQuery = null) {
        if (!targetId) targetId = "home";
        document.body.setAttribute("data-active-view", targetId);

        // Update Nav Links
        document.querySelectorAll(".nav-link-custom").forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${targetId}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Update Sidebar Active Class
        document.querySelectorAll(".toc-link").forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${targetId}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Update Mobile Nav Strip Active Class
        document.querySelectorAll(".mobile-nav-item").forEach((link) => {
            const href = link.getAttribute("href");
            const dataView = link.getAttribute("data-view");
            if (href === `#${targetId}` || (dataView === "lecture" && LECTURES_MAP[targetId]) || (dataView === targetId)) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Auto-expand parent section in collapsible sidebar TOC
        if (LECTURES_MAP[targetId] && LECTURES_MAP[targetId].group) {
            let collapseEl = null;
            let headerLink = null;
            if (LECTURES_MAP[targetId].group === "lugat") {
                collapseEl = document.getElementById("collapse-lugat");
                headerLink = document.querySelector('[data-bs-target="#collapse-lugat"]');
            } else {
                const groupNum = LECTURES_MAP[targetId].group.replace("b", "");
                collapseEl = document.getElementById("collapse-bolme" + groupNum);
                headerLink = document.querySelector(`[data-bs-target="#collapse-bolme${groupNum}"]`);
            }
            if (collapseEl && !collapseEl.classList.contains("show")) {
                if (window.bootstrap && bootstrap.Collapse) {
                    const bsCol = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl, {toggle: false});
                    bsCol.show();
                } else {
                    collapseEl.classList.add("show");
                }
                const headerLink = document.querySelector("[data-bs-target=\"#collapse-bolme" + groupNum + "\"]");
                if (headerLink) {
                    headerLink.setAttribute("aria-expanded", "true");
                    headerLink.classList.remove("collapsed");
                }
            }
        }

        if (LECTURES_MAP[targetId]) {
            loadLectureContent(targetId, isTasksRequest, elemTargetId, searchQuery);
        } else if (embeddedViews[targetId]) {
            if (dynamicViewport) dynamicViewport.style.display = "none";
            const targetEl = embeddedViews[targetId];
            const allUniqueViews = new Set(Object.values(embeddedViews).filter(Boolean));
            allUniqueViews.forEach((viewEl) => {
                viewEl.style.display = (viewEl === targetEl) ? "block" : "none";
            });

            if (targetId === "bibliography" || targetId === "bib" || targetId === "references") {
                let exactId = "";
                if (elemTargetId) {
                    exactId = elemTargetId.replace("bib-", "").trim();
                    const searchInput = document.getElementById("bib-search-input");
                    if (searchInput) searchInput.value = exactId;
                    masterBibState.searchQuery = exactId;
                    masterBibState.displayCount = 30;
                }
                initMasterBibliography();

                if (elemTargetId) {
                    setTimeout(() => {
                        const targetCard = document.getElementById(elemTargetId) || 
                                           document.getElementById("bib-" + exactId) || 
                                           document.getElementById("card-bib-" + exactId);
                        if (targetCard) {
                            scrollToAndHighlight(targetCard, "highlight-bib");
                        }
                    }, 150);
                }
            }

            let mathPromise = null;
            if (window.MathJax && MathJax.typesetPromise) {
                try {
                    if (MathJax.texReset) MathJax.texReset();
                    if (MathJax.typesetClear) MathJax.typesetClear();
                    mathPromise = MathJax.typesetPromise();
                } catch(e) {}
            }

            // Handle anchor jumping in embedded views (like #tools, #quiz, #bibliography)
            if (elemTargetId || searchQuery) {
                setTimeout(() => {
                    findAndScrollToTarget(targetEl, false, elemTargetId, searchQuery, mathPromise);
                }, 100);
            }
        }

        toggleMobileDrawer(false);
    }

    function handleHashNavigation() {
        let rawHash = window.location.hash.replace("#", "").trim();
        
        let elemTargetId = null;
        let searchQuery = null;
        
        if (rawHash.includes("?")) {
            const parts = rawHash.split("?");
            rawHash = parts[0];
            const params = new URLSearchParams(parts[1]);
            elemTargetId = params.get("target");
            searchQuery = params.get("search");
        }

        if (!rawHash || rawHash === "home" || rawHash === "catalog") {
            switchActiveView("home");
            return;
        }

        if (rawHash === "glossary" || rawHash === "lugat" || rawHash === "dictionary") {
            switchActiveView("glossary-full");
            return;
        }
        if (rawHash === "glossary-full" || rawHash === "lugat-tam") {
            switchActiveView("glossary-full");
            return;
        }
        if (rawHash === "glossary-compact" || rawHash === "lugat-kicik") {
            switchActiveView("glossary-compact");
            return;
        }

        let isTasksRequest = false;
        let viewId = rawHash;
        if (rawHash.endsWith("-tasks")) {
            isTasksRequest = true;
            viewId = rawHash.replace("-tasks", "");
        }

        // 1. Check if hash matches a registered view/lecture
        if (LECTURES_MAP[viewId] || embeddedViews[viewId]) {
            switchActiveView(viewId, isTasksRequest, elemTargetId, searchQuery);
            return;
        }

        // 2. Check if hash is a bibliography reference: #bib-foo
        if (rawHash.startsWith("bib-")) {
            switchActiveView("bibliography", false, rawHash, null);
            return;
        }

        // 3. Check if element exists in currently active document
        const targetElement = document.getElementById(rawHash) || document.querySelector(`[id="${CSS.escape(rawHash)}"]`);
        if (targetElement) {
            scrollToAndHighlight(targetElement, rawHash.startsWith("fn") ? "highlight-bib" : "highlight-target");
            return;
        }

        // 4. Search across all preloaded lectures to see which lecture contains this ID
        let foundLecture = null;
        if (window.LECTURES_PRELOADED_BUNDLE) {
            for (const [lKey, lHtml] of Object.entries(window.LECTURES_PRELOADED_BUNDLE)) {
                if (lHtml && (lHtml.includes(`id="${rawHash}"`) || lHtml.includes(`id='${rawHash}'`) || lHtml.includes(`id=\"${rawHash}\"`))) {
                    foundLecture = lKey;
                    break;
                }
            }
        }

        if (foundLecture) {
            switchActiveView(foundLecture, false, rawHash, null);
            return;
        }

        // Fallback to home catalog
        switchActiveView("home");
    }

    window.addEventListener("hashchange", handleHashNavigation);

    // ----------------------------------------------------------------------
    // 6. COLLAPSIBLE TOC TREE MANAGEMENT
    // ----------------------------------------------------------------------
    function initCollapsibleToc() {
        const sidebar = document.getElementById("app-sidebar");
        if (!sidebar) return;

        const toggleAllBtn = document.getElementById("toc-toggle-all");
        if (toggleAllBtn) {
            let isAllExpanded = true;
            toggleAllBtn.addEventListener("click", (e) => {
                e.preventDefault();
                isAllExpanded = !isAllExpanded;
                const collapseElements = sidebar.querySelectorAll(".toc-sublist.collapse");
                collapseElements.forEach((el) => {
                    const headerLink = sidebar.querySelector(`[data-bs-target="#${el.id}"]`);
                    if (window.bootstrap && bootstrap.Collapse) {
                        const bsCollapse = bootstrap.Collapse.getInstance(el) || new bootstrap.Collapse(el, { toggle: false });
                        if (isAllExpanded) {
                            bsCollapse.show();
                            if (headerLink) {
                                headerLink.setAttribute("aria-expanded", "true");
                                headerLink.classList.remove("collapsed");
                            }
                        } else {
                            bsCollapse.hide();
                            if (headerLink) {
                                headerLink.setAttribute("aria-expanded", "false");
                                headerLink.classList.add("collapsed");
                            }
                        }
                    } else {
                        if (isAllExpanded) {
                            el.classList.add("show");
                            if (headerLink) {
                                headerLink.setAttribute("aria-expanded", "true");
                                headerLink.classList.remove("collapsed");
                            }
                        } else {
                            el.classList.remove("show");
                            if (headerLink) {
                                headerLink.setAttribute("aria-expanded", "false");
                                headerLink.classList.add("collapsed");
                            }
                        }
                    }
                });
                toggleAllBtn.innerHTML = isAllExpanded ? '<i class="bi bi-arrows-collapse"></i>' : '<i class="bi bi-arrows-expand"></i>';
                toggleAllBtn.title = isAllExpanded ? "Bütün Bölmələri Bağla" : "Bütün Bölmələri Aç";
            });
        }

        // Synchronize Bootstrap Collapse show/hide events with aria-expanded & 180-deg chevrons
        const collapseElements = sidebar.querySelectorAll(".toc-sublist.collapse");
        collapseElements.forEach((el) => {
            el.addEventListener("show.bs.collapse", () => {
                const headerLink = sidebar.querySelector(`[data-bs-target="#${el.id}"]`);
                if (headerLink) {
                    headerLink.setAttribute("aria-expanded", "true");
                    headerLink.classList.remove("collapsed");
                }
            });
            el.addEventListener("hide.bs.collapse", () => {
                const headerLink = sidebar.querySelector(`[data-bs-target="#${el.id}"]`);
                if (headerLink) {
                    headerLink.setAttribute("aria-expanded", "false");
                    headerLink.classList.add("collapsed");
                }
            });
        });

        // Auto-close sidebar on mobile/tablet when tapping any lecture or supplement sublink
        sidebar.addEventListener("click", (e) => {
            const link = e.target.closest("a.toc-sublink, a[href^=\"#\"]:not([data-bs-toggle])");
            if (link) {
                if (isMobileViewport()) {
                    toggleSidebar(false);
                }
            }
        });
    }

    initCollapsibleToc();
    initMasterBibliography();
    handleHashNavigation();

    // ----------------------------------------------------------------------
    // 7. READING PROGRESS BAR
    // ----------------------------------------------------------------------
    const progressBar = document.getElementById("progress-bar");
    window.addEventListener("scroll", () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
            const progress = (window.scrollY / totalHeight) * 100;
            if (progressBar) progressBar.style.width = `${progress}%`;
        }
    });

    // ----------------------------------------------------------------------
    // 8. GLOBAL SEARCH INDEXING & INSTANT FILTER
    // ----------------------------------------------------------------------
    const searchInput = document.getElementById("global-search");
    if (searchInput) {
        searchInput.addEventListener("input", function (e) {
            const query = e.target.value.toLowerCase().trim();
            if (query.length < 2) return;

            const elements = document.querySelectorAll("#lecture-content-viewport p, #lecture-content-viewport section, #lecture-content-viewport h1, #lecture-content-viewport h2");
            elements.forEach((el) => {
                const text = el.innerText.toLowerCase();
                if (text.includes(query)) {
                    el.classList.add("highlight-target");
                    setTimeout(() => el.classList.remove("highlight-target"), 3000);
                }
            });
        });
    }

    // ----------------------------------------------------------------------
    // 9. INTERACTIVE CAESAR CIPHER TOOL
    // ----------------------------------------------------------------------
    const caesarInput = document.getElementById("caesar-input");
    const caesarKey = document.getElementById("caesar-key");
    const caesarKeyValue = document.getElementById("caesar-key-value");
    const caesarOutput = document.getElementById("caesar-output");
    const caesarModeSelect = document.getElementById("caesar-mode");

    function runCaesarCipher() {
        if (!caesarInput || !caesarOutput) return;
        const text = caesarInput.value;
        const shift = parseInt(caesarKey.value, 10);
        if (caesarKeyValue) caesarKeyValue.textContent = shift;
        const isEncrypt = caesarModeSelect ? caesarModeSelect.value === "encrypt" : true;
        const effectiveShift = isEncrypt ? shift : (26 - (shift % 26)) % 26;

        let result = "";
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (char.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(((code - 65 + effectiveShift) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(((code - 97 + effectiveShift) % 26) + 97);
                }
            }
            result += char;
        }

        caesarOutput.textContent = result || "Nəticə burada görünəcək...";
    }

    if (caesarInput && caesarKey) {
        caesarInput.addEventListener("input", runCaesarCipher);
        caesarKey.addEventListener("input", runCaesarCipher);
        if (caesarModeSelect) caesarModeSelect.addEventListener("change", runCaesarCipher);
    }

    // ----------------------------------------------------------------------
    // 10. INTERACTIVE AFFINE CIPHER TOOL
    // ----------------------------------------------------------------------
    const affineInput = document.getElementById("affine-input");
    const affineKeyA = document.getElementById("affine-key-a");
    const affineKeyB = document.getElementById("affine-key-b");
    const affineModeSelect = document.getElementById("affine-mode");
    const affineOutput = document.getElementById("affine-output");
    const affineError = document.getElementById("affine-error");

    const validAValues = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
    const modInverseA = { 1: 1, 3: 9, 5: 21, 7: 15, 9: 3, 11: 19, 15: 7, 17: 23, 19: 11, 21: 5, 23: 17, 25: 25 };

    function runAffineCipher() {
        if (!affineInput || !affineOutput) return;
        const text = affineInput.value;
        const a = parseInt(affineKeyA.value, 10);
        const b = parseInt(affineKeyB.value, 10);
        const isEncrypt = affineModeSelect ? affineModeSelect.value === "encrypt" : true;

        if (!validAValues.includes(a)) {
            if (affineError) affineError.textContent = "Səhv: 'a' parametris 26 ilə qarşılıqlı sadə olmalıdır!";
            affineOutput.textContent = "";
            return;
        } else {
            if (affineError) affineError.textContent = "";
        }

        let result = "";
        const invA = modInverseA[a];

        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (char.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    let p = code - 65;
                    let c = isEncrypt ? (a * p + b) % 26 : (invA * (p - b + 2600)) % 26;
                    char = String.fromCharCode(c + 65);
                } else if (code >= 97 && code <= 122) {
                    let p = code - 97;
                    let c = isEncrypt ? (a * p + b) % 26 : (invA * (p - b + 2600)) % 26;
                    char = String.fromCharCode(c + 97);
                }
            }
            result += char;
        }

        affineOutput.textContent = result || "Nəticə burada görünəcək...";
    }

    if (affineInput && affineKeyA && affineKeyB) {
        affineInput.addEventListener("input", runAffineCipher);
        affineKeyA.addEventListener("change", runAffineCipher);
        affineKeyB.addEventListener("input", runAffineCipher);
        if (affineModeSelect) affineModeSelect.addEventListener("change", runAffineCipher);
    }

    // ----------------------------------------------------------------------
    // 11. FREQUENCY ANALYSIS INTERACTIVE TOOL
    // ----------------------------------------------------------------------
    const freqInput = document.getElementById("freq-input");
    const freqChart = document.getElementById("freq-chart");

    function runFrequencyAnalysis() {
        if (!freqInput || !freqChart) return;
        const text = freqInput.value.toUpperCase();
        const counts = {};
        let totalLetters = 0;

        for (let i = 65; i <= 90; i++) {
            counts[String.fromCharCode(i)] = 0;
        }

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char >= "A" && char <= "Z") {
                counts[char]++;
                totalLetters++;
            }
        }

        freqChart.innerHTML = "";
        for (let i = 65; i <= 90; i++) {
            const letter = String.fromCharCode(i);
            const count = counts[letter];
            const percent = totalLetters > 0 ? ((count / totalLetters) * 100).toFixed(1) : 0;

            const barWrapper = document.createElement("div");
            barWrapper.className = "freq-bar-wrapper";

            const bar = document.createElement("div");
            bar.className = "freq-bar";
            bar.style.height = `${Math.min(percent * 5, 100)}%`;
            bar.title = `${letter}: ${count} (${percent}%)`;

            const label = document.createElement("div");
            label.className = "freq-label";
            label.textContent = letter;

            barWrapper.appendChild(bar);
            barWrapper.appendChild(label);
            freqChart.appendChild(barWrapper);
        }
    }

    if (freqInput) {
        freqInput.addEventListener("input", runFrequencyAnalysis);
        runFrequencyAnalysis();
    }

    // ======================================================================
    // ----------------------------------------------------------------------
    // 12.5. GLOBAL LINK & DEEP-LINK INTERCEPTOR ENGINE
    // ----------------------------------------------------------------------
    function initGlobalLinkInterceptor() {
        document.addEventListener("click", function (e) {
            const anchor = e.target.closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            // 1. External URLs (http / https) -> open in new tab securely
            if (href.startsWith("http://") || href.startsWith("https://")) {
                if (!anchor.hasAttribute("target")) {
                    anchor.setAttribute("target", "_blank");
                    anchor.setAttribute("rel", "noopener noreferrer");
                }
                return;
            }

            // 2. Relative HTML file links (e.g. lecture_2.html, Mühazirə_2.html)
            if (href.includes(".html") && !href.startsWith("http")) {
                e.preventDefault();
                const [filePartWithQuery, hashPart] = href.split("#");
                const [filePart] = filePartWithQuery.split("?");
                const cleanFileName = filePart.split("/").pop();

                let targetLectureKey = null;
                Object.keys(LECTURES_MAP).forEach((key) => {
                    const info = LECTURES_MAP[key];
                    if (info.file === cleanFileName || info.asciiFile === cleanFileName || 
                        decodeURIComponent(info.file) === decodeURIComponent(cleanFileName) ||
                        cleanFileName.toLowerCase().includes(key.toLowerCase())) {
                        targetLectureKey = key;
                    }
                });

                if (targetLectureKey) {
                    const targetHash = hashPart ? `#${targetLectureKey}?target=${encodeURIComponent(hashPart)}` : `#${targetLectureKey}`;
                    if (window.location.hash === targetHash) {
                        handleHashNavigation();
                    } else {
                        window.location.hash = targetHash;
                    }
                }
                return;
            }

            // 3. Internal Hash Links (#...)
            if (href.startsWith("#")) {
                const rawTarget = href.substring(1).trim();
                if (!rawTarget) return;

                // 3a. Standard Root Views or Lecture Links
                const baseTarget = rawTarget.split("?")[0].replace("-tasks", "");
                if (LECTURES_MAP[baseTarget] || embeddedViews[baseTarget] || baseTarget === "home" || baseTarget === "catalog") {
                    return;
                }

                // 3b. Bibliography Targets (#bib-...)
                if (rawTarget.startsWith("bib-")) {
                    e.preventDefault();
                    const inDocEl = document.getElementById(rawTarget);
                    
                    if (inDocEl && inDocEl.closest("#lecture-content-viewport") && dynamicViewport && dynamicViewport.style.display !== "none") {
                        scrollToAndHighlight(inDocEl, "highlight-bib");
                    } else {
                        const targetHash = `#bibliography?target=${encodeURIComponent(rawTarget)}`;
                        if (window.location.hash === targetHash) {
                            handleHashNavigation();
                        } else {
                            window.location.hash = targetHash;
                        }
                    }
                    return;
                }

                // 3c. Footnotes, Footnote References, Headings, or In-Document Anchors
                const inDocEl = document.getElementById(rawTarget) ||
                                document.querySelector(`[id="${CSS.escape(rawTarget)}"]`) ||
                                document.querySelector(`a[name="${CSS.escape(rawTarget)}"]`);

                if (inDocEl) {
                    e.preventDefault();
                    const highlightClass = rawTarget.startsWith("fn") ? "highlight-bib" : "highlight-target";
                    scrollToAndHighlight(inDocEl, highlightClass);
                    try {
                        history.pushState(null, "", href);
                    } catch(err) {}
                    return;
                }

                // 3d. Anchor not found in current DOM -> check if it belongs to another lecture
                let foundInLecture = null;
                if (window.LECTURES_PRELOADED_BUNDLE) {
                    for (const [lKey, lHtml] of Object.entries(window.LECTURES_PRELOADED_BUNDLE)) {
                        if (lHtml && (lHtml.includes(`id="${rawTarget}"`) || lHtml.includes(`id='${rawTarget}'`) || lHtml.includes(`id=\"${rawTarget}\"`))) {
                            foundInLecture = lKey;
                            break;
                        }
                    }
                }

                if (foundInLecture) {
                    e.preventDefault();
                    const targetHash = `#${foundInLecture}?target=${encodeURIComponent(rawTarget)}`;
                    if (window.location.hash === targetHash) {
                        handleHashNavigation();
                    } else {
                        window.location.hash = targetHash;
                    }
                    return;
                }
            }
        });
    }

    // 12. ENTERPRISE OMNISEARCH (SPOTLIGHT / COMMAND PALETTE ⌘K / CTRL+K)
    // ======================================================================
    function initEnterpriseOmnisearch() {
        const modal = document.getElementById("omnisearch-modal");
        const triggerBtn = document.getElementById("search-trigger-btn");
        const input = document.getElementById("omnisearch-input");
        const clearBtn = document.getElementById("omnisearch-clear");
        const closeBtn = document.getElementById("omnisearch-close-btn");
        const suggestionsBox = document.getElementById("omnisearch-suggestions");
        const resultsBox = document.getElementById("omnisearch-results");
        const countBox = document.getElementById("omnisearch-count");
        const facetButtons = document.querySelectorAll(".facet-pill");
        const suggestionTags = document.querySelectorAll(".suggestion-tag");

        if (!modal || !input) return;

        let activeCategory = "all";
        let selectedIndex = -1;
        let currentMatches = [];

        // Full-Text Search Dataset (Pre-indexed for sub-millisecond query speed)
        const SEARCH_INDEX = [];

        // 1. Index All 34 Lectures & Supplements
        Object.keys(LECTURES_MAP).forEach((key) => {
            const l = LECTURES_MAP[key];
            const bundleContent = (window.LECTURES_PRELOADED_BUNDLE && window.LECTURES_PRELOADED_BUNDLE[key]) || 
                                  (window.KRIPTO_PRELOADED_LECTURES && window.KRIPTO_PRELOADED_LECTURES[key]) || "";
            const plainText = bundleContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").slice(0, 3000);
            let cat = "lectures";
            let catLabel = "Mühazirə";
            let catIcon = "bi-book";
            if (key.startsWith("glossary-")) {
                cat = "glossary";
                catLabel = "Lüğət";
                catIcon = "bi-translate";
            } else if (key.startsWith("supplement-")) {
                cat = "supplement";
                catLabel = "Əlavə";
                catIcon = "bi-journal-bookmark";
            }

            SEARCH_INDEX.push({
                id: key,
                category: cat,
                categoryLabel: catLabel,
                icon: catIcon,
                title: l.title,
                snippet: plainText ? plainText.slice(0, 180) + "..." : "Kriptoqrafiya kursunun əsas tədris modulu.",
                fullText: (l.title + " " + plainText).toLowerCase(),
                link: `#${key}`
            });

            // Index all headings/sections within this lecture
            if (bundleContent) {
                const hRegex = /<(h[1-4])[^>]*id=\"([^\"]+)\"[^>]*>([\s\S]*?)<\/\1>/gi;
                let match;
                while ((match = hRegex.exec(bundleContent)) !== null) {
                    const tag = match[1];
                    const id = match[2];
                    const titleText = match[3].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
                    if (titleText && titleText.length > 2 && !id.startsWith("fn") && !id.startsWith("cb") && !id.includes("toc-")) {
                        SEARCH_INDEX.push({
                            id: `sec-${key}-${id}`,
                            category: "concepts",
                            categoryLabel: tag === "h1" ? "Bölmə" : "Alt-Mövzu",
                            icon: tag === "h1" ? "bi-bookmark-check" : "bi-hash",
                            title: titleText,
                            snippet: `${l.title} » ${titleText}`,
                            fullText: (titleText + " " + l.title).toLowerCase(),
                            link: `#${key}?target=${encodeURIComponent(id)}`
                        });
                    }
                }
            }
        });

        // 2. Index Cryptographic Concepts, Definitions & Glossary Terms (100+ items)
        const COMPREHENSIVE_CONCEPTS = [
            { term: "Sezar Şifrəsi (Caesar Cipher)", desc: "Hər hərfin sabit k qədər sürüşdürüldüyü klassik monoalfabetik şifrə.", link: "#lecture-2" },
            { term: "Affin Şifrəsi (Affine Cipher)", desc: "E(x) = (a*x + b) mod 26 düsturuna əsaslanan riyazi şifrə.", link: "#lecture-2" },
            { term: "Vijener Şifrəsi (Vigenère Cipher)", desc: "Açar sözə əsaslanan polialfabetik şifrələmə alqoritmi.", link: "#lecture-3" },
            { term: "Kasiski Sınağı (Kasiski Examination)", desc: "Polialfabetik şifrələrdə açar uzunluğunu təyin etmək üçün kriptoanaliz üsulu.", link: "#lecture-3" },
            { term: "Üst-üstə Düşmə İndeksi (Index of Coincidence)", desc: "Mətndə təsadüfi seçilmiş iki hərfin eyni olması ehtimalı.", link: "#lecture-3" },
            { term: "Şennon Entropiyası (Shannon Entropy)", desc: "Mənbənin verdiyi orta informasiya miqdarı və təsadüfilik ölçüsü.", link: "#lecture-5" },
            { term: "Vernam Şifrəsi / OTP (One-Time Pad)", desc: "Təsadüfi və birdəfəlik açarla mütləq (mükəmməl) məxfilik təmin edən şifrə.", link: "#lecture-5" },
            { term: "LFSR (Linear Feedback Shift Register)", desc: "Axın şifrələrində psevdotəsadüfi bit axını generatoru.", link: "#lecture-6" },
            { term: "Trivium", desc: "80-bit təhlükəsizlikli 288-bitlik 3 LFSR reqistrli müasir axın şifrəsi.", link: "#lecture-7" },
            { term: "ChaCha20", desc: "Bernstein tərəfindən yaradılmış 256-bitlik ARX strukturuna malik axın şifrəsi.", link: "#lecture-7" },
            { term: "Feystel Şəbəkəsi (Feistel Network)", desc: "Blok şifrələrin inversiya oluna bilən simmetrik strukturu (DES, 3DES).", link: "#lecture-8" },
            { term: "DES (Data Encryption Standard)", desc: "56-bit açar və 64-bit blok ölçülü klassik blok şifrə standartı.", link: "#lecture-8" },
            { term: "Diferensial Kriptoanaliz", desc: "Açıq mətn fərqlərinin şifrəli mətn fərqlərinə təsirini araşdıran hücum.", link: "#lecture-9" },
            { term: "Xətti Kriptoanaliz", desc: "S-blokların xətti approksimasiyasına əsaslanan hücum üsulu.", link: "#lecture-9" },
            { term: "AES (Advanced Encryption Standard)", desc: "128-bit blok ölçülü, Rijndael alqoritminə əsaslanan müasir standart.", link: "#lecture-10" },
            { term: "CBC (Cipher Block Chaining)", desc: "Hər blokun əvvəlki şifrəli blokla XOR-landığı rejim.", link: "#lecture-11" },
            { term: "CTR (Counter Mode)", desc: "Blok şifrəni axın şifrəsinə çevirən paralel emal rejimi.", link: "#lecture-11" },
            { term: "XTS-AES", desc: "IEEE 1619 standartı ilə təsdiqlənmiş disk şifrləmə rejimi.", link: "#lecture-11" },
            { term: "SHA-2 (Secure Hash Algorithm 2)", desc: "SHA-256 və SHA-512 daxil olmaqla standart kriptoqrafik xeş funksiyaları.", link: "#lecture-12" },
            { term: "Süngər Konstruksiyası (Sponge Construction)", desc: "Udma və Sıxma fazaları ilə işləyən xeş və axın arxitekturası.", link: "#lecture-13" },
            { term: "Keccak / SHA-3", desc: "NIST tərəfindən SHA-3 seçilmiş Keccak-f[1600] permütasiya alqoritmi.", link: "#lecture-14" },
            { term: "HMAC (Hash-based Message Authentication Code)", desc: "Kriptoqrafik xeş funksiyasına əsaslanan məlumat autentikasiya kodu.", link: "#lecture-15" },
            { term: "Poly1305 & AEAD", desc: "ChaCha20 ilə birlikdə işləyən yüksək sürətli MAC alqoritmi.", link: "#lecture-15" },
            { term: "Asimmetrik Kriptoqrafiya", desc: "Açıq və gizli açar cütlüyündən istifadə edən sistemlər.", link: "#lecture-16" },
            { term: "Genişləndirilmiş Evklid Alqoritmi (EEA)", desc: "ƏBOB və modul tərs elementi tapmaq üçün alqoritm.", link: "#lecture-17" },
            { term: "Evler Funksiyası (Euler's Totient)", desc: "n-dən kiçik və n ilə qarşılıqlı sadə ədədlərin sayı phi(n).", link: "#lecture-18" },
            { term: "Çin Qalıq Teoremi (CRT)", desc: "Müxtəlif modul müqayisə sistemlərinin yeganə həllini tapma teoremi.", link: "#lecture-18" },
            { term: "RSA Kriptosistemi", desc: "Böyük mürəkkəb ədədlərin vuruqlara ayrılması çətinliyinə əsaslanan sistem.", link: "#lecture-19" },
            { term: "Diffie-Hellman Açar Mübadiləsi", desc: "Açıq rabitə kanalı üzərindən ortaq gizli açarın yaradılması.", link: "#lecture-20" },
            { term: "Elliptik Əyrilər (ECC)", desc: "Qısa açar ölçüsü ilə yüksək təhlükəsizlik verən qrup əyriləri.", link: "#lecture-21" },
            { term: "ECDSA", desc: "Elliptik əyrilər üzərində rəqəmsal imza alqoritmi.", link: "#lecture-22" },
            { term: "Rəqəmsal İmza (Digital Signature)", desc: "Bütövlüklə autentikasiya və inkarolunmazlıq verən mexanizm.", link: "#lecture-23" },
            { term: "PKI (Public Key Infrastructure)", desc: "Açıq açarların sertifikatlaşdırılması və CA iyerarxiyası.", link: "#lecture-24" },
            { term: "TLS 1.3", desc: "Şəbəkə rabitəsinin şifrlənməsi üçün 1-RTT/0-RTT təhlükəsizlik protokolu.", link: "#lecture-25" },
            { term: "Sıfır Biliyi Sübutları (ZKP)", desc: "Məlumatın özünü ifşa etmədən doğruluğunu sübut etmə üsulu.", link: "#lecture-26" },
            { term: "Yan Kanal Hücumları (Side-Channel)", desc: "Enerji, vaxt və ya EM şüalanma sızıntılarından açarın çıxarılması.", link: "#lecture-27" },
            { term: "Post-Kvant Kriptoqrafiya (PQC)", desc: "Kvant kompüterlərinə (Shor/Grover) davamlı alqoritmlər.", link: "#lecture-28" },
            { term: "Lattice-based PQC", desc: "Qəfəs nəzəriyyəsi (LWE, SIS) əsaslı post-kvant sistemləri.", link: "#lecture-28" },
            { term: "McEliece & SPHINCS+", desc: "Kod-əsaslı şifrləmə və xeş-əsaslı rəqəmsal imza PQC standartları.", link: "#lecture-29" },
            { term: "Homomorphic Encryption (FHE)", desc: "Şifrəli məlumatlar üzərində deşifrə etmədən hesablama aparmaq.", link: "#lecture-30" },
            { term: "Qrup və Meydan Təməlləri", desc: "Abel qrupları, Halqalar və Qalua Meydanları GF(2^8).", link: "#supplement-B" },
            { term: "Hesablama Mürəkkəbliyi (P vs NP)", desc: "Mürəkkəblik sinifləri, Polinomial vaxt və NP-Tamlıq.", link: "#supplement-C" },
            { term: "Faktorizasiya & Diskret Loqarifm", desc: "Pollard Rho, Quadratic Sieve, GNFS alqoritmləri.", link: "#supplement-D" }
        ];

        COMPREHENSIVE_CONCEPTS.forEach((c) => {
            SEARCH_INDEX.push({
                id: c.term,
                category: "concepts",
                categoryLabel: "Termin",
                icon: "bi-lightbulb",
                title: c.term,
                snippet: c.desc,
                fullText: (c.term + " " + c.desc).toLowerCase(),
                link: c.link + "?search=" + encodeURIComponent(c.term)
            });
        });

        // 3. Index Academic Bibliography (674 Entries from KRIPTO_BIBLIOGRAPHY)
        const bibObj = window.KRIPTO_BIBLIOGRAPHY || window.REFERENCES_DATA || {};
        const bibArray = Array.isArray(bibObj) ? bibObj : Object.values(bibObj);
        if (bibArray.length > 0) {
            bibArray.forEach((b) => {
                const authors = b.authors || b.author || "";
                const title = b.title || "";
                const year = b.year ? `(${b.year})` : "";
                const publisher = b.publisher || b.journal || b.booktitle || "";
                const snippetText = `${authors} ${year}. ${publisher}`.trim();
                SEARCH_INDEX.push({
                    id: b.id,
                    category: "bibliography",
                    categoryLabel: "Ədəbiyyat",
                    icon: "bi-journal-text",
                    title: `${title} ${year}`,
                    snippet: snippetText || "Akademik mənbə və elmi ədəbiyyat.",
                    fullText: (title + " " + authors + " " + year + " " + publisher + " " + (b.category || "")).toLowerCase(),
                    link: "#bibliography?target=bib-" + b.id
                });
            });
        }

        // 4. Index Interactive Simulators & Tools
        const TOOLS_INDEX = [
            { title: "Sezar Şifrəsi Laboratoriyası", desc: "Canlı şifrləmə, deşifrləmə və avtomatik tezlik analizi.", link: "#tools?target=tool-caesar" },
            { title: "Affin Şifrəsi Laboratoriyası", desc: "E(x) = (ax + b) mod 26 düsturu ilə parametrik şifrləmə və ƏBOB yoxlanışı.", link: "#tools?target=tool-affine" },
            { title: "Mətn Hərf Tezliyi Analizi", desc: "Polialfabetik və monoalfabetik kriptoanaliz tezlik qrafiki.", link: "#tools?target=tool-frequency" },
            { title: "Kriptoqrafik Sınaq və Bilik Testi", desc: "Kurs üzrə interaktiv qiymətləndirmə testi və praktiki çalışmalar.", link: "#quiz" }
        ];

        TOOLS_INDEX.forEach((t) => {
            SEARCH_INDEX.push({
                id: t.title,
                category: "tools",
                categoryLabel: "Alət",
                icon: "bi-tools",
                title: t.title,
                snippet: t.desc,
                fullText: (t.title + " " + t.desc).toLowerCase(),
                link: t.link
            });
        });

        // Open & Close Handlers
        function openOmnisearch(defaultQuery = "") {
            modal.style.display = "flex";
            requestAnimationFrame(() => {
                modal.classList.add("active");
            });
            input.value = defaultQuery;
            if (defaultQuery) {
                performSearch(defaultQuery);
                clearBtn.style.display = "block";
            } else {
                showSuggestions();
                clearBtn.style.display = "none";
            }
            setTimeout(() => input.focus(), 50);
        }

        function closeOmnisearch() {
            modal.classList.remove("active");
            setTimeout(() => {
                modal.style.display = "none";
                input.value = "";
                resultsBox.innerHTML = "";
                resultsBox.style.display = "none";
                suggestionsBox.style.display = "block";
                countBox.textContent = "";
                selectedIndex = -1;
            }, 200);
        }

        function showSuggestions() {
            suggestionsBox.style.display = "block";
            resultsBox.style.display = "none";
            resultsBox.innerHTML = "";
            countBox.textContent = `${SEARCH_INDEX.length} indekslənmiş resurs`;
        }

        // Search Algorithm with Scoring & Highlighting
        function performSearch(rawQuery) {
            const query = rawQuery.trim().toLowerCase();
            if (!query) {
                showSuggestions();
                return;
            }

            suggestionsBox.style.display = "none";
            resultsBox.style.display = "block";

            const queryWords = query.split(/\s+/).filter(Boolean);
            const matches = [];

            for (let i = 0; i < SEARCH_INDEX.length; i++) {
                const item = SEARCH_INDEX[i];

                if (activeCategory !== "all" && item.category !== activeCategory) {
                    continue;
                }

                let score = 0;
                const titleLower = item.title.toLowerCase();
                const fullTextLower = item.fullText;

                if (titleLower.includes(query)) {
                    score += 120;
                } else if (fullTextLower.includes(query)) {
                    score += 60;
                }

                let matchesAllWords = true;
                for (let w of queryWords) {
                    if (titleLower.includes(w)) {
                        score += 30;
                    } else if (fullTextLower.includes(w)) {
                        score += 10;
                    } else {
                        matchesAllWords = false;
                    }
                }

                if (score > 0 && matchesAllWords) {
                    matches.push({ item, score });
                }
            }

            matches.sort((a, b) => b.score - a.score);
            currentMatches = matches.slice(0, 30);
            selectedIndex = currentMatches.length > 0 ? 0 : -1;

            renderResults(query, currentMatches);
        }

        function highlightMatch(text, query) {
            if (!query || !text) return text;
            const words = query.trim().split(/\s+/).filter(Boolean);
            let result = text;
            words.forEach((w) => {
                const regex = new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
            });
            return result;
        }

        function renderResults(query, matches) {
            if (matches.length === 0) {
                resultsBox.innerHTML = `
                    <div class="p-4 text-center text-muted">
                        <i class="bi bi-search-heart fs-2 d-block mb-2 text-secondary opacity-50"></i>
                        <p class="mb-1 fw-bold">Uyğun nəticə tapılmadı: "${query}"</p>
                        <span class="small">Açar sözü fərqli yazmağa və ya digər kateqoriyalara baxmağa çalışın.</span>
                    </div>
                `;
                countBox.textContent = "0 nəticə";
                return;
            }

            countBox.textContent = `${matches.length} nəticə tapıldı`;

            let html = '';
            matches.forEach(({ item }, idx) => {
                const isSelected = idx === selectedIndex ? "selected" : "";
                const highlightedTitle = highlightMatch(item.title, query);
                const highlightedSnippet = highlightMatch(item.snippet, query);

                html += `
                    <div class="search-result-item ${isSelected}" data-index="${idx}" data-link="${item.link}">
                        <div class="search-result-icon">
                            <i class="bi ${item.icon}"></i>
                        </div>
                        <div class="search-result-body">
                            <div class="search-result-title">
                                <span>${highlightedTitle}</span>
                                <span class="badge bg-secondary-subtle text-secondary" style="font-size: 0.68rem;">${item.categoryLabel}</span>
                            </div>
                            <div class="search-result-snippet">${highlightedSnippet}</div>
                            <div class="search-result-meta">
                                <span><i class="bi bi-arrow-return-right"></i> ${item.link}</span>
                            </div>
                        </div>
                    </div>
                `;
            });

            resultsBox.innerHTML = html;
        }

        function updateSelection() {
            const items = resultsBox.querySelectorAll(".search-result-item");
            items.forEach((item, idx) => {
                if (idx === selectedIndex) {
                    item.classList.add("selected");
                    item.scrollIntoView({ block: "nearest" });
                } else {
                    item.classList.remove("selected");
                }
            });
        }

        function navigateToItem(itemObj) {
            if (!itemObj || !itemObj.link) return;
            closeOmnisearch();
            window.location.hash = itemObj.link;
            handleHashNavigation();
        }

        // Event Listeners
        if (triggerBtn) {
            triggerBtn.addEventListener("click", () => openOmnisearch());
        }

        const globalSearchInput = document.getElementById("global-search");
        if (globalSearchInput) {
            globalSearchInput.addEventListener("focus", () => {
                openOmnisearch(globalSearchInput.value);
            });
            globalSearchInput.addEventListener("click", () => {
                openOmnisearch(globalSearchInput.value);
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener("click", () => closeOmnisearch());
        }

        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                input.value = "";
                clearBtn.style.display = "none";
                showSuggestions();
                input.focus();
            });
        }

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeOmnisearch();
            }
        });

        input.addEventListener("input", function () {
            const val = this.value;
            clearBtn.style.display = val.length > 0 ? "block" : "none";
            performSearch(val);
        });

        input.addEventListener("keydown", function (e) {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                if (currentMatches.length > 0) {
                    selectedIndex = (selectedIndex + 1) % currentMatches.length;
                    updateSelection();
                }
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                if (currentMatches.length > 0) {
                    selectedIndex = (selectedIndex - 1 + currentMatches.length) % currentMatches.length;
                    updateSelection();
                }
            } else if (e.key === "Enter") {
                e.preventDefault();
                if (selectedIndex >= 0 && currentMatches[selectedIndex]) {
                    navigateToItem(currentMatches[selectedIndex].item);
                }
            } else if (e.key === "Escape") {
                e.preventDefault();
                closeOmnisearch();
            }
        });

        facetButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                facetButtons.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                activeCategory = btn.getAttribute("data-category") || "all";
                if (input.value.trim()) {
                    performSearch(input.value);
                }
            });
        });

        suggestionTags.forEach((tag) => {
            tag.addEventListener("click", () => {
                const query = tag.getAttribute("data-query") || tag.textContent.trim();
                input.value = query;
                clearBtn.style.display = "block";
                performSearch(query);
                input.focus();
            });
        });

        resultsBox.addEventListener("click", (e) => {
            const itemEl = e.target.closest(".search-result-item");
            if (itemEl) {
                const idx = parseInt(itemEl.getAttribute("data-index"), 10);
                if (currentMatches[idx]) {
                    navigateToItem(currentMatches[idx].item);
                }
            }
        });

        // Global Shortcut: Cmd+K / Ctrl+K / '/' Key
        document.addEventListener("keydown", (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                if (modal.style.display === "none" || !modal.classList.contains("active")) {
                    openOmnisearch();
                } else {
                    closeOmnisearch();
                }
            } else if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
                e.preventDefault();
                openOmnisearch();
            } else if (e.key === "Escape" && modal.classList.contains("active")) {
                closeOmnisearch();
            }
        });
    }

    // ======================================================================
    // 13. ENTERPRISE BACK TO TOP & SCROLL CONTROLLER
    // ======================================================================
    function initBackToTop() {
        const backToTopBtn = document.getElementById("back-to-top");
        if (!backToTopBtn) return;

        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        }, { passive: true });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // ======================================================================
    // 14. PWA (PROGRESSIVE WEB APP) & MOBILE SHORTCUT ENGINE
    // ======================================================================
    let deferredInstallPrompt = null;

    function initPwaAndMobileShortcuts() {
        // Register Service Worker for offline caching & standalone app performance
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register("sw.js")
                    .then((reg) => console.log("Kripto-Kurs Service Worker registered:", reg.scope))
                    .catch((err) => console.warn("Kripto-Kurs SW notice:", err));
            });
        }

        const installModalEl = document.getElementById("installAppModal");
        const headerInstallBtn = document.getElementById("btn-install-app");
        const sidebarInstallBtn = document.getElementById("sidebar-install-btn");
        const directInstallBtn = document.getElementById("pwa-direct-install-btn");
        const nativeRow = document.getElementById("pwa-native-install-row");

        // Capture Chrome / Android / Desktop beforeinstallprompt event
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            deferredInstallPrompt = e;
            if (nativeRow) nativeRow.style.display = "block";
            if (headerInstallBtn) {
                headerInstallBtn.classList.remove("btn-outline-primary");
                headerInstallBtn.classList.add("btn-primary", "text-white");
            }
        });

        window.addEventListener("appinstalled", () => {
            deferredInstallPrompt = null;
            if (nativeRow) nativeRow.style.display = "none";
            showToast("Tətbiq uğurla quraşdırıldı!");
        });

        function showInstallModal() {
            if (installModalEl && window.bootstrap && bootstrap.Modal) {
                const modal = bootstrap.Modal.getInstance(installModalEl) || new bootstrap.Modal(installModalEl);
                modal.show();
            } else if (installModalEl) {
                installModalEl.style.display = "block";
                installModalEl.classList.add("show");
            }
        }

        if (headerInstallBtn) {
            headerInstallBtn.addEventListener("click", (e) => {
                e.preventDefault();
                showInstallModal();
            });
        }

        if (sidebarInstallBtn) {
            sidebarInstallBtn.addEventListener("click", (e) => {
                e.preventDefault();
                showInstallModal();
                if (isMobileViewport()) {
                    toggleSidebar(false);
                }
            });
        }

        if (directInstallBtn) {
            directInstallBtn.addEventListener("click", async () => {
                if (deferredInstallPrompt) {
                    deferredInstallPrompt.prompt();
                    const { outcome } = await deferredInstallPrompt.userChoice;
                    console.log("Install prompt outcome:", outcome);
                    deferredInstallPrompt = null;
                    if (outcome === "accepted") {
                        if (installModalEl && window.bootstrap && bootstrap.Modal) {
                            const modal = bootstrap.Modal.getInstance(installModalEl);
                            if (modal) modal.hide();
                        }
                    }
                } else {
                    showToast("Brauzer menyusundan 'Ana ekrana əlavə et' seçin.");
                }
            });
        }
    }

    // Initialize Enterprise Engines
    initGlobalLinkInterceptor();
    initEnterpriseOmnisearch();
    initBackToTop();
    initPwaAndMobileShortcuts();

});

