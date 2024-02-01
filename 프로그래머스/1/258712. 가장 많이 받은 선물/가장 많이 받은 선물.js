function solution(friends, gifts) {
    let giveFriendsArr = new Array();
    let takeFriendsArr = new Array();
    let giftScoreArr = new Array();
    let giftList = gifts.map(gift => gift.split(' '));
    let gift = new Array();

    for(let i=0; i<friends.length; i++) {
        giveFriendsArr.push(new Array());
        takeFriendsArr.push(new Array());
        gift.push(0);
        giftScoreArr.push(0);
    }
    
    for(let i=0; i<friends.length; i++) {
        for(let j=0; j<giftList.length; j++) {
            if(friends[i] === giftList[j][0]) {
                giveFriendsArr[i].push(giftList[j][1]);
            } else if (friends[i] === giftList[j][1]) {
                takeFriendsArr[i].push(giftList[j][0]);
            }  
        }
    }
    
    function duplicateCount(arr) {
        const result = [];
        if(arr === giveFriendsArr) {
            arr.forEach((row) => {
                const rowResult = {};
                row.forEach((name) => {
                    if(rowResult[name]) {
                        rowResult[name]--;
                    } else {
                        rowResult[name] = -1;
                    }
                })
                result.push(rowResult);
            });
        } else {
             arr.forEach((row) => {
                const rowResult = {};
                row.forEach((name) => {
                    if(rowResult[name]) {
                        rowResult[name]++;
                    } else {
                        rowResult[name] = 1;
                    }
                })
                result.push(rowResult);
            });
        }
       
        return result;
    }
    
    giveFriendsArr = duplicateCount(giveFriendsArr);

    takeFriendsArr = duplicateCount(takeFriendsArr);
    
    function mergeArr(a, b) {
        const mergedArr = [];
        
        for(let i=0; i<Math.max(a.length, b.length); i++) {
             const mergedObj = {};

            if (a[i]) {
                Object.entries(a[i]).forEach(([key, value]) => {
                    mergedObj[key] = (mergedObj[key] || 0) + value;
                });
            }

            if (b[i]) {
                Object.entries(b[i]).forEach(([key, value])=> {
                    mergedObj[key] = (mergedObj[key] || 0) + value;
                });
            }

            mergedArr.push(mergedObj);
        }
        return mergedArr;
    }
    
    const merged = mergeArr(giveFriendsArr, takeFriendsArr);
    
    // 선물 지수
    for(let i=0; i<giftList.length; i++) {
        for(let j=0; j<friends.length; j++) {
            if(giftList[i][0] === friends[j]) {
                giftScoreArr[j] += 1;
            } else if(giftList[i][1] === friends[j]) {
                giftScoreArr[j] -= 1;
            }
        }
    }
    
    for(let i=0; i<friends.length; i++) {
        for(let j=0; j<friends.length; j++) {
            if(j>i && merged[i][friends[j]] !== undefined) {
                if(merged[i][friends[j]] > 0) {
                    gift[j] += 1;
                } else if (merged[i][friends[j]] < 0) {
                    gift[i] += 1;
                } else {
                    if(giftScoreArr[i] > giftScoreArr[j]) {
                        gift[i] += 1;
                    } else if(giftScoreArr[i] < giftScoreArr[j]) {
                        gift[j] += 1;
                    } else {
                        gift[i] += 0;
                    }
                }
            } else if(j>i && merged[i][friends[j]] === undefined) {
                if(giftScoreArr[i] > giftScoreArr[j]) {
                    gift[i] += 1;
                } else if(giftScoreArr[i] < giftScoreArr[j]) {
                    gift[j] += 1;
                } else {
                    gift[i] += 0;
                }
            }
        }
    }
    
    return Math.max.apply(null, gift);
}