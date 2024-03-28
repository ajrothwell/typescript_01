
function emailBody1() {
  return 'body'
}

function emailSubject1() {
  return 'subject'
}

interface Emailable2 {
  emailBody(): string
  emailSubject(): string
}

const email2: Emailable2 = {
  emailBody() {return 'test'},
  emailSubject() {return 'test2'}
}

function sendEmail2(emailable: Emailable2, to: string) {
  console.log(emailable.emailBody());
  console.log(emailable.emailSubject());
  console.log(to);
}

sendEmail2(email2, 'Bob')

enum Sizes2 {
  tiny,
  normal,
  huge
}

// console.log(Sizes2);
console.log(Sizes2.tiny);
console.log(Sizes2[Sizes2.tiny]);

class InventoryItem2 {
  name: string
  price: number

  constructor(name: string, price: number) {
    this.name = name
    this.price = price
  }
  buy() {
    console.log(this.name, this.price)
  }
}

const watermelon = new InventoryItem2('new watermelon', 2);
console.log(watermelon.name);
watermelon.buy();

class Product2 extends InventoryItem2 {
  color: string = 'red'
  size: Sizes2

  constructor(name: string, price: number, color: string, size: Sizes2) {
    super(name, price)
    this.color = color
    this.size = size
  }

  buy2() {
    console.log(this.name, this.price, this.color, Sizes2[this.size])
  }
}

const hugeWatermelon = new Product2('huge watermelon', 5, 'green', Sizes2.huge);
hugeWatermelon.buy2();
