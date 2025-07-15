
// Type Assertions in TypeScript

// const theCanvas = document.getElementById('the-canvas') as HTMLCanvasElement
function getNetPrice(price: number, discount: number, format: boolean): number | string {
  let netPrice = price * (1 - discount)
  let test = format ? `$${netPrice}` : netPrice
  console.log('test:', test)
  return test
}

const price = <string>getNetPrice(20, 0, true)


// Generics in TypeScript



// Advanced Narrowing in TypeScript

const reverse = (value: string | string[]) => {
  if (typeof value === 'string') {
    return value.split('').reverse().join('')
  } else {
    return [...value].reverse()
  }
}

console.log(reverse('123'))
console.log(reverse(['1', '2', '3']))

interface Person1 {
  firstName: string
  lastName: string
}

class Person {
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

interface Company1 {
  name: string
}

class Company {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

function greet(entity: Person | Company) {
  // if (entity instanceof Person) {
  if ('firstName' in entity) {
    console.log(`Hello, ${entity.firstName} ${entity.lastName}`)
  } else {
    console.log(`Welcome to ${entity.name}`)
  }
}

greet(new Person('John', 'Doe'))
greet(new Company('Acme Inc.'))

greet({ firstName: 'Jerry', lastName: 'Dow' })
greet({ name: 'Acne Co.' })

