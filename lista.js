class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getNextNode() {
    return this.nextNode;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    newNode.setNextNode(this.head);
    this.head = newNode;
  }

  remove(data) {
    let current = this.head;
    let previous = null;
    let found = false;

    while (!found) {
      if (current.getData() === data) {
        found = true;
      } else {
        previous = current;
        current = current.getNextNode();
      }
    }
    //esto para eliminar primer elemento
    //(si este es el buscado)
    if (previous === null) {
      this.head = current.getNextNode();
    } else {
      previous.setNextNode(current.getNextNode());
    }
  }
  isEmpty() {
    return this.head === null;
  }
  size() {
    let current = this.head;
    let counter = 0;

    while (current !== null) {
      counter++;
      current = current.getNextNode();
    }
    return counter;
  }

  search(data) {
    let current = this.head;
    let found = false;

    while (current && !found) {
      if (current.getData() === data) {
        found = true;
      } else {
        current = current.getNextNode();
      }
    }
    return found;
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // here begins
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  index(data) {
    let current = this.head;
    let counter = 0;
    let found = false;

    while (current !== null && !found) {
      if (current.getData() === data) {
        found = true;
      } else {
        counter++;
        current = current.getNextNode();
      }
    }
    return current === null ? false : counter;
  }

  append(data) {
    let current = this.head;
    const newNode = new Node(data);
    let found = false;

    while (current !== null && !found) {
      if (current.getNextNode() === null) {
        current.setNextNode(newNode);
        current = current.getNextNode();

        found = true;
      } else {
        current = current.getNextNode();
      }
    }
  }
  pop() {
    let current = this.head;
    let previous = null;
    let found = false;

    while (current !== null && !found) {
      if (current.getNextNode() === null) {
        found = true;
        previous.setNextNode(current.getNextNode());
        return current.getData();
      } else {
        previous = current;
        current = current.getNextNode();
      }
    }
  }

  pop(pos) {
    let current = this.head;
    let previous = null;
    let found = false;
    let counter = 0;

    while (current !== null && !found) {
      if (counter === pos) {
        found = true;
      } else {
        previous = current;
        current = current.getNextNode();
      }
      counter++;
    }
    //esto para eliminar primer elemento
    //(si este es el buscado)
    if (previous === null) {
      this.head = current.getNextNode();
    } else {
      previous.setNextNode(current.getNextNode());
    }
    return current.getData();
  }

  insert(pos, item) {
    let current = this.head;
    let previous = null;
    const newNode = new Node(item);
    let found = false;
    let counter = 0;

    while (current !== null && !found) {
      if (counter === pos) {
        found = true;
      } else {
        previous = current;
        current = current.getNextNode();
        counter++;
      }
    }
    //(si primer elemento es el buscado)
    if (previous === null) {
      this.head = newNode;
      newNode.setNextNode(current);
    } else {
      newNode.setNextNode(previous.getNextNode());
      previous.setNextNode(newNode);
    }
  }
}

const list = new List();

//list.add(5);
list.add(3);
list.add(1);
console.log(list);
