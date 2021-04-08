var curWwwPath = window.document.location.href;
var keyValue = "thhoH0JaP6xN9GLF";//填写推送用的准入密钥
var apiValue = "https://api.uosblog.top/api.php";//api地址
valueValue = apiValue + "?url=" + curWwwPath + "&key=" + keyValue;
document.write('<div class="apiheader"><p>百度收录:</p><img id="myImage" src="" width="20%"></div>');
document.getElementById("myImage").src = valueValue;
