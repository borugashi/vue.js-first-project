import apiClient from "./client.js";

/**
 * Получить список товаров с фильтрацией и сортировкой
 * @param {Object} params - параметры запроса
 * @param {number} params.page - номер страницы
 * @param {number} params.per_page - элементов на странице (default: 15)
 * @param {number} params.category_id - ID категории
 * @param {boolean} params.is_new - только новинки
 * @param {string} params.flavor - вкус
 * @param {number} params.price_min - минимальная цена
 * @param {number} params.price_max - максимальная цена
 * @param {string} params.sort_by - поле сортировки (price, name)
 * @param {string} params.sort_direction - направление (asc, desc)
 * @returns {Promise} - массив объектов Product
 */
export const getProducts = (params = {}) => {
  return apiClient.get("/products", { params });
};

/**
 * Получить детальную информацию о товаре
 * @param {number} id - ID товара
 * @returns {Promise} - объект Product
 * Структура: { id, name, description, price, weight, flavor, composition, is_new, image, category_id }
 */
export const getProductById = (id) => {
  return apiClient.get(`/products/${id}`);
};

/**
 * Получить отзывы о товаре
 * @param {number} id - ID товара
 * @param {Object} params - параметры пагинации
 * @param {number} params.page - номер страницы
 * @param {number} params.per_page - элементов на странице
 * @returns {Promise} - массив объектов ProductReview
 * Структура: { id, name, rating, text, product_id }
 */
export const getProductReviews = (id, params = {}) => {
  return apiClient.get(`/products/${id}/reviews`, { params });
};

/**
 * Получить список отзывов о магазине
 * @param {Object} params - параметры запроса
 * @param {number} params.page - номер страницы
 * @param {number} params.per_page - элементов на странице (default: 15)
 * @returns {Promise} - массив объектов StoreReview
 * Структура: { id, name, rating, text }
 */
export const getStoreReviews = (params = {}) => {
  return apiClient.get("/store-reviews", { params });
};
