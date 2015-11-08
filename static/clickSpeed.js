$(document).ready(function(){
	var started = false;

	$('#start').click(function(){
		if (started) return;
		started = true;
		$('#clicker').click(clickFunction);

		var timeLeft = 100;

		var interval = setInterval(function(){
			timeLeft -= 1;
			if (timeLeft < 0) {
				timeLeft = 0;
				$('#clicker').unbind('click');
				clearInterval(interval);
				started = false;
			}
			var showTime = timeLeft/10;
			if (showTime % 1 === 0) showTime = showTime + '.0';
			$('#timer').text(showTime);
		}, 100)
	});
});