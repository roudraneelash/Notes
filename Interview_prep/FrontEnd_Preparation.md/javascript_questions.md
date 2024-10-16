1.const salesData = [
{ product: 'Laptop', quantity: 4, price: 1000 },
{ product: 'Phone', quantity: 10, price: 500 },
{ product: 'Laptop', quantity: 2, price: 1000 },
{ product: 'Tablet', quantity: 5, price: 700 },
{ product: 'Phone', quantity: 3, price: 500 }
];
groupSalesData(salesData);
// Output:
// [
// { product: 'Laptop', totalQuantity: 6, totalSales: 6000 },
// { product: 'Phone', totalQuantity: 13, totalSales: 6500 },
// { product: 'Tablet', totalQuantity: 5, totalSales: 3500 }
// ]

2.const employees = [
{
department: 'Engineering',
employees: [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 }
]
},
{
department: 'HR',
employees: [
{ name: 'Charlie', age: 35 }
]
},
{
department: 'Engineering',
employees: [
{ name: 'David', age: 40 }
]
}
];
groupEmployeesByDepartment(employees);
// Output:
// {
// Engineering: [
// { name: 'Alice', age: 30 },
// { name: 'Bob', age: 25 },
// { name: 'David', age: 40 }
// ],
// HR: [
// { name: 'Charlie', age: 35 }
// ]
// }

3.const users = [
{ userId: 1, name: 'Alice' },
{ userId: 2, name: 'Bob' },
{ userId: 3, name: 'Charlie' }
];

const orders = [
{ orderId: 101, userId: 1, amount: 250 },
{ orderId: 102, userId: 1, amount: 450 },
{ orderId: 103, userId: 2, amount: 700 },
{ orderId: 104, userId: 3, amount: 150 }
];

transformUserOrders(users, orders);
// Output:
// [
// { userId: 1, name: 'Alice', totalAmount: 700, orders: [101, 102] },
// { userId: 2, name: 'Bob', totalAmount: 700, orders: [103] },
// { userId: 3, name: 'Charlie', totalAmount: 150, orders: [104] }
// ]

4.const data = [
{ region: 'North', product: 'A', sales: 100 },
{ region: 'North', product: 'B', sales: 200 },
{ region: 'South', product: 'A', sales: 150 },
{ region: 'South', product: 'B', sales: 250 }
];
pivotTable(data);
// Output:
// [
// { product: 'A', North: 100, South: 150 },
// { product: 'B', North: 200, South: 250 }
// ]

5.const transactions = [
{ id: 1, date: '2023-01-15', amount: 250 },
{ id: 2, date: '2023-01-20', amount: 450 },
{ id: 3, date: '2023-02-10', amount: 700 },
{ id: 4, date: '2023-02-25', amount: 150 },
{ id: 5, date: '2024-01-15', amount: 300 }
];
transactionSummary(transactions);
// Output:
// {
// '2023-01': { totalSales: 700, totalTransactions: 2, avgTransactionValue: 350 },
// '2023-02': { totalSales: 850, totalTransactions: 2, avgTransactionValue: 425 },
// '2024-01': { totalSales: 300, totalTransactions: 1, avgTransactionValue: 300 }
// }
