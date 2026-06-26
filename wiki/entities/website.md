---
title: Сайт alov-ai
type: entity
tags: [website, jekyll, chirpy, github-pages]
created: 2026-06-26
updated: 2026-06-26
sources: [2026-06-26-repo-snapshot, 2026-06-26-mission-strategy]
---

# Сайт alov-ai

Публикуемый сайт организации — репозиторий `alov-ai.github.io`.

## Стек

- **Генератор:** Jekyll (статический сайт).
- **Тема:** [jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
  — минималистичная тема для технического блога. См. [[decision-chirpy-theme]].
- **Хостинг:** GitHub Pages, деплой через GitHub Actions
  (`.github/workflows/pages-deploy.yml`).
- **Статика темы:** git-сабмодуль `assets/lib` →
  `github.com/cotes2020/chirpy-static-assets`.

## Структура репозитория

| Путь | Назначение |
|------|-----------|
| `_config.yml` | Основная конфигурация сайта |
| `_posts/` | Посты блога (**пусто** на момент старта) |
| `_tabs/` | Страницы навигации: about, archives, categories, tags |
| `_data/` | `contact.yml`, `share.yml` |
| `_plugins/posts-lastmod-hook.rb` | Плагин авто-даты обновления постов |
| `tools/` | `run.sh` (локальный запуск), `test.sh` (html-proofer) |
| `assets/lib` | Сабмодуль со статикой темы |
| `.github/` | CI/CD: сборка и деплой на Pages |

## Текущее состояние

Сайт — **нетронутый стартовый шаблон Chirpy**. Конфигурация содержит плейсхолдеры:

- `title: Chirpy`, дефолтные `tagline`/`description`;
- `url: ""` — не заполнен (ожидается `https://alov-ai.github.io`);
- `github.username: github_username`, `twitter.username: twitter_username`;
- `social.name: your_full_name`, `email: example@domain.com`;
- `lang: en`, `timezone:` — пусто; аватар, аналитика, комментарии не настроены.

Постов нет, один коммит `Initial commit`.

## Роль в стратегии

Сайт принадлежит организации [[organization|Alov Intelligence]] и — как блог на
Chirpy — естественная площадка для [[inbound-marketing|inbound-контента]] (статьи,
кейсы, туториалы, истории успеха). Сейчас этот потенциал не реализован: постов нет.

## TODO по сайту (кандидаты в решения/задачи)

- Заполнить `url`, `github`/`social`, `title`, `lang`, `timezone` под Alov Intelligence.
- Определить замысел сайта и первый контент; связать с [[inbound-marketing]].
- Инициализировать сабмодуль `assets/lib` при локальной сборке.
