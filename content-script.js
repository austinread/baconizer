//define all bacon picture URLS
﻿var bacon_limit = 15;
﻿var baconPics = [];
﻿for (var i=1; i<=bacon_limit;i++) {
﻿    baconPics.push(chrome.extension.getURL('images/bacon' + i + '.jpg'));
﻿}

var images = document.getElementsByTagName("img");  //all images on the page
var baconPics = [bacon1, bacon2, bacon3, bacon4, bacon5,
    bacon6, bacon7, bacon8, bacon9, bacon10, 
    bacon11, bacon12, bacon13, bacon14, bacon15, ]; //list of all our different bacon pics
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
