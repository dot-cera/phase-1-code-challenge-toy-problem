function speedDetector(speed){
    const limit=70
    const over=5
    constspeed=document.getElementById("speed")

    if(speed<=limit){
       return"OK"
    }else {
        const demeri=(speed-limit)/over;
        if(demerit>12){
            return"LICENCE SUSPENDED!!"
        }
        else{
            return "point ${demerit}"
        }
    }
    display.innerText="Your limit is ${limit} and demerit: ${demrit}"
}
console.log(speedDetector(150))
