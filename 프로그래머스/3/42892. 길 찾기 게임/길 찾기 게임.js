class Node {
    constructor(x, num){
        this.x = x;
        this.num = num;
        this.left = null;
        this.right = null;
    }
}

function insertAt(parent, child){
    if (parent.x < child.x){
        if (parent.right) insertAt(parent.right, child);
        else parent.right = child;
    } else {
        if (parent.left) insertAt(parent.left, child);
        else parent.left = child;
    }
}

const pre = [];
const post = [];

function preorder(node){
    if (!node) return;
    
    pre.push(node.num);
    
    preorder(node.left);
    preorder(node.right);
}

function postorder(node){
    if (!node) return;
    
    postorder(node.left);
    postorder(node.right);
    
    post.push(node.num);
}

function solution(nodeinfo) {
    nodeinfo = nodeinfo.map(([a, b], idx) => [a, b, idx+1]);
    nodeinfo.sort((a, b) => b[1] - a[1]);
    
    let root = new Node(nodeinfo[0][0], nodeinfo[0][2]);
    
    for (let i = 1; i < nodeinfo.length; i++){
        insertAt(root, new Node(nodeinfo[i][0], nodeinfo[i][2]));
    }
    
    preorder(root);
    postorder(root);
    
    return [pre, post];
}