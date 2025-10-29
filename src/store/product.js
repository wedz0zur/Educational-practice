const STORAGE_KEY = "products";

export function getProducts() {
  const products = localStorage.getItem(STORAGE_KEY);
  return products ? JSON.parse(products) : [];
}

export function addProduct(product) {
  const products = getProducts();
  products.push(product);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
