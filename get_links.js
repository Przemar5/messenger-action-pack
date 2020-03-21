(function() {
	searchFor = prompt('Links to: (by default searches for all links)', '');
	re = new RegExp('http(s?):\\/\\/[^\\s]+www\\.' + searchFor + '\\.[^\\s]+');
	messages = document.querySelectorAll('.clearfix.direction_ltr');
	results = [];
	for (i in messages) {
		text = messages[i].innerText;
		if (text != undefined && text != null) {
			link = messages[i].querySelector('a');
			if (link != null) {
				if (res = re.exec(link.getAttribute('href')))
					results.push(text + "\n\n");
			}
		}
	}
	if (results == [])
		alert('No results found.');
	else
		alert(results);
	return results;
}());