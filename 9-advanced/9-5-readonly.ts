{
  // ReadOnly 😜
  // 읽을 수만 있는 타입. 불변성을 지키기 위해서 사용된다


  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';  // 보여주기만 하는 함수에서, 값을 수정하지 못하게 하기 위해 Readonly로 구현
  }
}
