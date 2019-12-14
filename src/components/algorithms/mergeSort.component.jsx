
export default function MergeSortAnimation(bars) {
    let auxilury = bars.slice();
    let start = 0;
    let end = bars.length - 1;
    let animation = [];
    MergeSort(bars, start, end, auxilury, animation);
    return animation;

}



function MergeSort(mainArr, start, end, auxilury, animation) {

    if (start === end) return;
    const middle = Math.floor((start + end) / 2);
    // let auxilury = bars.slice();
    // let left = bars.splice(0, middle);
    // let right = bars.splice(0);
    //let start = 0;
    //let end = bars.length;
    MergeSort(auxilury, start, middle, mainArr, animation);
    MergeSort(auxilury, middle + 1, end, mainArr, animation);
    merge(mainArr, start, middle, end, auxilury, animation);

}


/// 4 5 6 2 5 3 1
function merge(mainArr, start, middle, end, auxilury, animation) {
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animation.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animation.push([i, j]);
        if (auxilury[i] <= auxilury[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animation.push([k, auxilury[i]]);
            mainArr[k++] = auxilury[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animation.push([k, auxilury[j]]);
            mainArr[k++] = auxilury[j++];
        }
    }
    while (i <= middle) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animation.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animation.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animation.push([k, auxilury[i]]);
        mainArr[k++] = auxilury[i++];
    }
    while (j <= end) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animation.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animation.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animation.push([k, auxilury[j]]);
        mainArr[k++] = auxilury[j++];
    }
}

