// 트리와 노드 정의하기
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
    // 1. 루트가 존재하는지 확인
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root; // 연결리스트 공부할 때 temp역할 (말과 같이 트리를 순회해줄 친구!)
    while (true) {
      // 값 크기 비교
      // 값이 같은 경우 그냥 무시
      if (value === current.value) return undefined;
      // 현재 노드의 값보다 작은 경우
      if (value < current.value) {
        // 왼쪽으로
        if (current.left === null) {
          // 왼쪽 노드가 비어있는지 확인
          current.left = newNode;
          return this;
        }
        // 왼쪽 노드가 비어있지 않으면, current를 왼쪽 노드로 변경 후 위에서 했던 로직 반복
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          // 오른쪽 노드가 비어있는지 확인
          current.right = newNode;
          return this;
        }
        // 오른쪽 노드가 비어있지 않으면, current를 오른쪽 노드로 변경 후 위에서 했던 로직 반복
        current = current.right;
      }
    }
  }

  contains(value) {
    // 1. 현재 노드가 비어있는지 확인
    if (this.root === null) return false;
    let current = this.root;
    let target = false;
    while (current && !target) {
      // 아직 현재 노드가 존재하면서, 타겟 노드를 못 찾았을때
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        //우리가 찾았다면!
        return true;
      }
    }
    return false;
  }
}
