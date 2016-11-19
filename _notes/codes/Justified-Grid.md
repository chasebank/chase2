---
layout: code
title: Justified Grid
description: A grid that's easy to implement and just works.
date: 2016-02-20
category: codes
---

This is a simple grid that harnesses the powers of justified paragraphs, for natural space between elements (gutters).

When element widths add up to less than 100%, blank space naturally fills between them for equal distribution across the entire line/row. When elements add up to more than 100%, they automatically wrap to the next line, like words at the end of a paragraph. No messy margin mischief. No extra mark up. Grid 'cells' don't have to be wrapped in container 'rows'. The rows create themselves through natural flow.

You also keep the markup clean, and free of circumstantial grid classes, like "grid-4-of-12", which is really 6-of-12 at a certain breakpoint, but 12-of-12 at another... but who's counting?? Justified grids can be managed entirely with mixins, and kept in the CSS where they belong.

The only downside, if there is any, is blank space in the mark up of inline elements throws off the justification. But setting the font size of the grid's parent to zero solves this. Some people have a problem with that, but I don't. rem units makes it a non-issue.

My version is tailored for how I work, but more details and a neat grid builder can be found at [justifygrid.com](http://justifygrid.com/)

<p class="example">Usage example:</p>
<p data-height="206" data-theme-id="21051" data-slug-hash="pgmGaL" data-default-tab="result" data-user="chasebank" class="codepen">See the Pen <a href="http://codepen.io/chasebank/pen/pgmGaL/">Justified Grid Example</a> by Chase (<a href="http://codepen.io/chasebank">@chasebank</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<p data-height="372" data-theme-id="21051" data-slug-hash="e21891279411a77196dcd698f8cab1d5" data-default-tab="css" data-user="chasebank" class='codepen'>See the Pen <a href='http://codepen.io/chasebank/pen/e21891279411a77196dcd698f8cab1d5/'>Justified Grid</a> by Chase (<a href='http://codepen.io/chasebank'>@chasebank</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>