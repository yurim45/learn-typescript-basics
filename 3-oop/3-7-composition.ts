{
  // 모든것을 뒤엎는 Composition? 🍭
  // Favor COMPOSITION over inheritance 상속 대신 Composition을 더 선호하라
  // Composition? 필요한 부분만 조립해서 작업하는 것

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

  // 우유 거품기
  class MilkSteamer {
    private steamMilk(): void {
      console.log('steaming some milk.. 🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true
      }
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log('getting some sugar from candy 🍭')
      return true
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(
      coffeeBeans: number,
      private readonly serialNumber: string,
      private milkFother: MilkSteamer
    ) {
      super(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee)
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(coffeeBeans: number, private sugar: AutomaticSugarMixer) {
      super(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee)
    }
  }

  // Composition의 단점? 
  // class들 끼리 서로 잘 알고 지내게 되면 추 후 확장성, 유지보수성이 떨어진다
  // SweetCafeLatteeMachine 입장에서 보면 꼭 MilkSteamer에서 우유를 받아올 필요가 없다. 그냥 우유만 받아오면 되는 것! 
  // 이러한 class 간 커플링을 피하기 위해서는 interface를 활용하면 된다.

  class SweetCafeLatteeMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, private milkFother: MilkSteamer, private sugar: AutomaticSugarMixer) {
      super(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots)
      return this.milkFother.makeMilk(this.sugar.addSugar(coffee));
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, 'a123456'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(32),
    new CafeLatteMachine(32, 'b123456'),
    new SweetCoffeeMaker(32),
    new SweetCafeLatteeMachine(32)
  ];

  machines.forEach(machine => {
    console.log('--------------------------');
    machine.makeCoffee(2);
  })
}
