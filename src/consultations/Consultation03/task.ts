// Задание 1

let age: number = 25;  

let name: string = "Alice";

let isActive: boolean = true; 

let nullableValue: string | null = null; // Строка или null

let numbers: number[] = [1, 2, 3, 4]; 

let names: string[] = ["Alice", "Bob", "Charlie"];

let mixed: (string | number)[] = [1, "Alice", 2, "Bob"];

let colors: (string | number | boolean)[]  = [123, "red", true, "blue"];

const add = (a: number, b: number) => {
    return a - b;
  };

// Задание 3
  const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 25, inStock: false },
    { id: 3, name: "Keyboard", price: 80, inStock: true },
  ];

// Задание 4

interface Book {
  id: string,
  title: string,
  price: number,
  inStock: boolean,
}

interface Customer {
  id: number,
  name: string,
  email: string,
}

enum ORDER_STATUS {
  PROC = 'Processing',
  SHIP = 'Shipped',
  DEL = 'Delivered'
}

interface Order {
  orderId: string,
  customerId: number,
  books: string[],
  totalAmount: number,
  status: ORDER_STATUS,
}

interface Settings {
  currency: string,
  isOpen: boolean,
  discountRate: number, 
}

interface Bookstore {
  name: string,
  location: string,
  books: Book[],
  customers: Customer[],
  orders: Order[],
  settings: Settings

}

const bookstore: Bookstore = {
  name: "The Grand Bookstore",
  location: "New York, USA",
  books: [
    {
      id: "B001",
      title: "The Hobbit",
      price: 15.99,
      inStock: true,
    },
    {
      id: "B002",
      title: "1984",
      price: 12.5,
      inStock: false,
    },
  ],
  customers: [
    {
      id: 101,
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  ],
  orders: [
    {
      orderId: "O1001",
      customerId: 101,
      books:  [ "B001", "B001" ],
      totalAmount: 15.99,
      status: ORDER_STATUS.SHIP,
    },
  ],
  settings: {
    currency: "USD",
    isOpen: true,
    discountRate: 10, 
  }
}
