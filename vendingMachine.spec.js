const { expect } = require("chai");
const { Stock, VendingMachine } = require("../vendingMachine");

describe("Stock", () => {
  it("returns properties of Stock object when passed", () => {
    const chocolate = new Stock("chocolate", "20P", 10);
    expect(chocolate).to.eql({ name: "chocolate", price: "20P", quantity: 10 });
    expect(chocolate.name).to.eql("chocolate");
    expect(chocolate.price).to.eql("20P");
    expect(chocolate.quantity).to.eql(10);
  });
});
describe("VendingMachine", () => {
  it("adds stock correctly to vendingmachine.stockProperty", () => {
    const machine1 = new VendingMachine();
    const stockTest = new Stock("chocoBar", 70, 10);
    const position = "A1";
    machine1.addStock(stockTest, position);
    expect(machine1.stockProperty).to.eql({
      A: [{ name: "chocoBar", price: 70, quantity: 10 }, {}, {}],
      B: [{}, {}, {}],
      C: [{}, {}, {}]
    });
  });
  describe("addCredit", () => {
    it("increases the vale of credit by adding it ", () => {
      const machine1 = new VendingMachine();
      const credit = 20;
      machine1.addCredit(credit);
      expect(machine1.credit).to.eql(credit);
      machine1.addCredit(100);
      expect(machine1.credit).to.eql(120);
    });
  });

  describe("getStock", () => {
    it(" gets the stock from correct position", () => {
      const machine1 = new VendingMachine();
      expect(machine1.getStock("A1")).to.eql({});

      const stock = new Stock("muffin", 10, 7);
      machine1.addStock(stock, "A1");

      expect(machine1.getStock("A1")).to.eql(stock);
    });
  });

  describe("purchaseItem", () => {
    it("decreases the items quantity when stock is successfully purchased", () => {
      const machine1 = new VendingMachine();
      const stockObj = new Stock("chocolate", 40, 5);
      machine1.addCredit(50);
      machine1.addStock(stockObj, "A1");
      machine1.purchaseItem("A1");
      expect(machine1.credit).to.eql(10);
      expect(machine1.stockProperty).to.eql({
        A: [{ name: "chocolate", price: 40, quantity: 4 }, {}, {}],
        B: [{}, {}, {}],
        C: [{}, {}, {}]
      });
      expect(machine1.dispenser).to.eql(["chocolate"]);
    });

    it("returns insufficient fund if credit is less", () => {
      const machine1 = new VendingMachine();
      const stockObj = new Stock("chocolate", 40, 5);
      machine1.addCredit(10);
      machine1.addStock(stockObj, "A1");

      expect(machine1.purchaseItem("A1")).to.eql("Insufficient credit");
    });

    it("If stock is not available in given position, should return no item available", () => {
      const machine1 = new VendingMachine();
      machine1.addCredit(50);

      expect(machine1.purchaseItem("B1")).to.eql("No stock found");
    });
  });
});
