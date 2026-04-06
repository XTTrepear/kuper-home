export const categories = [
  {
    id: 'kitchen',
    slug: 'kitchen',
    name: 'Кухня',
    color: 'kitchen',
    accentColor: '#a3e635', // лаймовый
    todayItems: ['Молоко 2 л', 'Яйца 10 шт', 'Хлеб 1 шт'],
    products: [
      { id: 1, name: 'Молоко', desc: '2 л, заканчивается', icon: '🥛', date: '05.04', status: 'warning' },
      { id: 2, name: 'Яйца', desc: '10 шт', icon: '🥚', date: '08.04', status: 'good' },
      { id: 3, name: 'Помидоры', desc: 'свежие', icon: '🍅', date: '09.04', status: 'good' },
      { id: 4, name: 'Хлеб', desc: '1 буханка', icon: '🍞', date: '04.04', status: 'urgent' },
    ]
  },
  {
    id: 'bathroom',
    slug: 'bathroom',
    name: 'Ванная',
    color: 'bathroom',
    accentColor: '#60a5fa', // голубой
    todayItems: ['Шампунь 500 мл', 'Гель для душа', 'Зубная паста'],
    products: [
      { id: 1, name: 'Шампунь', desc: '500 мл, используется', icon: '🧴', date: '05.04', status: 'warning' },
      { id: 2, name: 'Гель для душа', desc: '250 мл', icon: '🧴', date: '08.04', status: 'good' },
      { id: 3, name: 'Крем для рук', desc: 'заканчивается', icon: '🧴', date: '03.04', status: 'urgent' },
    ]
  },
  {
    id: 'pets',
    slug: 'pets',
    name: 'Питомцы',
    color: 'pets',
    accentColor: '#facc15', // жёлтый
    todayItems: ['Сухой корм 2 кг', 'Влажный корм 10 шт', 'Лакомства'],
    products: [
      { id: 1, name: 'Сухой корм', desc: '2 кг, заканчивается', icon: '🦴', date: '15.04', status: 'warning' },
      { id: 2, name: 'Влажный корм', desc: '10 шт', icon: '🥫', date: '08.04', status: 'good' },
      { id: 3, name: 'Лакомства', desc: 'с курицей', icon: '🍖', date: '20.04', status: 'good' },
      { id: 4, name: 'Витамины', desc: 'комплекс', icon: '💊', date: '10.04', status: 'warning' },
    ]
  },
  {
    id: 'medicine',
    slug: 'medicine',
    name: 'Аптечка',
    color: 'medicine',
    accentColor: '#22c55e', // тёмно-зелёный
    todayItems: ['Парацетамол', 'Бинт стерильный', 'Витамин D'],
    products: [
      { id: 1, name: 'Парацетамол', desc: '10 табл.', icon: '💊', date: '2025.12', status: 'good' },
      { id: 2, name: 'Бинт', desc: 'стерильный 5м', icon: '🩹', date: '2026.06', status: 'good' },
      { id: 3, name: 'Витамин D', desc: '60 капсул', icon: '☀️', date: '04.04', status: 'urgent' },
    ]
  }
]

export const smartSets = [
  { id: 1, name: 'Ужин для семьи', color: 'bg-lime-200', icon: '🍽️' },
  { id: 2, name: 'Завтрак для собаки', color: 'bg-yellow-200', icon: '🐕' },
  { id: 3, name: 'Чистое лицо', color: 'bg-blue-200', icon: '✨' },
  { id: 4, name: 'Аптечка на неделю', color: 'bg-green-200', icon: '🩹' },
]
