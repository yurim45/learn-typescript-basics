{
  // ReadOnly π
  // μ½μ μλ§ μλ νμ. λΆλ³μ±μ μ§ν€κΈ° μν΄μ μ¬μ©λλ€


  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'jaja';  // λ³΄μ¬μ£ΌκΈ°λ§ νλ ν¨μμμ, κ°μ μμ νμ§ λͺ»νκ² νκΈ° μν΄ Readonlyλ‘ κ΅¬ν
  }
}
