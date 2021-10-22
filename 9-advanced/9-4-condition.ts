// Conditional Type
// 조건에 따라 Type을 지정할 수 있게 하는 것

type Check<T> = T extends string ? boolean : number; // type Check이 기존에 주어진 타입<T>이 string을 상속한다면? boolean으로, 아니라면 number로 지정
type Type = Check<string>; // boolean

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : 'object';

type T0 = TypeName<string>;
('string');
type T1 = TypeName<'a'>;
('string');
type T2 = TypeName<() => void>;
('function');
