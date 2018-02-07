function BinaryNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(root) {
	this.root = root;
}

BinarySearchTree.prototype.insertNode = insertNode;
BinarySearchTree.prototype.includesNode = includesNode;

// INPUTS: BinaryNode to start at (BinarySearchTree's root), number to insert into the BinarySearchTree
// OUTPUT: None (no return necessary), but `console.log`ing the BinarySearchTree should show an updated tree
function insertNode(numToInsert) {
	if (!this.root) {
		this.root = new BinaryNode(numToInsert, null, null);
	} else {
		insertNodeHelper(this.root, numToInsert);
	}
}

function insertNodeHelper(currentNode, numToInsert) {
	let direction = numToInsert < currentNode.value ? 'left' : 'right';
	if (!currentNode[direction]) {
		currentNode[direction] = new BinaryNode(numToInsert, null, null);
	} else {
		insertNodeHelper(currentNode[direction], numToInsert);
	}
}

// INPUTS: BinaryNode to start at (BinarySearchTree's root), number to find in the BinarySearchTree
// OUTPUT: Boolean value representing whether number was found
function includesNode(numToFind) {
	return includesNodeHelper(this.root, numToFind);
}

function includesNodeHelper(currentNode, numToFind) {
	if (!currentNode) {
		return false;
	} else if (currentNode.value == numToFind) {
		return true;
	} else {
		let direction = numToFind < currentNode.value ? 'left' : 'right';
		if (!currentNode[direction]) {
			return false;
		} else {
			return includesNodeHelper(currentNode[direction], numToFind);
		}
	}
}



// Test your code's functionality in your Node REPL
// Run `node` in your Terminal to open your Node REPL,
// then load this file using `.load binary-tree.js`

// *****ORIGINAL BINARY TREE*****
// let myRootNode = new BinaryNode(10);
// let myBinarySearchTree = new BinarySearchTree(myRootNode);

// *****BINARY TREE AFTER INSERTIONS*****
// myBinarySearchTree.insertNode(myBinarySearchTree.root, 12);
// myBinarySearchTree.insertNode(myBinarySearchTree.root, 14);
// myBinarySearchTree.insertNode(myBinarySearchTree.root, 16);

// *****FINDING THINGS IN BINARY TREE*****
// myBinarySearchTree.includesNode(myBinarySearchTree.root, 14);
// myBinarySearchTree.includesNode(myBinarySearchTree.root, 2);
