---
layout: code
title: One Code to&nbsp;Rule&nbsp;Them&nbsp;All
description: I think this is a well-rounded starter for <em>most</em> projects.
date: 2015-12-11
category: codes
---

This isn't a [boilerplate](https://html5boilerplate.com/) or framework. It's just some stuff I find myself inevitably using in all projects, so I packed 'em up neat in a box.

<p class="example">What's in the box! <small><em>(click each for explenation)</em></small></p>

<dl>
  <dt>Declare a root font size of 10px - Make math easy</dt>
	<dd>I don't like math. I also don't like em units, except in certain situations where their cascade adds simplicity, rather than chaos. rem units reference the root font size, so 1rem has the same value everywhere, regardless of context. With a root font size of 10px, math is easy. 1.6rem will always = 16px</dd>

  <dt>Fix the crazy CSS box model - Set everything to border-box</dt>
	<dd>Effectively changes borders & padding to inset, so they don't add dimension to a defined height/width. 100px width + 10px padding + 2px border = 100px. Border-box is set on the html element and everything else inherits it. Unless for some strange reason a different box-sizing is defined later on, the new crazy setting will cascade to it's crazy children.</dd>

  <dt>Media query mixin/SASS map for quickly targeting breakpoints</dt>
  <dd><p>There's also an extra feature naming non-standard queries (effectively adding them to the map), so you can reference them elsewhere if needed (probably not a good practice... but still useful)..</p>
  <p class="example">Usage example:</p>
  <p data-height="300" data-theme-id="26404" data-slug-hash="XNdVMV" data-default-tab="css" data-user="chasebank" data-embed-version="2" data-pen-title="Sass map breakpoints" data-editable="true" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/XNdVMV/">Sass map breakpoints</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
  </dd>
  
  <dt>Color variable SASS map and function</dt>
  <dd>
    <p>This is a useful mixin for referencing some centralized color variables in a SASS Map. The nesting nature of the map also helps encourage more clear standards for color variations.</p>

<p>I learned this technique from [Jake Albaugh](http://codepen.io/jakealbaugh/post/using-sass-functions-to-access-complex-variable-maps).</p>

<p class="example">Usage example:</p>
<p data-height="300" data-theme-id="26404" data-slug-hash="oYZPvg" data-default-tab="css" data-user="chasebank" data-embed-version="2" data-pen-title="Color Variable Map" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/oYZPvg/">Color Variable Map</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </dd>
  
  <dt>Justified Grid</dt>
  <dd>
		<p>There are tons of grid frameworks. Some are good, most are bad. The one is just simple.</p>
		<p>The idea is to harness the powers of paragraph justification, for natural equal space between elements (gutters).</p>
  	<p>When element widths add up to less than 100%, blank space naturally flows between them for equal distribution across the entire line/row. When elements add up to more than 100%, they automatically wrap to the next line, like words at the end of a paragraph. No messy margin mischief. No extra mark up. Grid 'cells' don't have to be wrapped in container rows. The rows create themselves through natural flow.</p>
  	<p>This also keeps the markup clean, and free of circumstantial grid classes, like "grid-4-of-12", which is really 6-of-12 at a certain breakpoint, but 12-of-12 at another... but who's counting?? Justified grids can be managed entirely with mixins, and kept in the CSS where they belong.</p>
  	<p>The only downside, if there is any, is blank space in the mark up throws off the justification. But setting the font size of the main container to zero solves this. For me, this is a non-issue because I typically use rem units anyway.</p>
  <p>My version is tailored for how I work, but more details and a neat grid builder can be found at <a href="http://justifygrid.com/">justifygrid.com</a></p>
  <p class="example">Usage example:</p>
  <p data-height="250" data-theme-id="21051" data-slug-hash="pgmGaL" data-default-tab="css,result" data-user="chasebank" data-embed-version="2" data-pen-title="Justified Grid Example" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/pgmGaL/">Justified Grid Example</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
  </dd>
</dl>

<p data-height="500" data-theme-id="26404" data-slug-hash="bb90a9c7817321dde8cae6c6de93185f" data-default-tab="css" data-user="chasebank" data-embed-version="2" data-pen-title="One Code to Rule Them All" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/bb90a9c7817321dde8cae6c6de93185f/">One Code to Rule Them All</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
