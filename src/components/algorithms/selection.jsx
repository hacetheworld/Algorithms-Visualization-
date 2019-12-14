
export default function SelectionSortAnimation(bars) {

    let animations = [];
    selectionSort(bars, animations)
    return animations;

}


function selectionSort(bars, animation) {
    let idx;
    let min;
    for (let i = 0; i < bars.length - 1; i++) {
        min = bars[i];
        idx = i;
        for (let j = i + 1; j < bars.length; j++) {
            animation.push([[idx, j], [{ height: [bars[idx], bars[j]], isSwap: false }]]);
            if (bars[j] < min) {
                min = bars[j];
                idx = j;
            }
        }
        animation.push([[i, idx], [{ height: [bars[i], min], isSwap: true }]]);

        bars[idx] = bars[i];
        bars[i] = min;

    }

}

