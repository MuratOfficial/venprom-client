export interface Store {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  images: Image[];
  detailId: string;
  characteristics1: string;
  characteristics2: string;
  characteristics3: string;
  characteristics4: string;
  characteristics5: string;
  characteristics6: string;
  characteristics7: string;
  characteristics8: string;
  characteristics9: string;
  characteristics10: string;
  characteristics11: string;
  characteristics12: string;
  characteristics13: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
  store: Store;
  description: string;
}

export interface CategoryList {
  label: string;
  listItems: string[];
}
