{
  // 객체지향적으로 커피기계 만들기 💡 (static 사용)  

  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }
  // class로 변환하기
  // class로 만든다는 것은 1. 관련된 데이터 또는 함수를 한 곳에 묶는 다는 것
  // 2. 청사진 즉, 템플릿을 만드는 기능을 한다
  class CoffeeMaker {
    // class 내부에서는 let, const, function 선언 키워드를 사용하지 않아도 된다
    static BEANS_GRAMM_PER_SHOT: number = 7; // static 라는 키워드를 붙히면 class level이 된다 
    //                                          ⇒ class level이 된다는 것은 instance마다 생성되지 않음을 의미. 성능향상에 도움이 된다
    coffeeBeans: number = 0; // static이 없다면 instance(object) level

    // class로 instance를 만들 떄 항상 호출되는 함수
    // coffee 기계를 만들면서 coffeeBeans를 넣어두고 싶다면 인자로 전달하면 된다.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,  // key와 vlaue가 동일하다면 생략가능 shots: shots ⥤ shots
        hasMilk: false
      }
    }
  }

  // new라는 키워드로 CoffeeMaker라는 class의 instance를 만들어서 maker안에 담는다
  const maker = new CoffeeMaker(32);
  console.log(maker);

  CoffeeMaker.makeMachine(2); // static으로 선언된 메소드이므로 instance를 별도로 만들지 않고 class 외부에서도 호출 가능.
  //                             static 없이 멤버 메소드라면 만들어진 instance로 호출해야 함. maker.makeMachine(2);
}
