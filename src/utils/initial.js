export const USER_LIST = [
  {
    email: "test@gmail.com",
    phone: "380993106622",
    fullName: "Роман Петров Петрович",
    password: "123456",
  },
  {
    email: "test2@gmail.com",
    phone: "380993106623",
    fullName: "Іван Петров Петрович",
    password: "123456",
  },
  {
    email: "test3@gmail.com",
    phone: "380993106624",
    fullName: "Степан Петров Петрович",
    password: "123456",
  },
];

export const ORDERS_TABLE = {
  accountInstagram: { name: "Нікнейм", td: "link", th: "simple" },
  fullName: { name: "ФІО", td: "string", th: "simple" },
  phone: { name: "Телефон", td: "phone", th: "simple" },
  products: { name: "Товар", td: "product", th: "simple" },
  price: { name: "Ціна", td: "number", th: "simple" },
  city: { name: "Місто", td: "string", th: "simple" },
  postOffice: { name: "Відділення", td: "number", th: "simple" },
  weight: { name: "Вага", td: "number", th: "simple" },
  status: {
    name: "Статус",
    td: "status",
    th: "icon",
    icon: "icon-filter-list",
  },
  cargo: { name: "Транспортна компанія", td: "select", th: "simple" },
  comment: { name: "Коментарій", td: "string", th: "simple" },
};

export const DEFAULT_PRESET_TABLE = [
  "accountInstagram",
  "fullName",
  "phone",
  "products",
  "price",
  "city",
  "postOffice",
  "weight",
  "status",
  "cargo",
  "comment",
];
