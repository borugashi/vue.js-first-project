# 📁 Корневые файлы проекта

## 1. `main.js` — точка входа

```javascript
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

createApp(App).use(router).mount("#app");
```

### Что такое точка входа?

Когда браузер открывает сайт, он загружает `index.html`. В нём есть строка:

```html
<script type="module" src="/src/main.js"></script>
```

Это говорит браузеру: "запусти файл `main.js`". Всё приложение начинается отсюда.

### Разбор по строкам

**`import "./assets/main.css"`**

- `import` — подгружает другой файл/модуль
- `"./assets/main.css"` — путь к файлу стилей (Tailwind + шрифты)
- Точка `./` означает "текущая папка" (src)
- Без этой строки Tailwind не работает — все классы `flex`, `grid`, `text-lg` перестанут действовать

**`import { createApp } from "vue"`**

- Импортируем **именованный экспорт** `createApp` из библиотеки Vue
- Фигурные скобки `{}` — это **деструктуризация**: из всего, что экспортирует Vue, берём только `createApp`
- `createApp` — функция, которая создаёт экземпляр Vue-приложения
- Аналогия: `createApp` как `new Vue()` в старом Vue 2, но современнее

**`import App from "./App.vue"`**

- Импортируем **экспорт по умолчанию** (без фигурных скобок)
- `App.vue` — корневой компонент, "обёртка" всего сайта
- Внутри него: Header + router-view + Footer

**`import router from "./router/router.js"`**

- Импортируем объект роутера
- Роутер отвечает за переключение страниц без перезагрузки

**`createApp(App).use(router).mount("#app")`**

Это **цепочка вызовов** (method chaining). Разберём по частям:

1. **`createApp(App)`** — создаёт Vue-приложение из компонента `App`
2. **`.use(router)`** — подключает плагин (Vue Router). После этого в шаблоне работают `<router-view>` и `<router-link>`
3. **`.mount("#app")`** — вставляет приложение в HTML-элемент с `id="app"`

### Теория: что такое `#app`?

В `index.html` есть:

```html
<div id="app"></div>
```

Vue берёт этот пустой `<div>` и заменяет его содержимое на отрендеренный `App.vue`. Всё, что было внутри `<div id="app">` до этого, исчезает.

### Теория: ES-модули

`import`/`export` — стандарт ES6 (2015 год). До этого использовались `require()` (CommonJS) или вообще `<script>` теги.

**Два типа экспорта:**

```javascript
// Именованный экспорт (можно несколько в файле)
export const foo = 1;
export function bar() {}

// Импорт:
import { foo, bar } from "./file.js";

// Экспорт по умолчанию (только один в файле)
export default function baz() {}

// Импорт (имя любое):
import anyName from "./file.js";
```

### Типичные вопросы экзаменатора

**Q: Что делает main.js?**
A: Это точка входа. Импортирует стили, создаёт Vue-приложение из App.vue, подключает роутер и монтирует всё в DOM.

**Q: Зачем нужен mount("#app")?**
A: Он вставляет Vue-приложение в HTML-элемент с id="app". Без этого ничего не отобразится.

**Q: Что такое .use(router)?**
A: Подключает плагин Vue Router. После этого работают компоненты <router-view> и <router-link>.

---

## 2. `App.vue` — корневой компонент

```vue
<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
```

### Что такое SFC (Single File Component)?

Vue-компонент — это файл с расширением `.vue`, который содержит три части:

- `<template>` — HTML-разметка (что отображать)
- `<script>` — логика (данные, методы)
- `<style>` — стили (как выглядит)

В нашем проекте используется `<script setup>` — современный синтаксис Vue 3.

### Разбор template

**`<div class="flex flex-col min-h-screen">`**

Tailwind-классы:

- `flex` → `display: flex` (включает flexbox)
- `flex-col` → `flex-direction: column` (элементы располагаются вертикально)
- `min-h-screen` → `min-height: 100vh` (минимальная высота = высота экрана)

**Зачем это нужно?** Чтобы Footer всегда был внизу страницы, даже если контента мало. Без `min-h-screen` Footer прилипал бы к концу контента и висел посередине экрана на коротких страницах.

**`<Header />` и `<Footer />`**

- Это **самозакрывающиеся теги** компонентов
- Аналогично `<img />` или `<br />` в HTML — не нужно писать `</Header>`
- Компоненты импортированы в `<script setup>`, поэтому доступны в шаблоне

**`<main class="grow">`**

- `<main>` — семантический HTML-тег для основного содержимого страницы
- `grow` → `flex-grow: 1` — элемент растягивается, занимая всё свободное место
- Благодаря этому Footer прижат к низу

**`<router-view />`**

- Компонент Vue Router
- Показывает компонент, соответствующий текущему URL:
  - `/` → `Home.vue`
  - `/catalog` → `Catalog.vue`
  - `/products/5` → `ProductPage.vue`
  - `/cart` → `Cart.vue`
- Это "окно", через которое роутер вставляет страницы

### Разбор script setup

**`<script setup>`** — синтаксический сахар Vue 3.

Без `setup` пришлось бы писать:

```javascript
export default {
  setup() {
    // вся логика здесь
    return { Header, Footer }; // явно возвращать
  },
};
```

С `setup`:

```javascript
<script setup>import Header from "./components/Header.vue"; // Всё автоматически доступно в шаблоне, ничего возвращать не нужно</script>
```

**`import Header from "./components/Header.vue"`**

- Импортируем компонент Header
- Путь `./components/` — папка components в той же директории (src)
- После импорта можно использовать `<Header />` в шаблоне

### Теория: Flexbox

Flexbox — модель раскладки CSS для расположения элементов.

```
flex-direction: row (по умолчанию) → элементы в ряд
flex-direction: column → элементы в колонку

flex-grow: 1 → элемент растягивается, занимая свободное место
flex-shrink: 1 → элемент сжимается, если не хватает места
flex-basis: auto → начальный размер элемента
```

В нашем случае:

- `flex flex-col` — элементы друг под другом (Header, main, Footer)
- `grow` на main — main растягивается, Footer остаётся внизу

### Типичные вопросы

**Q: Что такое SFC?**
A: Single File Component — файл .vue, содержащий template, script и style в одном месте.

**Q: Зачем нужен <router-view>?**
A: Это компонент Vue Router, который отображает компонент текущего маршрута. При изменении URL меняется содержимое router-view.

**Q: Почему Footer всегда внизу?**
A: Благодаря flex-контейнеру с min-h-screen и flex-grow: 1 на main. Main занимает всё свободное место, Footer прижимается к низу.

**Q: Что такое <script setup>?**
A: Синтаксический сахар Vue 3. Всё, что объявлено в этом блоке, автоматически доступно в шаблоне. Не нужно писать export default и return.

---

## 3. `router.js` — маршрутизация

```javascript
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../pages/Catalog.vue"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: () => import("../pages/ProductPage.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../pages/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

export default router;
```

### Что такое маршрутизация?

В обычном сайте каждая страница — отдельный HTML-файл. При клике на ссылку браузер загружает новый файл (перезагрузка).

В **SPA (Single Page Application)** всё работает иначе:

- Один HTML-файл (`index.html`)
- Vue Router меняет содержимое `<router-view>` без перезагрузки
- URL меняется, но страница не перезагружается

### Разбор по частям

**`import { createRouter, createWebHistory } from "vue-router"`**

- `createRouter` — функция создания роутера
- `createWebHistory` — режим истории (URL без `#`)

**Два режима истории:**
| Режим | URL | Пример |
|---|---|---|
| `createWebHistory` | Чистый | `/catalog` |
| `createWebHashHistory` | С хешем | `/#/catalog` |

Hash-режим нужен для старых серверов, которые не умеют отдавать SPA. WebHistory — современный стандарт.

**Массив `routes`** — список маршрутов. Каждый маршрут — объект:

```javascript
{
  path: "/catalog",           // URL в адресной строке
  name: "Catalog",            // Имя маршрута (для программной навигации)
  component: () => import(...) // Компонент, который показать
}
```

**Обычный импорт vs ленивый:**

```javascript
// Обычный — загружается сразу, увеличивает размер бандла
import Catalog from "../pages/Catalog.vue";
component: Catalog;

// Ленивый — загружается только при переходе на /catalog
component: () => import("../pages/Catalog.vue");
```

Ленивая загрузка = **code splitting**. Каждая страница в отдельном JS-файле. Главная загружается сразу (~50 КБ), каталог — только когда пользователь на него перейдёт.

**`:id` в path** — динамический сегмент:

- `/products/5` → `route.params.id = "5"`
- `/products/12` → `route.params.id = "12"`
- Один маршрут обслуживает все товары

**`scrollBehavior`** — функция, вызываемая при каждом переходе:

```javascript
scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return { el: to.hash, behavior: "smooth" };
  }
  return { top: 0 };
}
```

- `to` — маршрут, куда идём
- `from` — маршрут, откуда уходим
- `savedPosition` — позиция скролла (если нажали "назад")

Логика:

1. Если в URL есть хеш (`/#about`) → плавно скроллим к элементу с `id="about"`
2. Иначе → наверх страницы

### Теория: что такое Promise в динамическом импорте?

`() => import("../pages/Catalog.vue")` возвращает **Promise**. Роутер ждёт, пока файл загрузится, и только потом показывает компонент.

```javascript
// Аналогия:
const loadCatalog = () => import("./Catalog.vue");
// loadCatalog() возвращает Promise<Component>

loadCatalog().then((component) => {
  // компонент загружен, можно показать
});
```

### Типичные вопросы

**Q: Что такое SPA?**
A: Single Page Application — одностраничное приложение. Контент меняется без перезагрузки страницы через JavaScript.

**Q: Чем createWebHistory отличается от createWebHashHistory?**
A: WebHistory даёт чистые URL (/catalog), HashHistory — с решёткой (/#/catalog). HashHistory нужен для старых серверов.

**Q: Что такое ленивая загрузка?**
A: Компонент загружается только при переходе на соответствующий маршрут, а не сразу. Уменьшает размер начального бандла.

**Q: Что такое динамический сегмент :id?**
A: Переменная часть URL. /products/5 и /products/12 используют один маршрут, но route.params.id разный.

**Q: Что делает scrollBehavior?**
A: Управляет прокруткой при переходах. Скроллит к якорю если есть hash, иначе наверх.

---

## 4. `vite.config.js` — конфиг сборщика

```javascript
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [tailwindcss(), vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/sports-nutrition-store": {
        target: "https://sites.creatrix-digital.ru",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

### Что такое Vite?

Vite — современный сборщик (build tool). Альтернатива Webpack, но быстрее.

**Почему быстрее?**

- Webpack: собирает весь проект в один бандл перед запуском (медленно)
- Vite: использует нативные ES-модули браузера, собирает только то, что нужно (быстро)

**HMR (Hot Module Replacement)** — при изменении кода страница обновляется мгновенно, без полной перезагрузки.

### Разбор по частям

**`import { fileURLToPath, URL } from "node:url"`**

- Встроенный модуль Node.js для работы с путями
- `fileURLToPath` — конвертирует URL в путь файловой системы
- `URL` — конструктор URL
- Нужно для создания alias `@`

**`import { defineConfig } from "vite"`**

- Функция из Vite, даёт подсказки типов в IDE
- Можно было написать объект напрямую, но `defineConfig` удобнее

**Плагины:**

| Плагин          | Что делает                                  |
| --------------- | ------------------------------------------- |
| `vue()`         | Компилирует `.vue` файлы (SFC) в JavaScript |
| `tailwindcss()` | Интегрирует Tailwind v4 с Vite              |
| `vueDevTools()` | Отладка Vue в браузере (расширение Chrome)  |

**`resolve.alias`** — псевдонимы для импортов:

```javascript
// Без alias:
import { getProducts } from "../../api/products.js";

// С alias @:
import { getProducts } from "@/api/products.js";
```

`@` = `src/`. Удобно, не нужно считать `../`.

**`fileURLToPath(new URL("./src", import.meta.url))`** — сложная конструкция, но смысл простой:

- `import.meta.url` — URL текущего файла (vite.config.js)
- `new URL("./src", ...)` — путь к папке src относительно текущего файла
- `fileURLToPath(...)` — конвертирует в обычный путь файловой системы

**`server.proxy`** — самое важное!

```javascript
proxy: {
  "/sports-nutrition-store": {
    target: "https://sites.creatrix-digital.ru",
    changeOrigin: true,
    secure: false,
  },
}
```

**Проблема CORS:**
Браузеры блокируют запросы с `localhost:5173` на `sites.creatrix-digital.ru` — разные домены.

**Решение — proxy:**

1. Код делает запрос: `GET /sports-nutrition-store/api/v1/products`
2. Браузер думает, что запрос на `localhost:5173` (тот же origin) → CORS не срабатывает
3. Vite видит префикс `/sports-nutrition-store` и перенаправляет на `https://sites.creatrix-digital.ru/sports-nutrition-store/api/v1/products`
4. Сервер отвечает, Vite передаёт ответ браузеру

**Параметры:**

- `target` — куда перенаправлять
- `changeOrigin: true` — меняет заголовок `Host` на целевой домен
- `secure: false` — разрешает самоподписанные SSL-сертификаты

### Теория: CORS

**CORS (Cross-Origin Resource Sharing)** — политика безопасности браузера.

**Origin** = протокол + домен + порт:

- `http://localhost:5173` — один origin
- `https://sites.creatrix-digital.ru` — другой origin

Браузер блокирует запросы между разными origin, чтобы злой сайт не мог прочитать данные с другого сайта.

**Способы обойти CORS:**

1. **Proxy** (наш способ) — Vite перенаправляет запросы
2. **CORS-заголовки на сервере** — сервер разрешает запросы с определённых доменов
3. **JSONP** — устаревший хак через `<script>` теги

### Типичные вопросы

**Q: Что такое Vite?**
A: Современный сборщик. Быстрее Webpack потому что использует нативные ES-модули. HMR — мгновенное обновление при изменении кода.

**Q: Что такое CORS?**
A: Политика безопасности браузера. Запросы между разными доменами блокируются. Мы обошли через Vite proxy.

**Q: Как работает proxy в Vite?**
A: Браузер делает запрос на localhost, Vite перенаправляет на реальный сервер. Браузер думает что запрос на тот же origin, CORS не срабатывает.

**Q: Что такое alias @?**
A: Псевдоним для пути src/. Вместо ../../api/products пишем @/api/products.

**Q: Зачем нужен плагин vue()?**
A: Компилирует .vue файлы (SFC) в JavaScript, который понимает браузер.

---

## Связь всех файлов

```
index.html
    ↓ <script src="/src/main.js">
main.js
    ↓ createApp(App).use(router).mount("#app")
App.vue
    ↓ <router-view />
router.js
    ↓ определяет какой компонент показать
    ├── / → Home.vue
    ├── /catalog → Catalog.vue
    ├── /products/:id → ProductPage.vue
    └── /cart → Cart.vue
        ↓ компоненты импортируют
api/*.js
    ↓ apiClient.get(...)
client.js (Axios)
    ↓ baseURL + путь
vite.config.js proxy
    ↓ перенаправляет на
https://sites.creatrix-digital.ru
    ↓ возвращает JSON
Компонент отображает данные через Tailwind классы
    ↓ стилизует
main.css (Tailwind v4)
```
