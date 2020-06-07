
//時間を表示するJS
timerID = setInterval('clock()',500); //0.5秒毎にclock()を実行
function clock() {
	document.getElementById("clock").innerHTML = getNow();
}

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	//出力用
	var s = `${year}/${mon}/${day} ${hour}:${min}:${sec}  JP `; 
	return s;
}

//画面のサイズを自動で変更するJS
$(document).ready(function () {
    hsize = $(window).height();
    $("section").css("height", hsize + "px");
  });
  $(window).resize(function () {
    hsize = $(window).height();
    $("section").css("height", hsize + "px");
	});
	
	jQuery(function($) {
    $('.wrapper').bgSwitcher({
        images: ['assets/bg1.jpg','assets/bg2.jpg','assets/bg3.jpg'], // 切替背景画像を指定
				interval: 5000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration:3000, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
})
