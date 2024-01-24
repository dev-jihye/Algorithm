function solution(number, n, m) {
    var answer = 0;
    
    let checkNum = Number.isInteger(number / n) && Number.isInteger(number / m);
    
    if(checkNum) {
        return 1;
    } else {
        return 0;
    }
}