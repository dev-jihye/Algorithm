function solution(n) {
    const arr = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (num <= n * n) {
        for (let i = left; i <= right; i++) arr[top][i] = num++;
        top++;

        for (let i = top; i <= bottom; i++) arr[i][right] = num++;
        right--;

        for (let i = right; i >= left; i--) arr[bottom][i] = num++;
        bottom--;

        for (let i = bottom; i >= top; i--) arr[i][left] = num++;
        left++;
    }

    return arr;
}