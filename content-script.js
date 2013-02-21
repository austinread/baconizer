//define all bacon picture URLS
var bacon1 = chrome.extension.getURL('images/bacon1.jpg');
var bacon2 = chrome.extension.getURL('images/bacon2.jpg');
var bacon3 = chrome.extension.getURL('images/bacon3.jpg');
var bacon4 = chrome.extension.getURL('images/bacon4.jpg');
var bacon5 = chrome.extension.getURL('images/bacon5.jpg');
var bacon6 = chrome.extension.getURL('images/bacon6.png');
var bacon7 = chrome.extension.getURL('images/bacon7.jpg');
var bacon8 = chrome.extension.getURL('images/bacon8.jpg');
var bacon9 = chrome.extension.getURL('images/bacon9.jpg');
var bacon10 = chrome.extension.getURL('images/bacon10.jpg');
var bacon11 = chrome.extension.getURL('images/bacon11.jpeg');
var bacon12 = chrome.extension.getURL('images/bacon12.jpg');
var bacon13 = chrome.extension.getURL('images/bacon13.jpg');
var bacon14 = chrome.extension.getURL('images/bacon14.jpeg');
var bacon15 = chrome.extension.getURL('images/bacon15.jpg');

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