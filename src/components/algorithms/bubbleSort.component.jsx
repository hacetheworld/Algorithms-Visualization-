

export default function BubbleSort(bars) {
    let animation = [];
    for (let i = 0; i < bars.length; i++) {

        for (let j = 0; j < bars.length - 1; j++) {
            if (bars[j] >= bars[j + 1]) {
                // k++;
                animation.push([[j, j + 1], [{ height: [bars[j], bars[j + 1]], isSwap: true }]]);
                let temp = bars[j];
                bars[j] = bars[j + 1];
                bars[j + 1] = temp;
            } else {
                animation.push([[j, j + 1], [{ height: [bars[j], bars[j + 1]], isSwap: false }]]);

            }
            //animation.push([k, bars[j]]);
        }

    }
    return animation


}
