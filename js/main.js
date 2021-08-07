var container = null;
var prevIndicator = null;

function createContainer() {
	myCarousel = document.createElement('div');
	myCarousel.setAttribute('id', 'carousel');
	// myCarousel.setAttribute('class', 'carousel');
	document.querySelector('body').appendChild(myCarousel);

	container = document.querySelector('#carousel');
}

function createSlides(n) {
	mySlides = document.createElement('ul');
	mySlides.setAttribute('class', 'slides');

	for (var i = 0; i <= 6; i++) {
		var slide = document.createElement('li');
		var plug = document.createElement('a');

		slide.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');

		plug.setAttribute('href', '#');
		slide.appendChild(plug);
		mySlides.appendChild(slide);
	}

	container.appendChild(mySlides);
}

function createIndicators(n) {
	myIndicators = document.createElement('div');
	myIndicators.setAttribute('class', 'indicators');
	
	function myIndicatorsItem() {
		var result = [];
		
		for (var i = 0; i <= 6; i++) {
			var indicator = document.createElement('span');
			indicator.setAttribute('class', 'indicators__item');
			indicator.dataset.slideTo = i;
			i === 0 && indicator.classList.add('active');
			result.push(indicator);
		}
		return result;
		
	};
	container.append(myIndicators);
	myIndicators.append(...myIndicatorsItem());
}


function indicatorsHandler(evt) {
	var target = evt.target;

	if (target.classList.contains('indicators__item')) {
		target.style.backgroundColor = 'red';

		if (prevIndicator !== null) prevIndicator.removeAttribute('style');

		prevIndicator = target;
	}
}

function setListener() {
	var myIndicators = document.querySelector('div.indicators');
	myIndicators.addEventListener('click', indicatorsHandler);
}


function createControls() {
	var myControls = document.createElement('div');
	myControls.setAttribute('class', 'controls');
	
	const PREV = '<div class="controls__item controls__prev"><i class="fas fa-chevron-left"></i></div>';
	const NEXT = '<div class="controls__item controls__next"><i class="fas fa-chevron-right"></i></div>';
	const PAUSE = '<div class="controls__item controls__pause"><i class="fas fa-play"></i></div>';
	myControls.innerHTML = PREV + NEXT + PAUSE;

	container.append(myControls);
}



function createStyle() {
	styleContainer = document.createElement('style');
	var styleCode = `
.slides {
	position: relative;
	height: 150px;
	padding: 0px;
	margin: 0px;
	list-style-type: none;
	font-size: 40px;
	padding: 40px;
	box-sizing: border-box;
	background: #333;
	color: #fff;
}
.slides__item {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 1;
	transition: opacity 1s;
	font-size: 40px;
	padding: 40px;
	box-sizing: border-box;
	background: #333;
	color: #fff;
}
.active {
	opacity: 1;
	z-index: 2;
}
.slides__item:nth-of-type(1) {
	background: red;
}
.slides__item:nth-of-type(2) {
	background: orange;
}
.slides__item:nth-of-type(3) {
	background: green;
}
.slides__item:nth-of-type(4) {
	background: blue;
}
.slides__item:nth-of-type(5) {
	background: purple;
}
.slides__item:nth-of-type(6) {
	background: brown;
}
.indicators {
	display: flex;
	list-style: none;
	padding: 0;
}
.indicators__item,
.controls__item {
	display: inline-block;
	padding: 5px;
	background-color: rgba(51, 51, 51, 0.555);
	color: #fff;
	height: 24px;
	min-width: 24px;
	padding: 5px 10px;
	margin: 10px;
	cursor: pointer;
	user-select: none;
	text-align: center;
}
.indicators__item.active {
background-color: rgb(118, 64, 218);
}
.controls {
	position: relative;
}
.fas,
.far {
	font-size: 24px;
}
	  
}`;

	styleContainer.innerHTML = styleCode;
	container.appendChild(styleContainer);
};


function createCarousel(slidesCount = 5) {
	createContainer();
	container = document.querySelector('#carousel');
	createSlides(slidesCount);
	createIndicators(slidesCount);
	createControls();
	createStyle();
	setListener();
}
createCarousel();