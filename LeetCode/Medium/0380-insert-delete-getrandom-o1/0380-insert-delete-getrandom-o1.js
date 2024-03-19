
var RandomizedSet = function() {
    this.map = {};
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map[val] !== undefined) {
        return false;
    } else {
        this.array.push(val);
        this.map[val] = this.array.length - 1;
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map[val] === undefined) {
        return false;
    } else {
        const last = this.array[this.array.length - 1];
        const index = this.map[val];
        this.array[index] = last;
        this.map[last] = index;
        this.array.pop();
        delete this.map[val];

        return true;
    }
    
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
      const randomNum = Math.floor(Math.random() * this.array.length);
    return this.array[randomNum]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */