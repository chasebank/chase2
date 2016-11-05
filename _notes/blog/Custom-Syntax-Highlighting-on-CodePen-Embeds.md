---
layout: post
title: Custom Syntax Highlighting on CodePen&nbsp;Embeds
description: Centers everything horizontaly & vertically.
date: 2016-03-08
category: blog
hero-image: blog-hero--syntax-highlighting.jpg
accent-color: '218,255,235'
---

Just about anything that renders raw code, does so with the added flair of syntax highlighting. Gone are the days of green text on black backgrounds. No need for code that looks like a [seizure inducing](https://www.youtube.com/watch?v=Kf9N5AWprG8 "Click it. You know you want to..."). Matrix intro. Welcome to the future!<!--more-->

The reasons for highlighting are many and varied; just but a few:

* **Accessability** - Some people are blind. Some people want to avoid going blind.
* **Debugging** - Missing punctuation? Follow the color clues, Dr. Watson.
* **Branding** - Does the carpet match the drapes?
* **Consistant IDE** - Make it feel like you never left <del>home</del> the office.
* **Because colors fun.**

## How's it done?

That's actually rather interesting. A lot of code editors display code almost as a website in and of it'self. There's some smoke, mirrors and trickery involved in using code to render text that represents code that will render even more text. Or even more code... It's like the movie [Inception](https://www.youtube.com/watch?v=8BfMivMDOBI). But once you crack open the hood and rip out the wires and technical bits, you find plane old HTML and CSS.

This monstrosity:

```
<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"class-name"</span><span class="cm-tag cm-bracket">&gt;</span>
```

*Gracefully* barfs out out:

```
<div class="class-name">
```

The interesting bit, is the classes used in the spans, like `cm-tag`. The cm prefix stands for [CodeMirror](https://codemirror.net/), one of the more popular code editor engines. CodePen uses CodeMirror, and we can use those cm- classes to style CodePen code.

cm-"tag" may seem obvious. That class styles a tag. Unfortuantly many of the other selectors get rather confusing, since they universally support [all the scripts!](http://codemirror.net/mode/index.html) Even a language called ["Brainfuck"](https://en.wikipedia.org/wiki/Brainfuck), which I'd never heard of before, except for maybe [Donald Trump's](https://www.youtube.com/watch?v=F5zjVUZA7rY) political speaches, but apparently it's a thing, and I digress...

You can happily code in Brainfuck, and CodeMirror will make it look pretty.

Anyway, you can't fully customize CodePen's editor (yet!), but you can customize embeds. I created a sort of CodePen inside a CodePen to help with this. It can be used to not only design a theme, but also host it.

<p data-height="268" data-theme-id="21051" data-slug-hash="EKyGKN" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/EKyGKN/">Syntax Highlighting Builder for Embeds</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Now for the fun part.

{:.center}
![Make all the colors! meme](https://s3-us-west-2.amazonaws.com/s.cdpn.io/106403/make-all-the-colors-mem.jpg)

## Instructables

1. Fork [the above pen](http://codepen.io/chasebank/pen/EKyGKN).
2. Play with the colors to your heart's content. Have fun. Go crazy.
3. Take a look at the URL in your browser's address bar. It should look something like <q>http://codepen.io/USERNAME/pen/EKyGKN</q>
4. Add .css to the end, so it now looks like: <q>http://codepen.io/USERNAME/pen/EKyGKN.css</q>
5. Highlight the entire url, and copy it to your clipboard.
6. Head over to your [Embed Theme Builder](http://codepen.io/user/embed/builder/public). Whether you're editing an existing theme, or creating a new one, in the bottom left hand corner, you'll find a field labeled "Custom CSS". Paste that copied URL into the field and save the theme.

That's it! Now your custom syntax highlighting will show up on all pens using that theme. Including ones that are already in use.

And another cool benefit of this method, is since you're using a live link back to that forked pen used to create the theme, you can go back and make further color adjustments, and the saved changes will automatically show up in any pens using that embed theme.

Here are some examples inspired from a [CSS-Tricks Post about popular duo-tone themes](https://css-tricks.com/duotone-themes/).


**DuoTone Dark Sea**

<p data-height="268" data-theme-id="21051" data-slug-hash="KzMbXw" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/KzMbXw/">CodePen Syntax - DuoTone Dark Sea</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**DuoTone Dark Amethyst**

<p data-height="268" data-theme-id="21051" data-slug-hash="XdKoMj" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/XdKoMj/">CodePen Syntax - DuoTone Dark Amethyst </a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**DuoTone Blue Dark**

<p data-height="268" data-theme-id="21051" data-slug-hash="reLomM" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/reLomM/">CodePen Syntax - DuoTone Blue Dark</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**DuoTone Light**

<p data-height="268" data-theme-id="21051" data-slug-hash="KzMbqw" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/KzMbqw/">CodePen Syntax - DuoTone Light</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**DuoTone Dark Earth**

<p data-height="268" data-theme-id="21051" data-slug-hash="zqByNo" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/zqByNo/">CodePen Syntax - DuoTone Dark Earth</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**DuoTone Vector Syntax**

<p data-height="268" data-theme-id="21051" data-slug-hash="RaREoJ" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/RaREoJ/">CodePen Syntax - Vector Syntax</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**DuoTone Dark Forest**

<p data-height="268" data-theme-id="21051" data-slug-hash="XdKoKK" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/XdKoKK/">CodePen Syntax - DuoTone Dark Forest</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
