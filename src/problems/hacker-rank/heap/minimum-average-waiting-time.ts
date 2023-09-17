//https://www.hackerrank.com/challenges/minimum-average-waiting-time/

import Heap from "../../../data-structures/heap.js";

//min-heap using the cooking time
const minHeap = new Heap<number[]>([], (a: number[], b: number[]) => a[1] < b[1]);
let remainingCustomers: number[][];

//console.log(minimumAverage([[0, 3], [1, 9], [2, 6]]));
//console.log(minimumAverage([[0, 3], [1, 9], [2, 5]]));
//console.log(minimumAverage([[0, 9], [10, 4]]));
console.log(minimumAverage([[961148050, 385599125], [951133776, 376367013], [283280121, 782916802], [317664929, 898415172], [980913391, 847912645]]));

function minimumAverage(customers: number[][]): number {
    let waitingTimeSum = 0;
    let time = Math.min(...customers.map(c => c[0]));
    remainingCustomers = [...customers];

    while (remainingCustomers.length > 0 || minHeap.getLength() > 0) {
        const next = findNext(time);
        if (next) {
            waitingTimeSum += getWaitingTime(time, next);
            time += next[1];
        } else {
            time = Math.min(...remainingCustomers.map(c => c[0]));
        }
    }

    return Math.floor(waitingTimeSum / customers.length);
}

function findNext(currentTime: number) {
    if (remainingCustomers.length > 0) {
        const newList: number[][] = [];
        remainingCustomers.forEach(c => {
            if (c[0] <= currentTime) {
                minHeap.insert(c);
            } else {
                newList.push(c);
            }
        });
        remainingCustomers = newList;
    }

    return minHeap.extractRoot();
}

function getWaitingTime(currentTime: number, customer: number[]) {
    const time = customer[0];
    const pizza = customer[1];
    const waitingTime = currentTime - time + pizza;
    return waitingTime;
}