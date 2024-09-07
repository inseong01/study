# 문제해결 & 패턴
Problem & Solving Pattern

```
< Problem Solving Pattern >

1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor
```

문제해결 과정
--
### 1. 문제 이해하기
본인 방식대로 설명할 수 있나    
입력/출력값은 어떤 형태인가   
문제의 중요한 부분은 어디인가    

### 2. 구체적 예시
간단한 입력값 예시    
빈값, 유효하지 않은 입력값, 예외사항 예시   
	
### 3. 세분화 - 문제 수행
의사코드(계획) 작성: 작업방향성 결정   

*의사코드: 프로그램을 작성할 때 각 모듈이 작동하는 논리를 표현하기 위한 언어* 

### 4. 해결 / 단순화
시간이 많이 소요되는 것(해결되지 않는 것)은 간단한 해결책 작성으로 단순화   
다른 부분으로 넘어간 다음에 다시 시도   

### 5. 수정하기
다른 접근방식 있는지?    
해결책이 직관적인지?   
다른 곳에도 적용할 수 있는지?    
성능을 향상시킬 수 있는지(시간, 공간 복잡도)?    

패턴
--
### Frequency Counter   
객체를 사용하여 `value` 빈도수를 수집하는 패턴이다.   
배열이나 문자열에서 중첩된 반복문 또는 `O(n^2)` 복잡도를 피할 수 있다.

### Multiple Pointers   
두 개의 포인터로 배열이나 문자열의 특정 위치를 가리킨다.    
반복문 중첩이나 `0`과 `length` 두 개의 포인터로 구현하는 패턴이다. 

### Sliding Window    
고정된 윈도우가 움직이며 윈도우 내 데이터를 처리한다.   
포인터가 하나만 있어도 배열의 끝을 알 수 있다.  

### Divide and Conquer    
데이터를 분할하여 작은 조각으로 나누는 것을 반복한다.   
이진탐색, 퀵 정렬 같은 방법이 있다.   

### Dynamic Programming   
### Greedy Algorithms   
### Backtracking    
...

참고자료
--
[JavaScript 알고리즘 & 자료구조 마스터클래스 - Colt Steele](https://www.udemy.com/course/best-javascript-data-structures/?couponCode=SKILLS4SALEA)  
[Problem Solving Patterns Slids - colt_steele](https://cs.slides.com/colt_steele/problem-solving-patterns#/33)