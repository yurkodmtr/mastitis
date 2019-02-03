"use strict";

var myFunc = function(){

	var dayHeight = function(){
		var windowHeight = $(window).height();
		var offset = $('.calendar__week').offset().top;
		var minHeight = windowHeight - offset;
		$('.calendar__week').css('min-height', minHeight+'px');
	}


	$(document).ready(function(){
		dayHeight();
	});

	$(window).resize(function(){
		dayHeight();
	});

	$(window).load(function(){

	});

}

myFunc();