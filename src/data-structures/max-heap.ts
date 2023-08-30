class MaxHeap {
    private heap: number[];

    constructor(heap: number[]) {
        this.heap = heap;
    }

    //O(log n)
    insert(value: number) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    //O(log n)
    remove(value: number) {
        const index = this.heap.findIndex(e => e === value);

        if (index !== -1) {
            this.heap[index] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1, 1);

            const parent = this.getParent(index);
            if (this.heap[parent] !== undefined && this.heap[index] > this.heap[parent]) {
                this.heapifyUp(index);
            } else {
                this.heapifyDown(index);
            }
        }
    }

    //O(log n)
    extractRoot() {
        if (this.heap.length > 0) {
            const elem = this.heap[0];
            this.remove(elem);
            return elem;
        }
        return undefined;
    }

    //O(1)
    getLength() {
        return this.heap.length;
    }

    //O(1)
    getMax() {
        return this.heap[0];
    }

    //O(log n)
    heapifyDown(index: number) {
        const left = this.getLeft(index);
        const right = this.getRight(index);

        let biggest = index;

        if (left < this.heap.length && this.heap[left] > this.heap[biggest]) {
            biggest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[biggest]) {
            biggest = right;
        }

        if (biggest !== index) {
            this.swap(index, biggest);
            this.heapifyDown(biggest);
        }
    }

    //O(log n)
    heapifyUp(index: number) {
        const parent = this.getParent(index);
        if (this.heap[parent] !== undefined && this.heap[index] > this.heap[parent]) {
            this.swap(index, parent);
            this.heapifyUp(parent);
        }
    }

    private getLeft(i: number) {
        return 2 * i + 1;
    }

    private getRight(i: number) {
        return 2 * i + 2;
    }

    private getParent(i: number) {
        return Math.floor((i - 1) / 2);
    }

    private swap(a: number, b: number) {
        const temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
}

export default MaxHeap;