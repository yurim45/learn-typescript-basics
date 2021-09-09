// 절차지향적으로 커피기계 만들기 💡

{
  type CoffeeCup = {
    shots: number,
    hasMilk: boolean
  }

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!')
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,  // key와 vlaue가 동일하다면 생략가능 shots: shots ⥤ shots
      hasMilk: false
    }
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}


