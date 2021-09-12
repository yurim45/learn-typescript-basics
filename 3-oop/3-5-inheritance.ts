{
  // Inheritance 상속으로 다양한 커피 기계 만들기💡

  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
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

  // constructor가 private level일 때는 상속이 불가하므로
  // constructor level을 public 또는 protected level로 변경
  class CafeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, private readonly serialNumber: string) {
      // 자식에서 별도로 constructor 함수를 생성하고 싶다면, super 키워드를 사용해야 하는데,
      // 이 때, 부모에서 선언된 데이터를 그대로 받아서 props로 전달해야 한다.
      // coffeeBeans 부모 constructor에서 선언된 데이터
      super(coffeeBeans)
    }

    private steamMick(): void {
      console.log('steaming some milk.. 🥛')
    }

    // overwriting: 자식 class에서 부모 class의 함수를 덮어씌우는 것
    // overwriting할 때엔 동일한 interface를 따라야 한다
    makeCoffee(shots: number): CoffeeCup {
      // super: 저삭애서 부모에 있는 함수를 사용하고 싶다면 super 키워드를 사용하면 된다
      const coffee = super.makeCoffee(shots);
      this.steamMick();
      return {
        ...coffee,
        hasMilk: true
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CafeLatteMachine(23, 'a123456');
  const coffee = latteMachine.makeCoffee(2);
  console.log(coffee);

}
