function solution(n) {
    let sum = 0;
    
    if(n%2 === 0) {
        for(let i=n; i>0; i--) {
             if(i%2 === 0) {
                sum += i**2;
            }
        }
    } else {
        for(let i=n; i>0; i--) {
            if(i%2 !== 0) {
                sum += i;
            }
        }
    }
    return sum;
}