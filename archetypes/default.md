---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
summary: ""
slug: "{{ urlize .Name }}"
keywords: []
description: ""
kategorije: []
reči: []
autori: []
arhiva: "{{ dateFormat "2006-01" .Date }}"
---
