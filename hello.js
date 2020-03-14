
var str1 = "Hello";
var str2 = " World!!"
var str3 = "条件分岐"
var str4 = "繰り返し処理"
var str5 = "do...while文"
var str6 = "for文"
var str7 = "確認問題"
var str8 = "四則演算を表示してください"
var str9 = "足し算"
var str10 = "引き算"
var str11 = "掛け算"
var str12 = "割り算"

alert(str1 + str2);

/* ---------------------------- 条件分岐 ----------------------------------------  */

alert(str3);

var orange = 100;
var apple = 120;

if(orange < apple){
	alert('みかんの値段がリンゴより安い');
}
else if(orange == apple){
	alert('みかんとリンゴが同じ値段');
}
else{
	alert('みかんの値段がリンゴより高い');
}


/* ---------------------------- 繰り返し処理 ----------------------------------------  */

var max = 100;
var num = 1;
var count = 0;

alert(str4);

while(num < max){
	num = num * 2;
	count += 1;
}

alert('2をかけて続けて' + max + 'を超えるのに必要だった回数は' + count +'回です');


/* ---------------------------- do...while文 ----------------------------------------  */

alert(str5);


var count = 1;

do{
	alert(count + '回目のアラートです。６回目まで繰り返されます。');
	count += 1;
}while(count <= 6);


/* ---------------------------- for文 ----------------------------------------  */

alert(str6);

var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}

alert('１から10まで足し算した結果は' + num + 'です。');


/* ---------------------------- 確認問題 ----------------------------------------  */

alert(str7);
alert(str8);

alert(str9);

alert("23+54の答えは" + (23 + 54) + 'です。');


alert(str10);

alert("54-23の答えは" + (54 - 23) + 'です。');

alert(str11);

alert("54x23の答えは" + (54 * 23) + 'です。');

alert(str12);

alert("1200÷30の答えは" + (1200 / 30) + 'です。');







