export type menuItem = {
  name: string;
  image: string;
  url: string;
};

export type categoryList = {
  name: string;
  price: string;
};
export type category = {
  data: categoryList[];
  category: menuItem;
};
