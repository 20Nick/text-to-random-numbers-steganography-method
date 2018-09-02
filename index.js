
function encodeText(text){
  return generate(ABC.toBinary(text, 0));
}

function decodeText(randomNumber) {
  return ABC.toAscii(decode(randomNumber));
}



function generate(binary){
  var randomNumber;

  for (var i = 0; i < binary.toString().length; i++) {
    if(binary.toString()[i] == 1){
      var ran = Math.floor(Math.random() * 5) + 5;
      if (!randomNumber) {
        randomNumber = "" + ran;
      }else {
          randomNumber = randomNumber + "" + ran;
      }
    }else if(binary.toString()[i] == 0){
      var ran = Math.floor(Math.random() * 5)
      if (!randomNumber) {
        randomNumber = "" + ran;
      }else {
          randomNumber = randomNumber + "" +  ran;
      }
    }
  }
  return randomNumber;
}


function decode(randomNumber) {
  var binary;
  for (var i = 0; i < randomNumber.toString().length; i++){
    if (randomNumber.toString()[i] >= 5) {
      if(!binary){
        binary = "" + 1;
      }else {
        binary = binary + "" + 1;
      }
    }else if(randomNumber.toString()[i] <= 4) {
      if (!binary) {
        binary = "" + 0;
      }else {
        binary = binary + "" + 0;
      }
    }
  }
  return binary;
}


//Lib that I used to change text to binary

// ABC - a generic, native JS (A)scii(B)inary(C)onverter.
// (c) 2013 Stephan Schmitz <eyecatchup@gmail.com>
// License: MIT, http://eyecatchup.mit-license.org
// URL: https://gist.github.com/eyecatchup/6742657
var ABC={toAscii:function(a){return a.replace(/\s*[01]{8}\s*/g,function(a){return String.fromCharCode(parseInt(a,2))})},toBinary:function(a,b){return a.replace(/[\s\S]/g,function(a){a=ABC.zeroPad(a.charCodeAt().toString(2));return!1==b?a:a+" "})},zeroPad:function(a){return"00000000".slice(String(a).length)+a}};
