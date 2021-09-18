{
  //함수를 제네릭 하게 :) 

  // number형만 받을 수 있는 함수이므로 좋지 않음. String 불가
  // 그렇다고 타입별로 함수를 모두 만드는것은.. 😱
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('Not valid number!')
    }
    return arg;
  }

  checkNotNullBad(123);

  // 타입이 보장되지 않으므로 좋지 않음
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('Not valid number!')
    }
    return arg;
  }

  checkNotNullAnyBad(null);


  // 함수를 제네릭 하게!!!!!! 👍
  // 제네릭: 통상적인, 일반적인, 라는 의미
  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error('Not valid number!')
    }
    return arg;
  }

  const number = checkNotNull(123); // 함수를 호출하는 동시에 number으로 정의 됨
  const bool: boolean = checkNotNull(true); // 함수의 결과를 받을 때, 타입을 지정해주면 타입이 좀 더 명확하다
}
