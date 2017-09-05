function clickButton1(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<duv id="dialog_body">'
              + '最大震度は？<br>'
              + '<button class="list" type="button" onclick="showResult()">◾️　震度７</button><br>'
              + '<button class="list" type="button" onclick="showResult()">◾️　震度６強</button><br>'
              + '<button class="list" type="button" onclick="showResult()">◾️　震度６弱</button><br>'
              + '<input type="button" onclick="closeDialog()" value="キャンセル">'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton2(){
  location.href = "./map.html?num=1";
}

function clickButton3(){
  location.href = "./map.html?num=2";
}

function clickButton4(){
  location.href = "./map.html?num=3";
}

function clickButton5(){
  location.href = "./map.html?num=4";
}

function clickButton6(){
  location.href = "./map.html?num=5";
}

function clickButton7(){
  location.href = "./map.html?num=6";
}

function clickButton8(){
  location.href = "./map.html?num=7";
}

function clickButton9(){
  location.href = "./map.html?num=8";
}

function clickButton10(){
  location.href = "./map.html?num=9";
}

function clickButton11(){
  location.href = "./map.html?num=10";
}

function clickButton12(){
  location.href = "./map.html?num=11";
}

function showDialog(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<duv id="dialog_body">'
              + '<input type="button" onclick="closeDialog()" value="キャンセル">'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function closeDialog(){
  var delNode = document.getElementById("dialog");
  delNode.parentNode.removeChild(delNode);
}

function showResult(){
  window.confirm('ボタンクリックされた');
}
