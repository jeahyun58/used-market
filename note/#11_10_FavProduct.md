# 11_10_FavProduct

## section.log

- Create Fav Model in prisma. => To do API route.

- Create space for handler

  > Create [id] folder, then create `index.ts` in /products/[id]

  > = /products/[id].ts

- BackEnd에서 `findFirst`를 이용해 데이터가 이미 존재하는지 검색,

  > findUnique를 쓰지않는 이유는 unique필드만 쿼리할 수 있기때문에 findFirst를 사용함.

- 존재하면 데이터 삭제, 존재하지않으면 생성 (즐겨찾기 넣고 빼기 기능)

- `delete`

  > `delete` 는 기존 데이터베이스 레코드를
  > 삭제합니다.

  > (id 또는 유니크한 속성으로만 삭제 가능)

```ts
const user = await prisma.user.delete({
  where: { id: 5 },
});
```

- `deleteMany`

  > `deleteMany` 는 트랜잭션에서 여러 레코드를 삭제합니다.
  > (유니크하지 않은 속성으로도 삭제 가능)

```ts
const deletedUserCount = await prisma.user.deleteMany({
  where: { name: "Son" },
});
```

- Optimistic UI Update로 상품 즐겨찾기 기능 구현. `POST`요청을 보내고 응답을 기다리지않고 바로 변경.

- `mutate({},true)` mutate에 2개의 인자를 전달해주는데 첫번째는 본 data 대신 전달해줄 data고, true는 SWR이 URL로 가서 데이터의 최신 버전을 한번더 불러오게하고, false는 해당 작업을 하지않는다.

```ts
mutate({ product: { name: "potato" } }, true);
```

- `제한된(bound)mutate` 함수
  > mutate가 같이 있는 data만 변경 가능한 함수 의미함
  > 벡엔드에 요청을 보내고, 유저에게 보여줌. (순서가 바뀌여도 무관함 보여주고 벡엔드에 보내도 무관)

```ts
toggleFav({});
    if (!data) return;
    mutate({ ...data, isLiked: !data.isLiked }, false);
  };
```

- `unboundMutate` 는 어떠한 데이터를 변경해줄지 키 값을 먼저 명시 `"/api/users/me"`키를 가진 데이터 변경

- `boundMutate` 의 경우엔 필요한 데이터가 컴포넌트 안에 존재 => 이전 데이터에 바로 접근 가능
- `unboundMutate` 의 경우엔 필요한 데이터가 컴포넌트 안에 존재하지 않음 => 이전 데이터에 바로 접근 불가 => 함수를 써서 해결

- `prisma` 에 `product`와 `Fav` model에 각각 서로의 연관된 인자들이 들어가 있기때문에 count하는것은 쉽다.

  > => 내물건에 좋아요를 표시한 사람 수를 쉽게 표시 가능

  > `include`안에 바로 `favs`를 갖고오면 fav 전체데이터를 불러오게 되므로 비효율적임

  ```ts
  const products = await client.product.findMany({
    include: {
      _count: {
        select: {
          favs: true,
        },
      },
    },
  });
  ```

## tips

- none

## issue

- none

## links

- findFirst : [findFirst Doc][refer2]

[refer2]: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findfirst

- delete : [Prisma delete Doc][refer1]

[refer1]: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#delete

- deleteMany : [deleteMany Doc][refer2]

[refer2]: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#deletemany

## added dependencies

- none

### dependencies

- none

### devDependencies
