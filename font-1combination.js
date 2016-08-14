/*
2016 stuckyi studio 
for herald design tech 

고려사항:

변수화할 것들
1. 폰트 크기 변경 가능하게 설계한다.
2. 획 굵기 변경 가능하게 설계한다.
3. 위치 변경 가능하게 설계한다.
4. 쌍자음은 gamma 값 변할 때 위치가 왼쪽 -> 오른쪽 | 오른쪽 -> 왼쪽으로 차례로 변할 수 있게 한다.
5. 모음은 gamma 값에 따라 형태가 변할 수 있게 한다.

*/



//------------------------------------------닿자 재조합 그라운드------------------------------------------


// ------------------ 기본 자음 -----------------------

//기본자음ㄱ
function top1(tx,ty){
    a1(tx,ty);
}

//기본자음ㄴ
function top2(tx,ty){
    a2(tx,ty);
}

//기본자음ㄷ
function top3(tx,ty){
    a3(tx,ty);
}


//기본자음ㄹ
function top4(tx,ty){
    a4(tx,ty);
}


//기본자음ㅁ
function top5(tx,ty){
    a5(tx,ty);
}

//기본자음ㅂ
function top6(tx,ty){
    a6(tx,ty);
}

//기본자음ㅅ
function top7(tx,ty){
    a7(tx,ty);
}

//기본자음ㅇ
function top8(tx,ty){
    a8(tx,ty);
}

//기본자음ㅈ
function top9(tx,ty){
    a9(tx,ty);
}

//기본자음ㅊ
function top10(tx,ty){
    a10(tx,ty);
}

//기본자음ㅋ
function top11(tx,ty){
    a11(tx,ty);
}

//기본자음ㅌ
function top12(tx,ty){
    a12(tx,ty);
}

//기본자음ㅍ
function top13(tx,ty){
    a13(tx,ty);
}

//기본자음ㅎ
function top14(tx,ty){
    a14(tx,ty);
}

// ------------------ 복합 자음 -----------------------

//복합자음ㄲ
function top15(tx,ty){
    b1(tx+bm1,ty+bm2);
    b1(tx+bm1+bm3,ty+bm2);
}

//복합자음ㄸ
function top16(tx,ty){
    b2(tx+bm1,ty+bm2);
    b2(tx+bm1+bm3,ty+bm2);
}

//복합자음ㅃ
function top17(tx,ty){
    b3(tx+bm1,ty+bm2);
    b3(tx+bm1+bm3,ty+bm2);
}

//복합자음ㅆ
function top18(tx,ty){
    b4(tx+bm1,ty+bm2);
    b4(tx+bm1+bm3,ty+bm2);
}

//복합자음ㅉ
function top19(tx,ty){
    b5(tx+bm1,ty+bm2);
    b5(tx+bm1+bm3,ty+bm2);
}





//------------------------------------------홀자 재조합 그라운드------------------------------------------

// ------------------ 기본 모음 -----------------------

// -------- 종적 기본 모음 a,b--------

//기본모음ㅏa
function middle1a(tx,ty,g){
    d1a(tx,ty,g);
}
//기본모음ㅏb
function middle1b(tx,ty,g){
    d1b(tx,ty,g);
}
//기본모음ㅑa
function middle2a(tx,ty,g){
    d2a(tx,ty,g);
}
//기본모음ㅑb
function middle2b(tx,ty,g){
    d2b(tx,ty,g);
}
//기본모음ㅓa
function middle3a(tx,ty,g){
    d3a(tx,ty,g);
}
//기본모음ㅓb
function middle3b(tx,ty,g){
    d3b(tx,ty,g);
}
//기본모음ㅕa
function middle4a(tx,ty,g){
    d4a(tx,ty,g);
}
//기본모음ㅕb
function middle4b(tx,ty,g){
    d4b(tx,ty,g);
}
//기본모음ㅣa
function middle5a(tx,ty,g){
    d5a(tx,ty,g);
}
//기본모음ㅣb
function middle5b(tx,ty,g){
    d5b(tx,ty,g);
}




// -------- 횡적 기본 모음 --------


//기본모음ㅗ
function middle6(tx,ty,g){
    c1(tx,ty,g);
}

//기본모음ㅛ
function middle7(tx,ty,g){
    c2(tx,ty,g);
}

//기본모음ㅜ
function middle8(tx,ty,g){
    c3(tx,ty,g);
}

//기본모음ㅠ
function middle9(tx,ty,g){
    c4(tx,ty,g);
}

//기본모음ㅡ
function middle10(tx,ty,g){
    c5(tx,ty,g);
}




// ------------------ 복합 모음 a,b-----------------------


// -------- 종적 복합 모음 a,b--------

//복합모음ㅐa
function middle11a(tx,ty,g){
    d6a(tx,ty,g);
}
//복합모음ㅐb
function middle11b(tx,ty,g){
    d6b(tx,ty,g);
}

//복합모음ㅒa
function middle12a(tx,ty,g){
    d7a(tx,ty,g);
}
//복합모음ㅒb
function middle12b(tx,ty,g){
    d7b(tx,ty,g);
}

//복합모음ㅔa
function middle13a(tx,ty,g){
    d8a(tx,ty,g);
}
//복합모음ㅔb
function middle13b(tx,ty,g){
    d8b(tx,ty,g);
}


//복합모음ㅖa
function middle14a(tx,ty,g){
    d9a(tx,ty,g);
}
//복합모음ㅖb
function middle14b(tx,ty,g){
    d9b(tx,ty,g);
}



// -------- 종+횡 복합 모음 a,b--------

//복합모음ㅘ
function middle11(tx,ty,g){
    
}


//복합모음ㅙ
function middle12(tx,ty,g){
    
}


//복합모음ㅚ
function middle13(tx,ty,g){
    
}


//복합모음ㅝ
function middle14(tx,ty,g){
    
}


//복합모음ㅞ
function middle15(tx,ty,g){
    
}


//복합모음ㅟ
function middle16(tx,ty,g){
    
}


//복합모음ㅢ
function middle17(tx,ty,g){
    
}




//------------------------------------------받침 재조합 그라운드------------------------------------------



// ------------------ 기본 받침 -----------------------

//기본받침ㄱ
function bottom1(tx,ty){
    a1(tx,ty);
}


//기본받침ㄴ
function bottom2(tx,ty){
    a2(tx,ty);
}

//기본받침ㄷ
function bottom3(tx,ty){
   a3(tx,ty); 
}

//기본받침ㄹ
function bottom4(tx,ty){
    a4(tx,ty);
}

//기본받침ㅁ
function bottom5(tx,ty){
   a5(tx,ty); 
}

//기본받침ㅂ
function bottom6(tx,ty){
   a6(tx,ty); 
}

//기본받침ㅅ
function bottom7(tx,ty){
   a7(tx,ty); 
}

//기본받침ㅇ
function bottom8(tx,ty){
   a8(tx,ty); 
}

//기본받침ㅈ
function bottom9(tx,ty){
   a9(tx,ty); 
}

//기본받침ㅊ
function bottom10(tx,ty){
   a10(tx,ty); 
}

//기본받침ㅋ
function bottom11(tx,ty){
   a11(tx,ty); 
}

//기본받침ㅌ
function bottom12(tx,ty){
   a12(tx,ty); 
}

//기본받침ㅍ
function bottom13(tx,ty){
   a13(tx,ty); 
}

//기본받침ㅎ
function bottom14(tx,ty){
   a14(tx,ty); 
}


// ------------------ 겹받침 -----------------------

//겹받침 ㄱㅅ
function bottom15(tx,ty){
    b1(tx+bm1,ty+bm2);
    b4(tx+bm1+bm3,ty+bm2);
}



//겹받침 ㄴㅈ
function bottom16(tx,ty){
    b6(tx+bm1,ty+bm2);
    b5(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄴㅎ
function bottom17(tx,ty){
    b6(tx+bm1,ty+bm2);
    b7(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄹㄱ
function bottom18(tx,ty){
    b8(tx+bm1,ty+bm2);
    b1(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄹㅁ
function bottom19(tx,ty){
    b8(tx+bm1,ty+bm2);
    b9(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄹㅂ
function bottom20(tx,ty){
    b8(tx+bm1,ty+bm2);
    b3(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄹㅅ
function bottom21(tx,ty){
    b8(tx+bm1,ty+bm2);
    b4(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄹㅌ
function bottom22(tx,ty){
    b8(tx+bm1,ty+bm2);
    b10(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄹㅍ
function bottom23(tx,ty){
    b8(tx+bm1,ty+bm2);
    b11(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㄹㅎ
function bottom24(tx,ty){
    b8(tx+bm1,ty+bm2);
    b7(tx+bm1+bm3,ty+bm2);
}


//겹받침 ㅂㅅ
function bottom25(tx,ty){
    b3(tx+bm1,ty+bm2);
    b4(tx+bm1+bm3,ty+bm2);
}




// ------------------ 쌍받침 -----------------------

//쌍받침ㄲ
function bottom26(tx,ty){
    b1(tx+bm1,ty+bm2);
    b1(tx+bm1+bm3,ty+bm2);
}

//쌍받침ㅆ
function bottom27(tx,ty){
    b4(tx+bm1,ty+bm2);
    b4(tx+bm1+bm3,ty+bm2); 
}
