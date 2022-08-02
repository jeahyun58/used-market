# 11_5_ProductDetail

## section.log

- Product를 POST와 동시에 GET도 하기 위해서 method를 배열로 바꿔준다.

  > methods에 method배열을 받도록 설정한뒤에는 이에 맞게 배열로 변경해준다.

- req.method가 있는지 먼저 확인후 다음으로 methods배열안에 any타입의 req.method가 없는지 확인해 오류를 표시하도록 설정함.

- product `index.ts`에 GET을 할 수 있도록 설정

-`[id].ts`를 만들어 벡엔드에서 불러올 수 있도록 한다.

-FrontEnd `[id].tsx`에서 표시되는 항목들이 실제 저장된 데이터로 표시되도록 변경

> 이때 `data?.product?`와 같이 ?를 사용해 존재 유무를 확인하도록 해줘야 오류가 안남

## tips

- none

## issue

- none

## links

- none

## added dependencies

- none

### dependencies

- none

### devDependencies
