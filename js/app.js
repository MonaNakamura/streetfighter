$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});		
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

		$(document).keydown(function(e) {
		if(e.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();
			$('.ryu-ready').hide();
		}
	})
	$(document).keyup(function(e) {
		if(e.which == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
		}
	});
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

