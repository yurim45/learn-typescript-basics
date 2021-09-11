{
  // Encapsulation 캡슐화 시켜보기 💡
  // 외부에서 설정하면 안되는 것들을 안보이게 하기
  // 세 개의 키워드로 각각의 레벨을 지정할 수 있는데
  // public: 기본값. 기본값이므로 생략 가능
  // private: 외부에서 접근 불가. class를 상속받은 자식에서도 접근 불가.
  // protected: 외부에서 접근 불가. 상속받은 자식에서는 접근 가능

  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) { // construnctor함수에 private 키워드를 사용할 경우, new 키워드로 instance 생성이 불가해진다.
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beens: number) {
      if (beens < 0) {
        throw new Error('vlaue for beans should be greater than 0')
      }
      this.coffeeBeans += beens;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false
      }
    }
  }

  // const maker = new CoffeeMaker(32); //constructor가 private level로 되었기 때문에 new 키워드를 사용하면 에러 발생
  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker);


  // 추가! 유용한 Getter와 Setter
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    // private firstName: string;
    // private lastName: string;
    // 위 두개의 멤버변수 선언을 아래처럼 인자에서 직접 선언하여 사용 가능.
    constructor(private firstName: string, private lastName: string) {
      // return `${this.firstName} ${this.lastName}` // 이렇게 return할 경우 외부에서 한번 할당된 fullName값이 연산되지 않으므로 getter를 사용하여 별도로 처리
    }
  }
  const user = new User('yurim', 'kim');
  user.age = 20;
  console.log(user.fullName);
}
