var toastTimeout;
	function toast(message, type, delay)
	{
		var e = $('#toast');
		if (e.length == 0)
		{
			e = $('<div id="toast"><div></div></div>');
			$('body').prepend(e);
		}

		var s = e.find('div');
		s.removeClass().html(message);
		if (type) s.addClass(type);
		e.css('transition', 'none');
		e.css('top', -e.outerHeight() - 10).show();
		setTimeout(function() {
			e.css('transition', 'top 500ms');
			e.css('top', 40);
		}, 200);
		if (delay == undefined || delay <= 0)
		{
			delay = message.length * 100;
			if (delay > 15000) delay = 15000;
			else if (type == 'error' && delay < 5000) delay = 5000;
			else if (delay < 3000) delay = 3000;
		}

		if (toastTimeout) clearTimeout(toastTimeout);
		toastTimeout = setTimeout(function() { toastTimeout = undefined; e.css('top', -e.outerHeight() - 10).hide(); }, delay);
	}
