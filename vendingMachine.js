class Stock {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
class VendingMachine {
  constructor() {
    this.dispenser = [];
    this.credit = 0;
    this.stockProperty = { A: [{}, {}, {}], B: [{}, {}, {}], C: [{}, {}, {}] };
  }
  // addStock(stock, "B3")
  addStock(stockObj, position) {
    const postitionArr = position.split(""); // => ['B','3']
    const key = postitionArr[0]; // B
    const positionNum = postitionArr[1]; // 3

    const row = this.stockProperty[key];
    row[positionNum - 1] = stockObj;

    //   this.stockProperty[postitionArr[0]][postitionArr[1] - 1] = stock;
  }
  // addCredit(50)
  addCredit(money) {
    this.credit = this.credit + money;
  }
  // getStock("A1")
  getStock(position) {
    const postitionArr = position.split(""); // => ['B','3']
    const key = postitionArr[0]; // B
    const positionNum = postitionArr[1]; // 3

    const row = this.stockProperty[key];

    return row[positionNum - 1];
  }
  purchaseItem(position) {
    // if this.credit > this.price = this.quanitity DECREASE
    // if this.credit < this.price = 'Insuffucient credit"
    const stock = this.getStock(position);

    if (stock.name === undefined) {
      return "No stock found";
    }

    if (this.credit >= stock.price) {
      this.dispenser.push(stock.name);
      stock.quantity = stock.quantity - 1;
      this.credit = this.credit - stock.price;
    } else {
      return "Insufficient credit";
    }
  }
}
module.exports = { Stock, VendingMachine };
