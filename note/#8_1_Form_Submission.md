# 8_1_Form_Submission

## section.log

- Modify Enter Form.
- Form Submission

## tips

- We can use register with curly bracket. cuz we can only use the input directly.
  > input칸에만 직접 사용하고 label이나 div 이런것들이 있을 경우엔 아래와 같이 중괄호로 먹여서 사용.

```typescript
<Input
  register={register("email")}
  name="email"
  label="Email address"
  type="email"
  required
/>
```

- input.tsx에서 register prop을 expand

```typescript
  <input
    id={name}
    {...register} //register prop expand
    {...rest}
```

- Email or Phone을 전환할때 reset을 줘서 동시에 값이 들어가지 않도록해줌

```typescript
const onEmailClick = () => {
  reset();
  setMethod("email");
};
```

- Uploading JSON DATA

  > POST 프로토콜로 JSON인코딩된 DATA를 보내기위해 `fetch()` 함수를 이용

  > `fetch()`

  ```typescript
  let promise = fetch(url, [option]);
  ```

  - `url`- 접근하고자하는 URL

  - `options` - method, header등을 지정

  > NextJS에서는 req.body가 req의 인코딩을 기준으로 인코딩된다.

  > 따라서 `email`을 얻기위해 `req.body.email`를 사용하려면
  > 프론트엔드에 headers에서 `Content-Type`와 일치해야한다.

```typescript
await fetch(url, {
  method: "POST", // *GET, POST, PUT, DELETE 등
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
    "Content-Type": "application/json",
  },
});
```

## issue

- none

## links

- https://nextjs.org/docs/api-routes/api-middlewares

## added dependencies

### dependencies

- none

### devDependencies
