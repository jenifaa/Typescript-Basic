## 1. What are some differences between interfaces and types in TypeScript?

In TypeScript, an interface is a structure that can only be used for objects. It defines which properties should be present in the object and what the types of those properties should be.

type is a type alias that can store a data type with a named variable

```
| Feature           | `interface`                                       | `type`                                                    |
| ----------------- | ------------------------------------------------- |---------------------------------------------------------  |
|  Usage            | Used only for defining the structure of an object | Can define objects, functions, unions, tuples, everything |
|                   |                                                   |                                                           |   
|  Extension        | Easily extended using `extends`                   | Combined using `&` (intersection)                         |
|                   |                                                   |                                                           |
|  Merging          | Multiple interfaces with the same name get merged | Cannot declare the same type alias name more than once    |
|                   |                                                   |                                                           |
|  Function Types   | Less commonly used for function types             | Declaring function types is easier and more popular       |
```
