	var curWwwPath = window.document.location.href;
        var keyValue = "thhoH0JaP6xN9GLF";//填写推送用的准入密钥
        var apiValue = "https://api.uosblog.top/api.php";//api地址
        valueValue = apiValue + "?url=" + curWwwPath + "&key=" + keyValue;
        var css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'https://api.uosblog.top/mycss-api.css';//引入css
        document.head.appendChild(css);
	document.write('<div class="apiheader"><p>百度收录:</p><img id="myImage" src="" width="42px"><p>累计推送:</p><p id="myCount" style="margin-bottom: 13px;"></p></div>');
        document.getElementById("myImage").src = valueValue;
	var Http = window.location.protocol+"//"+window.location.host;
	$("#myCount").load("https://api.uosblog.top/site-count.php" + "?" + Http);//累计推送
