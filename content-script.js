//define all bacon picture URLS
﻿var bacon_limit = 15;
﻿var baconPics = [];
﻿for (var i=1; i<=bacon_limit; i++) {
﻿    baconPics.push(chrome.extension.getURL('images/bacon' + i + '.jpg'));
﻿}

var rand;                                           //var for random number

$("img").each (function () {
    //retain original width and height
    var h = $(this).css('height');
    var w = $(this).css('width');

    //assigns each image a random baconPic as its src
    rand = Math.floor(Math.random()*baconPics.length);
    var baconPic = baconPics[rand];
    $(this).attr('src', baconPic);
    $(this).css('height', h);
    $(this).css('width', w);
});