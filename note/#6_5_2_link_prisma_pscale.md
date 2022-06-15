# 6_5_Push To PlanetScale

## section.log

- Install pscale and connect

## tips

- Get URL and make a secure tunnel between com and PlanetScale

```typescript
[Terminal]
$ pscale connect carrot-market
```

- Referential integrity (참조 무결성)
  > 한 레코드가 다른 레코드를 참조하는 경우 반드시 해당 참조하는 레코드가 존재해야함.
  > vitess를 이용하는 PlanetScale은 참조 무결성이 없어도 실행은 가능.
- 따라서 Referential integrity을 위해 prisma가 이를 실행시켜주도록 설정

```typescript
generator client {
provider = "prisma-client-js"
previewFeatures = ["referentialIntegrity"]
}
datasource db {
provider = "mysql"
url = env("DATABASE_URL")
referentialIntegrity = "prisma"
}
```

-Define schema and push.

> modify planetscale Database/
> Will create sql automatically

```typescript
[Terminal]
$ npx prisma database push
```

## issue

- none

## links

- referential integrity : [referential integrity][refer]

[refer]: https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-integrity

## added dependencies

### dependencies

- none

### devDependencies
