# 📁 Папка `api/` — сервисный слой

## Что это такое

Папка `api/` — это **сервисный слой** (service layer). Он отвечает за общение с бэкендом. Vue-компоненты **никогда не делают запросы напрямую** — они импортируют функции отсюда.

**Почему так?** Принцип разделения ответственности:

- Компонент думает о UI (как отображать)
- Сервисный слой думает о данных (как получить)

Если завтра бэкенд переедет на другой адрес — меняем только `client.js`, а не 10 компонентов.

---

## 1. `client.js` — основа всего

```javascript
import axios from "axios";

const apiClient = axios.create({
  baseURL: "/sports-nutrition-store/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
```

### Разбор по строкам

**`import axios from "axios"`**

- `axios` — библиотека для HTTP-запросов (альтернатива встроенному `fetch`)
- `import ... from "axios"` — импортируем библиотеку из `node_modules`
- Почему axios, а не fetch? Axios автоматически конвертирует JSON, имеет таймауты, перехватчики, базовый URL. Fetch требует всё это делать вручную.

**`axios.create({...})`**

- Создаёт **инстанс** (экземпляр) axios с предустановленными настройками
- Зачем? Чтобы не писать `baseURL` в каждом запросе. Один раз настроил — пользуешься везде.

**`baseURL: "/sports-nutrition-store/api/v1"`**

- Базовый URL, который подставляется ко всем запросам автоматически
- Если написать `apiClient.get("/products")`, реально запрос уйдёт на `/sports-nutrition-store/api/v1/products`
- Это **DRY** (Don't Repeat Yourself) — не дублируем путь в каждом файле

**`timeout: 10000`**

- Максимальное время ожидания ответа — 10 секунд (10000 мс)
- Если сервер не ответил за 10 секунд — запрос прервётся с ошибкой
- Без этого запрос мог бы висеть бесконечно

**`headers: { "Content-Type": "application/json" }`**

- Заголовок HTTP-запроса
- Говорит серверу: "я отправляю данные в формате JSON"
- `Content-Type` — стандартный HTTP-заголовок

**`export default apiClient`**

- `export default` — экспорт по умолчанию. В файле может быть только один `default`
- При импорте можно дать любое имя: `import apiClient from "./client"` или `import myApi from "./client"`
- В отличие от `export const` (именованный экспорт), где имя должно совпадать точно

### Теория: HTTP-запросы

HTTP — протокол общения браузера с сервером. Основные методы:

| Метод      | Назначение         | Пример                            |
| ---------- | ------------------ | --------------------------------- |
| **GET**    | Получить данные    | `GET /products` — список товаров  |
| **POST**   | Создать            | `POST /cart` — добавить в корзину |
| **PUT**    | Полностью обновить | `PUT /products/1`                 |
| **PATCH**  | Частично обновить  | `PATCH /products/1`               |
| **DELETE** | Удалить            | `DELETE /products/1`              |

В нашем проекте используется только **GET** — мы только читаем данные.

### Теория: CORS и proxy

**CORS** (Cross-Origin Resource Sharing) — политика безопасности браузера. Запросы с `localhost:5173` на `sites.creatrix-digital.ru` блокируются, потому что это разные "origin" (домен + порт).

**Как мы обошли CORS?** Через **Vite proxy** в `vite.config.js`:

```javascript
proxy: {
  "/sports-nutrition-store": {
    target: "https://sites.creatrix-digital.ru",
    changeOrigin: true,
  },
}
```

Браузер думает, что запрос идёт на `localhost` (тот же origin), а Vite перенаправляет его на реальный сервер.

---

## 2. `products.js` — работа с товарами

```javascript
import apiClient from "./client.js";

export const getProducts = (params = {}) => {
  return apiClient.get("/products", { params });
};

export const getProductById = (id) => {
  return apiClient.get(`/products/${id}`);
};

export const getProductReviews = (id, params = {}) => {
  return apiClient.get(`/products/${id}/reviews`, { params });
};

export const getStoreReviews = (params = {}) => {
  return apiClient.get("/store-reviews", { params });
};
```

### Разбор по функциям

**`export const getProducts = (params = {}) => { ... }`**

- `export const` — **именованный экспорт**. При импорте нужно точное имя: `import { getProducts } from "@/api/products"`
- `params = {}` — **параметр по умолчанию**. Если функцию вызвали без аргумента (`getProducts()`), `params` будет пустым объектом `{}`, а не `undefined`. Это защита от ошибок.
- Стрелочная функция `() => {}` — сокращённая запись обычной функции. Не имеет своего `this`, но в нашем случае это не важно.

**`apiClient.get("/products", { params })`**

- Делает GET-запрос на `/sports-nutrition-store/api/v1/products`
- `{ params }` — это сокращение от `{ params: params }` (ES6 shorthand). Объект с query-параметрами
- Query-параметры — это часть URL после `?`: `/products?page=1&per_page=12&category_id=2`
- Axios сам склеивает объект в строку: `{ page: 1, per_page: 12 }` → `?page=1&per_page=12`

**`` `/products/${id}` ``**

- **Шаблонная строка** (обратные кавычки `` ` ``)
- `${id}` — вставка переменной внутрь строки
- Без шаблонных строк пришлось бы писать: `"/products/" + id`
- Если `id = 5`, получится строка `"/products/5"`

**`getProductReviews(id, params = {})`**

- Два параметра: обязательный `id` и опциональный `params`
- URL: `/products/5/reviews?page=1&per_page=3` — вложенный ресурс (отзывы конкретного товара)
- Это стандарт REST: ресурс внутри ресурса

**JSDoc-комментарии** (блоки `/** ... */`)

- Это не просто комментарии — IDE (VS Code) читает их и показывает подсказки
- `@param` — описание параметра
- `@returns` — что возвращает функция
- `{Promise}` — тип возвращаемого значения (Promise — обещание, что данные придут позже)

### Теория: Promise

**Promise** — это "обещание" результата асинхронной операции. Когда мы делаем запрос к серверу, ответ приходит не мгновенно. Promise позволяет работать с этим.

```javascript
// Promise имеет три состояния:
// 1. pending — ожидание (запрос отправлен, ответ ещё не пришёл)
// 2. fulfilled — выполнено (ответ получен)
// 3. rejected — отклонено (ошибка сети, таймаут)

const promise = getProducts(); // возвращает Promise
// promise сейчас в состоянии "pending"

promise
  .then((data) => {
    // выполнится когда данные придут
    console.log(data);
  })
  .catch((error) => {
    // выполнится при ошибке
    console.error(error);
  });
```

**async/await** — синтаксический сахар над Promise. Делает асинхронный код похожим на синхронный:

```javascript
// Без async/await (через .then):
getProducts()
  .then((response) => {
    products.value = response.data.data;
  })
  .catch((err) => {
    console.error(err);
  });

// С async/await (то же самое, но читаемее):
const response = await getProducts();
products.value = response.data.data;
```

`await` "ждёт" выполнения Promise и возвращает результат. Работает только внутри `async` функции.

### Теория: структура ответа API

Наш бэкенд (Laravel) возвращает данные в формате:

```json
{
  "data": [
    { "id": 1, "name": "Протеин", "price": 2342 },
    { "id": 2, "name": "Шейкер", "price": 871 }
  ],
  "meta": {
    "current_page": 1,
    "last_page": 2,
    "total": 13
  }
}
```

**Двойная обёртка `response.data.data`:**

- Первый `.data` — свойство ответа Axios (Axios оборачивает всё в объект `{ data, status, headers }`)
- Второй `.data` — свойство от Laravel API (стандарт JSON:API)

Это частая ошибка новичков — забыть один из `.data`.

---

## 3. `categories.js` — работа с категориями

```javascript
import apiClient from "./client";

export const getCategories = () => {
  return apiClient.get("/categories");
};
```

Самый простой файл. Одна функция — один эндпоинт.

- `getCategories()` → `GET /sports-nutrition-store/api/v1/categories`
- Возвращает массив: `[{ id: 1, name: "Протеин" }, { id: 2, name: "Витамины" }, ...]`
- Нет параметров — категории не фильтруются и не пагинируются (их всего 6)

---

## Поток данных (как всё связано)

```
Vue-компонент (CatalogFilters.vue)
   │
   │  import { getCategories } from "@/api/categories"
   │  const response = await getCategories()
   │
   ▼
categories.js (сервисный слой)
   │
   │  return apiClient.get("/categories")
   │
   ▼
client.js (Axios-инстанс)
   │
   │  baseURL + "/categories" = "/sports-nutrition-store/api/v1/categories"
   │
   ▼
Vite proxy (vite.config.js)
   │
   │  перенаправляет на https://sites.creatrix-digital.ru/sports-nutrition-store/api/v1/categories
   │
   ▼
Laravel-бэкенд
   │
   │  возвращает JSON: { data: [{id:1, name:"Протеин"}, ...] }
   │
   ▼
Компонент получает: response.data.data
   │                    ↑            ↑
   │                  Axios        Laravel
   │                  обёртка      API Resource
   │
   ▼
categories.value = response.data.data || []
```

---

## Типичные вопросы экзаменаторов по этой теме

**Q: Почему axios, а не fetch?**
A: Axios имеет baseURL (не дублируем путь), автоматическую конвертацию JSON, таймауты, перехватчики. Fetch требует всё это делать вручную.

**Q: Что такое baseURL?**
A: Префикс, который добавляется ко всем запросам. Один раз задал в `client.js` — не нужно писать полный путь в каждом файле.

**Q: Что возвращает функция `getProducts`?**
A: Promise. Это "обещание" что данные придут. Чтобы получить данные, нужно использовать `await` или `.then()`.

**Q: Почему `response.data.data`, а не просто `response.data`?**
A: Первый `.data` — от Axios (он оборачивает ответ). Второй `.data` — от Laravel API (стандарт JSON:API).

**Q: Что такое REST API?**
A: Архитектурный стиль. URL — это ресурс (существительное: `/products`), HTTP-метод — действие (глагол: GET, POST). Никаких `/getProducts` в URL быть не должно.

**Q: Зачем нужен параметр по умолчанию `params = {}`?**
A: Чтобы функция не упала, если её вызвали без аргументов. Без этого `params` был бы `undefined`, и обращение к его свойствам вызвало бы ошибку.

**Q: Что такое шаблонные строки?**
A: Строки в обратных кавычках `` ` ``. Позволяют вставлять переменные через `${}`. `` `/products/${id}` `` вместо `"/products/" + id`.

**Q: Что такое CORS?**
A: Политика безопасности браузера. Запросы между разными доменами блокируются. Мы обошли через Vite proxy — браузер думает что запрос на localhost.
