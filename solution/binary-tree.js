function BinaryNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(root) {
	this.root = root;
}

BinarySearchTree.prototype.insertNode = insertNode;
BinarySearchTree.prototype.checkIfIncludesNode = checkIfIncludesNode;

// INPUTS: BinaryNode to start at (BinarySearchTree's root), number to insert into the BinarySearchTree
// OUTPUT: None (no return necessary), but `console.log`ing the BinarySearchTree should show an updated tree
function insertNode(numToInsert) {
	// If the BinarySearchTree has no root, set it to a BinaryNode with numToInsert as its value
	if (!this.root) {
		this.root = new BinaryNode(numToInsert);

	// Otherwise, recursively go down the BinarySearchTree to see where to insert the numToInsert
	} else {
		recursivelyInsertNode(this.root, numToInsert);
	}
}

function recursivelyInsertNode(currentNode, numToInsert) {
	// Compare your currentNode's value to numToInsert to see which direction to go
	let direction = numToInsert < currentNode.value ? 'left' : 'right';

	// If the next BinaryNode in that direction is empty, insert here
	if (!currentNode[direction]) {
		currentNode[direction] = new BinaryNode(numToInsert);

	// Otherwise, keep recursively going down the BinarySearchTree
	} else {
		recursivelyInsertNode(currentNode[direction], numToInsert);
	}
}


// INPUTS: BinaryNode to start at (BinarySearchTree's root), number to find in the BinarySearchTree
// OUTPUT: Boolean value representing whether number was found
function checkIfIncludesNode(numToFind) {
	// If this BinarySearchTree has no root, this tree cannot contain numToFind
	if (!this.root) {
		return false;

	// Else, if this BinarySearchTree's root matches numToFind, this tree does contain numToFind
	} else if (this.root.value === numToFind) {
		return true;

	//  Otherwise, recursively go down the BinarySearchTree to check whether the tree contains numToFind
	} else {
		return recursivelyCheckIfIncludesNode(this.root, numToFind);
	}
}

function recursivelyCheckIfIncludesNode(currentNode, numToFind) {
	// Compare your currentNode's value to numToInsert to see which direction to go
	let direction = numToFind < currentNode.value ? 'left' : 'right';

	// Before you go down either direction, check if the currentNode's value is equal to numToFind
	// If it is, you've finished – this tree does contain numToFind
	if (currentNode.value === numToFind) {
		return true;

	// Otherwise, check if the next BinaryNode in the correct direction is empty
	// If it is, this tree does not contain numToFind
	} else if (!currentNode[direction]) {
		return false;

	// If neither of those conditions are true, keep recursively going down the BinarySearchTree
	} else {
		return recursivelyCheckIfIncludesNode(currentNode[direction], numToFind);
	}
}



// Test your code's functionality in your Node REPL
// Run `node` in your Terminal to open your Node REPL, 
// then load this file using `.load binary-tree.js`

// *****ORIGINAL BINARY TREE*****
// let myRootNode = new BinaryNode(10);
// let myBinarySearchTree = new BinarySearchTree(myRootNode);

// *****BINARY TREE AFTER INSERTIONS*****
// myBinarySearchTree.insertNode(12);
// myBinarySearchTree.insertNode(14);
// myBinarySearchTree.insertNode(16);

// let emptyBinarySearchTree = new BinarySearchTree();
// emptyBinarySearchTree.insertNode(1);
// emptyBinarySearchTree.insertNode(2);

// *****FINDING THINGS IN BINARY TREE*****
// myBinarySearchTree.checkIfIncludesNode(16);
// myBinarySearchTree.checkIfIncludesNode(100);

// let anotherEmptyBinarySearchTree = new BinarySearchTree();
// anotherEmptyBinarySearchTree.checkIfIncludesNode(5);
