(function() {
	searchFor = prompt('Search for:', '');
	messages = document.querySelectorAll('.clearfix.direction_ltr');
	results = [];
	for (i in messages) {
		text = messages[i].innerText;
		if (text != undefined && text != null && text.indexOf(searchFor) != -1) {
			date = messages[i].querySelector('[data-tooltip-content]').getAttribute('data-tooltip-content');
			author = messages[i].parentElement.querySelector('h5[aria-label]').getAttribute('aria-label');
			results.push(date + "    By " + author + ":    " + text + "\n\n");
		}
	}
	if (results == [])
		alert('No results found.');
	else
		alert(results);
	return results;
}());