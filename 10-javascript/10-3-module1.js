export default function add(a, b) {  // export할 때 default라는 키워드를 붙혀주면 import할 때 다른 이름을 사용해도 된다
  return a + b;
}

export function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {  // 한 파일에서 두 가지의 default를 사용할 수 없다
  console.log('print');
}
