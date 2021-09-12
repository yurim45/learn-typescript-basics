{
  // Polymorphism 다형성 가좌아!
  // Polymorphism: class를 상속하고 각각의 상속받은 자식에서, 자식에게 맞게 부모의 함수를 다시 구현하는 것

  type CoffeeCup = {
    shots: number,
    hasMilk?: boolean,
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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

    clean() {
      console.log('cleaning the machine.. 🧼')
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
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

  class CafeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, private readonly serialNumber?: string) {
      super(coffeeBeans)
    }

    private steamMick(): void {
      console.log('steaming some milk.. 🥛')
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMick();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true
      }
    }
  }

  // Polymorphism의 장점
  // 내부적으로 구현된 다양한 class들이 
  // 한 가지의 interface를 구현하거나 또는 
  // 동일한 부모 class를 상속했을 때
  // 동일한 함수를 어떤 class인지 구분하지 않고 공동된 함수(makeCoffee)를 호출할 수 있다는 것이 큰 장점이다
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, 'a123456'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(32),
    new CafeLatteMachine(32, 'b123456'),
    new SweetCoffeeMaker(32),
  ];

  machines.forEach(machine => {
    console.log('--------------------------');
    machine.makeCoffee(2);
  })
}
