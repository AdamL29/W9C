let itemNames = [`hammer`, `heart`, `hamper`];
let itemPrices = [12, 5000, 50];
let inStock = [true, false, true];

let firstItemName = "hammer";
let firstItemPrice = 12;

itemNames.push(1);
itemPrices.push(2);
inStock.push(3);

let lastItemName = itemNames.pop();{
    console.log("removed lastItemName");
}
let lastItemPrice = itemPrices.pop();{
    console.log(`removed lastItemPrice`);
}
let lastItemStock = inStock.pop();{
    console.log(`lastItemStock`);
}