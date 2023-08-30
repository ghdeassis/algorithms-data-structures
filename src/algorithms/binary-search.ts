class BinarySearch {
    private _array = [];

    constructor(array: number[]) {
        this.array = array;
    }

    set array(value: number[]) {
        this._array = value;
    }

    //O(log n)
    search(elem: number) {
        if (this._array.length === 0) {
            return -1;
        }

        if (this._array.length === 1) {
            return this._array[0] === elem ? 0 : -1;
        }

        let left = 0;
        let right = this._array.length - 1;

        while (left <= right) {
            const m = Math.floor(left + (right - left) / 2);

            if (elem === this._array[m]) {
                return m;
            }

            if (elem > this._array[m]) {
                left = m + 1;
            } else {
                right = m - 1;
            }
        }

        return -1;
    }

    //O(log n)
    searchInsertPosition(elem: number) {
        if (this._array.length === 0) {
            return 0;
        }

        if (this._array.length === 1) {
            return this._array[0] >= elem ? 0 : 1;
        }

        let left = 0;
        let right = this._array.length - 1;

        while (left <= right) {
            const m = Math.floor(left + (right - left) / 2);

            if (elem === this._array[m]) {
                return m;
            }

            if (elem > this._array[m]) {
                left = m + 1;
            } else {
                right = m - 1;
            }
        }

        return left;
    }
}

export default BinarySearch;