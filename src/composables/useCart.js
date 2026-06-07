import { ref, computed, watch } from "vue";

const CART_KEY = "muscle-cart";

// Загружаем корзину из localStorage при старте
const loadCart = () => {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const cartItems = ref(loadCart());

// Сохраняем в localStorage при каждом изменении
watch(
  cartItems,
  (newCart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(newCart));
  },
  { deep: true },
);

export const useCart = () => {
  // Добавить товар
  const addToCart = (product) => {
    const existing = cartItems.value.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
  };

  // Удалить товар
  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
  };

  // Изменить количество
  const updateQuantity = (productId, quantity) => {
    const item = cartItems.value.find((item) => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId);
      } else {
        item.quantity = quantity;
      }
    }
  };

  // Очистить корзину
  const clearCart = () => {
    cartItems.value = [];
  };

  // Общее количество товаров (для бейджа в header)
  const totalCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.quantity, 0));

  // Общая сумма
  const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0));

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice,
  };
};
