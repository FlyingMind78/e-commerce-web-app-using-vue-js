import { defineStore } from "pinia";
import { computed, ref, unref } from "vue";

import { useArrayFilter, useArrayMap } from "@vueuse/core";
import postProduct from "../api/postProduct.js";
import deleteProductFirebase from "../api/deleteProductFirebase.js";
import updateProductFirebase from "../api/updateProductFirebase.js";
import getAllProducts from "../api/getAllProducts.js";
import router from "../router/index.js";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);
  const productsCategories = ref([]);
  const filteredProducts = ref([]);
  const productsKeysValuesArray = ref(null);

  const initialHomeProducts = ref([]);

  const getProducts = computed(() => {
    return products.value;
  });

  const getProductsCategories = computed(() => {
    return productsCategories.value;
  });

  const getFilteredProducts = computed(() => {
    return filteredProducts.value;
  });

  async function setProducts() {
    const { allProducts, status, _productsArry } = await getAllProducts();
    if (status === 200) {
      products.value = allProducts;
      productsKeysValuesArray.value = _productsArry;
      loadProductCategories();
      initialHomeProducts.value = allProducts.slice(0, 3);
    }
  }

  function findProductFirebaseKey(prodId) {
    for (const [key, value] of JSON.parse(
      JSON.stringify(productsKeysValuesArray.value)
    )) {
      if (value.id === prodId) {
        return key;
      }
    }
  }

  function filterProducts(category) {
    filteredProducts.value = unref(
      useArrayFilter(products, (prod) => prod.category === category)
    );
  }

  function loadProductCategories() {
    productsCategories.value = [
      ...new Set(unref(useArrayMap(products, (prod) => prod.category))),
    ];
  }

  async function deleteProduct(prodId) {
    const productFirebaseKey = findProductFirebaseKey(prodId);
    const { status } = await deleteProductFirebase(productFirebaseKey);
    if (status === 200) {
      products.value = unref(
        useArrayFilter(products, (prod) => prod.id !== prodId)
      );
      loadProductCategories();
    }
  }

  async function updateProduct(prodId, editedProduct) {
    const firebaseProdKey = findProductFirebaseKey(prodId);
    const { status } = await updateProductFirebase(
      firebaseProdKey,
      editedProduct
    );
    if (status === 200) {
      products.value = [
        editedProduct,
        ...unref(useArrayFilter(products, (prod) => prod.id !== prodId)),
      ];
      router.push("/");
      loadProductCategories();
    }
  }

  async function addProduct(newProduct) {
    const response = await postProduct(newProduct);
    if (response.status === 200) {
      products.value = [...products.value, newProduct];
      router.push("/");
      loadProductCategories();
    }
  }

  return {
    initialHomeProducts,
    getProducts,
    setProducts,
    filterProducts,
    filteredProducts,
    getFilteredProducts,
    getProductsCategories,
    loadProductCategories,
    addProduct,
    deleteProduct,
    updateProduct,
  };
});
