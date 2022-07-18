# 9_2_TokenLogic

## section.log

- `connect`를 이용하여 기존 데이터에 Token을 연결함
- `connectOrCreate`를 이용하여 기존 데이터를 확인하여 데이터가 있으면 Token과 연결하고 없는 경우 Create한다.

- `connectOrCreate`는 아래와 같이 where과 create를 요구함. 따라서 이전에 user을 생성할때 한 작업은 prisma를 이용해 한번에 처리할 수 있다. 매우 좋은 기능!!

```tsx
connectOrCreate: {
    where: {
        phone: number;
        email?: undefined;
    } | {
        email: any;
        phone?: undefined;
    };
    create: {
        phone: number;
        email?: undefined;
        name: string;
    } | {
        email: any;
        phone?: undefined;
        name: string;
    };
}
```

## tips

- none

## issue

- none

## links

- https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#connectorcreate

## added dependencies

- none

### dependencies

- none

### devDependencies
