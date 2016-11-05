---
layout: code
title: The Lobotomized Owl&nbsp;Selector
description: Add a line break between succeeding elements.
date: 2015-12-13
category: codes
---

The + adjacent sibling selector targets an element that follows another element. x + y will target y _only_ if it follows x. The * universal selector targets _everything_ &lt;queue evil laghter/&gt;.

So * + * targets everything, as long as it follows something else... Sounds like the movie plot for [Inception](https://www.youtube.com/watch?v=V3-a58Wt2tk), but it really does work.

Heydon Pickering named this the "Lobotomized Owl Selector" because as an emote, it sorta looks like... a dead bird...

And contrary to popular belief, <a href="http://alistapart.com/article/axiomatic-css-and-lobotomized-owls" title="A List Apart - Axiomatic CSS and Lobotomized Owls" target="_blank">this isn't a resource hog</a>. Welcome to the future.

{% highlight scss %}
// Add a line break between succeeding elements
* + * { margin-top: 1.5em }
{% endhighlight %}