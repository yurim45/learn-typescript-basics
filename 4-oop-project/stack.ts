// ๊ฐ์ฒด์งํฅ challenge! ๐ฅ
// Array์ Array์์ ์ ๊ณตํ๋ method๋ฅผ ์ฌ์ฉํ์ง ์๊ณ  stack ๊ตฌํํ๊ธฐ!
// ๋จ์ผ linked list๋ก ๊ตฌํํ๊ธฐ! (โ๏ธ ์ด์ค ์ฐ๊ฒฐ ๋ฆฌ์คํธ)
// ํ๋์ ์์๋ฅผ ๋ธ๋๋ผ๊ณ  ํ๊ณ , 
// ์ฒซ ๋ฒ์งธ ๋ธ๋๋ฅผ head๋ผ๊ณ  ํ๊ณ , ๋ง์ง๋ง ๋ธ๋๋ฅผ tail ์ด๋ผ๊ณ  ํ๋ค.
// pointer์์ ๋ค์ ๋ธ๋๋ฅผ ์ ์ฐพ์๊ฐ ์ ์๋ค

// interface: class๋ฅผ ์ฌ์ฉํ  ๋ ์ง์ผ์ผ ํ๋ ๊ณ์ฝ์?!
interface Stack {
  readonly size: number; // stack์์ ๋ช ๊ฐ์ ๋ฌธ์์ด์ด ์๋์ง ํ์ธํ๊ธฐ ์ํด ์ค์ . ์ธ๋ถ ์ฌ์ฉ์๊ฐ ์์ ํ์ง ๋ชปํ๋๋ก readonly๋ก ์ค์  
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // ๋ถ๋ฉด์ฑ์ ์ ์งํ๊ธฐ ์ํด readonly๋ฅผ ์ ์ฉํ์ฌ ํ ๋ฒ ์๋ ฅ๋ ๊ฐ์ ๋ณํ์ง ์๋๋ก ํจ
  readonly value: string;
  readonly next?: StackNode;
}

class StackImpl implements Stack {
  private _size: number = 0; // ๋ด๋ถ์์๋ readonly๋ฅผ ๋ถํ๋ฉด ๋ด๋ถ์์๋ ์์ ์ด ๋ถ๊ฐํ๋ฏ๋ก private์ผ๋ก ์ ์ธ
  private head?: StackNode; // head๋ ๋ด๋ถ์์๋ง ์ฌ์ฉ(private)ํ๊ณ  StackNode๋ฅผ ๊ฐ๋ฆฌํฌ ์๋ ์๊ณ  ์๋ ์๋ ์๊ธฐ ๋๋ฌธ์ optional๋ก ์ ์

  constructor(private capacity: number) { } // ์ฒ์ ์ฌ์ฉํ  ๋ ์ฐ๊ฒฐ ๋ฆฌ์คํธ์ ์ฌ์ด์ฆ๋ฅผ ์๋ ฅ ๋ฐ๊ธฐ ์ํ ์ฝ๋
  get size() { // get์ผ๋ก ์ ์ํ๋ฉด ์ธ๋ถ์์๋ ์ ๊ทผ ๋ถ๊ฐํ๊ณ (setter๊ฐ ์๊ธฐ ๋๋ฌธ์) ๋ด๋ถ์์๋ ์ ๊ทผ ๊ฐ๋ฅํ๋ค
    return this._size; // ๋๊ฐ์ ๋ณ์๋ช์ด ์๊ณ  ๊ทธ ์ค private(๋ด๋ถ์์๋ง ์ฌ์ฉํ๋) level์ ์ธ๋๋ฐ_๋ฅผ ๋ถํ ๊ตฌ๋ถํด์ฃผ๋ฉด ๋๋ค. 
  }

  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error('Stack is full!!')
    }
    const node: StackNode = {
      value,
      next: this.head
    }
    this.head = node; // head๋ ์๋ก ๋ค์ด์จ node๋ฅผ ๊ฐ๋ฆฌํค๊ฒ ํ๋ค
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