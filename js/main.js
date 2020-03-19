function Search()
{
	this.allMessages = this.getAllMessages();
	
	this.getAllMessages = function() 
	{
		this.$anchorScrollallMessages = document.querySelectorAll('.clearfix.direction_ltr');
		
		return this.allMessages;
	}
}

