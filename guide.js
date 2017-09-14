//アプリの使用目的　ボタン
function clickPurpose(){
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
                 + result
                 + '<br>'
                 + '<br>'
                 + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
                 + '</div>';
    document.getElementById("dialog_content").innerHTML = html;
  };
  //読み込みファイル
  var filename = "assets/purpose.txt";
  xhr.open("get", filename);
  xhr.send(null);
}

//非常招集確認ボタン
function clickButton1(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog1_back"></div>'
              + '<div id="dialog1_body">'
              + '１　非常招集基準確認(緊援隊)<br>'
              + '<img src="png/guide441.png" alt="ボタン一覧"><br>'
              + '<br>'
              + '上のボタンで緊急消防援助隊大阪府大隊の出場を確認することができます。<br>地震については[地震(震央「陸」)][地震(震央「海域」)][アクションプラン]ボタンで確認することができます。<br>その他[大津波・噴火][特殊災害(NBC含む)]の出場基準を確認することができます。<br><br>まず、「和歌山県で震度６強、震央は陸」の地震が発生した場合の大阪府大隊の出場の可否について確認します。<br>震央が「陸」なので[地震(震央)「陸」]ボタンをタップします。<br>'
              + '<br>'
              + '<img src="png/guide442.png" alt="最大震度選択画面"><br>'
              + '<br>'
              + '次に、「震度６強」(特別区６弱)をタップします。<br>'
              + '<br>'
              + '<img src="png/guide443.png" alt="都道府県選択画面"><br>'
              + '<br>'
              + '次に、震央都道府県の「和歌山県」をタップします。<br>'
              + '<br>'
              + '<img src="png/guide444.png" alt="結果画面"><br>'
              + '<br>'
              + '和歌山県への応援出動結果が表示されます。<br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

//情報確認ボタン
function clickButton2(){
  var html = document.getElementById("dialog_content").innerHTML;
  html = html + '<div id="dialog">'
              + '<div id="dialog2_back"></div>'
              + '<div id="dialog2_body">'
              + '２　情報確認<br>'
              + '<br>'
              + '<img src="png/guide51.png" alt="情報ボタン一覧"><br>'
              + '<br>'
              + '<img src="png/guide52.png" alt="情報サイトURL表示例"><br>'
              + '<br>'
              + '河川水位、気象情報、渋滞情報サイトなどを閲覧することができます。<br>'
              + '<br>'
              + '<img src="png/guide53.png" alt="情報サイト画面表示例"><br>'
              + '<br>'
              + '河川水位、気象情報、渋滞情報サイトなどを閲覧することができます。<br>'
              + '<br>'
              + '<button class="cancel" type="button" onclick="closeDialog()">閉じる</button>'
              + '</div>';
  document.getElementById("dialog_content").innerHTML = html;
}

//緊援隊ボタン　->　ホームへ復帰
function clickButton3(){
  location.href = "./index.html";
}

function closeDialog(){
  var delNode = document.getElementById("dialog");
  delNode.parentNode.removeChild(delNode);
}
