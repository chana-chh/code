---
title: "Hugo postavljanje sajta na GitHub"
date: 2019-07-16T23:02:05+02:00
draft: true
summary: "Postavljanje Hugo sajta na GitHub"
slug: "hugo-postavljanje-sajta-na-github"
keywords: []
description: ""
kategorije: []
reči: []
autori: []
arhiva: "2019-07"
---

Hugo je instaliran u `D:\Hugo\bin\`, a sajtovi se nalaze u `D:\Hugo\Sites\`

Naziv sajta je *code* i nalazi se u `D:\Hugo\Sites\code\`.

```shell
D:\Hugo\Sites\code>git init
```

Na GitHub-u napraviti novi repozitorijum sa nazivom *code* i dodati lokalni repozitorijum.

```shell
D:\Hugo\Sites\code>git remote add origin https://github.com/chana-chh/code.git
D:\Hugo\Sites\code>git add --all
D:\Hugo\Sites\code>git commit -m "initial commit"
D:\Hugo\Sites\code>git push -u origin master
```
Podesiti `config.toml` fajl tako da *hugo* generise sajt u direktorijumu `docs`.

```toml
publishDir = "docs"
```

Na GitHub-u otvoriti *Settings* u *code* repozitorijumu i u delu *GitHub Pages* odabrati *Source* *master branch/docs folder*.
