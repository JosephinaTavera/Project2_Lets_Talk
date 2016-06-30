var requirejs = require('require.js');

requirejs.config({
	baseUrl: 'bower_components',
	paths: {
		carousel: 'carousel-3d/dist/styles/jquery.carousel-3d',
		carouselResize: 'javascript-detect-element-resize/jquery.resize',
		carouselWait: 'waitForImages/dist/jquery.waitforimages',
		carouselModern: 'modernizer/src/Modernizr',
		nodeRequire: require
	}
})