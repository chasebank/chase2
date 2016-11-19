---
layout: code
title: Responsive Breakpoint Label
description: For quick reference of which media query is active.
date: 2015-12-13
category: codes
---

We can use the `content` property of a pseudo element on the body to identify which media query we're looking at. Since this is maintained entirely in CSS, it can be turned on/off with a simple `display: none`, or removed entirely without touching content.

This can also be done right in [Chrome's Dev Tools](https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports#media-queries), but when designing in the browser early on, something like this can help for a quick reference.

Inspired by [Eric Rasch](http://codepen.io/ericrasch/pen/HzoEx)

(resize browser to see the label change)

<p data-height="268" data-theme-id="21051" data-slug-hash="f2d9c718e1588d11df71f94c0559bd7c" data-default-tab="result" data-user="chasebank" class='codepen'>See the Pen <a href='http://codepen.io/chasebank/pen/f2d9c718e1588d11df71f94c0559bd7c/'>Responsive Breakpoint Label</a> by Chase (<a href='http://codepen.io/chasebank'>@chasebank</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>