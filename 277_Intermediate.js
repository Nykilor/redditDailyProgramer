//https://www.reddit.com/r/dailyprogrammer/comments/4utlaz/20160727_challenge_277_intermediate_fake_coins/?sort=new
function comparision(tocheck) {
    var comparision = ["left", "right", "equal"];
    var lighter = [];
    var normal = [];
    for (var i = 0; i <= tocheck.length - 1; i++) {
        for (var i_2 = 0; i_2 <= tocheck[i].length - 1; i_2++) {
            if (comparision.indexOf(tocheck[i][i_2]) === -1 && tocheck[i][i_2].length > 1) {
                var s = tocheck[i][i_2].split("");
                tocheck[i][i_2] = s;
            }
        }
        for (var i_2 = 0; i_2 <= tocheck[i].length - 1; i_2++) {
            if (comparision.indexOf(tocheck[i][i_2]) !== -1) {
                if (tocheck[i][i_2] === "left") {
                    lighter.push(tocheck[i][i_2 - 1]);
                    normal.push(tocheck[i][i_2 - 2]);
                } else if (tocheck[i][i_2] === "right") {
                    lighter.push(tocheck[i][i_2 - 2]);
                    normal.push(tocheck[i][i_2 - 1]);
                } else {
                    normal.push(tocheck[i][i_2 - 1]);
                    normal.push(tocheck[i][i_2 - 2]);
                }
            }
        }
    }

    if (lighter.length === 0 && normal.length > 0) {
        console.log("no fake coins detected");
    } else {
        lighter = [].concat.apply([], lighter);
        normal = [].concat.apply([], normal);
        if ((normal.sort().join()).indexOf(lighter.sort().join()) !== -1) {
            console.log("data is inconsistent");
        } else {
            lighter = lighter.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
            console.log(lighter.sort().join() + " is lighter");
        }
    }
}
var check = [
    ["ab", "xy", "left"],
    ["b", "x", "equal"],
    ["a", "b", "equal"]
];
var check1 = [
    ["a", "x", "equal"],
    ["b", "x", "equal"],
    ["y", "a", "left"]
];
var check2 = [
    ["abcd", "efgh", "equal"],
    ["abci", "efjk", "left"],
    ["abij", "efgl", "equal"],
    ["mnopqrs", "tuvwxyz", "equal"]
];
var check3 = [
    ["abc", "efg", "equal"],
    ["a", "e", "left"]
];
comparision(check);
comparision(check1);
comparision(check2);
comparision(check3);
