function f(largestValue) {
    var fibs = new Array();
    fibs.push(1);
    fibs.push(2);
    var i=2;

    while(true){
        var tmp = fibs[i-1] + fibs[i-2];
        if(tmp >= largestValue)
            break;
        fibs.push(tmp);
        i++;
    }
    return fibs;
}

function getEvenFibsSum(fibs){
   var i;
   var sum=0;
   for(i=0; i<fibs.length; i++){
        if(fibs[i] %2 ==0){
            sum+=fibs[i];
        }
   }
   return sum;

}