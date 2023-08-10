import { type } from "@testing-library/user-event/dist/type";

const Reports = [
  {
    id: 1,
    name: "Financial",
    statement: [
      {
        id: 1,
        name: "Budget Manager",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",     
        type:"Old",
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
      {
        id: 2,
        name: "Balance Sheet",   
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
      {
        id: 3,
        name: "Profit and Loss",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",
        type:"Old", 
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
      {
        id: 4,
        name: "Statement of Cash Flows",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
      {
        id: 5,
        name: "Cash Summary",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
     
    ],
  },
  {
    id: 2,
    name: "Tax",
    statement: [
      {
        id: 1,
        name: "Budget Manager",
      },
    ],
  },
  {
    id: 3,
    name: "Accounting",
    statement: [
      {
        id: 1,
        name: "Accounting",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
      {
        id: 2,
        name: "Bank Report",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
      {
        id: 3,
        name: "Cash Transactions",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",     
        type:"Old",
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
      {
        id: 4,
        name: "Duplicate statement files",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
      {
        id: 5,
        name: "General Ledger",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",     
        type:"Old",
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
     
    ],
  },
  {
    id: 4,
    name: "Sales",
    statement: [
      {
        id: 1,
        name: "Aged Reeviables Details",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",     
        type:"Old",
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
      {
        id: 2,
        name: "Aged Reeviables Summary",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
      {
        id: 3,
        name: "Custom Invoices Reports",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",     
        type:"Old",
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
      
    ],
  },
  {
    id: 5,
    name: "Purchases",
    statement: [
      {
        id: 1,
        name: "Aged Reeviables Details",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
        
      },
      {
        id: 2,
        name: "Aged Reeviables Summary",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },
      {
        id: 3,
        name: "Supplier Invoices Reports",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",     
        type:"Old",
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
    
    ],
  },
  {
    id: 6,
    name: "Inventory",
    statement: [
      {
        id: 1,
        name: "Inventory item Summary",
        img:"https://cdn-icons-png.flaticon.com/128/477/477406.png",     
        type:"Old",
        imgold:"https://cdn-icons-png.flaticon.com/128/891/891449.png"
      },
      {
        id: 2,
        name: "Sales By item",
        img:"https://cdn-icons-png.flaticon.com/128/2956/2956792.png",
        type:"New"
      },

        
    ],
  },
];
export default { Reports };
