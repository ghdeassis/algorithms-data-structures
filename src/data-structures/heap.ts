class Heap<T> {
    private heap: T[];
    private compare: (a: T, b: T) => boolean

    constructor(heap: T[], compare: (a: T, b: T) => boolean) {
        this.heap = heap;
        this.compare = compare;
    }

    //O(log n)
    insert(value: T) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    //O(log n)
    remove(value: T) {
        const index = this.heap.findIndex(e => e === value);

        if (index !== -1) {
            this.heap[index] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1, 1);

            const parent = this.getParent(index);
            if (this.heap[parent] !== undefined && this.compare(this.heap[index], this.heap[parent])) {
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
    getMin() {
        return this.heap[0];
    }

    //O(log n)
    private heapifyDown(index: number) {
        const left = this.getLeft(index);
        const right = this.getRight(index);

        let smallest = index;

        if (left < this.heap.length && this.compare(this.heap[left], this.heap[smallest])) {
            smallest = left;
        }
        if (right < this.heap.length && this.compare(this.heap[right], this.heap[smallest])) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    //O(log n)
    private heapifyUp(index: number) {
        const parent = this.getParent(index);
        if (this.heap[parent] !== undefined && this.compare(this.heap[index], this.heap[parent])) {
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

export default Heap;