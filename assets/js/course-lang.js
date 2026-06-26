// Language switcher for the bilingual course page (/courses/cryptography/).
// Toggles the `data-lang` attribute on .course-page; CSS does the show/hide.
// Remembers the choice in localStorage so it persists across visits.
(function () {
  var page = document.querySelector('.course-page');
  if (!page) return;

  var STORAGE_KEY = 'course-lang';
  var buttons = page.querySelectorAll('.course-lang-btn');

  function apply(lang) {
    if (lang !== 'az' && lang !== 'en') lang = page.getAttribute('data-lang') || 'az';
    page.setAttribute('data-lang', lang);
    buttons.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-set-lang') === lang);
    });
  }

  var saved;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  apply(saved || page.getAttribute('data-lang') || 'az');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-set-lang');
      apply(lang);
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    });
  });
})();
