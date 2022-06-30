// Data Structures 

// Binary Search Trees 

class Node {
    constructor(value) {
        this.value = value; 
        this.left = null; 
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }
    insert(value) {
        let newNode = new Node(value); 
        if (this.root === null) {
            this.root = newNode; 
            return this; 
        } else {
            let current = this.root; 
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode; 
                        return this;
                    } else {
                        current = current.left; // update current
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode; 
                    } else {
                        current = current.right; 
                    }
                } 
            } 
        }
    }

    find(value) {
        if (this.root === null) return false; 
        let current = this.root; 
        let found = false; 
        while (current && !found) {
            if (value < current.value) {
                current = current.left; 
            } else if (value > current.value) {
                current = current.right; 
            } else {
                found = true;
            }
        }
        if (!found) return undefined; 
        return current; 
    }

    BFS() {
        let node = this.root,
        data = [], // what will return at the end 
        queue = []; // empty array 
        queue.push(node); // place the root in the queue; 
        while (queue.length) { // as long as something is in the queue, we remove from the beginning
            node = queue.shift(); 
            data.push(node.value); 
            if (node.left) queue.push(node.left); // if there is a node on the left, we push it into the queue 
            if (node.right) queue.push(node.right); 
        }
        return data; 
    }
}