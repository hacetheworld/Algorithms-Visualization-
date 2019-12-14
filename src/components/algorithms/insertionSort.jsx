
export default function InsertionSortAnimation(bars) {
    let animation = [];
    insertionSort(bars, animation);
    return animation;
}


function insertionSort(bars, animation) {
    var currentVal;
    let auxilury = bars.slice();
    for (let i = 1; i < bars.length; i++) {
        currentVal = auxilury[i];
        for (var j = i - 1; j >= 0 && bars[j] > currentVal; j--) {
            animation.push([[j + 1, j], [{ height: [bars[j + 1], bars[j]], isSwap: true, islastSwap: false }]]);
            bars[j + 1] = bars[j];
            //console.log(bars[i]);

        }
        // console.log(bars[i]);
        animation.push([[j + 1, i], [{ height: [bars[j + 1], currentVal], isSwap: true, islastSwap: true }]]);

        bars[j + 1] = currentVal;
    }



    // 5,3,2,1,8,6
    //return bars;
}


