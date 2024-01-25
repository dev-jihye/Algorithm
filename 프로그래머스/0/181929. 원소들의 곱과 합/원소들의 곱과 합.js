function solution(num_list) {
    let a = num_list[0];
    let b = num_list[0];
    
    for(let i=1; i<num_list.length; i++) {
        a *= num_list[i];
        b += num_list[i];
    }
    
    b = b**2;
    
    return a > b ? 0 : 1;    
}