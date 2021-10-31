// import sum, { print as printMessage } from './10-3-module1.js'; 
// export default의 경우 이름 변경이 가능 add -> sum
// import 할 때는 {} 안에 선언된 이름으로 가져와야 하고, 이름을 변경하고 싶다면 as라는 키워드로 변경할 수 있다
import * as calculator from './10-3-module1.js';

console.log(calculator.add(1, 2));

calculator.print();
calculator.number;
