function clickButton1(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<div id="dialog_body">'
              + '最大震度は？<br>'
              + '<button class="list" type="button" onclick="selectArea(1)">◾️震度７(特別区６強)</button><br>'
              + '<button class="list" type="button" onclick="selectArea(2)">◾️震度６強(特別区６弱)</button><br>'
              + '<button class="list" type="button" onclick="selectArea(3)">◾️震度６弱(特別区５強、政令市５強)</button><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
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
              + '<div id="dialog_body">'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function closeDialog(){
  var delNode = document.getElementById("dialog");
  delNode.parentNode.removeChild(delNode);
}

function selectArea(num){
  var title = "";
  if (num==1) {
    title = "■最大震度７(特別区６強)<br>　震央管轄都道府県は?<br>";
  } else if (num==2) {
    title = "■最大震度６強(特別区６弱)<br>　震央管轄都道府県は?<br>";
  } else if (num==3) {
    title = "■最大震度６弱(特別区５強、政令市５強)<br>　震央管轄都道府県は?<br>";
  }
  var prefectures = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
  var base = document.getElementById("dialog2_prefectures");
  var item = "";
  for(var i=0;i<prefectures.length;i++){
    item = item + '<button class="prefecture" type="button" onclick="showResult(' + i + ',' + num + ')">' + prefectures[i] + '</button>';
  }
  //ダイアログコンテンツ統合
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog2_back"></div>'
              + '<div id="dialog2_body">'
              + title
              + item
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function showResult(prefIndex, num){
  var title = "";
  if (num==1) {
    title = "■最大震度７(特別区６強)<br>";
  } else if (num==2) {
    title = "■最大震度６強(特別区６弱)<br>";
  } else if (num==3) {
    title = "■最大震度６弱(特別区５強、政令市５強)<br>";
  }
  var result = "";
  var csvArray = new Array();
  //csvファイル読み込み
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    var tempArray = xhr.responseText.split("\n");
    for(var i=1; i<tempArray.length; i++){ //i=1はヘッダーを読み込ませないため
      csvArray[i] = tempArray[i].split(",");
    }
    var data = csvArray[prefIndex+1];
    var result =   '　' + data[0] + '<br>'
                 + '<br>'
                 + '・指揮支援隊<br>'
                 + '　' + data[1] + '<br>'
                 + '<br>'
                 + '・大阪府大隊(陸上)<br>'
                 + '　' + data[2] + '<br>'
                 + '<br>'
                 + '・大阪府大隊(航空)<br>'
                 + '　' + data[3];
    var html =     '<div id="dialog">'
                 + '<div id="dialog3_back"></div>'
                 + '<div id="dialog3_body">'
                 + title
                 + result
                 + '<br>'
                 + '<br>'
                 + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
                 + '</div>';
    document.getElementById("dialog_content").innerHTML = html;
  };
  if (num==1) {
    xhr.open("get", "assets/riku7.csv");
  } else if (num==2) {
    xhr.open("get", "assets/riku6strong.csv");
  } else if (num==3) {
    xhr.open("get", "assets/riku6weak.csv");
  }

  xhr.send(null);
}
