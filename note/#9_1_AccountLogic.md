# 9_1_AccountLogic

## section.log

- Use `findUnique()` to find User(email)
- `findUnique()` return `< User | null >`

```tsx
if (email) {
  const user = await client.user.findUnique({
    where: {
      email,
    },
  });
}
```

- `+phone`을 해주는 이유 = Form에서 string으로 전송된 숫자를 int로 변환!

```tsx
user = await client.user.findUnique({
      where: {
        phone: +phone,
      }
```

- 위에서 작성한 것은 이미 `es6문법`과 `upsert method`로 만들어져서 쉽게 구현이 가능하다.

```tsx
const user = await client.user.upsert({
  where: {
    ...(phone ? { phone: +phone } : {}),
    ...(email ? { email } : {}),
  },
  create: {
    name: "Anonymous",
    ...(phone ? { phone: +phone } : {}),
    ...(email ? { email } : {}),
  },
  update: {},
});
```

- 나아가 코드의 중복을 최소화하기 위해 `const payload`를 이용해 한줄로 코드 중복을 줄인다.

```tsx
const payload = phone ? { phone: +phone } : { email };
const user = await client.user.upsert({
  where: {
    ...payload,
  },
  create: {
    name: "Anonymous",
    ...payload,
  },
  update: {},
});
```

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
