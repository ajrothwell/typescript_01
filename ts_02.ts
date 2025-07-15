
class InventoryItem {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
  buy1(): this {
    console.log('name:', this.name, 'price:', this.price)
    return this
  }
  
}

const phone = new InventoryItem('wawa', 1000)
phone.buy1()

enum Sizes {
  small,
  medium,
  large
}

class Product extends InventoryItem {
  color: string = 'white'
  size: Sizes

  constructor(name: string, price: number, color: string, size: Sizes) {
    super(name, price)
    this.color = color
    this.size = size
  }

  buy() {
    console.log(this.name, this.price, this.color, Sizes[this.size])
  }
}

const product = new Product('phone', 1000, 'black', Sizes.medium)
const product1 = new Product(
  'cellphone', 1000, 'black', Sizes.medium
)

product.buy()
product1.buy()

class Service extends InventoryItem implements Emailable {
  startTime: Date
  endTime: Date

  constructor(name: string, price: number, startTime: Date, endTime: Date) {
    super(name, price)
    this.startTime = startTime
    this.endTime = endTime
  }
  emailBody() {
    return 'you started at ' + this.startTime
  }
  emailSubject() {
    return 'your service: ' + this.name
  }
}

const lunch = new Service(
  'tuesday lunch',
  15,
  new Date('3/12/2024'),
  new Date('3/12/2024')
)

lunch.buy1()

interface Emailable {
  emailBody(): string
  emailSubject(): string
}

function sendEmail(e: Emailable, to: string) {
  console.log(e.emailBody(), e.emailSubject(), to)
}

sendEmail(lunch, 'andy.rothwell@phila.gov')
