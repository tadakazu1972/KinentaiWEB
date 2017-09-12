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
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<div id="dialog_body">'
              + '最大震度は？<br>'
              + '<button class="list" type="button" onclick="selectArea2(1)">◾️震度７(特別区６強)</button><br>'
              + '<button class="list" type="button" onclick="selectArea2(2)">◾️震度６強(特別区６弱)</button><br>'
              + '<button class="list" type="button" onclick="selectArea2(3)">◾️震度６弱(特別区５強、政令市５強)</button><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton3(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<div id="dialog_body">'
              + 'アクションプラン<br>'
              + '<button class="list" type="button" onclick="showResult3(1)">◾️東海地震</button><br>'
              + '<button class="list" type="button" onclick="showResult3(2)">◾️首都直下地震</button><br>'
              + '<button class="list" type="button" onclick="showResult3(3)">◾️東南海・南海地震</button><br>'
              + '<button class="list" type="button" onclick="selectNankai()">◾️南海トラフ</button><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton4(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<div id="dialog_body">'
              + '大津波警報・噴火<br>'
              + '<button class="list" type="button" onclick="selectArea4(1)">◾️大津波警報</button><br>'
              + '<button class="list" type="button" onclick="selectArea4(2)">◾️噴火</button><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton5(){
  selectArea5(1);
}

//　情報（地震）
function clickButton6(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<div id="dialog_body">'
              + 'URLをタップしてください<br>'
              + '<br>'
              + '◾️震度情報（気象庁）<br>'
              + '<br>'
              + '<a href="http://www.jma.go.jp/jp/quake/">http://www.jma.go.jp/jp/quake/</a><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton7(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog2_back"></div>'
              + '<div id="dialog2_body">'
              + 'URLをタップしてください<br>'
              + '◾️停電情報<br>'
              + '・関西電力<br>'
              + '<a href="http://www.kepco.co.jp/energy_supply/supply/teiden-info/">http://www.kepco.co.jp/energy_supply/supply/teiden-info/</a><br>'
              + '<br>'
              + '・四国電力<br>'
              + '<a href="http://www.yonden.co.jp/kinkyu/">http://www.yonden.co.jp/kinkyu/</a><br>'
              + '<br>'
              + '・中国電力<br>'
              + '<a href="http://www.teideninfo.energia.co.jp/TI/LWC30010.do?act=goHst&hct=pc">http://www.teideninfo.energia.co.jp/TI/LWC30010.do?act=goHst&hct=pc</a><br>'
              + '<br>'
              + '・九州電力<br>'
              + '<a href="http://www.kyuden.co.jp/info_teiden/fukuoka.html">http://www.kyuden.co.jp/info_teiden/fukuoka.html</a><br>'
              + '<br>'
              + '・中部電力<br>'
              + '<a href="http://teiden.chuden.jp/p/index.html">http://teiden.chuden.jp/p/index.html</a><br>'
              + '<br>'
              + '・北陸電力<br>'
              + '<a href="http://www.rikuden.co.jp/teiden/otj010.html">http://www.rikuden.co.jp/teiden/otj010.html</a><br>'
              + '<br>'
              + '・東京電力<br>'
              + '<a href="http://teideninfo.tepco.co.jp/sp/00000000000.html">http://teideninfo.tepco.co.jp/sp/00000000000.html</a><br>'
              + '<br>'
              + '・東北電力<br>'
              + '<a href="https://www.tohoku-epco.co.jp/teideninfo">https://www.tohoku-epco.co.jp/teideninfo</a><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton8(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog3_back"></div>'
              + '<div id="dialog3_body">'
              + 'URLをタップしてください<br>'
              + '<br>'
              + '◾️道路情報<br>'
              + '<br>'
              + '・トヨタ通れた道マップ<br>'
              + '<a href="https://www.toyota.co.jp/jpn/auto/passable_route/map/">https://www.toyota.co.jp/jpn/auto/passable_route/map/</a><br>'
              + '<br>'
              + '・日本道路交通情報センター<br>'
              + '<a href="http://www.jartic.or.jp/index.html">http://www.jartic.or.jp/index.html</a><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton9(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog2_back"></div>'
              + '<div id="dialog2_body">'
              + 'URLをタップしてください<br>'
              + '<br>'
              + '◾️総務省消防庁<br>'
              + '<a href="http://www.fdma.go.jp/">http://www.fdma.go.jp/</a><br>'
              + '<br>'
              + '◾️官房長官記者会見<br>'
              + '<a href="http://www.kantei.go.jp/jp/tyoukanpress/index.html">http://www.kantei.go.jp/jp/tyoukanpress/index.html</a><br>'
              + '<br>'
              + '◾️総理指示<br>'
              + '<a href="http://www.kantei.go.jp/jp/97_abe/discource/index.html">http://www.kantei.go.jp/jp/97_abe/discource/index.html</a><br>'
              + '<br>'
              + '◾️総理記者会見<br>'
              + '<a href="http://www.kantei.go.jp/jp/97_abe/statement/index.html">http://www.kantei.go.jp/jp/97_abe/statement/index.html</a><br>'
              + '<br>'
              + '◾️首相官邸(災害・危機管理ツイッター)<br>'
              + '<a href="https://twitter.com/Kantei_Saigai">https://twitter.com/Kantei_Saigai</a><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton10(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog3_back"></div>'
              + '<div id="dialogNankai_body">'
              + 'URLをタップしてください<br>'
              + '<br>'
              + '◾️国交省　川の防災情報<br>'
              + '<a href="http://www.river.go.jp/kawabou/ipRadar.do?areaCd=86&amp;prefCd=&amp;townCd=&amp;gamenId=01-0706&amp;fldCtlParty=no">http://www.river.go.jp/kawabou/ipRadar.do?areaCd=86&amp;prefCd=&amp;townCd=&amp;gamenId=01-0706&amp;fldCtlParty=no</a><br>'
              + '<br>'
              + '◾️大阪府　河川情報<br>'
              + '<a href="http://www.osaka-kasen-portal.net/suibou/index.html">http://www.osaka-kasen-portal.net/suibou/index.html</a><br>'
              + '<br>'
              + '◾️気象庁　洪水予報<br>'
              + '<a href="http://www.jma.go.jp/jp/flood/">http://www.jma.go.jp/jp/flood/</a><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function clickButton11(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog3_back"></div>'
              + '<div id="dialog3_body">'
              + 'URLをタップしてください<br>'
              + '<br>'
              + '◾️気象庁<br>'
              + '<a href="http://www.jma.go.jp/jma/index.html">http://www.jma.go.jp/jma/index.html</a><br>'
              + '<br>'
              + '◾️建設局　降雨情報<br>'
              + '<a href="http://www.ame.city.osaka.lg.jp/pweb/">http://www.ame.city.osaka.lg.jp/pweb/</a><br>'
              + '<br>'
              + '◾️気象庁　潮位情報<br>'
              + '<a href="http://www.data.jma.go.jp/gmd/kaiyou/db/tide/suisan/suisan.php?stn=OS">http://www.data.jma.go.jp/gmd/kaiyou/db/tide/suisan/suisan.php?stn=OS</a><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
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

//
//　地震(震央「陸」)　
//
function selectArea(num){
  var title = "";
  switch (num) {
    case 1:
      title = "■最大震度７(特別区６強)<br>　震央管轄都道府県は?<br>";
      break;
    case 2:
      title = "■最大震度６強(特別区６弱)<br>　震央管轄都道府県は?<br>";
      break;
    case 3:
      title = "■最大震度６弱(特別区５強、政令市５強)<br>　震央管轄都道府県は?<br>";
      break;
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
  switch (num) {
    case 1:
      title = "■最大震度７(特別区６強)<br>";
      break;
    case 2:
      title = "■最大震度６強(特別区６弱)<br>";
      break;
    case 3:
      title = "■最大震度６弱(特別区５強、政令市５強)<br>";
      break;
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
  //読み込みファイル分岐
  var filename = "";
  switch (num) {
    case 1:
      filename = "assets/riku7.csv";
      break;
    case 2:
      filename = "assets/riku6strong.csv";
      break;
    case 3:
      filename = "assets/riku6weak.csv";
      break;
    default:
      filename = "";
  }
  xhr.open("get", filename);
  xhr.send(null);
}

//
//　地震(震央「海域」)　
//
function selectArea2(num){
  var title = "";
  switch (num) {
    case 1:
      title = "■最大震度７(特別区６強)<br>　最大震度都道府県は?<br>";
      break;
    case 2:
      title = "■最大震度６強(特別区６弱)<br>　最大震度都道府県は?<br>";
      break;
    case 3:
      title = "■最大震度６弱(特別区５強、政令市５強)<br>　最大震度都道府県は?<br>";
      break;
  }
  var prefectures = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
  var base = document.getElementById("dialog2_prefectures");
  var item = "";
  for(var i=0;i<prefectures.length;i++){
    item = item + '<button class="prefecture" type="button" onclick="showResult2(' + i + ',' + num + ')">' + prefectures[i] + '</button>';
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

function showResult2(prefIndex, num){
  var title = "";
  switch (num) {
    case 1:
      title = "■最大震度７(特別区６強)<br>";
      break;
    case 2:
      title = "■最大震度６強(特別区６弱)<br>";
      break;
    case 3:
      title = "■最大震度６弱(特別区５強、政令市５強)<br>";
      break;
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
  //読み込みファイル分岐
  var filename = "";
  switch (num) {
    case 1:
      filename = "assets/kaiiki7.csv";
      break;
    case 2:
      filename = "assets/kaiiki6strong.csv";
      break;
    case 3:
      filename = "assets/kaiiki6weak.csv";
      break;
    default:
      filename = "";
  }
  xhr.open("get", filename);
  xhr.send(null);
}

//
//　アクションプラン
//
function showResult3(num){
  var title = "";
  switch (num) {
    case 1:
      title = "■東海地震<br>";
      break;
    case 2:
      title = "■首都直下地震<br>";
      break;
    case 3:
      title = "■東南海・南海地震<br>";
      break;
  }
  var result = "";
  //txtファイル読み込み
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    //改行コードを<br>に置き換え
    var tempArray = xhr.responseText.split("\n");
    for(var i=0; i<tempArray.length; i++){ //ここは他のcsvと違ってtxtだからヘッダーがないので0スタートに注意!
      result = result + tempArray[i] + '<br>';
    }
    var html =     '<div id="dialog">'
                 + '<div id="dialog2_back"></div>'
                 + '<div id="dialog2_body">'
                 + title
                 + '<br>'
                 + result
                 + '<br>'
                 + '<br>'
                 + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
                 + '</div>';
    document.getElementById("dialog_content").innerHTML = html;
  };
  //読み込みファイル分岐
  var filename = "";
  switch (num) {
    case 1:
      filename = "assets/kinentai_toukai.txt";
      break;
    case 2:
      filename = "assets/kinentai_syutochokka.txt";
      break;
    case 3:
      filename = "assets/kinentai_tounankai.txt";
      break;
    default:
      filename = "";
  }
  xhr.open("get", filename);
  xhr.send(null);
}

//南海トラフ条件分岐
function selectNankai(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog_back"></div>'
              + '<div id="dialog_body">'
              + '南海トラフ<br>'
              + '<br>'
              + '<button class="list" type="button" onclick="judgeNankaitrafcase1()">ケース１(条件判定)</button><br>'
              + '<br>'
              + '<button class="list" type="button" onclick="judgeNankaitrafcase2()">ケース２(同程度被害)</button><br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

function judgeNankaitrafcase1(){
  var title = "南海トラフ　次の①②が合致した場合にアクションプランを適用する<br>";
  var html =  '<div id="dialog">'
              + '<div id="dialog2_back"></div>'
              + '<div id="dialogNankai_body">'
              + title
              + '<br>'
              + '①想定震源断層域と重なる震央地名<br>'
              + '<select name="select1" id="list1"></select><br>'
              + '<br>'
              + '②震度６強以上が観測又は大津波警報が発令<br>'
              + '■中部地方'
              + '<select name="select2" class="list2" id="list2"></select>'
              + '<br><br>'
              + '■近畿地方'
              + '<select name="select3" class="list2" id="list3"></select>'
              + '<br><br>'
              + '■四国・九州地方'
              + '<select name="select4" class="list2" id="list4"></select>'
              + '<br>'
              + '<br>'
              + '<button class="cancel2" type="button" onclick="closeDialog()">閉じる</button>'
              + '<button class="action" type="button" onclick="judgeNankaitrafcase1A()">対応</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
  //セレクト１設定
  var list1Label = ["山梨県中・西部","長野県南部","静岡県東部","静岡県中部","静岡県西部","駿河湾","駿河湾南方沖","新島・神津島近海","愛知県東部","愛知県西部","遠州灘","三河湾","岐阜県美濃東部","三重県北部","三重県中部","三重県南部","伊勢湾","三重県南東沖","和歌山県北部","和歌山県南部","和歌山県南方沖","紀伊水道","奈良県","淡路島付近","播磨灘","徳島県北部","徳島県南部","香川県東部","香川県西部","瀬戸内海中部","愛媛県東予","愛媛県中予","愛媛県南予","伊予灘豊後水道","高知県東部","高知県中部","高知県西部","土佐湾","四国沖","大分県南部","宮崎県北部平野部","日向灘","九州地方南東沖","その他"];
  var list1;
  for (var i in list1Label){
    list1 += '<option value="' + list1Label[i] + '">' + list1Label[i] + '</option>';
  }
  document.getElementById("list1").innerHTML = list1;
  //セレクト２設定
  var list2Label = ["山梨県","長野県","岐阜県","静岡県","愛知県","三重県","その他"];
  var list2;
  for (var i in list2Label){
    list2 += '<option value="' + list2Label[i] + '">' + list2Label[i] + '</option>';
  }
  document.getElementById("list2").innerHTML = list2;
  //セレクト３設定
  var list3Label = ["兵庫県","奈良県","和歌山県","その他"];
  var list3;
  for (var i in list3Label){
    list3 += '<option value="' + list3Label[i] + '">' + list3Label[i] + '</option>';
  }
  document.getElementById("list3").innerHTML = list3;
  //セレクト４設定
  var list4Label = ["徳島県","香川県","愛媛県","高知県","大分県","宮崎県","その他"];
  var list4;
  for (var i in list4Label){
    list4 += '<option value="' + list4Label[i] + '">' + list4Label[i] + '</option>';
  }
  document.getElementById("list4").innerHTML = list4;
}

function judgeNankaitrafcase1A(){
  var list1 = document.getElementById("list1").value;
  var list2 = document.getElementById("list2").value;
  var list3 = document.getElementById("list3").value;
  var list4 = document.getElementById("list4").value;
  if ( list1 != "その他" && list2 != "その他" && list3 != "その他" && list4 != "その他" ){
    showResultNankaitraf1();
  } else {
    showResultNankaitraf2();
  }
}

function judgeNankaitrafcase2(){
  var title = "南海トラフ　ケース２<br>";
  var result = "";
  //txtファイル読み込み
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    //改行コードを<br>に置き換え
    var tempArray = xhr.responseText.split("\n");
    for(var i=0; i<tempArray.length; i++){ //ここは他のcsvと違ってtxtだからヘッダーがないので0スタートに注意!
      result = result + tempArray[i] + '<br>';
    }
    var html =     '<div id="dialog">'
                 + '<div id="dialog3_back"></div>'
                 + '<div id="dialog3_body">'
                 + title
                 + '<br>'
                 + result
                 + '<br>'
                 + '<br>'
                 + '<button class="cancel2" type="button" onclick="closeDialog()">閉じる</button>'
                 + '<button class="action" type="button" onclick="showResultNankaitraf1()">対応</button>'
                 + '</div>';
    document.getElementById("dialog_content").innerHTML = html;
  };
  //読み込みファイル指定
  var filename = "assets/nankaitraf_case2.txt";
  xhr.open("get", filename);
  xhr.send(null);
}

function showResultNankaitraf1(){
  var title = "南海トラフ<br>";
  var result = "";
  //txtファイル読み込み
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    //改行コードを<br>に置き換え
    var tempArray = xhr.responseText.split("\n");
    for(var i=0; i<tempArray.length; i++){ //ここは他のcsvと違ってtxtだからヘッダーがないので0スタートに注意!
      result = result + tempArray[i] + '<br>';
    }
    var html =     '<div id="dialog">'
                 + '<div id="dialog2_back"></div>'
                 + '<div id="dialog2_body">'
                 + title
                 + '<br>'
                 + result
                 + '<br>'
                 + '<br>'
                 + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
                 + '</div>';
    document.getElementById("dialog_content").innerHTML = html;
  };
  //読み込みファイル指定
  var filename = "assets/kinentai_nankaitraf.txt";
  xhr.open("get", filename);
  xhr.send(null);
}

function showResultNankaitraf2(){
  var title = "南海トラフ<br>";
  var result = "";
  //txtファイル読み込み
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    //改行コードを<br>に置き換え
    var tempArray = xhr.responseText.split("\n");
    for(var i=0; i<tempArray.length; i++){ //ここは他のcsvと違ってtxtだからヘッダーがないので0スタートに注意!
      result = result + tempArray[i] + '<br>';
    }
    var html =     '<div id="dialog">'
                 + '<div id="dialog_back"></div>'
                 + '<div id="dialog_body">'
                 + title
                 + '<br>'
                 + result
                 + '<br>'
                 + '<br>'
                 + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
                 + '</div>';
    document.getElementById("dialog_content").innerHTML = html;
  };
  //読み込みファイル指定
  var filename = "assets/kinentai_nankaitraf2.txt";
  xhr.open("get", filename);
  xhr.send(null);
}

//
//　大津波警報・噴火
//
function selectArea4(num){
  var title = "";
  switch (num) {
    case 1:
      title = "■大津波警報<br>　都道府県は?<br>";
      break;
    case 2:
      title = "■噴火<br>　都道府県は?<br>";
      break;
  }
  var prefectures = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
  var base = document.getElementById("dialog2_prefectures");
  var item = "";
  for(var i=0;i<prefectures.length;i++){
    item = item + '<button class="prefecture" type="button" onclick="showResult4(' + i + ',' + num + ')">' + prefectures[i] + '</button>';
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

function showResult4(prefIndex, num){
  var title = "";
  switch (num) {
    case 1:
      title = "■大津波警報<br>";
      break;
    case 2:
      title = "■噴火<br>";
      break;
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
  //読み込みファイル分岐
  var filename = "";
  switch (num) {
    case 1:
      filename = "assets/otsunami.csv";
      break;
    case 2:
      filename = "assets/hunka.csv";
      break;
    default:
      filename = "";
  }
  xhr.open("get", filename);
  xhr.send(null);
}

//
//　特殊災害(NBC含む)
//
function selectArea5(num){
  var title = "■特殊災害(NBC含む)<br>　都道府県は?<br>";
  var prefectures = ["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
  var base = document.getElementById("dialog2_prefectures");
  var item = "";
  for(var i=0;i<prefectures.length;i++){
    item = item + '<button class="prefecture" type="button" onclick="showResult5(' + i + ',' + num + ')">' + prefectures[i] + '</button>';
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

function showResult5(prefIndex, num){
  var title = "■特殊災害(NBC含む)<br>";
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
  //読み込みファイル分岐
  var filename = "assets/nbc.csv";
  xhr.open("get", filename);
  xhr.send(null);
}
