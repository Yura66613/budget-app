# Бюджет додаток (Budget App)

Простий додаток для розрахунку витрат з полями "Витрата" та "Сума".

## Структура проекту

```
budget-app/
├── backend/          # Серверна частина (TypeScript/Express)
├── frontend/         # Клієнтська частина (TypeScript/React)
└── README.md
```

## Функціональність

- **Додавання витрат**: Поле "Витрата" для назви та поле "Сума" для суми
- **Автоматичний розрахунок**: Поле "Сума" автоматично розраховує загальну суму всіх витрат
- **Список витрат**: Відображення всіх доданих витрат
- **Видалення витрат**: Можливість видалити окремі витрати або всі відразу

## Швидкий старт

### Запуск серверу (Backend)

```bash
cd backend
npm install
npm run dev
```

Сервер буде доступний на: http://localhost:3001

### Запуск клієнта (Frontend)

```bash
cd frontend
npm install
npm run dev
```

Клієнт буде доступний на: http://localhost:3000

## API Endpoints

### Backend API

- `GET /api/budget/summary` - Отримати загальну інформацію про бюджет
- `GET /api/budget/expenses` - Отримати всі витрати
- `POST /api/budget/expenses` - Додати нову витрату
- `DELETE /api/budget/expenses/:id` - Видалити витрату за ID
- `DELETE /api/budget/expenses` - Видалити всі витрати

### Приклад запиту для додавання витрати

```bash
curl -X POST http://localhost:3001/api/budget/expenses \
  -H "Content-Type: application/json" \
  -d '{"name": "Продукти", "amount": 250.50}'
```

## Технології

### Backend
- TypeScript
- Express.js
- CORS, Helmet, Morgan (middleware)

### Frontend
- TypeScript
- React 18
- Vite (build tool)
- Axios (HTTP client)

## Розробка

### Backend

```bash
cd backend
npm run dev    # Запуск в режимі розробки
npm run build  # Збірка проекту
npm run start  # Запуск продукційної версії
npm run lint   # Перевірка коду
```

### Frontend

```bash
cd frontend
npm run dev      # Запуск в режимі розробки
npm run build    # Збірка проекту
npm run preview  # Перегляд збірки
npm run lint     # Перевірка коду
```

## Структура компонентів

### Frontend компоненти

- `BudgetPage` - Головна сторінка додатку
- `ExpenseForm` - Форма для додавання витрат
- `ExpenseList` - Список всіх витрат
- `BudgetSummary` - Відображення загальної суми

### Backend структура

- `controllers/` - Контролери для обробки запитів
- `models/` - Моделі даних
- `routes/` - Маршрути API
- `services/` - Бізнес-логіка
- `middleware/` - Проміжне ПЗ

## Особливості

- Українська локалізація
- Адаптивний дизайн
- Валідація введення
- Обробка помилок
- TypeScript для типобезпеки