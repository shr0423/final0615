//숫자 출력시 자리 수 처리
//두자리 미만일 경우 앞에 문자 '0'을 붙이자 
//n은 문자열 처리 대상이 되는 숫자 
function numString(n){
    let result="";
    if(n < 10){ //한자리수 라면...
        result="0"+n;
    }else{
        result=n;
    }
    //console.log("함수 호출 결과는", result);
    return result;
}

//랜덤한 정수 반환받기 
//호출자는 본인이 반환받기를 원하는 수에 +1을 더해서 호출해야함
// 0~9 를 반환받기 원할 경우 getRandom(10)
function getRandom(max){
    let r = Math.random(); //0.0xxx ~ 0.9xxx 즉 1보다 작은수     
    let n = r*max; // 0.xxx * 10 = 0부터 9사이의 실수가 반환
    return parseInt(n);
}


/*-----------------------------------------------------
두수의 합을 구하는 함수 정의
-----------------------------------------------------*/
function getResult(n1, n2){
    let result = parseInt(n1) + parseInt(n2);
    //아래와 같은 코드를 라이브러리에 적용하면 안되는 이유?
    //이 함수를 어떠한 UI가 호출할지 예측할수가 없으므로, 
    //js와 관련된 모든 페이지에서 이 함수를 재사용하기위해서는
    //함수는 중립적일수록 좋다..
    //따라서 반환값을 적극 활용하면 좋다 
    //즉 함수를 호출한者가 무엇을 할지 예측할수 없기 때문에, 
    //반환된 데이터를 가지고 무엇을할지에 대한 결정은 호출자에게
    //맡기자
    return result;
}


//최소값부터~ 최대값까지의 랜덤을 구하는 함수 
//2와 5 사이의 랜덤값을 원하면 
//호출시 getRandomByRange(2, 5)
function getRandomByRange(min, max){
    let result=min + parseInt(((max-min)+1)*Math.random());
    return result;
}

//두물체간의 충돌체크 
function collisionCheck(me , you){
    //console.log(me.x, me.y, you.x,  you.y);
    let result1=((me.x +me.width) >= you.x) &&  ((me.y+me.height) >= you.y);
    let result2=((me.x+me.width) >= you.x) && (me.y <= (you.y+you.height));
    let result3= (me.x<=(you.x+you.width)) && ((me.y+me.height) >= you.y);
    let result4=(me.x<=(you.x+you.width)) && (me.y <= (you.y+you.height)); 
    
    return (result1 && result2 && result3 && result4);
    
    /*
    조건1)
    (red.x +red.width) >= green.x  &&  (red.y+red.height) >= green.y
    
    조건2) 
    red 의 x축+너비가 green 의 x축을 넘어서면 
    red.x+red.width >= green.x
    
    red 의 y 축값이 green의 y축+높이 보다 작거나 같아지면
    red.y <= green.y + green.height
    
    조건3) 
    red의 x축이  green의 x축+너비한 값보다 같거나 작아지면...
    red.x  <= green.x + green.width
    
    red의 y축+높이가 green의 y축 이상이 되면...
    red.y+red.height >= green.y
    
    조건4) 
    red의 x축값이 green 의 x축+너비 보다 작아지면
    red.x <= green.x + green.width 
    
    red의 y축값이 green 의 y 축+높이보다 작아지면 
    red.y <= green.y + green.height    
    */

}

/*-------------------------------------------
문자열이 특정 범위를 넘어설때 나머지처리...
----------------------------------------------*/
function getStringOutOfRange(str, limit){
    //let str="동해물과 백두산이 마르고";        
    //console.log("문자열의 길이는 ",  str.length);
    let result=str;

    if(str.length>limit){ //...처리의 대상이 된다면..
        result=str.substring(0, limit)+"..";        
        //console.log(result+"..");       
    }     
    return result;
}
/*-----------------------------------------
매개변수1:조사대상배열
매개변수2:어떤값을 조사할지 해당 값
변환값:중복이 발견되면 true,아니면 false
-------------------------------------*/

function checkDuplicated(array,n){
    let result=false;//중복이 발견되지 않았음

    //조사: 어디에 중복된 데이터가 있는지 알 수 없으므로,
    //모든 배열 요소를 다 조사하자.
    for(let i=0;i<array.length;i++){
        if(array[i]==n){//드디어 중복발견!
            result=true;
            break;
        }
    }
    return result;
}