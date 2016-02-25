$(function() {

	var ANS = setANS();

	$("#sumbitBtn").on("click",function(){

		//取答案亂數
		//$("span.ans").html("");
		$("span.ans").html("Ans : "+ ANS);

		var clickAns =0;
		var ckickAnsA = 0;

		for(var i=1; i<=4 ; i++){
			//clickAns01 =clickNumB(ANS,$("input[name='Num0"+i+"']").val());
			//clickAns02 = clickNumB(ANS.substr(i-1,1),$("input[name='Num0"+i+"']").val());

			var clickAns02 = 0;
			var clickAns01 = 0;

			clickAns02 = clickNumB(ANS.substr(i-1,1),$("input[name='Num0"+i+"']").val());
			if(clickAns02 == 1){

				if(clickAns02 > 0){
					ckickAnsA = ckickAnsA+1;
				}

			}else{

				clickAns01 =clickNumB(ANS,$("input[name='Num0"+i+"']").val());
				if(clickAns01 > 0){
					clickAns = clickAns+1;
				}
			}
			
		}
		
		var userAns = $(".box input[name='Num01']").val() + $(".box input[name='Num02']").val() + $(".box input[name='Num03']").val() + $(".box input[name='Num04']").val();
		$("div.tip").html($("div.tip").html() + "userAns : " + userAns + " tip : " + ckickAnsA + "A"+ clickAns + "B<br/>");

		if(userAns == ANS)
		{
			$("div.tip").html($("div.tip").html() + "WINNER<br/>");
		}

    	clearBox();
	});

	//重玩
	$("#replayBtn").on("click",function(){
		$("span.ans").html("");
		$("span.tip").html("");
		clearBox();
		ANS = setANS();
		$("span.ans").html("Ans : "+ ANS);
	});

});

//取答案亂數
function setANS(){
	var Str = getRandomArray(0,9,4);
	return Str;
}

//比對答案
function clickNumB(ans,Num){
	var click;
	var sClick;
	

	if(Num != ""){
		sClick = ans.indexOf(Num,0);

			switch(sClick){
				case 0:
					click = 1;
					break;
				case 1:
					click = 2;
					break;
				case 2:
					click = 3;
					break;
				case 3:
					click = 4;
					break;
				default:
					click = 0;
					break;
			}
	}else{
		click = 0;
	}
	
	return click;
}


//清空textBox
function clearBox(){
	$("input[name='Num01']").val("");
	$("input[name='Num02']").val("");
	$("input[name='Num03']").val("");
	$("input[name='Num04']").val("");
}

//取不重複4位數答案亂數

function getRandom(minNum, maxNum) {	//取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
	return Math.floor( Math.random() * (maxNum - minNum + 1) ) + minNum;
}

function getRandomArray(minNum, maxNum, n) {	//隨機產生不重覆的n個數字
	var rdmArray = [n];		//儲存產生的陣列
	var sAns="";
 
	for(var i=0; i<n; i++) {
		var rdm = 0;		//暫存的亂數
 
		do {
			var exist = false;			//此亂數是否已存在
			rdm = getRandom(minNum, maxNum);	//取得亂數
 
			//檢查亂數是否存在於陣列中，若存在則繼續回圈
			if(rdmArray.indexOf(rdm) != -1) exist = true;
 
		} while (exist);	//產生沒出現過的亂數時離開迴圈
 
		rdmArray[i] = rdm;
		sAns = sAns + rdm;
	}
	return sAns;
}

    

