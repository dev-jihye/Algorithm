function solution(a, b, c, d) {
    let numArr = [a, b, c, d];
    
    function numberSort(num1, num2) {
        return num1 - num2
    }
    
    numArr.sort(numberSort);
    
    if(numArr[0] === numArr[3]) {
        return 1111 * numArr[0];
    } else {
        if(numArr[0] === numArr[2]) {
            return (10 * numArr[0] + numArr[3])**2;
        } else {
            if(numArr[0] === numArr[1] && numArr[2] === numArr[3]) {
                return (numArr[0] + numArr[2]) * (numArr[2] - numArr[0]);
            } else if(numArr[0] === numArr[1] && numArr[2] !== numArr[3]) {
                return numArr[2] * numArr[3];
            } else {
                if(numArr[1] === numArr[3]) {
                    return (10 * numArr[3] + numArr[0])**2;
                } else if(numArr[1] === numArr[2]) {
                    return numArr[0] * numArr[3];
                } else if(numArr[2] === numArr[3]) {
                    return numArr[0] * numArr[1];
                } else {
                    return numArr[0];
                }                 
            }            
        }
    }
}