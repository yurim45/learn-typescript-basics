{
  // Abstraction 추상화 몸소 느껴보기
  // class 안에 다양한 method가 있을 때, 사용자가 어느 method를 먼저 사용해야 할지 헷갈릴 수 있다
  // 이때 적용 가능 한 게 Abstraction!!
  // interface를 간단히 해줌으로써 사용자가 간편하게, 심플하게 사용할 수 있도록 도와준다
  // Abstraction 적용방법은 언어마다 다를 수 있는데, 
  // private 키워드로 encapsulation을 통해서 충분히 구현 가능하다 
  // 그리고 interface를 통해서도 구현 가능하다. interface: class를 사용할 때 지켜야 하는 계약서?!

  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }

  // CoffeeMaker class의 사용 계약서?! interface 키워드로 선언
  // interface 이름은 외부적으로 사용하는 것이기 때문에 의도 그대로 사용하고, class 명에서 변경.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup,
  }
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
    }

    fillCoffeeBeans(beens: number) {
      if (beens < 0) {
        throw new Error('vlaue for beans should be greater than 0')
      }
      this.coffeeBeans += beens;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void { // void: 함수의 return값이 없을 때 지정. 생략 가능
      console.log('heating up.. 🔥')
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots.. ☕️`)
      return {
        shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.makeCoffee(2);
}
