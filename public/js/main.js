//  stars credit Jason Brown  http://codepen.io/loktar00/pen/uEJKl  http://www.somethinghitme.com
(function () {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
	window.requestAnimationFrame = requestAnimationFrame;
})();
// Terrain stuff.
var background = document.getElementById("bgCanvas")
	, bgCtx = background.getContext("2d")
	, width = window.innerWidth
	, height = document.getElementById("primary-header").offsetHeight;
//height = $('#header').outerHeight();
//(height < 400) ? height = 400: height;
background.width = width;
background.height = height;

function Terrain(options) {
	options = options || {};
	this.terrain = document.createElement("canvas");
	this.terCtx = this.terrain.getContext("2d");
	this.scrollDelay = options.scrollDelay || 90;
	this.lastScroll = new Date().getTime();
	this.terrain.width = width;
	this.terrain.height = height;
	this.fillStyle = options.fillStyle || "#191D4C";
	this.mHeight = options.mHeight || height;
	// generate
	this.points = [];
	var displacement = options.displacement || 140
		, power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));
	// set the start height and end height for the terrain
	this.points[0] = this.mHeight; //(this.mHeight - (Math.random() * this.mHeight / 2)) - displacement;
	this.points[power] = this.points[0];
	// create the rest of the points
	for (var i = 1; i < power; i *= 2) {
		for (var j = (power / i) / 2; j < power; j += power / i) {
			this.points[j] = ((this.points[j - (power / i) / 2] + this.points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
		}
		displacement *= 0.6;
	}
	document.body.appendChild(this.terrain);
}
Terrain.prototype.update = function () {
		// draw the terrain
		this.terCtx.clearRect(0, 0, width, height);
		this.terCtx.fillStyle = this.fillStyle;
		if (new Date().getTime() > this.lastScroll + this.scrollDelay) {
			this.lastScroll = new Date().getTime();
			this.points.push(this.points.shift());
		}
		this.terCtx.beginPath();
		for (var i = 0; i <= width; i++) {
			if (i === 0) {
				this.terCtx.moveTo(0, this.points[0]);
			}
			else if (this.points[i] !== undefined) {
				this.terCtx.lineTo(i, this.points[i]);
			}
		}
		this.terCtx.lineTo(width, this.terrain.height);
		this.terCtx.lineTo(0, this.terrain.height);
		this.terCtx.lineTo(0, this.points[0]);
		this.terCtx.fill();
	}
	// Second canvas used for the stars
bgCtx.fillStyle = '#05004c';
bgCtx.fillRect(0, 0, width, height);

function Star(options) {
	this.size = Math.random() * 2;
	this.speed = Math.random() * .05;
	this.x = options.x;
	this.y = options.y;
}
Star.prototype.reset = function () {
	this.size = Math.random() * 2;
	this.speed = Math.random() * .05;
	this.x = width;
	this.y = Math.random() * height;
}
Star.prototype.update = function () {
	this.x -= this.speed;
	if (this.x < 0) {
		this.reset();
	}
	else {
		bgCtx.fillRect(this.x, this.y, this.size, this.size);
	}
}

function ShootingStar() {
	this.reset();
}
ShootingStar.prototype.reset = function () {
	this.x = Math.random() * width;
	this.y = 0;
	this.len = (Math.random() * 80) + 10;
	this.speed = (Math.random() * .010) + 6;
	this.size = (Math.random() * 1) + 0.1;
	// this is used so the shooting stars arent constant
	this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
	this.active = false;
}
ShootingStar.prototype.update = function () {
	if (this.active) {
		this.x -= this.speed;
		this.y += this.speed;
		if (this.x < 0 || this.y >= height) {
			this.reset();
		}
		else {
			bgCtx.lineWidth = this.size;
			bgCtx.beginPath();
			bgCtx.moveTo(this.x, this.y);
			bgCtx.lineTo(this.x + this.len, this.y - this.len);
			bgCtx.stroke();
		}
	}
	else {
		if (this.waitTime < new Date().getTime()) {
			this.active = true;
		}
	}
}
var entities = [];
// init the stars
for (var i = 0; i < height; i++) {
	entities.push(new Star({
		x: Math.random() * width
		, y: Math.random() * height
	}));
}
// Add 2 shooting stars that just cycle.
entities.push(new ShootingStar());
entities.push(new ShootingStar());
entities.push(new Terrain({
	mHeight: (height / 2) - 120
	, fillStyle: 'transparent'
}));
// middle
entities.push(new Terrain({
	displacement: 120
	, scrollDelay: 150
	, fillStyle: "transparent"
	, mHeight: (height / 2) - 60
}));
// bottom
entities.push(new Terrain({
	displacement: 100
	, scrollDelay: 120
	, fillStyle: 'transparent'
	, mHeight: height / 2
}));
//animate background
function animate() {
	var grd = bgCtx.createLinearGradient(0, 0, 0, height);
	grd.addColorStop(0, "#181d1f");
	grd.addColorStop(1, "#2f373a");
	var meteor = bgCtx.createLinearGradient(0, 0, 0, height / 2);
	meteor.addColorStop(0, "#181d1f");
	meteor.addColorStop(.5, "#2ECEF1");
	meteor.addColorStop(1, "white");
	bgCtx.fillStyle = grd;
	bgCtx.fillRect(0, 0, width, height);
	bgCtx.fillStyle = '#ffffff';
	bgCtx.strokeStyle = meteor;
	var entLen = entities.length;
	while (entLen--) {
		entities[entLen].update();
	}
	requestAnimationFrame(animate);
}
animate();




//
// Sidebar nav toggle
//
var navTrigger = document.getElementsByClassName('nav-trigger')[0]
	, body = document.getElementsByTagName('body')[0];
navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
	event.preventDefault();
	body.classList.toggle('nav-open');
}




//
// Definition list accordion toggle
//
$.fn.slideFadeToggle = function (speed, easing, callback) {
	return this.animate({
		opacity: 'toggle',
		height: 'toggle',
		'padding-top': 'toggle',
		'padding-bottom': 'toggle',
		margin: 'toggle'
	}, speed, easing, callback);
};

$('dd').hide();

$('dt').click(function () {
	$(this).toggleClass('toggled').next('dd').slideFadeToggle().toggleClass('toggled');
});




//
// Masonry grid
// This is actually Isotope, needs to be converted to regular Masonry TODO
$( window ).load( function() {
  // set initial columns to 3
  var columns    = 3,
      windowWidth = Math.max( $(window).width(), window.innerWidth), // set actual screen width (excl scrollbars)
      setColumns = function() { columns = windowWidth > 1400 ? 3 : windowWidth > 800 ? 2 : 1 }; // Set number of masonry columns based on screen widths

  setColumns();
  $( window ).resize( setColumns );
  $( window ).resize( function() {
    windowWidth = Math.max( $(window).width(), window.innerWidth);
  });

  $( '.isotope' ).isotope({
    itemSelector: '.item',
    columnWidth:  function( containerWidth ) { return containerWidth / columns; }
  });
});




//
// Masonry
//
Masonry.prototype._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else if ( typeof option === 'function' ) {
    this[ measurement ] = option.call( this );
  } else {
    // use option as an element
    if ( typeof option === 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( isElement( option ) ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

$( function() {
  
  $('.masonry').masonry({
    itemSelector: '.masonry-item',
    columnWidth: function() {
      // 5 columns
      return this.size.innerWidth / 10;
    }
  });
  
});




//
// Photoswipe
//
var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.gallery');





//
// Only show 'back to top' link when page can scroll
//
// Only show footer if page content requires scroll.
$(window).ready(function(){
    $(this).one('scroll', function(){
        $('#back-to-top').css('display','block');
    });
});
