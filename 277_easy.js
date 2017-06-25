//https://www.reddit.com/r/dailyprogrammer/comments/4uhqdb/20160725_challenge_277_easy_simplifying_fractions/
function euc(a, b) {
    var a_n = a;
    var b_n = b;
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    console.log(a_n / a, b_n / a);
}
var numbers = [
    [4, 8],
    [1536, 78360],
    [51478, 5536],
    [46410, 119340],
    [7673, 4729],
    [4096, 1024]
];
for (var i = 0; i <= numbers.length - 1; i++) {
    euc(numbers[i][0], numbers[i][1]);
}
