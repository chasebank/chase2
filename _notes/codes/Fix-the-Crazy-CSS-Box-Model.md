---
layout: code
title: Fix the Crazy CSS&nbsp;Box&nbsp;Model
description: Set everything to border-box, but let modular layouts easily overwrite it.
date: 2015-12-10
category: codes
---

This changes borders and padding to inset, so they don't add dimention to a defined height/width. 100px width + 10px padding + 2px border = 100px. Border-box is set on the html element and everything else inherits it. Unless for some strange reason a different box-sizing is defined later on, the new crazy setting will cascade to it's crazy children.

<p data-height="172" data-theme-id="26404" data-slug-hash="JbWBzQ" data-default-tab="css" data-user="chasebank" data-embed-version="2" data-pen-title="Fix the Crazy CSS Box Model" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/JbWBzQ/">Fix the Crazy CSS Box Model</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
