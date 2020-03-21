https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(a, b) {
    if (b.length <= 0 || a.length <= 0) {
        console.log(a);
        console.log(b);
        return 0;
    }

    else {
        let ib = 0
        while (ib <= b.length) {
            let porownanie = a.map((el, i) => {
                if (el == b[ib]) a.splice(i, 1)
            });
            ib++;
        }
        console.log(a);
        console.log(b);
    }

}

//arrayDiff([], [4, 5]); // [], "a was [], b was [4,5]");
arrayDiff([3, 4], [3]) // [4], "a was [3,4], b was [3]");
//arrayDiff([1, 8, 2], []) // [1,8,2], "a was [1,8,2], b was []");