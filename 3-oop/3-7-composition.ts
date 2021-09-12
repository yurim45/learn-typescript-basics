{
  // 이번 챕터의 하이라이트 ✨(강력한 Interface!)
  // Favor COMPOSITION over inheritance 상속 대신 Composition을 더 선호하라
  // Composition의 단점을 보완하기

  type CoffeeCup = {
    shots: number,
    hasMilk?: boolean,
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy steaming some milk.. 🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Cold steaming some milk.. 🥛')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true
      }
    }
  }

  class NoMilk implements MilkFrother {

    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('getting some sugar from jar!!!!🐝')
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number, private milk: MilkFrother, private suger: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.suger.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // milk
  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // sugar
  const candySugar = new CandySugarMixer();
  const Sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // machine
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetSugarMachine = new CoffeeMachine(12, noMilk, sugar);
  const latteMachine = new CoffeeMachine(12, cheapMilkSteamer, noSugar);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkSteamer, candySugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkSteamer, Sugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkSteamer, candySugar);
}
