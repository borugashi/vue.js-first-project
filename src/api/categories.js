import apiClient from "./client";

/**
 * Получить список категорий
 * @returns {Promise} - массив объектов Category
 * Структура: { id, name }
 */
export const getCategories = () => {
  return apiClient.get("/categories");
};
