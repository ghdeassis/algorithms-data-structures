import BinarySearch from "../../../algorithms/binary-search.js";
import MinHeap from "../../../data-structures/min-heap.js";

console.log(cookies(90, [13, 47, 74, 12, 89, 74, 18, 38]));

function cookies(k: number, A: number[]) {
    let count = 0;

    const minHeap = new MinHeap([]);
    A.forEach(e => minHeap.insert(e));

    while (minHeap.getLength() > 1) {
        if (minHeap.getMin() >= k) {
            return count;
        }

        const a = minHeap.extractRoot();
        const b = minHeap.extractRoot();
        const v = a + 2 * b;
        minHeap.insert(v);

        count++;
    }

    if (minHeap.getMin() >= k) {
        return count;
    }

    return -1;
}

function cookiesBinarySearch(k: number, A: number[]) {
    A.sort((a, b) => a - b);
    let count = 0;
    let binarySearch = new BinarySearch(A);

    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        if (a >= k) {
            break;
        }
        if (A.length === 1) {
            return -1;
        }

        const b = A[i + 1];
        const v = a + 2 * b;
        A.splice(i, 2);

        const idx = binarySearch.searchInsertPosition(v);
        A.splice(idx, 0, v);
        binarySearch = new BinarySearch(A);

        count++;
        i = -1;
    }

    return count;
}

function cookiesArraySort(k: number, A: number[]) {
    A.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        const a = A[i];

        if (a >= k) {
            break;
        }
        if (A.length === 1) {
            return -1;
        }

        const b = A[i + 1];
        const v = a + 2 * b;

        A.splice(i, 2);
        A.unshift(v);
        A.sort((a, b) => a - b);

        count++;
        i = -1;
    }
    return count;
}