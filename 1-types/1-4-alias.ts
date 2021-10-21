{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'april';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'april',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let aprilName: Name;
  aprilName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
