import axios from "axios";

/**
 * Axios с базовой конфигурацией
 * Все запросы начинаются с /sports-nutrition-store/api/v1
 */
const apiClient = axios.create({
  baseURL: "/sports-nutrition-store/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
