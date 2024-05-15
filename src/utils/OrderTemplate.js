const template = [
  {
    amount: "",
    metric: "kg",
    name: "Giblet",
  },
  {
    amount: "",
    metric: "kg",
    name: "Liver",
  },
  {
    amount: "",
    metric: "kg",
    name: "Heart",
  },
  {
    amount: "",
    metric: "box",
    name: "Necks",
  },
  {
    amount: "",
    metric: "kg",
    name: "Spare ribs XXL skin on",
  },
  {
    amount: "",
    metric: "kg",
    name: "Spare ribs XXL skinless",
  },
  {
    amount: "",
    metric: "box",
    name: "Baiada size 17 birds",
  },
  {
    amount: "",
    metric: "box",
    name: " Baiada size 21 to 23 birds",
  },
  {
    amount: "",
    metric: "box",
    name: "Baiada size 27 to 30 birds",
  },
  {
    amount: "",
    metric: "box",
    name: "Boilers",
  },
  {
    amount: "",
    metric: "kg",
    name: "Breast fillet skin on",
  },
  {
    amount: "",
    metric: "kg",
    name: "Breast fillet skinless",
  },
  {
    amount: "",
    metric: "box",
    name: "Chicken feet XL",
  },
  {
    amount: "",
    metric: "box",
    name: "Chicken Frames only",
  },
  {
    amount: "",
    metric: "box",
    name: "Crumbed chicken Kiev 300 grams",
  },
  {
    amount: "",
    metric: "box",
    name: "Crumbed Schnitzel 220 grams",
  },
  {
    amount: "",
    metric: "kg",
    name: "Drumstick fillet skinless",
  },
  {
    amount: "",
    metric: "box",
    name: "Inghams size 9 birds",
  },
  {
    amount: "",
    metric: "box",
    name: "Inghams size 10 birds",
  },
  {
    amount: "",
    metric: "box",
    name: "Inghams size 11 birds",
  },
  {
    amount: "",
    metric: "kg",
    name: "Maryland fillet skinless",
  },
  {
    amount: "",
    metric: "kg",
    name: "Maryland fillet skin on",
  },
  {
    amount: "",
    metric: "kg",
    name: "FROZEN Maryland fillet skin on",
  },
  {
    amount: "",
    metric: "box",
    name: "Supreme XL FRESH & INGHAM BRAND",
  },
  {
    amount: "",
    metric: "kg",
    name: "Tenderloin",
  },
  {
    amount: "",
    metric: "box",
    name: "WINGS XXLarge",
  },
];

const OrderTemplate = () =>
  template.map((item, index) => {
    return { id: index, ...item };
  });

export default OrderTemplate;
