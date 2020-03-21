https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
    if (b.length <= 0 || a.length <= 0) {
        console.log(a);
        console.log(b);
        return 0;
    }
    else {
        var porownane = a;
        for (var ib = 0; ib < b.length; ib++) {

            a.forEach((el, i) => {
                if (el === b[ib]) {
                    porownane.splice(i, 1);

                    porownane.forEach((el, i) => {
                        if (el === b[ib]) {
                            porownane.splice(i, 1);
                        }
                    });
                }

            });

        }
        console.log(ib);
        console.log(porownane);
    }
}

//arrayDiff([], [4, 5]); // [], "a was [], b was [4,5]");
//arrayDiff([3, 4], [3]); // [4], "a was [3,4], b was [3]");
//arrayDiff([1, 8, 2], []) // [1,8,2], "a was [1,8,2], b was []");
arrayDiff([4, 17, -10, 10, -10, -15, -3, 13, 1, -2, -9], [17, 1, -15, -9, 13, -2, 10, -10, 4]);