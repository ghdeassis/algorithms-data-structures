import { LinkedListNode } from "../../../data-structures/linked-list.js";

function hasCycle(node: LinkedListNode) {
    //floyd cycle finding algorithm or hare-tortoise algorithm 
    //O(n) complexity and O(1) space   
    if (!node || !node.next) {
        return 0;
    }
    let slow = node;
    let fast = node;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return 1;
        }
    }
    return 0;
}

function hasCycleTraversal() {
    //linked list traversal
    //O(n) complexity and O(n) space
    /*const visitedNodes = new Set();
    while (node) {
        if (visitedNodes.has(node)) {
            return 1;
        }
        visitedNodes.add(node);
        node = node.next;
    }
    return 0;*/
}