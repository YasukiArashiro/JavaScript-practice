
var alertString;

alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
	var addStr = "Hello " + strA;
	return addStr;
}


var promptStr = prompt('何か好きな文字を入力してください。');

/* prompt関数は入力した文字を戻り値として返す */

alert(promptStr);


/* ------------------------------------ じゃんけん ------------------------------------------------------*/

do{
// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

var Verification = error(user_hand);

if(Verification == false){
	alert('グー・チョキ・パーのいずれかを入力してください')
}

}while(Verification == false);


if(Verification == null){
	alert('またチャレンジしてね');
}
else{
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}

//グーチョキパー以外を入力した際のアラートメッセージ

function error(input){
	var judge2;

	if(input == "グー"){
		judge2 = true;
	}
	else if(input == "チョキ"){
		judge2 = true;
	}
	else if(input == "パー"){
		judge2 = true;
	}
	else if(input == null){
		judge2 = null;
	}
	else{
		judge2 = false;
	}

	return judge2;
}




// ランダムでじゃんけんの手を作成する関数
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand_name;

    if(js_hand_num == 0){
        hand_name = "グー";
    }else if(js_hand_num == 1){
        hand_name = "チョキ";
    }else if(js_hand_num == 2){
        hand_name = "パー";
    }

    return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
    var winLoseStr;

    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}







