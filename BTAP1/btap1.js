// --- CÂU 1 ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- CÂU 2 ---
const products = [
    new Product(1, "Laptop Dell", 1500, 10, "Electronics", true),
    new Product(2, "Chuột Logitech", 25, 50, "Accessories", true),
    new Product(3, "Bàn phím cơ", 80, 0, "Accessories", false),
    new Product(4, "iPhone 15", 1200, 5, "Electronics", true),
    new Product(5, "Tai nghe Sony", 150, 15, "Accessories", true),
    new Product(6, "Cáp sạc", 10, 100, "Accessories", true)
];

console.log("--- Câu 2: Danh sách sản phẩm ---");
console.log(products);

// --- CÂU 3 ---
const nameAndPrice = products.map(p => {
    return { name: p.name, price: p.price };
});
console.log("\n--- Câu 3: Mảng Name & Price ---");
console.log(nameAndPrice);

// --- CÂU 4 ---
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("\n--- Câu 4: Sản phẩm còn hàng ---");
console.log(inStockProducts);

// --- CÂU 5 ---
const hasExpensiveProduct = products.some(p => p.price > 30);
console.log(`\n--- Câu 5: Có sản phẩm giá > 30 không? -> ${hasExpensiveProduct}`);

// --- CÂU 6 ---
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log(`\n--- Câu 6: Tất cả Accessories đều đang bán? -> ${allAccessoriesAvailable}`);

// --- CÂU 7 ---
const totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log(`\n--- Câu 7: Tổng giá trị kho hàng -> ${totalValue}`);

// --- CÂU 8 ---
console.log("\n--- Câu 8: Duyệt for...of ---");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// --- CÂU 9 ---

console.log("\n--- Câu 9: Duyệt for...in ---");
for (let i = 0; i < products.length; i++) {
    const p = products[i]; 
    console.log(`\n[Sản phẩm thứ ${i + 1}]`); 

    for (const key in p) {
        console.log(`  - ${key}: ${p[key]}`);
    }
}

// --- CÂU 10 ---
const activeProductNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("\n--- Câu 10: Tên SP đang bán và còn hàng ---");
console.log(activeProductNames);