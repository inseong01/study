// 템플릿 리터럴 타입
// 템플릿 리터럴을 이용해 특정 패턴을 갖는 String 타입
type Color = 'Red' | 'Green' | 'Blue';
type Animal = 'Dog' | 'Cat';
type ColoredAnimal = `${Color}-${Animal}`;
