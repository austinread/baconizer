//define all bacon picture URLS
﻿var bacon_limit = 15;
﻿var baconPics = [];
﻿for (var i=1; i<=bacon_limit;i++) {
﻿    baconPics.push(chrome.extension.getURL('images/bacon' + i + '.jpg'));
﻿}

var images = document.getElementsByTagName("img");  //all images on the page
var rand;                                           //var for random number

for (var i = 0; i < images.length; i++) {
    //retain original width and height
    var h = images[i].height;
    var w = images[i].width;
    //assigns each image a random baconPic as its src
    rand = Math.floor(Math.random()*baconPics.length);
    var baconPic = baconPics[rand];
    images[i].src = baconPic;
    images[i].width = w;
    images[i].height = h;
}
