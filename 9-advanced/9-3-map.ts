{
  // Mapped Type: 기존의 타입들을 이용하면서 조금 다른 형태로 변환할 수 있는 것
  // Mapped Type은 간편하고 재사용성을 높게 해준다

  type Video = {
    title: string;
    author: string;
  };

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };


  // Mapped Type을 이해하기 위한 예시: [1, 2].map(item => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in과 동일하게 작동. 결국 P는 하나의 key가 됨. type Video에서는 title과 author
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  // Mapped Type 활용 예제1
  type VideoOptional = Optional<Video>;  // type Video의 type Optional인 type VideoOptional가 만들어짐
  const videoOp: VideoOptional = {
    title: 'hi',
  };

  // Mapped Type 활용 예제2
  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };

  animal.name = 'yeon2';


  // Mapped Type 활용 예제3
  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'april',
  };

  // Mapped Type 활용 예제4
  type Nullable<T> = { [P in keyof T]: T[P] | null };  // type Nullable은 기존의 타입을 받거나(Mapped) 또는 null로 지정
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
