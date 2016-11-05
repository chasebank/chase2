---
layout: code
title: Fix the Crazy CSS&nbsp;Box&nbsp;Model
description: Set everything to border-box, but let modular layouts easily overwrite it.
date: 2015-12-10
category: codes
---

This changes borders and padding to inset, so they don't add dimention to a defined height/width. 100px width + 10px padding + 2px border = 100px. Border-box is set on the html element and everything else inherits it. Unless for some strange reason a different box-sizing is defined later on, the new crazy setting will cascade to it's crazy children.

{% highlight scss %}
// Set everything to border-box, but let modular layouts easily overwrite it
html  { box-sizing: border-box }
*,
*:before,
*:after { box-sizing: inherit }
{% endhighlight %}
