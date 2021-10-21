{
  // Index type: 모든 것의 출발!

  // Index 기본 예시
  const obj = {
    name: 'april',
  };
  obj.name; // april
  obj['name']; // april


  // Index type 예시1
  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  // Index type 활용1
  type Name = Animal['name']; // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; //'male' | 'female'

  // Index type 활용2
  type Keys = keyof Animal; // 'name' | 'age' | 'gender' 총 세가지가 union type으로 할당됨
  const key: Keys = 'gender';

  // Index type 예시2
  type Person = {
    name: string;
    gender: Animal['gender'];
  };

  // Index type 활용1
  const person: Person = {
    name: 'april',
    gender: 'male',
  };
}
