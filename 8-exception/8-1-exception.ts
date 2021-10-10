// Java: Exception 라는 객체가 있고
// JavaScript: Error 라는 객체가 있어서 에러 처리를 한다
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'Not exist!!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents!!';
}

function closeFile(fileName: string): string {
  //
}

function run() {
  const fileName = 'file';

  try {
    console.log(readFile(fileName));
  } catch (error) {  // catch 처리를 하지 않으면 에러 발생시 프로그램이 다운될 수 있는데, catch를 해주면 다운되지 않고 실행시킬 수 있다
    console.log(`catched!!!`)
    return
  } finally {  //  error가 발생했던 아니던 finally는 항상 호출. finally는 try 실행 후 실행되어야 하는 로직을 셋트로 작성하는 것이 좋다
    closeFile(fileName);
    console.log(`closed!!!`);
  }

  //  finally로 처리하지 않으면 에러 핸들링 이후 리턴되어 closeFile 함수가 실행되지 않는다
  // closeFile(fileName);
  // console.log(`closed!!!`);
}
run();