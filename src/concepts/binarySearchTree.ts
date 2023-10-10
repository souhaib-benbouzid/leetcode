class TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;

  constructor(value: number) {
    this.value = value;
  }
}

class BST {
  root?: TreeNode;

  print = (node?: TreeNode, results: number[] = []): number[] => {
    if (node) {
      this.print(node.left, results);
      results.push(node.value);
      this.print(node.right, results);
    }

    return results;
  };

  insert = (value: number) => {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      }

      if (value >= current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  };
}

let bst = new BST();

bst.insert(9);
bst.insert(8);
bst.insert(12);
bst.insert(15);
bst.insert(7);
bst.insert(8);

console.log(bst.print(bst.root));
