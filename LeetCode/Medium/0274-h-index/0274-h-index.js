/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let h = 0;
    let count = 0;
    let hIndex = 0;
    
    while(count >= h) {
        count = 0;
        for(let i=0; i<citations.length; i++) {    
            if(citations[i] >= h) {
                count++;
            } 
        }
        
        if(count >= h) {
            hIndex = Math.max(hIndex, h);
        }
        h++;
    }
    
    return hIndex
};