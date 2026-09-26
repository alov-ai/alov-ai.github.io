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
    Müasir kriptoqrafiyaya iki semestrlik praktik giriş: XOR və klassik
    şifrələrdən başlayaraq blok şifrələri, heş funksiyaları, açıq açar
    kriptoqrafiyası, TLS və post-kvant sxemlərinə qədər. Hər mövzu bir
    <strong>mühazirə</strong> (PDF) və Python-da işlənən bir
    <strong>məşğələ</strong> (Jupyter dəftəri) ilə müşayiət olunur.
  </p>
  <p class="lang en lead">
    A two-semester, hands-on introduction to modern cryptography — from XOR and
    classical ciphers through block ciphers, hash functions, public-key
    cryptography, TLS, and post-quantum schemes. Each topic pairs a
    <strong>lecture</strong> (PDF) with a worked <strong>practical</strong>
    (Jupyter notebook) in Python.
  </p>

  <p class="lang az course-status">
    📚 <strong>İki semestrlik</strong> tam kurs: 30 mühazirə və 33 məşğələ.
  </p>
  <p class="lang en course-status">
    📚 The <strong>complete two-semester</strong> course: 30 lectures and 33 practicals.
  </p>

  <!-- Web version of the lectures: static copy of the Kripto-Kurs SPA in /kripto/,
       synced with tools/sync-kripto.sh. -->
  <p class="lang az course-web">
    🌐 Mühazirələri brauzerdə oxuyun:
    <a href="{{ '/kripto/' | relative_url }}" target="_blank" rel="noopener"><strong>veb versiya</strong></a>
    — axtarış, lüğət və əlavələrlə.
  </p>
  <p class="lang en course-web">
    🌐 Read the lectures in your browser:
    <a href="{{ '/kripto/' | relative_url }}" target="_blank" rel="noopener"><strong>web version</strong></a>
    — with search, a glossary, and supplements (in Azerbaijani).
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
      <span class="lang az"><strong>Mühazirə:</strong> 30 mövzu (PDF)</span>
      <span class="lang en"><strong>Lectures:</strong> 30 topics (PDF)</span>
    </li>
    <li>
      <span class="lang az"><strong>Məşğələ:</strong> 33 Jupyter dəftəri (3-ü əlavə)</span>
      <span class="lang en"><strong>Practicals:</strong> 33 Jupyter notebooks (3 supplementary)</span>
    </li>
    <li>
      <span class="lang az"><strong>Həcm:</strong> İki semestr</span>
      <span class="lang en"><strong>Scope:</strong> Two semesters</span>
    </li>
    <li>
      <span class="lang az"><strong>Lisenziya:</strong>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.az" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a></span>
      <span class="lang en"><strong>License:</strong>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a></span>
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
      {% assign shown_semester = 0 %}
      {% for item in site.data.crypto_course.lectures %}
      {% if item.semester and item.semester != shown_semester %}
      <tr class="course-sem">
        <td colspan="4">
          <span class="lang az">{{ item.semester }}-ci semestr</span>
          <span class="lang en">Semester {{ item.semester }}</span>
        </td>
      </tr>
      {% assign shown_semester = item.semester %}
      {% endif %}
      <tr>
        <td class="course-num">{{ item.n }}</td>
        <td>
          <span class="lang az">{{ item.az }}</span>
          <span class="lang en">{{ item.en }}</span>
        </td>
        <td>
          {% if item.pdf and item.pdf != "" %}
          <a href="{{ item.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a> ·
          {% endif %}
          <a href="{{ '/kripto/' | relative_url }}#lecture-{{ item.n }}" target="_blank" rel="noopener">HTML</a>
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

  <!-- ===== Authors ===== -->
  <h2 class="lang az">Müəlliflər</h2>
  <h2 class="lang en">Authors</h2>

  <p class="lang az">Kursun materiallarını hazırlayanlar:</p>
  <p class="lang en">The course materials were written by:</p>

  <ul class="course-authors">
    <li>
      <span class="lang az">Kave Babai</span>
      <span class="lang en">Kaveh Babai</span>
    </li>
    <li>
      <span class="lang az">Lalə İbadullayeva</span>
      <span class="lang en">Lala Ibadullayeva</span>
    </li>
    <li>
      <span class="lang az">Güman Qarayev</span>
      <span class="lang en">Guman Garayev</span>
    </li>
    <li>
      <span class="lang az">Qərib Mürşüdov</span>
      <span class="lang en">Garib Murshudov</span>
    </li>
  </ul>

  <h3 class="lang az">Təşəkkür</h3>
  <h3 class="lang en">Acknowledgements</h3>

  <p class="lang az">
    Saytın və kurs səhifəsinin hazırlanmasına görə <strong>Cavid Qafarzadəyə</strong>
    təşəkkür edirik.
  </p>
  <p class="lang en">
    Thanks to <strong>Javid Gafar-zada</strong> for building the website and this
    course page.
  </p>
  <p class="lang az">
    Mühazirələrin <a href="{{ '/kripto/' | relative_url }}" target="_blank" rel="noopener">veb versiyasının</a>
    hazırlanmasına görə <strong>Süleyman Hacızadəyə</strong> təşəkkür edirik.
  </p>
  <p class="lang en">
    Thanks to <strong>Suleiman Hajizadeh</strong> for preparing the
    <a href="{{ '/kripto/' | relative_url }}" target="_blank" rel="noopener">web version</a>
    of the lectures.
  </p>

  <!-- ===== Feedback ===== -->
  <h2 class="lang az">Rəy</h2>
  <h2 class="lang en">Feedback</h2>

  <p class="lang az">
    Rəyiniz hər zaman xoş qarşılanır! Kursla bağlı təklif, qeyd və ya səhv
    bildirişiniz varsa, bizə e-poçt göndərin — rəyiniz kursu yaxşılaşdırmağa
    kömək edir.
  </p>
  <p class="lang en">
    Your feedback is always welcome! Have a suggestion, a note, or spotted a
    mistake? Send us an email — your feedback helps improve the course.
  </p>

  <p class="course-feedback">
    <a class="course-feedback-btn lang az" href="mailto:kaveh.babai@bsu.edu.az?subject=Kriptoqrafiya%20kursu%20-%20r%C9%99y">✉️ Rəy bildir</a>
    <a class="course-feedback-btn lang en" href="mailto:kaveh.babai@bsu.edu.az?subject=Cryptography%20course%20-%20feedback">✉️ Give feedback</a>
  </p>

  <!-- ===== Notebook help ===== -->
  <div class="lang az course-note">
    <p><strong>Məşğələləri necə işə salmaq olar?</strong>
    <em>Colab</em> dəftəri brauzerdə birbaşa açıb işə salır (quraşdırma tələb
    olunmur). Bütün fayllar — mühazirə PDF-ləri və Jupyter dəftərləri — layihənin
    <a href="https://github.com/alov-ai/alov-ai.github.io" target="_blank" rel="noopener">GitHub anbarında</a>
    açıq şəkildə saxlanılır.</p>
  </div>
  <div class="lang en course-note">
    <p><strong>How to run the practicals.</strong>
    <em>Colab</em> opens and runs a notebook right in your browser (no setup
    needed). All the files — the lecture PDFs and the Jupyter notebooks — are kept
    openly in the project's
    <a href="https://github.com/alov-ai/alov-ai.github.io" target="_blank" rel="noopener">GitHub repository</a>.</p>
  </div>

  <!-- ===== License ===== -->
  <div class="lang az course-note course-license">
    <p><strong>Lisenziya.</strong>
    Bu kurs
    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.az" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>
    lisenziyası altında yayımlanır. İstənilən şəxs ondan sərbəst istifadə edə,
    nüsxələyə, paylaşa və dəyişdirə bilər — bir şərtlə ki, <strong>müəllifliyi
    göstərsin</strong>, <strong>kommersiya məqsədilə istifadə etməsin</strong>
    (yəni satmasın) və törəmə işləri eyni lisenziya altında yaysın.</p>
  </div>
  <div class="lang en course-note course-license">
    <p><strong>License.</strong>
    This course is released under
    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>.
    Anyone may freely use, copy, share, and adapt it — provided they
    <strong>give attribution</strong>, do <strong>not use it commercially</strong>
    (i.e. do not sell it), and release derivative works under the same license.</p>
  </div>

</div>

<script src="{{ '/assets/js/course-lang.js' | relative_url }}"></script>
