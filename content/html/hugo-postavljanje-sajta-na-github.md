---
title: "Hugo postavljanje sajta na GitHub"
date: 2019-07-16T23:02:05+02:00
draft: false
summary: "Postavljanje statičkog Hugo sajta na GitHub."
slug: "hugo-postavljanje-sajta-na-github"
keywords:
  ["hugo", "statički web sajt", "GitHub", "besplatno postavljane web sajta"]
description: "GitHub omogućava postavljanje besplatnog statičkog sajta. Postavljanje statičkog Hugo sajta na GitHub."
kategorije: ["hugo", "statički web sajtovi", "GitHub"]
reči: ["hugo", "statički web sajt", "GitHub", "postavljanje web sajta"]
autori: ["Chana"]
arhiva: "2019-07"
---

## Naziv i direktorijumi web sajta

Pretpostavka je da je:

- Hugo je instaliran u `D:\Hugo\bin\`,
- da se sajtovi se nalaze u `D:\Hugo\Sites\`,
- naziv sajta _code_ i da se nalazi u `D:\Hugo\Sites\code\`.

## Git i GitHub

Inicijalizacija lokalnog git repozitorijuma:

```shell
D:\Hugo\Sites\code>git init
```

Na GitHub-u napraviti novi repozitorijum sa nazivom _code_ i dodati lokalni repozitorijum:

```shell
D:\Hugo\Sites\code>git remote add origin https://github.com/chana-chh/code.git
D:\Hugo\Sites\code>git add --all
D:\Hugo\Sites\code>git commit -m "initial commit"
D:\Hugo\Sites\code>git push -u origin master
```

## Kreiranje web sajta i postavljanje na GitHub

Podesiti `config.toml` fajl tako da _hugo_ generise sajt u direktorijumu `docs` umesto u podrazumevanom direktorijumu `public`.

```toml
publishDir = "docs"
```

Napraviti _hugo_ statički web sajt lokalno.

```shell
D:\Hugo\Sites\code>hugo
```

Postaviti lokalne promene repozitorijuma na GitHub:

```shell
D:\Hugo\Sites\code>git add --all
D:\Hugo\Sites\code>git commit -m "site"
D:\Hugo\Sites\code>git push -u origin master
```

Na GitHub-u otvoriti _Settings_ u _code_ repozitorijumu i u delu _GitHub Pages_ odabrati _Source_ _master branch/docs folder_.

Web sajt će biti na adresi _https\://github-profile-name.github.io/repository-name/_

Nakon izmene sadržaja web sajta, da bi se osvežio web sajt na GitHub-u potrebno je rekreirati web sajt lokalno,

```shell
D:\Hugo\Sites\code>hugo
```

a zatim postaviti lokalne promene repozitorijuma na GitHub:

```shell
D:\Hugo\Sites\code>git add --all
D:\Hugo\Sites\code>git commit -m "site"
D:\Hugo\Sites\code>git push -u origin master
```

	Napomena: Samo članci koji su `draft: false` ulaze u sadržaj web sajta.
