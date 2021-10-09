// 객체지향 challenge! 🔥
// Array와 Array에서 제공하는 method를 사용하지 않고 stack 구현하기!
// 단일 linked list로 구현하기! (↔︎ 이중 연결 리스트)
// 하나의 요소를 노드라고 하고, 
// 첫 번째 노드를 head라고 하고, 마지막 노드를 tail 이라고 한다.
// pointer에서 다음 노드를 잘 찾아갈 수 있다

// interface: class를 사용할 때 지켜야 하는 계약서?!
interface Stack {
  readonly size: number; // stack안에 몇 개의 문자열이 있는지 확인하기 위해 설정. 외부 사용자가 수정하지 못하도록 readonly로 설정 
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // 불면성을 유지하기 위해 readonly를 적용하여 한 번 입력된 값은 변하지 않도록 함
  readonly value: string;
  readonly next?: StackNode;
}

class StackImpl implements Stack {
  private _size: number = 0; // 내부에서도 readonly를 붙히면 내부에서도 수정이 불가하므로 private으로 선언
  private head?: StackNode; // head는 내부에서만 사용(private)하고 StackNode를 가리킬 수도 있고 아닐 수도 있기 때문에 optional로 정의

  constructor(private capacity: number) { } // 처음 사용할 때 연결 리스트의 사이즈를 입력 받기 위한 코드
  get size() { // get으로 정의하면 외부에서는 접근 불가하고(setter가 없기 때문에) 내부에서는 접근 가능하다
    return this._size; // 똑같은 변수명이 있고 그 중 private(내부에서만 사용하는) level을 언더바_를 붙혀 구분해주면 된다. 
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!!')
    }
    const node: StackNode = {
      value,
      next: this.head
    }
    this.head = node; // head는 새로 들어온 node를 가리키게 한다
    this._size++;
  }

  pop(): string { // null == undefind, null !== undefind
    if (this.head == null) {
      throw new Error('Stack is empty!')
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push('yr 1');
stack.push('jh 2');

while (stack.size !== 0) {
  console.log(stack.pop());
}