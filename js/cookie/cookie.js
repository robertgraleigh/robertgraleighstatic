(function(){
	function setCookie(name, value, path, expires) {
		if (!expires) {
			var currentDate = new Date();
			currentDate.setMonth(currentDate.getMonth() + 6);
			expires = currentDate.toUTCString;
		}
		
		if (path) {
			path = ";Path=" + path;		
		}
		
		window.document.cookie = name + "=" + value + ";expires=" + expires + path; 
	}
	var expire = new Date();
	expire.setMonth(expire.getMonth() + 6);
	window.document.cookie = "UserName = Robert; expires=" + expire.toUTCString() + "path=/;" + "domain=robertgraleigh.com" + ";" 
	//window.document.cookie = "UserName=Robert; expires=Mon, 21 Mar 2016 23:00:00; GMT; ";
}());