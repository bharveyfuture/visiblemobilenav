window.requestAnimFrame = (function(){
  	return  window.requestAnimationFrame       ||
    	      window.webkitRequestAnimationFrame ||
      	    window.mozRequestAnimationFrame    ||
        	  function( callback ){
          	  window.setTimeout(callback, 1000 / 60);
          	};
	})();

var btnScrollRight = document.createElement('button'),
    btnScrollLeft = document.createElement('button'),
    scrollyBit = document.querySelector(".scrolly-bit"),
    scrollyBitContainer = document.querySelector(".scrollybit-container");

// setup the scroll left/right buttons
btnScrollRight.className = 'btn-scroll btn-scroll-right';
btnScrollRight.innerHTML = '<i class="icon icon-arrow-right">';
btnScrollRight.addEventListener('click', function (event) {

  console.log('button right clicked');

  event.preventDefault();

  scrollyBit.scrollLeft += 100;
});
btnScrollLeft.className = 'btn-scroll btn-scroll-left';
btnScrollLeft.innerHTML = '<i class="icon icon-arrow-left" />';
btnScrollLeft.disabled = true;
btnScrollLeft.addEventListener('click', function (event) {

  event.preventDefault();

  scrollyBit.scrollLeft -= 100;
});

scrollyBitContainer.appendChild(btnScrollRight);

scrollyBit.addEventListener("scroll", function () {

  btnScrollRight.disabled = scrollyBit.scrollLeft >= scrollyBit.scrollWidth - scrollyBitContainer.clientWidth;
});
