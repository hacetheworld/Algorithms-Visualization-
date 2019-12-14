
export default function QuickSortAnimation(bars) {
    let animations = [];
    let l = 0;
    let h = bars.length - 1;
    quickSort(bars, l, h, animations);
    return animations;
}


function quickSort(bars, l, h, animations) {

    if (l < h) {
        let j = quicksortHelper(bars, l, h, animations);
        quickSort(bars, l, j, animations);
        quickSort(bars, j + 1, h, animations);
    }

    return animations;
}


function quicksortHelper(arr, l, h, animations) {
    let pivot = arr[l];
    let i = l;
    let j = h;
    //swap function
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    while (i < j) {
        while (arr[i] <= pivot) { i++; }
        while (arr[j] > pivot) { j--; }
        if (i < j) {

            animations.push([[i, j], [{ height: [arr[i], arr[j]], isSwap: true }]]);
            swap(arr, i, j);
            //animations.push([i, j]);
            // animations.push([i, j]);
        }
    }


    animations.push([[l, j], [{ height: [arr[l], arr[j]], isSwap: true }]]);
    swap(arr, l, j);
    return j;

}