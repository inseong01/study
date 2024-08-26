// 프로미스와 제네릭
// 반환값을 사용하기 위해 함수의 반환 또는 프로미스의 반환 타입 설정
interface Data {
  status: number;
  message: string;
}

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        status: 200,
        message: 'status is ok',
      });
    }, 1000);
  });
}

let data1 = fetchData();

// data1.then((res) => console.log(res.status)); // Error, res is unknown

/**
 * 1) 프로미스에 <> 제네릭 변수 선언
 */
function fetchData1() {
  return new Promise<Data>((res, rej) => {
    setTimeout(() => {
      res({
        status: 200,
        message: 'status is ok',
      });
    }, 1000);
  });
}

/**
 * 2) 함수 반환 타입 Promise<> 선언
 */
function fetchData2(): Promise<Data> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        status: 200,
        message: 'status is ok',
      });
    }, 1000);
  });
}
