class DynamicArray {
    private arr: number[];
    private capacity: number;
    private size: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.size = 0;
        this.arr = new Array(capacity);
    }

    get(i: number): number {
        return this.arr[i];
    }

    set(i: number, n: number): void {
        this.arr[i] = n;
    }

    pushback(n: number): void {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.arr[this.size] = n;
        this.size++;
    }

    popback(): number {
        this.size--;
        return this.arr[this.size];
    }

    resize(): void {
        this.capacity *= 2;
        const newArr = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    getSize(): number {
        return this.size;
    }

    getCapacity(): number {
        return this.capacity;
    }
}