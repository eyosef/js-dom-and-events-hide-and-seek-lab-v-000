function getFirstSelector (selectors) {
    return document.querySelector(selectors);
}

function nestedTarget(target) {
    return document.querySelector('#nested .target');
}

function increaseRankBy (n) {
    const lis = document.querySelectorAll('.ranked-list');
    for (let i = 0; i < lis.length; i++) {
      const children = lis[i].children;
      for (let j = 0; j < children.length; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML, 10) + n;
      }
    }
  }
  
  function deepestChild () {
    let node = document.getElementById('grand-node');
    let nextNode = node.children[0];
    while (nextNode) {
      node = nextNode;
      nextNode = node.children[0];
    }
    return node;
  }