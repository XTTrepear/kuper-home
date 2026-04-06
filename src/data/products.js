// Профили пользователей
export const profiles = [
  { id: 'amanda', name: 'Amanda', icon: '👩', role: 'owner' },
  { id: 'husband', name: 'Муж', icon: '👨', role: 'member' },
  { id: 'mishanya', name: 'Мишаня', icon: '🐕', role: 'pet', petType: 'dog' },
  { id: 'sberko', name: 'Сберко', icon: '🐈', role: 'pet', petType: 'cat' },
]

// Демо-уведомления для главной
export const demoNotifications = [
  { id: 1, text: 'У сына почти закончился шоколад 🍫', profile: 'husband' },
  { id: 2, text: 'Мишане пора заказывать корм 🐕', profile: 'mishanya' },
  { id: 3, text: 'Сберко нужен новый наполнитель 🐈', profile: 'sberko' },
]

// Умные сеты
export const smartSets = [
  { id: 1, name: 'Просмотр фильма в паре', desc: 'Снеки, напитки, попкорн', color: 'from-purple-300 to-purple-400', icon: '🎬' },
  { id: 2, name: 'Обед для коллег', desc: 'Закуски, напитки, десерт', color: 'from-orange-300 to-orange-400', icon: '👔' },
  { id: 3, name: 'Романтический ужин', desc: 'Вино, сыр, фрукты, свечи', color: 'from-rose-300 to-rose-400', icon: '🕯️' },
  { id: 4, name: 'Завтрак для семьи', desc: 'Молоко, яйца, хлеб, масло', color: 'from-lime-300 to-lime-400', icon: '🌅' },
  { id: 5, name: 'Завтрак для Мишани', desc: 'Корм, витамины, лакомства', color: 'from-yellow-300 to-yellow-400', icon: '🐕' },
  { id: 6, name: 'Уход за Сберко', desc: 'Корм, наполнитель, витамины', color: 'from-amber-300 to-amber-400', icon: '🐈' },
]

// Рекомендуемые товары (аналитика на основе действий)
export const recommendedProducts = [
  { id: 1, name: 'Кофе Nespresso', desc: 'Любимый кофе Amanda', icon: '☕', price: '890 ₽', category: 'kitchen', profile: 'amanda' },
  { id: 2, name: 'Протеин шоколад', desc: 'Любимый вкус мужа', icon: '🍫', price: '1 490 ₽', category: 'kitchen', profile: 'husband' },
  { id: 3, name: 'Корм Royal Canin', desc: 'Для Мишани, 3 кг', icon: '🦴', price: '2 190 ₽', category: 'pets', profile: 'mishanya' },
  { id: 4, name: 'Наполнитель CatSan', desc: 'Для Сберко, 10 л', icon: '🐈', price: '690 ₽', category: 'pets', profile: 'sberko' },
  { id: 5, name: 'Шоколад Milka', desc: 'Сын часто покупает', icon: '🍫', price: '149 ₽', category: 'kitchen', profile: 'husband' },
  { id: 6, name: 'Витамины для суставов', desc: 'Для Мишани', icon: '💊', price: '590 ₽', category: 'pets', profile: 'mishanya' },
]

// Категории с продуктами по профилям
export const categories = [
  {
    id: 'kitchen',
    slug: 'kitchen',
    name: 'Кухня',
    color: 'kitchen',
    accentColor: '#a3e635',
    productsByProfile: {
      amanda: [
        { id: 1, name: 'Молоко', desc: '2 л, заканчивается через 2 дня', icon: '🥛', date: '05.04', status: 'warning', price: '89 ₽', category: 'Молочные' },
        { id: 2, name: 'Яйца', desc: '10 шт, осталось 3', icon: '🥚', date: '08.04', status: 'warning', price: '120 ₽', category: 'Молочные' },
        { id: 3, name: 'Помидоры', desc: 'свежие, 500 г', icon: '🍅', date: '09.04', status: 'good', price: '180 ₽', category: 'Овощи' },
        { id: 4, name: 'Хлеб', desc: '1 буханка, заканчивается сегодня', icon: '🍞', date: '04.04', status: 'urgent', price: '45 ₽', category: 'Выпечка' },
        { id: 5, name: 'Кофе Nespresso', desc: 'Капсулы, осталось 5 шт', icon: '☕', date: '12.04', status: 'warning', price: '890 ₽', category: 'Напитки' },
        { id: 6, name: 'Сыр Маасдам', desc: '200 г, нарезка', icon: '🧀', date: '15.04', status: 'good', price: '320 ₽', category: 'Молочные' },
      ],
      husband: [
        { id: 1, name: 'Протеин шоколад', desc: '1 кг, осталось на 5 дней', icon: '🍫', date: '10.04', status: 'warning', price: '1 490 ₽', category: 'Спортпит' },
        { id: 2, name: 'Шоколад Milka', desc: 'Плитка, последняя', icon: '🍫', date: '04.04', status: 'urgent', price: '149 ₽', category: 'Сладости' },
        { id: 3, name: 'Тунец консервы', desc: '3 банки, осталось 1', icon: '🥫', date: '20.04', status: 'warning', price: '210 ₽', category: 'Консервы' },
        { id: 4, name: 'Рис басмати', desc: '1 кг, полная пачка', icon: '🍚', date: '25.05', status: 'good', price: '180 ₽', category: 'Крупы' },
        { id: 5, name: 'Куриное филе', desc: '500 г, заморозка', icon: '🍗', date: '15.04', status: 'good', price: '350 ₽', category: 'Мясо' },
      ],
      mishanya: [
        { id: 1, name: 'Корм Royal Canin', desc: 'Сухой, 3 кг, заканчивается', icon: '🦴', date: '08.04', status: 'warning', price: '2 190 ₽', category: 'Корм' },
        { id: 2, name: 'Лакомства мясные', desc: 'Палочки, 10 шт', icon: '🍖', date: '20.04', status: 'good', price: '320 ₽', category: 'Лакомства' },
        { id: 3, name: 'Витамины для суставов', desc: '60 табл, осталось 15', icon: '💊', date: '15.04', status: 'warning', price: '590 ₽', category: 'Витамины' },
        { id: 4, name: 'Влажный корм', desc: 'Паштет, 12 шт', icon: '🥫', date: '18.04', status: 'good', price: '1 440 ₽', category: 'Корм' },
      ],
      sberko: [
        { id: 1, name: 'Корм Whiskas', desc: 'Сухой, 2 кг, заканчивается', icon: '🐟', date: '09.04', status: 'warning', price: '890 ₽', category: 'Корм' },
        { id: 2, name: 'Наполнитель CatSan', desc: '10 л, осталось мало', icon: '🧹', date: '06.04', status: 'urgent', price: '690 ₽', category: 'Уход' },
        { id: 3, name: 'Витамины для шерсти', desc: '30 табл, полная пачка', icon: '✨', date: '25.04', status: 'good', price: '450 ₽', category: 'Витамины' },
        { id: 4, name: 'Влажный корм', desc: 'Соус, 10 шт', icon: '🥫', date: '20.04', status: 'good', price: '990 ₽', category: 'Корм' },
      ],
    },
    deliveryCalendar: [
      { date: '2026-04-08', items: ['Молоко', 'Корм Royal Canin'], category: 'kitchen', profile: 'amanda' },
      { date: '2026-04-10', items: ['Протеин шоколад', 'Куриное филе'], category: 'kitchen', profile: 'husband' },
      { date: '2026-04-12', items: ['Кофе Nespresso', 'Сыр Маасдам'], category: 'kitchen', profile: 'amanda' },
      { date: '2026-04-15', items: ['Витамины для суставов'], category: 'kitchen', profile: 'mishanya' },
    ],
  },
  {
    id: 'bathroom',
    slug: 'bathroom',
    name: 'Ванная',
    color: 'bathroom',
    accentColor: '#60a5fa',
    productsByProfile: {
      amanda: [
        { id: 1, name: 'Шампунь L\'Oréal', desc: '500 мл, заканчивается', icon: '🧴', date: '05.04', status: 'warning', price: '490 ₽', category: 'Уход за волосами' },
        { id: 2, name: 'Гель для душа', desc: '250 мл, половина', icon: '🧴', date: '08.04', status: 'good', price: '320 ₽', category: 'Уход за телом' },
        { id: 3, name: 'Крем для рук', desc: '75 мл, заканчивается', icon: '🧴', date: '03.04', status: 'urgent', price: '250 ₽', category: 'Уход за кожей' },
        { id: 4, name: 'Зубная паста', desc: '75 мл, новая', icon: '🪥', date: '15.06', status: 'good', price: '180 ₽', category: 'Гигиена' },
      ],
      husband: [
        { id: 1, name: 'Гель для бритья', desc: '200 мл, заканчивается', icon: '🪒', date: '07.04', status: 'warning', price: '350 ₽', category: 'Бритьё' },
        { id: 2, name: 'Шампунь мужской', desc: '400 мл, половина', icon: '🧴', date: '20.04', status: 'good', price: '420 ₽', category: 'Уход за волосами' },
        { id: 3, name: 'Пена для бритья', desc: '250 мл, полная', icon: '🪒', date: '15.05', status: 'good', price: '280 ₽', category: 'Бритьё' },
      ],
      mishanya: [
        { id: 1, name: 'Шампунь для собак', desc: '250 мл, полный', icon: '🧴', date: '01.06', status: 'good', price: '380 ₽', category: 'Груминг' },
        { id: 2, name: 'Салфетки для лап', desc: '50 шт, осталось 10', icon: '🐾', date: '10.04', status: 'warning', price: '220 ₽', category: 'Гигиена' },
      ],
      sberko: [
        { id: 1, name: 'Шампунь для кошек', desc: '200 мл, половина', icon: '🧴', date: '15.05', status: 'good', price: '350 ₽', category: 'Груминг' },
        { id: 2, name: 'Салфетки для глаз', desc: '30 шт, осталось 5', icon: '👁️', date: '12.04', status: 'warning', price: '180 ₽', category: 'Гигиена' },
      ],
    },
    deliveryCalendar: [
      { date: '2026-04-07', items: ['Крем для рук'], category: 'bathroom', profile: 'amanda' },
      { date: '2026-04-10', items: ['Салфетки для лап'], category: 'bathroom', profile: 'mishanya' },
      { date: '2026-04-15', items: ['Шампунь L\'Oréal', 'Гель для бритья'], category: 'bathroom', profile: 'amanda' },
    ],
  },
  {
    id: 'pets',
    slug: 'pets',
    name: 'Питомцы',
    color: 'pets',
    accentColor: '#facc15',
    productsByProfile: {
      mishanya: [
        { id: 1, name: 'Корм Royal Canin', desc: 'Сухой, 15 кг, осталось 3 кг', icon: '🦴', date: '08.04', status: 'urgent', price: '5 490 ₽', category: 'Корм' },
        { id: 2, name: 'Влажный корм', desc: 'Паштет, 24 шт, осталось 6', icon: '🥫', date: '12.04', status: 'warning', price: '2 880 ₽', category: 'Корм' },
        { id: 3, name: 'Лакомства мясные', desc: 'Палочки, 20 шт', icon: '🍖', date: '25.04', status: 'good', price: '590 ₽', category: 'Лакомства' },
        { id: 4, name: 'Витамины для суставов', desc: '120 табл, осталось 30', icon: '💊', date: '20.04', status: 'warning', price: '990 ₽', category: 'Витамины' },
        { id: 5, name: 'Поводок-рулетка', desc: '5 м, сломалась', icon: '🦮', date: '05.04', status: 'urgent', price: '1 890 ₽', category: 'Аксессуары' },
        { id: 6, name: 'Игрушка-канат', desc: 'Новая нужна', icon: '🪢', date: '10.04', status: 'good', price: '350 ₽', category: 'Игрушки' },
      ],
      sberko: [
        { id: 1, name: 'Корм Whiskas', desc: 'Сухой, 8 кг, осталось 2 кг', icon: '🐟', date: '10.04', status: 'warning', price: '2 990 ₽', category: 'Корм' },
        { id: 2, name: 'Наполнитель CatSan', desc: '20 л, остался мешок', icon: '🧹', date: '06.04', status: 'urgent', price: '1 190 ₽', category: 'Уход' },
        { id: 3, name: 'Витамины для шерсти', desc: '60 табл, полная пачка', icon: '✨', date: '25.04', status: 'good', price: '790 ₽', category: 'Витамины' },
        { id: 4, name: 'Когтеточка', desc: 'Старая износилась', icon: '🐈', date: '08.04', status: 'warning', price: '1 590 ₽', category: 'Аксессуары' },
        { id: 5, name: 'Влажный корм', desc: 'Соус, 24 шт', icon: '🥫', date: '18.04', status: 'good', price: '1 980 ₽', category: 'Корм' },
      ],
    },
    deliveryCalendar: [
      { date: '2026-04-06', items: ['Наполнитель CatSan'], category: 'pets', profile: 'sberko' },
      { date: '2026-04-08', items: ['Корм Royal Canin', 'Поводок-рулетка'], category: 'pets', profile: 'mishanya' },
      { date: '2026-04-10', items: ['Корм Whiskas'], category: 'pets', profile: 'sberko' },
      { date: '2026-04-12', items: ['Влажный корм Мишаня'], category: 'pets', profile: 'mishanya' },
      { date: '2026-04-20', items: ['Витамины для суставов'], category: 'pets', profile: 'mishanya' },
    ],
  },
  {
    id: 'medicine',
    slug: 'medicine',
    name: 'Аптечка',
    color: 'medicine',
    accentColor: '#22c55e',
    productsByProfile: {
      amanda: [
        { id: 1, name: 'Парацетамол', desc: '10 табл, полная пачка', icon: '💊', date: '2025.12', status: 'good', price: '45 ₽', category: 'Обезболивающее' },
        { id: 2, name: 'Витамин D', desc: '60 капсул, заканчивается', icon: '☀️', date: '04.04', status: 'urgent', price: '390 ₽', category: 'Витамины' },
        { id: 3, name: 'Пластыри', desc: '10 шт, осталось 3', icon: '🩹', date: '10.04', status: 'warning', price: '120 ₽', category: 'Перевязка' },
        { id: 4, name: 'Бинт стерильный', desc: '5 м, полный', icon: '🩹', date: '2026.06', status: 'good', price: '80 ₽', category: 'Перевязка' },
      ],
      husband: [
        { id: 1, name: 'Ибупрофен', desc: '20 табл, полная пачка', icon: '💊', date: '2026.08', status: 'good', price: '90 ₽', category: 'Обезболивающее' },
        { id: 2, name: 'Омега-3', desc: '90 капсул, осталось 20', icon: '🐟', date: '15.04', status: 'warning', price: '690 ₽', category: 'Витамины' },
        { id: 3, name: 'Магний B6', desc: '50 табл, полная', icon: '💊', date: '2026.10', status: 'good', price: '350 ₽', category: 'Витамины' },
      ],
      mishanya: [
        { id: 1, name: 'Антигельминтик', desc: 'Таблетка, полная пачка', icon: '💊', date: '2026.09', status: 'good', price: '450 ₽', category: 'Ветпрепараты' },
        { id: 2, name: 'Хлоргексидин', desc: '100 мл, полный', icon: '🧴', date: '2027.01', status: 'good', price: '60 ₽', category: 'Антисептик' },
      ],
      sberko: [
        { id: 1, name: 'Капли от блох', desc: 'Пипетка, новая', icon: '💧', date: '2026.07', status: 'good', price: '320 ₽', category: 'Ветпрепараты' },
        { id: 2, name: 'Хлоргексидин', desc: '100 мл, половина', icon: '🧴', date: '2027.01', status: 'good', price: '60 ₽', category: 'Антисептик' },
      ],
    },
    deliveryCalendar: [
      { date: '2026-04-05', items: ['Витамин D'], category: 'medicine', profile: 'amanda' },
      { date: '2026-04-15', items: ['Омега-3', 'Пластыри'], category: 'medicine', profile: 'husband' },
    ],
  },
]

// Расписание доставок для календаря (общее)
export const deliverySchedule = [
  { date: '2026-04-07', day: 7, month: 'Апрель', items: [
    { name: 'Крем для рук', category: 'Ванная', profile: 'Amanda', icon: '🧴' },
  ]},
  { date: '2026-04-08', day: 8, month: 'Апрель', items: [
    { name: 'Молоко', category: 'Кухня', profile: 'Amanda', icon: '🥛' },
    { name: 'Корм Royal Canin', category: 'Питомцы', profile: 'Мишаня', icon: '🦴' },
  ]},
  { date: '2026-04-10', day: 10, month: 'Апрель', items: [
    { name: 'Протеин шоколад', category: 'Кухня', profile: 'Муж', icon: '🍫' },
    { name: 'Салфетки для лап', category: 'Ванная', profile: 'Мишаня', icon: '🐾' },
    { name: 'Корм Whiskas', category: 'Питомцы', profile: 'Сберко', icon: '🐟' },
  ]},
  { date: '2026-04-12', day: 12, month: 'Апрель', items: [
    { name: 'Кофе Nespresso', category: 'Кухня', profile: 'Amanda', icon: '☕' },
    { name: 'Влажный корм', category: 'Питомцы', profile: 'Мишаня', icon: '🥫' },
  ]},
  { date: '2026-04-15', day: 15, month: 'Апрель', items: [
    { name: 'Шампунь L\'Oréal', category: 'Ванная', profile: 'Amanda', icon: '🧴' },
    { name: 'Гель для бритья', category: 'Ванная', profile: 'Муж', icon: '🪒' },
    { name: 'Витамины для суставов', category: 'Питомцы', profile: 'Мишаня', icon: '💊' },
    { name: 'Омега-3', category: 'Аптечка', profile: 'Муж', icon: '🐟' },
    { name: 'Пластыри', category: 'Аптечка', profile: 'Amanda', icon: '🩹' },
  ]},
  { date: '2026-04-20', day: 20, month: 'Апрель', items: [
    { name: 'Витамины для суставов', category: 'Питомцы', profile: 'Мишаня', icon: '💊' },
  ]},
]
