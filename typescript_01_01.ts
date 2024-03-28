function sum({x, y} : {x: number, y: number}) : number {
  return x + y
}
console.log(sum({x:2, y:2}))
function log(value: any) {
  console.log(value)
}
// log(6)
function greet(name? : string) {
  if (name) {
      console.log(`Hello ${name}`)
  } else {
      console.log('Hello Stranger')
  }
}
// greet('Bob')
// greet()

let booleanOrString : string | boolean = 'I could change'
booleanOrString = true

function printId(id: number | string) {
  if(typeof id == 'string'){
      console.log(id.toUpperCase())
  } else {
      console.log(id)
  }
}
// printId('andy')
// printId(5566)

// Type Aliases in TypeScript
type Sizes1 = 'small' | 'medium' | 'large'
// function setProductSize(size: 'small' | 'medium' | 'large') {
function setProductSize1(size: Sizes1) {
  //...
  console.log(size)
}
// setProductSize1('small')
// most of these aren't useful

// Defining Interfaces in TypeScript
interface InventoryItem1 {
  name: string,
  price: number,
}

interface Product1 extends InventoryItem1 {
  color?: string,
}

interface Service1 extends InventoryItem1 {
  startTime: Date,
  endTime: Date,
}

const tshirt1: Product1 = {
  name: 'T-Shirt Design B',
  price: 12
}

const photoShoot : Service1 = {
  startTime: new Date('May 9, 2009'),
  endTime: new Date('May 9, 2009'),
  name: 'Kelly Wedding Photo Shoot',
  price: 450
}

function purchaseItem(item: InventoryItem1) : InventoryItem1 {
  console.log(item.price)
  return item
}

// purchaseItem({
//     price: 1,
//     name: 'thing',
// })

// purchaseItem(tshirt1)
// purchaseItem(photoShoot)

enum Sizes {
  small, // 0
  medium, // 1
  large // 2
}

// console.log(Sizes)
// console.log(Sizes.small)
// console.log(Sizes[0])

function setProductSize(size: Sizes) {
  console.log(size)
}

// setProductSize(Sizes.small)

class InventoryItem {
  name: string
  price: number

  constructor(name: string, price: number) {
      this.name = name
      this.price = price
  }
  buy(): this {
      console.log(this.price)
      return this
  }
}

class Product extends InventoryItem {
  color: string = 'gray'
  size?: Sizes

  constructor(name: string, price: number) {
      super(name, price)
  }
}

class GreenProduct extends Product {
  constructor(name: string, price: number) {
      super(name, price)
      this.color = 'green'
  }
}

class Service extends InventoryItem implements Emailable {
  startTime: Date
  endTime: Date

  constructor(name: string, price: number, startTime: Date, endTime: Date) {
      super(name, price)
      this.startTime = startTime
      this.endTime = endTime
  }
  emailBody() {
      return `Thank you for purchasing ${this.name}`
  }
  emailSubject() {
      return `${this.name} | My Company`
  }
}

const tshirt = new Product('Tshirt Design B', 18)
tshirt.size = Sizes.medium
tshirt.color = 'green'
tshirt.buy()

const videoShoot = new Service(
  'Kelly Wedding Video Shoot',
  450,
  new Date('May 9, 2009'),
  new Date('May 9, 2009')
)

videoShoot.buy()

interface Emailable{
  emailBody(): string,
  emailSubject(): string
}

function sendEmail(emailable: Emailable, to: string) {
  console.log('Body:', emailable.emailBody())
  console.log('Subject:', emailable.emailSubject())
  console.log('To:', to)
}

// sendEmail(tshirt, 'andy.rothwell@phila.gov')
sendEmail(videoShoot, 'andy.rothwell@phila.gov')

