"use strict";

var myFunc = function(){

	var siteHeight = function(){
		var windowHeight = $(window).height();
		$('.qwrap').css('min-height',windowHeight+'px');
	}


	$(document).ready(function(){
		//siteHeight();
	});

	$(window).resize(function(){
		//siteHeight();
	});

	$(window).load(function(){

	});

}

myFunc();