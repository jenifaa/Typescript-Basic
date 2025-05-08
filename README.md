## 1. What are some differences between interfaces and types in TypeScript?

In TypeScript, an interface is a structure that can only be used for objects. It defines which properties should be present in the object and what the types of those properties should be.

type is a type alias that can store a data type with a named variable.

```
1. Interfaces are only used for objects, while types can define everything.

2. A type can extend using | (union) and & (intersection), whereas an interface can easily extend using the extends keyword.

3. A type cannot be declared more than once, but an interface can be declared multiple times, and it will merge automatically.

4. Types can be used in complex functions, whereas interfaces are typically used for simple object shapes and do not support complex types.

```




## 2. Provide an example of using union and intersection types in TypeScript.

### Union type:

Union types are used when, in multiple inputs, I need to check if any of the values are true. I work with all the defined variables using a union type, and if any of the values is true, the function will return true. Union type define using the | symbol to combine multiple types.

#### For example:

```
 type input = string | number;

 function checkInput(value: input): boolean {
  return value === true || value === 1;
 }
```
### Intersection type:

Intersection types are used when, in multiple inputs, I need to check if all the inputs are true. If any one of the inputs is false, the function will return false; but if all are correct, it will return true. Intersection types combine multiple types, and the resulting type must satisfy all of them.Intersection type define using the & symbol to check the multiple inputs.

#### For example:

```
type number1 = { value: number };
type number2 = { value: number };

type InRange = number1 & number2;

function checkNumber(input: InRange): boolean {
  if (input.value > 2 && input.value < 4) {
    return true;
  } else {
    return false;
  }
}
```

#### Using both in one function:

```
type StringOrNumber = string | number;

type Person = { name: string } & { age: number };

function meeting(input: StringOrNumber, person: Person): string {
  if (typeof input === 'string') {
    return `Hello ${input}, ${person.name} is ${person.age} years old.`;
  } else {
    return `Hello ${input}, ${person.name} is ${person.age} years old.`;
  }
}
```
