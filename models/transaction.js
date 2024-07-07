const transactions = [
    {
      id: 1,
      item_name: "Salary",
      amount: 5000,
      date: new Date("2024-06-01").toLocaleDateString(),
      from: "Employer",
      category: "Income"
    },
    {
      id: 2,
      item_name: "Groceries",
      amount: 150,
      date: new Date("2024-06-05").toLocaleDateString(),
      from: "Grocery Store",
      category: "Food"
    },
    {
      id: 3,
      item_name: "Savings Deposit",
      amount: 1000,
      date: new Date("2024-06-10").toLocaleDateString(),
      from: "Bank",
      category: "Savings"
    },
    {
      id: 4,
      item_name: "Cat Food",
      amount: 30,
      date: new Date("2024-06-15").toLocaleDateString(),
      from: "Pet Store",
      category: "Pets"
    },
    {
      id: 5,
      item_name: "Dinner",
      amount: 75,
      date: new Date("2024-06-20").toLocaleDateString(),
      from: "Restaurant",
      category: "Food"
    }
  ];
  
  console.log(transactions);

  module.exports = transactions;
  