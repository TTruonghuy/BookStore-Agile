export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "All Products",
    path: "/product/listing/all-products",
  },
  {
    id: "listingL",
    label: "Literary",
    path: "/product/listing/literary",
  },
  {
    id: "listingK",
    label: "Knowladge",
    path: "/product/listing/knowladge",
  },
  {
    id: "listingA",
    label: "Another",
    path: "/product/listing/another",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Manage All Products",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Add New Product",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "Customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Price",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Description",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Category",
    componentType: "select",
    options: [
      {
        id: "literary",
        label: "Literary",
      },
      {
        id: "knowladge",
        label: "Knowladge",
      },
      {
        id: "another",
        label: "Another",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Delivery Info",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Price Drop",
    componentType: "input",
  },
];

//xport const AvailableSizes = [
 // {
 //   id: "liter",
  //  label: "S",
 // },
 // {
  //  id: "m",
  //  label: "M",
  //},
 // {
  //  id: "l",
 //   label: "L",
 // },
//];

//export const firebaseConfig = {
  //apiKey: "API_KEY",
 // authDomain: "AUTH_DOMAIN",
 // projectId: "PROJECT_ID",
 // storageBucket: "STROAGE_BUCKET",
 // messagingSenderId: "MESSAGING_SENDER_ID",
 // appId: "APP_ID",
  //measurementId: "MEASUREMENT_ID",
//};
export const firebaseConfig = {
  apiKey: "AIzaSyD7iIUBlMxTWYchhCPrvPmGjoTMyZ-zCB0",
  authDomain: "book-8d19b.firebaseapp.com",
  projectId: "book-8d19b",
  storageBucket: "book-8d19b.appspot.com",
  messagingSenderId: "21062996969",
  appId: "1:21062996969:web:bf34389c376d57e0d3b178",
  measurementId: "G-M207DNHNE3"
};

export const firebaseStroageURL =
  "gs://book-8d19b.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "numberPhone",
    type: "input",
    placeholder: "Enter your number phone",
    label: "Number Phone",
    componentType: "input",
  },
];
