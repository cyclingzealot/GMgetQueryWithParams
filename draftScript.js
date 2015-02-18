// ==UserScript==
// @name        testGetWithParams
// @namespace   Jlam
// @description Just a test to see if we can get GM to work with a HTTP GET with parameters
// @include     http://www.google.com/
// @version     1
// @grant       none
// ==/UserScript==




console.log(new Error().lineNumber + "... ");


var url = "http://www.google.com/";

$.get(url, function () {
  console.log(new Error().lineNumber + "... ");
} )
.error ( function (respObj) {
  console.log(" Error with url without params " + url, respObj.status, respObj.statusText);
} )
.complete ( function (respObj) {
  console.log(" .get finished without params with url " + url + " . Status: ", respObj.status);
} )
;

var urlWithParams = "http://www.google.com/?q=CREDIL";

console.log(new Error().lineNumber + "... ");

$.get(url, function () {
  console.log(new Error().lineNumber + "... ");
} )
.error ( function (respObj) {
  console.log(" Error with params with url " + url, respObj.status, respObj.statusText);
} )
.complete ( function (respObj) {
  console.log(" .get finished with params with url " + url + " . Status: ", respObj.status);
} )
;



var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();

var todayStrDashed = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;


$.ajax(
  {
    type: "GET",
    url: url,
    error: function(jqXHR, textStatus, errorThrown) {console.log("Ajax request without params got " + errorThrown + " for " + url);},
    success: function(msg)
    {
      console.log(new Error().lineNumber + "... ");
      console.log("Ajax query work wtihout params for url " + url);

    }
  });


$.ajax(
  {
    type: "GET",
    url: url,
    data: {
      "q": "CREDIL"
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(new Error().lineNumber + "... ");
      console.log("Ajax request with params got " + errorThrown + " for " + url);
    },
    success: function(msg)
    {
      console.log(new Error().lineNumber + "... ");
      console.log("Ajax query work with params for url " + url);

    }
  });

