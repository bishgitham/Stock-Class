**SECTION A**

Write a `Stock` class that will return stock instances.

An instance of the `Stock` class must have the following properties:

It must have name, price and quantity properties:

```js
const marsBars = new Stock("marsBar", "50p", 6);

marsBars.name; // 'marsBar'

marsBars.price; // '50p'

marsBars.quantity; // 6
```

**SECTION B**

Write a `VendingMachine` class that will return vending machine instances.

It must have a `dispenser` property, which is an empty array

```js
const testMachine = new VendingMachine();
testMachine.dispenser; // []
```

It must have a `credit` property, which will be a **number** representing amount of pence, starting at `0`.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0;
```

It must have a stock property, which will be an object with three keys:
It represents the positions in the machine: e.g. A1, A2, A3, ...etc

```js
const testMachine = new VendingMachine();
testMachine.stock;
/** {
A : [{},{},{}],
B : [{},{},{}],
C : [{},{},{}]
};
**/
```

It must have an `addStock` method which will add new stock instances to the vending machine at the correct position.

```js
const marsBars = new Stock("marsBar", "50p", 6);
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A1");
testMachine.stock;
/**
{ A: [{ name: 'marsBar', price: '50p', quantity: 6 }, {}, {} ],
  B: [ {}, {}, {} ],
  C: [ {}, {}, {} ] }
 **/
```

It must have an `addCredit` method which will update the machine credit.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0
testMachine.addCredit(50);
testMachine.credit; // 50
testMachine.addCredit(10);
testMachine.credit; // 60;
```

It must have a `purchaseItem` method which will **decrease** the quantity of the stock if there is sufficient credit and it will add an item to the dispenser.

```js
const marsBars = new Stock("marsBar", "50p", 6);
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A2");
testMachine.addCredit(30);
testMachine.purchaseItem("A2"); // returns 'Insufficent credit!'
```

```js
const marsBars = new Stock("marsBar", "50p", 6);
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A1");
testMachine.addCredit(60);
testMachine.purchaseItem("A1");
testMachine.stock;
/**
{ A: [{ name: 'marsBar', price: '50p', quantity: 5 }, {}, {} ],
  B: [ {}, {}, {} ],
  C: [ {}, {}, {} ] }
 **/
testMachine.credit; // 10
testMachine.dispenser; // ['marsBar']
```
