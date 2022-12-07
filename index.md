---
title: Lumeへようこそ
layout: layout.tsx
---

# Welcome to my website

This is my first page using **Lume,**
a static site generator for Deno.

I hope you enjoy it.

```js
import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.use(codeHighlight());

export default site;
```
