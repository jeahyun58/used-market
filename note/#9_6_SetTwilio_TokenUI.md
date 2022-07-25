# 9_6_SetTwilioUI

## section.log

- Set sendgrid to sending email

  > mailgund이나 기타 서비스 이용하는방식도 같음

- Set Twilio to sending SMS

- 전화번호 로그인 하는 칸에 prisma 설정을 Int에서 BigInt로 바꿔줌, 혹은 string 타입으로 변경해줘서 처리하면 됌.

- 그리고 User가 삭제될때 토큰이 동시에 삭제되도록 하기위해 `onDelte: Cascade` 설정

- useMutation.tsx에서 재사용 가능한 컴포넌트를 생성하기 위해 `Generic` 에 관한 설정을 진행

## tips

- none

## issue

- none

## links

- Prisma BigInt : [Prisma BigInt Doc][refer1]

[refer1]: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt

- Generic response : [Generic response Doc][refer2]

[refer2]: https://www.typescriptlang.org/ko/docs/handbook/2/generics.html

## added dependencies

- none

### dependencies

- none

### devDependencies
