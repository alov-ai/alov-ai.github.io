---
title: "Kriptoqrafiya kursu · Cryptography Course"
permalink: /courses/cryptography/
layout: page
toc: false
# Bilingual course page (Azerbaijani / English). Course materials are in
# Azerbaijani; the page chrome and descriptions are available in both languages
# via the language switcher. Syllabus rows come from _data/crypto_course.yml.
---

<!-- TODO(human): confirm the official Azerbaijani name of the BSU center and the
     course; the AZ center name below is a tentative translation. -->

<link rel="stylesheet" href="{{ '/assets/css/course.css' | relative_url }}">

<div class="course-page" data-lang="az">

  <div class="course-langbar" role="group" aria-label="Language / Dil">
    <button type="button" class="course-lang-btn" data-set-lang="az">Azərbaycanca</button>
    <button type="button" class="course-lang-btn" data-set-lang="en">English</button>
  </div>

  <!-- ===== Intro ===== -->
  <p class="lang az lead">
    Müasir kriptoqrafiyaya bir semestrlik praktik giriş: XOR və klassik
    şifrələrdən başlayaraq blok şifrələri, heş funksiyaları və mesaj
    autentifikasiyasına qədər. Hər mövzu bir <strong>mühazirə</strong> (PDF) və
    Python-da işlənən bir <strong>məşğələ</strong> (Jupyter dəftəri) ilə müşayiət
    olunur.
  </p>
  <p class="lang en lead">
    A one-semester, hands-on introduction to modern cryptography — from XOR and
    classical ciphers through block ciphers, hash functions, and message
    authentication. Each topic pairs a <strong>lecture</strong> (PDF) with a
    worked <strong>practical</strong> (Jupyter notebook) in Python.
  </p>

  <!-- ===== Facts ===== -->
  <ul class="course-facts">
    <li>
      <span class="lang az"><strong>Qiymət:</strong> Pulsuz və açıq</span>
      <span class="lang en"><strong>Price:</strong> Free and open</span>
    </li>
    <li>
      <span class="lang az"><strong>Dil:</strong> Azərbaycanca (materiallar)</span>
      <span class="lang en"><strong>Language:</strong> Azerbaijani (materials)</span>
    </li>
    <li>
      <span class="lang az"><strong>Format:</strong> 15 mövzu — mühazirə (PDF) və məşğələ (Jupyter)</span>
      <span class="lang en"><strong>Format:</strong> 15 topics — lecture (PDF) and practical (Jupyter)</span>
    </li>
    <li>
      <span class="lang az"><strong>Həcm:</strong> Bir semestr</span>
      <span class="lang en"><strong>Scope:</strong> One semester</span>
    </li>
  </ul>

  <!-- ===== Provider ===== -->
  <p class="lang az course-by">
    Kurs <strong>Bakı Dövlət Universiteti</strong>nin Rəqəmsal Texnologiyalar və
    Tətbiqi Tədqiqatlar Mərkəzi tərəfindən hazırlanıb;
    <strong>Alov Intelligence</strong> onu yerləşdirir və təşviq edir.
  </p>
  <p class="lang en course-by">
    Created by the Center for Digital Technologies and Applied Research at
    <strong>Baku State University</strong>; hosted and promoted by
    <strong>Alov Intelligence</strong>.
  </p>

  <p class="course-back">
    <a class="lang az" href="{{ '/collaborations/' | relative_url }}">← Əməkdaşlıqlarımız</a>
    <a class="lang en" href="{{ '/collaborations/' | relative_url }}">← Part of our collaborations</a>
  </p>

  <!-- ===== Syllabus ===== -->
  <h2 class="lang az">Proqram</h2>
  <h2 class="lang en">Syllabus</h2>

  <table class="course-syllabus">
    <thead>
      <tr>
        <th class="course-num">#</th>
        <th>
          <span class="lang az">Mövzu</span>
          <span class="lang en">Topic</span>
        </th>
        <th>
          <span class="lang az">Mühazirə</span>
          <span class="lang en">Lecture</span>
        </th>
        <th>
          <span class="lang az">Məşğələ</span>
          <span class="lang en">Practical</span>
        </th>
      </tr>
    </thead>
    <tbody>
      {% for item in site.data.crypto_course.lectures %}
      <tr>
        <td class="course-num">{{ item.n }}</td>
        <td>
          <span class="lang az">{{ item.az }}</span>
          <span class="lang en">{{ item.en }}</span>
        </td>
        <td>
          {% if item.pdf and item.pdf != "" %}
          <a href="{{ item.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>
          {% else %}—{% endif %}
        </td>
        <td class="course-nb">
          {% if item.notebooks and item.notebooks.size > 0 %}
          {% for nb in item.notebooks %}<a href="{{ nb.url }}" target="_blank" rel="noopener">Colab{% if nb.extra %} <span class="lang az">(əlavə)</span><span class="lang en">(extra)</span>{% endif %}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}
          {% else %}—{% endif %}
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>

  <!-- ===== Supplementary materials ===== -->
  {% if site.data.crypto_course.extras and site.data.crypto_course.extras.size > 0 %}
  <h2 class="lang az">Əlavə materiallar</h2>
  <h2 class="lang en">Additional materials</h2>

  <p class="lang az course-extras-intro">
    Bütün proqrama aid köməkçi sənədlər — lüğətlər, tarixçə və kriptoqrafiyanın
    riyazi əsasları.
  </p>
  <p class="lang en course-extras-intro">
    Course-wide reference documents — glossaries, a history, and the mathematical
    foundations of cryptography.
  </p>

  <ul class="course-extras">
    {% for x in site.data.crypto_course.extras %}
    <li>
      {% if x.versions and x.versions.size > 0 %}
      <span class="lang az">{{ x.az }}</span><span class="lang en">{{ x.en }}</span>
      — {% for v in x.versions %}<a href="{{ v.pdf | relative_url }}" target="_blank" rel="noopener"><span class="lang az">{{ v.az }}</span><span class="lang en">{{ v.en }}</span></a>{% unless forloop.last %} · {% endunless %}{% endfor %}
      {% else %}
      <a href="{{ x.pdf | relative_url }}" target="_blank" rel="noopener">
        <span class="lang az">{{ x.az }}</span>
        <span class="lang en">{{ x.en }}</span>
      </a>
      {% endif %}
    </li>
    {% endfor %}
  </ul>
  {% endif %}

  <!-- ===== Notebook help ===== -->
  <div class="lang az course-note">
    <p><strong>Məşğələləri necə işə salmaq olar?</strong>
    <em>Colab</em> dəftəri brauzerdə birbaşa açıb işə salır (quraşdırma tələb
    olunmur). Mənbə
    faylları (PDF, TeX, Jupyter) layihənin
    <a href="https://github.com/alov-ai/alov-ai.github.io" target="_blank" rel="noopener">GitHub anbarında</a>
    açıq şəkildə saxlanılır.</p>
  </div>
  <div class="lang en course-note">
    <p><strong>How to run the practicals.</strong>
    <em>Colab</em> opens and runs a notebook right in your browser (no setup
    needed). The source files (PDF, TeX,
    Jupyter) are kept openly in the project's
    <a href="https://github.com/alov-ai/alov-ai.github.io" target="_blank" rel="noopener">GitHub repository</a>.</p>
  </div>

</div>

<script src="{{ '/assets/js/course-lang.js' | relative_url }}"></script>
