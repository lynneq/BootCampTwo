function getMultiples (number1, number2, max){
    var i;
	var sum =0;
    for(i=0; i<max; i++){
        if(i % number1==0 || i %number2 ==0){
			sum += i;
        }
    }
	return sum;
}
