function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function(){
var $target = $('.anime')
    AnimationClas ='anime-start'
    offset = $(window).height() * 3/4;

function animeScroll(){
    var documentTop = $(document).scrollTop();
    
   $target.each(function(){
    var itemTop = $(this).offset().top;
    if(documentTop > itemTop -300 ){
        $(this).addClass(AnimationClas);
    } else{
        $(this).removeClass(AnimationClas);
    }
   });
}
animeScroll();
    $(document).scroll(debounce(function(){
        animeScroll();
        console.log('teste');
    },200));
}());