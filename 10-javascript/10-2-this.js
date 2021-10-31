console.log(this);

function simpleFunc() {
  // console.log(this);
}

// simpleFunc(); // global에서 호출한다는 것은 window에서 호출하는 것과 동일
window.simpleFunc(); // window.simpleFunc(); === simpleFunc();와 동일
console.log('============================');
class Counter {
  count = 0;  // 멤버 변수
  increase = () => {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();  // Counter를 출력


const caller = counter.increase;  // counter.increase를 caller 변수에 할당하는 순간 this를 잃어버린다
// let 또는 const로 등록한 함수는 window에 등록하는 것도 아니기 때문에 undefined가 됨
// const caller = counter.increase.bind(counter);
caller();

class jPark { }
const jpark = new jPark();
jpark.run = counter.increase;
jpark.run();
