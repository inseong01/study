// 서로소 유니온 타입
// 교집합이 없음, 특정 속성 기준으로 구분
// ?, ! 연산자를 사용하지 않게 해줌으로써 타입 좁히기 수월

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickout: number;
};
type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};
type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};
type User = Admin | Member | Guest;

function login(value: User) {
  switch (value.tag) {
    case 'ADMIN':
      console.log(`현재까지 ${value.kickout}명 추방했습니다.`); // value: Admin
      break;
    case 'MEMBER':
      console.log(`현재까지 ${value.point}포인트를 모았습니다.`); // value: Member
      break;
    case 'GUEST':
      console.log(`현재까지 ${value.visitCount}번 방문했습니다.`); // value: Guest
      break;
  }
}
