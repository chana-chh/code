---
title: "Hugo instalacija i konfiguracija"
date: 2019-07-15T20:52:22+02:00
draft: false
summary: "Hugo - instalacija, konfiguracija i kreiranje novog web sajta."
slug: "hugo-instalacija-i-konfiguracija"
keywords: ["hugo", "generator statičkih sajtova"]
description: "Instalacija i podešavanje Hugo generatora statičkih sajtova"
kategorije: ["hugo", "statički web sajtovi"]
reči: ["hugo", "statički web sajt"]
autori: ["Chana"]
arhiva: "2019-07"
---

## Instalacija

Skinuti poslednju verziju instalacionog fajla na sledećoj [lokaciji](https://github.com/gohugoio/hugo/releases).

Napraviti direktorijum `D:\Hugo` na nekom od diskova i u njemu direktorijum `Sites` u kome će biti smešteni web sajtovi i direktorijum `bin` u koji treba raspakovati instalacioni fajl.

## Podešavanje

U windows-u dodati `D:\Hugo\bin\hugo.exe` u putanju (`PATH`) i testirati da li je **hugo** ispravno instaliran:

```shell
D:\Hugo\Sites>hugo version
```

## Kreiranje novog web sajta

```shell
D:\Hugo\Sites>hugo new site naziv-sajta
D:\Hugo\Sites>cd naziv-sajta
```

## Struktura direktorijuma

Struktura direktorijuma bi trebala da izgleda ovako:

```shel
.
├── archetypes
├── content
├── data
├── layouts
├── static
├── themes
└── config.toml
```

## Konfiguracija

Za konfigurisanje web sajta **hugo** koristi `config.toml` fajl.[^1]

Kompletna lista predefinisanih promenjivih, koje se mogu koristiti u `config.toml` fajlu, i njihove podrazumevane vrednosti u zagradi.

<dl>
<dt>archetypeDir (“archetypes”)</dt>
<dd>
Direktorijum u kome se nalaze archetype fajlovi (šabloni za sadržaj).
</dd>
<dt>assetDir (“assets”)</dt>
<dd>
Direktorijum gde se nalaze asset fajlovi (`sass`, `scss`, `js` ...) koje treba kompajlirati.
</dd>
<dt>baseURL</dt>
<dd>
Osnovna putanja web sajta , npr. `http://naziv-sajta.com/`
<dd>
<dt>blackfriday</dt>
<dd>
Blackfriday podešavanje. Blackfriday je rendering engine za markdown.
<dd>
<dt>buildDrafts (false)</dt>
<dd>
Kada je postavljeno na `true` uključuje i draftove prilikom pravljenja web sajta.
<dd>
<dt>buildExpired (false)</dt>
<dd>
Kada je postavljeno na `true` uključuje i istekle članke prilikom pravljenja web sajta.
<dd>
<dt>buildFuture (false)</dt>
<dd>
Kada je postavljeno na `true` uključuje i članke kojima je datum izdavanja u budućnosti prilikom pravljenja web sajta.
<dd>
<dt>caches</dt>
<dd>
Konfiguracija keširanja
<dd>
<dt>canonifyURLs (false)</dt>
<dd>
Kada je postavljeno na `true` pretvara relativne adrese u apsolutne.
<dd>
<dt>contentDir (“content”)</dt>
<dd>
Direktorijum iz koga se preuzimaju fajlovi sa sadržajem stranica.
<dd>
<dt>dataDir (“data”)</dt>
<dd>
Direktorijum iz koga se preuzimaju fajlovi sa podacima.
<dd>
<dt>defaultContentLanguage (“en”)</dt>
<dd>
Sadržaj bez oznake jezika će biti postavljen na ovaj jezik.
<dd>
<dt>defaultContentLanguageInSubdir (false)</dt>
<dd>
Koristi podrazumevani jezik iz direktorijuma. Na primer `content/sr/`. Ruta web sajta `/` se tada prebacuje na `/sr/`.
<dd>
<dt>disableAliases (false)</dt>
<dd>
Onemogućava generisanje alijas preusmeravanja, ali se sami alijasi zadržavaju na stranici.
<dd>
<dt>disableHugoGeneratorInject (false)</dt>
<dd>
Podrazumevano ubacivanje hugo meta taga u HTML na home stranici.
<dd>
<dt>disableKinds ([])</dt>
<dd>
Onemogućavanje određenih vrsta stranica. Dozvoljene vrednosti su: "page", "home", "section", "taxonomy", "taxonomyTerm", "RSS", "sitemap", "robotsTXT", "404".
<dd>
<dt>disableLiveReload (false)</dt>
<dd>
Onemogućava automatsko osvežavanje stranice u pretraživaču.
<dd>
<dt>disablePathToLower (false)</dt>
<dd>
Ne pretvara url putanju u mala slova.
<dd>
<dt>enableEmoji (false)</dt>
<dd>
Omogućava korišćenje emotikona u sadržaju stranice.
<dd>
<dt>enableGitInfo (false)</dt>
<dd>
Omogućava git informacije na svakoj stranici. Ovo koristi poslednji git commit kao Lastmod parametar stranice.
<dd>
<dt>enableInlineShortcodes</dt>
<dd>
Omogućava inline shortcode podršku.
<dd>
<dt>enableMissingTranslationPlaceholders (false)</dt>
<dd>
Ako nedostaje prevod prikazuje placeholder umesto podrazumevane vrednosti ili praznog stringa.
<dd>
<dt>enableRobotsTXT (false)</dt>
<dd>
Omogućava kreiranje `robots.txt` fajla.
<dd>
<dt>frontmatter</dt>
<dd>
Front matter podešavanje.
<dd>
<dt>footnoteAnchorPrefix (“”)</dt>
<dd>
Prefiks za footnote linkove.
<dd>
<dt>footnoteReturnLinkContents (“”)</dt>
<dd>
Tekst za footnote povratni link.
<dd>
<dt>googleAnalytics (“”)</dt>
<dd>
Google Analytics ID.
<dd>
<dt>hasCJKLanguage (false)</dt>
<dd>
Da li sadrži kineski/japanski/koreanski jezik.
<dd>
<dt>imaging</dt>
<dd>
Podešavanje procesiranja slika.
<dd>
<dt>languages</dt>
<dd>
Podešavanje jezika.
<dd>
<dt>languageCode (“”)</dt>
<dd>
Kod jezika sajta.
<dd>
<dt>languageName (“”)</dt>
<dd>
Naziv jezika sajta.
<dd>
<dt>disableLanguages</dt>
<dd>
Onemogućava jedan ili više jezika (prevoda) web sajta. Nije moguće onemogućiti podrazumevani jezik.
<dd>
<dt>layoutDir (“layouts”)</dt>
<dd>
Direktorijum sa šablonima web sajta.
<dd>
<dt>log (false)</dt>
<dd>
Omogućava pisanje log-a.
<dd>
<dt>logFile (“”)</dt>
<dd>
Putanja fajla log-a (ako je postavljena automatski omogućava pisanje log-a)
<dd>
<dt>menu</dt>
<dd>
Dodavanje stavki menija koje nisu povezane sa sadržajem sajta.
<dd>
<dt>metaDataFormat (“toml”)</dt>
<dd>
Front matter meta-data format. Dozvoljene vrednosti su: "toml", "yaml", ili "json".
<dd>
<dt>newContentEditor (“”)</dt>
<dd>
Editor koji se koristi prilikom kreiranja novog sadržaja.
<dd>
<dt>noChmod (false)</dt>
<dd>
Onemogućava sinhronizovanje dozvola (permission) za fajlove.
<dd>
<dt>noTimes (false)</dt>
<dd>
Onemogućava sinhronizovanje vremena izmene fajlova.
<dd>
<dt>paginate (10)</dt>
<dd>
Podrazumevani broj elemenata po strani za straničenje.
<dd>
<dt>paginatePath (“page”)</dt>
<dd>
Deo putanje koja se koristi za straničenje (https://example.com/page/2).
<dd>
<dt>permalinks</dt>
<dd>
Podešavanje linkova za određene sekcije.
<dd>
<dt>pluralizeListTitles (true)</dt>
<dd>
Pluralizacija naslova u listama.
<dd>
<dt>publishDir (“public”)</dt>
<dd>
Direktorijum gde se kreira konačni statički web sajt.
<dd>
<dt>pygmentsCodeFencesGuessSyntax (false)</dt>
<dd>
Omogućava otkrivanje jezika koda kada jezik nije naznačen.
<dd>
<dt>pygmentsStyle (“monokai”)</dt>
<dd>
Kolor šema za označavanje koda. Tamne teme: monokai, rrt, fruity, vim, native. Svetle teme: manni, perldoc, borland, colorful, default, murphy, vs, trac, tango, autumn, bw, emacs, pastie, frendly.
<dd>
<dt>pygmentsUseClasses (false)</dt>
<dd>
Omogućava korišćenje eksternog CSS-a za označavanje koda.
<dd>
<dt>related</dt>
<dd>
Podešavanje povezanog sadržaja.
<dd>
<dt>relativeURLs (false)</dt>
<dd>
Omogućava kreiranje svih relativnih URL-ova u odnosu na content. Ovo ne utiče na apsolutnr URL-ove.
<dd>
<dt>refLinksErrorLevel (“ERROR”)</dt>
<dd>
Kad se koristi `ref` ili `relref` za razrešavanje linkova, a link ne može biti razrešen, u log-u će biti zabeležen ovaj nivo. Dozvoljene vrednosti su `ERROR` i `WARNING`.
<dd>
<dt>refLinksNotFoundURL</dt>
<dd>
URL koji će se koristiti kao placeholder kada referenca na stranicu ne može biti pronađena u `ref` ili `relref`.
<dd>
<dt>rssLimit (unlimited)</dt>
<dd>
Maksimalan broj stavki u RSS.
<dd>
<dt>sectionPagesMenu (“”)</dt>
<dd>
Naziv automatskog menija sa sekcijama.
<dd>
<dt>sitemap</dt>
<dd>
Podrazumevana podešavanja za mapu web sajta.
<dd>
<dt>staticDir (“static”)</dt>
<dd>
Direktorijum ili lista direktorijuma u kojima se nalaze statički fajlovi ("css", "js"...).
<dd>
<dt>summaryLength (70)</dt>
<dd>
Dužina teksta u rečima koja će se prikazati u `.Summary`.
<dd>
<dt>taxonomies</dt>
<dd>
Podešavanje kategorizacije.
<dd>
<dt>theme (“”)</dt>
<dd>
Tema koja se koristi (podrazumevano se nalazi u /themes/naziv-teme/).
<dd>
<dt>themesDir (“themes”)</dt>
<dd>
Direktorijum iz koga se preuzimaju teme
<dd>
<dt>timeout (10000)</dt>
<dd>
Vreme za generisanje sadržaja. Ovo se koristi zbog slučajeva rekurzivnog generisanja sadržaja (beskonačna petlja). Ako su stranice komplikovane za generisanje ovo vreme se može povećati.
<dd>
<dt>title (“”)</dt>
<dd>
Naziv sajta.
<dd>
<dt>titleCaseStyle (“AP”)</dt>
<dd>
Stil naslova. Dozvoljene vrednosti su: "AP", "Chicago", "Go".
<dd>
<dt>uglyURLs (false)</dt>
<dd>
Omogućava kreiranje URL-ova u obliku `/filename.html` umesto `/filename/`.
<dd>
<dt>verbose (false)</dt>
<dd>
Omogućava opširni prikaz.
<dd>
<dt>verboseLog (false)</dt>
<dd>
Omogućava opširno zapisivanje u log.
<dd>
<dt>watch (false)</dt>
<dd>
Prati promene u fajl sistemu i ponovo kreira ako je potrebno.
<dd>
</dl>

### `config.toml` fajl

```toml
baseURL = "https://chana-chh.github.io/code/"
languageCode = "sr"
title = "ChaSha Coding Blog"
paginate = 5
paginatePath = "strana"
pluralizeListTitles = false
pygmentsCodeFences = true
footnoteReturnLinkContents = "[nazad]"
pygmentsStyle = "native" # monokai
publishDir = "docs"
[taxonomies]
	kategorija = "kategorije"
	rec = "reči"
	autor = "autori"
	mesec = "arhiva"
```

[^1]: može koristiti i `config.yaml` ili `config.json`
