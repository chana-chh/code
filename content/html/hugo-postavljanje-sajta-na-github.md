---
title: "Hugo postavljanje sajta na GitHub"
date: 2019-07-16T23:02:05+02:00
draft: true
summary: ""
slug: "hugo-postavljanje-sajta-na-github"
keywords: []
description: ""
kategorije: []
reči: []
autori: []
mesec: "2019-07"
---

Hugo je instaliran u `D:\Hugo\bin\`, a sajtovi se nalaze u `D:\Hugo\Sites\`

Naziv sajta je "code" i nalazi se u `D:\Hugo\Sites\code\`.

```shell
D:\Hugo\Sites\code>git init
```

Na GitHub-u napraviti novi "code" repozitorijum i dodati lokalni repozitorijum.

```shell
D:\Hugo\Sites\code>git remote add origin https://github.com/chana-chh/code.git
D:\Hugo\Sites\code>git push -u origin master
```
