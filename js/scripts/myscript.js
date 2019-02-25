"use strict";

var myFunc = function(){

	var dayHeight = function(){
		if ( $('.calendar__week').length < 1 ) {
			return false;
		}
		var windowHeight = $(window).height();
		var offset = $('.calendar__week').offset().top;
		var minHeight = windowHeight - offset;
		$('.calendar__week').css('min-height', minHeight+'px');
	}

	var inputLabel = function(){
		$('.input').click(function(){
			if ( !$(this).hasClass('act') ) {
				$(this).addClass('act').find('input').focus();
			}			
		});

		$('.input input').focusout(function() {
			if ( $(this).val() === '' ) {
				$(this).parent().removeClass('act');
			}
		});

		$('.input input').focus(function(){
			if ( !$(this).parent().hasClass('act') ) {
				$(this).parent().addClass('act');
			}
		});
	}

	var checkbox = function(){
		$('.checkbox span').click(function(){
			var parent = $(this).closest('.checkbox');
			var checkbox = parent.find('input[type="checkbox"]');
			if ( parent.hasClass('act') ) {
				parent.removeClass('act');
				checkbox.click();
			} else {
				parent.addClass('act');
				checkbox.click();
			}
		});
	}

	var radio = function(){
		$('.radio span').click(function(){
			var parent = $(this).closest('.radio');
			var radio = parent.find('input[type="radio"]');
			var name = parent.data('name');
			if ( !parent.hasClass('act') ) {
				$('.radio[data-name="'+name+'"]').each(function(){
					$(this).removeClass('act');
				});
				parent.addClass('act');
				radio.click();				
			}
		});
	}

	var switcher = function(){
		$('.switcher span').click(function(){
			var parent = $(this).closest('.switcher');
			var checkbox = parent.find('input[type="checkbox"]');
			if ( parent.hasClass('act') ) {
				parent.removeClass('act');
				checkbox.click();
			} else {
				parent.addClass('act');
				checkbox.click();
			}
		});
	}

	var rating = function(){

		var ratingCalc = function(index){
			$('.rating__bar span').css('width', index*20 + '%');
			$('.rating__bar i').css('left', index*20 + '%');

			for (var i = 1; i<=index; i++) {
				$('.rating__title .item:nth-child('+i+')').addClass('act');
			}

			for (var i = 5; i>index; i--) {
				$('.rating__title .item:nth-child('+i+')').removeClass('act');
			}
		}

		$('.rating__title .item').hover(function(){
			if ( $('.rating').hasClass('picked') ) {
				return false;
			}
			var index = $(this).index() + 1;
			ratingCalc(index);
		});

		$('.rating__title .item').click(function(){
			var index = $(this).index() + 1;
			ratingCalc(index);
			$('.rating').addClass('picked');
		});
	}

	var userToggle = function(){
		$('.header .nav__user .title').click(function(){
			var parent = $(this).parent();
			if ( parent.hasClass('act') ) {
				parent.removeClass('act').find('.descr').hide();
			} else {
				parent.addClass('act').find('.descr').show();
			}
		});
	}

	var disableInput = function(){
		$('.reports__system .checkbox__fixed span').click(function(){
			if ( !$(this).closest('.checkbox').hasClass('act') ) {
				$(this).closest('.checkbox').siblings().removeClass('act');
				$(this).closest('.checkbox').siblings().find('input').attr('checked',false);
				$('.input__fixed input').val('');
				$('.input__fixed').removeClass('act');
			}  
		});

		$('.input__fixed input').focus(function() {
			$(this).parent().siblings().removeClass('act').find('input').val('');
			$('.reports__system .checkbox__fixed').removeClass('act');
			$('.reports__system .checkbox__fixed input').attr('checked',false);
		});
	}


	$(document).ready(function(){
		disableInput();
		$(".scrollbar").customScrollbar();
		userToggle();
		rating();
		switcher();
		dayHeight();
		inputLabel();
		checkbox();
		radio();
	});

	$(window).resize(function(){
		dayHeight();
	});

	$(window).load(function(){

	});

}

myFunc();