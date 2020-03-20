

r = (function() {
	text = prompt('Search for:', '');
	messages = document.querySelectorAll('.clearfix.direction_ltr');
	results = [];
	for (i in messages) {
		if (messages[i] != undefined && messages[i] != null && text != undefined)
			if ((messages[i].innerText).indexOf(text) != -1)
				results.push(messages[i].innerText);
	}
	return results;
})();


function Search()
{
	this.allMessages;
	this.messages;
	
	this.constructor = function()
	{
		this.allMessages = this.getAllMessages();
	}
	
	this.getAllMessages = function() 
	{
		this.allMessages = document.querySelectorAll('.clearfix.direction_ltr');
		this.messages = [];
		
		for (i in this.allMessages)
		{
			text = this.allMessages[i].innerText;
			
			if (text != undefined && text != null)
				this.messages.push(text);
		}
		
		return this.allMessages;
	}
	
	this.find = function()
	{
		results = [];
		
		for (i in this.messages)
		{
			if (this.messages[i].indexOf(text) != -1)
				results.push(this.messages[i]);
		}
		
		return results;
	}
	
	this.findRegex = function(regex)
	{
		re = new RegExp(regex);
		results = [];
		
		for (i in this.messages)
		{
			if (re.exec(this.messages[i]) != null)
				results.push(this.messages[i]);
		}
		
		return results;
	}
	
	return this.constructor();
}

setInterval(function () { 
	document.getElementById('see_older').getElementsByClassName('content')[0].click();
}, 500);

s = new Search();

s.messages;
s.find('youtube');
s.findRegex('a');
