# 6_5_Push To PlanetScale

## section.log

- Install React hook form
- Use register function

## tips

- regiseter
  > connect input and state

```typescript
const { register, watch } = useForm();
console.log(watch())
retrun (
  <form>
    <input
      {...register("username")} ## SAME create state, register Event Listener, put value, onChange to input
    />
```

- Use watch() to create an object with the key entered in B

## issue

- none

## links

## added dependencies

### dependencies

- none

### devDependencies
