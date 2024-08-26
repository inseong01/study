// 인덱스 엑세스 타입
interface Type {
  name: string;
  profile: {
    id: number;
    login: boolean;
  };
}
let user1: Type = {
  name: 'Seo',
  profile: {
    id: 1,
    login: true,
  },
};

// 대괄호 표기로 프로퍼티 타입 추출 가능
function checkLogin1(profile: Type['profile']) {
  if (!profile.login) return;
  console.log(`로그인 됐습니다.`);
}
// 대괄호 표기 중첩 가능
function checkLogin2(login: Type['profile']['login']) {
  if (!login) return;
  console.log(`로그인 됐습니다.`);
}
type Type1 = Type['profile']['login']; // Type1: boolean

// 배열 타입
type TypeList = {
  name: string;
  profile: {
    id: number;
    login: boolean;
  };
}[];
let user2: TypeList[number] = {
  name: 'Ji',
  profile: {
    id: 2,
    login: false,
  },
};
function checkLogin3(profile: TypeList[number]['profile']) {
  if (!profile.login) return;
  console.log(`로그인 됐습니다.`);
}
checkLogin3(user2.profile);
type TypeList1 = TypeList[number]['profile']['id']; // TypeList1: number

// 튜플 타입
type tuple = [number, string, tuple];
type tuple1 = tuple[0]; // tuple1: number
type tuple2 = tuple[1]; // tuple2: string
type tuple3 = tuple[number]; // tuple3: number | string | tuple
