const tarifs = {
  _id: {},
  TITLE: {
    type: "String",
    require: true,
    default: "None",
    loc: "Название",
    sort: true,
    editable: true,
    searchable: true,
    //list: []
  },
  TYPES: {
    type: "String",
    require: true,
    default: "None",
    loc: "Типы",
    sort: true,
    editable: true,
    searchable: true,
  },
  TIME: {
    type: "String",
    require: false,
    default: "None",
    loc: "Время установки",
    sort: true,
    editable: true,
    searchable: true,
  },
  PRICE: {
    type: "Number",
    require: true,
    default: 0,
    loc: "Цена в рублях (₽)",
    sort: true,
    editable: true,
    step: 10000,
    filter: true,
  },
};

export default tarifs;
