$(document).ready(function(){

	var artist = "";
	var rasst = 

	$(".main").load("../info/start_page.html");

	$("#btn1").click(function() {
		artist = "bones";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/bones.html");		
		$(document).scrollTop(0);
	});

	$("#btn2").click(function() {
		artist = "lone";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/lone.html");		
		$(document).scrollTop(0);
	});

	$("#btn3").click(function() {
		artist = "deadsilence";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/deadsilence.html");		
		$(document).scrollTop(0);
	});

	$("#btn4").click(function() {
		artist = "omen";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/omen.html");		
		$(document).scrollTop(0);
	});
	$("#btn5").click(function() {
		artist = "slava";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/slava.html");		
		$(document).scrollTop(0);
	});
	$("#btn6").click(function() {
		artist = "sborka";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/slava.html");		
		$(document).scrollTop(0);
	});
	$("#btn7").click(function() {
		artist = "rave";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/slava.html");		
		$(document).scrollTop(0);
	});
	$("#btn8").click(function() {
		artist = "sugiwa";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/slava.html");		
		$(document).scrollTop(0);
	});
	$("#btn9").click(function() {
		artist = "pouya";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/slava.html");		
		$(document).scrollTop(0);
	});
	$("#btn10").click(function() {
		artist = "lilxan";
		$(".btns-wrap").css("display","block");
		$(".main").load("../info/slava.html");		
		$(document).scrollTop(0);
	});





	$(".btn-close").click(function() {
		artist = "";
		$(".btns-wrap").css("display","none");
		$(".main").load("../info/start_page.html");
		$(document).scrollTop(0);
	});

	$(".btn-go-ahead").click(function() {
		if(artist == "bones") {
			window.open('https://t.me/bonesv');
		};
		if(artist == "lone") {
			window.open('https://t.me/joinchat/AAAAAFGDDCGS0RRYkl_rBw');
		};
		if(artist == "deadsilence") {
			window.open('https://t.me/joinchat/AAAAAEf_gdQJH9WeCOG6xA');
		};
		if(artist == "omen") {
			window.open('https://t.me/OmenXIIIv');
		};
		if(artist == "slava") {
			window.open('https://t.me/joinchat/AAAAAEeBUELbRmHwfnmkIA');
		};
		if(artist == "sborka") {
			window.open('https://t.me/joinchat/AAAAAEeBUELbRmHwfnmkIA');
		};

		if(artist == "rave") {
			window.open('https://t.me/rave12');
		};
		if(artist == "sugiwa") {
			window.open('https://t.me/sugiwa1');
		};

		if(artist == "pouya") {
			window.open('https://t.me/joinchat/AAAAAFDmrz4LIH7i67J-KA');
		};

		if(artist == "lilxan") {
			window.open('https://t.me/joinchat/AAAAAE3nx7PDy2-ZUPPWCw');
		};

	});




	$(".spantext2").mouseover(function() {
		$(".main-info").css("background","linear-gradient(to right, #fff, rgba(0,0,255,0.3)");
		$(".spantext3").css("display", "inline");
	});
	$(".spantext2").mouseout(function() {
		$(".main-info").css("background","linear-gradient(to right, #fff, #fff)");
		$(".spantext3").css("display", "none");
	});

	$(".spantext2").click(function() {
		location.href = 'http://t.me/musivcbox';
	});

});
