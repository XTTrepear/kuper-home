// Каталог Купера — товары для сравнения и подбора аналогов
// Каждый товар входит в группу аналогов (analogGroup)

export const kuperCatalog = [
  // ======================== МОЛОКО ========================
  {
    id: 'milk-1', name: 'Молоко Простоквашино 2.5%', brand: 'Простоквашино',
    category: 'Молочные', analogGroup: 'milk',
    price: 89, rating: 4.3, reviewsCount: 1240, inStock: true, deliveryDays: 1,
    description: 'Ультрапастеризованное молоко 2.5%, 1 л',
    image: '🥛'
  },
  {
    id: 'milk-2', name: 'Молоко Домик в деревне 3.2%', brand: 'Домик в деревне',
    category: 'Молочные', analogGroup: 'milk',
    price: 109, rating: 4.6, reviewsCount: 890, inStock: true, deliveryDays: 1,
    description: 'Пастеризованное молоко 3.2%, 1 л',
    image: '🥛'
  },
  {
    id: 'milk-3', name: 'Молоко Ламзурь 1.5%', brand: 'Ламзурь',
    category: 'Молочные', analogGroup: 'milk',
    price: 69, rating: 3.9, reviewsCount: 320, inStock: true, deliveryDays: 2,
    description: 'Ультрапастеризованное молоко 1.5%, 1 л',
    image: '🥛', salePrice: 59
  },
  {
    id: 'milk-4', name: 'Молоко Parmalat 3.5%', brand: 'Parmalat',
    category: 'Молочные', analogGroup: 'milk',
    price: 139, rating: 4.7, reviewsCount: 2100, inStock: true, deliveryDays: 1,
    description: 'Ультрапастеризованное молоко 3.5%, 1 л',
    image: '🥛'
  },
  {
    id: 'milk-5', name: 'Молоко ВкусВилл органическое 2.5%', brand: 'ВкусВилл',
    category: 'Молочные', analogGroup: 'milk',
    price: 149, rating: 4.8, reviewsCount: 560, inStock: true, deliveryDays: 2,
    description: 'Органическое фермерское молоко, 1 л',
    image: '🥛'
  },

  // ======================== КОФЕ ========================
  {
    id: 'coffee-1', name: 'Кофе Nespresso капсулы Original', brand: 'Nespresso',
    category: 'Напитки', analogGroup: 'coffee',
    price: 890, rating: 4.7, reviewsCount: 3400, inStock: true, deliveryDays: 1,
    description: 'Капсулы для кофемашины, 10 шт',
    image: '☕'
  },
  {
    id: 'coffee-2', name: 'Кофе Jacobs Monarch растворимый', brand: 'Jacobs',
    category: 'Напитки', analogGroup: 'coffee',
    price: 590, rating: 4.2, reviewsCount: 5600, inStock: true, deliveryDays: 1,
    description: 'Растворимый кофе, 190 г',
    image: '☕', salePrice: 490
  },
  {
    id: 'coffee-3', name: 'Кофе Jardin Gourmet de France', brand: 'Jardin',
    category: 'Навитки', analogGroup: 'coffee',
    price: 450, rating: 4.0, reviewsCount: 2300, inStock: true, deliveryDays: 1,
    description: 'Молотый кофе, 250 г',
    image: '☕'
  },
  {
    id: 'coffee-4', name: 'Кофе Lavazza Qualita Oro', brand: 'Lavazza',
    category: 'Напитки', analogGroup: 'coffee',
    price: 790, rating: 4.6, reviewsCount: 4100, inStock: true, deliveryDays: 1,
    description: 'Зерновой кофе, 250 г',
    image: '☕'
  },
  {
    id: 'coffee-5', name: 'Кофе Starbucks Pike Place молотый', brand: 'Starbucks',
    category: 'Напитки', analogGroup: 'coffee',
    price: 1290, rating: 4.8, reviewsCount: 1800, inStock: false, deliveryDays: 3,
    description: 'Молотый кофе, 200 г',
    image: '☕'
  },

  // ======================== ХЛЕБ ========================
  {
    id: 'bread-1', name: 'Хлеб Бородинский нарезка', brand: 'Хлебный дом',
    category: 'Выпечка', analogGroup: 'bread',
    price: 45, rating: 4.1, reviewsCount: 780, inStock: true, deliveryDays: 1,
    description: 'Ржаной хлеб, нарезка, 400 г',
    image: '🍞'
  },
  {
    id: 'bread-2', name: 'Хлеб белый пшеничный', brand: 'Хлебный дом',
    category: 'Выпечка', analogGroup: 'bread',
    price: 39, rating: 3.8, reviewsCount: 560, inStock: true, deliveryDays: 1,
    description: 'Пшеничный хлеб, 400 г',
    image: '🍞'
  },
  {
    id: 'bread-3', name: 'Хлеб Цельнозерновой Фрико', brand: 'Фрико',
    category: 'Выпечка', analogGroup: 'bread',
    price: 79, rating: 4.5, reviewsCount: 340, inStock: true, deliveryDays: 1,
    description: 'Цельнозерновой хлеб, 300 г',
    image: '🍞'
  },
  {
    id: 'bread-4', name: 'Хлеб Дарницкий', brand: 'Каравай',
    category: 'Выпечка', analogGroup: 'bread',
    price: 42, rating: 4.0, reviewsCount: 920, inStock: true, deliveryDays: 1,
    description: 'Ржано-пшеничный хлеб, 400 г',
    image: '🍞', salePrice: 35
  },

  // ======================== ЯЙЦА ========================
  {
    id: 'eggs-1', name: 'Яйца СО категория', brand: 'Роскар',
    category: 'Молочные', analogGroup: 'eggs',
    price: 120, rating: 4.4, reviewsCount: 2100, inStock: true, deliveryDays: 1,
    description: 'Яйца отборные, 10 шт',
    image: '🥚'
  },
  {
    id: 'eggs-2', name: 'Яйца С1 Фермерские', brand: 'ВкусВилл',
    category: 'Молочные', analogGroup: 'eggs',
    price: 159, rating: 4.7, reviewsCount: 670, inStock: true, deliveryDays: 2,
    description: 'Фермерские яйца С1, 10 шт',
    image: '🥚'
  },
  {
    id: 'eggs-3', name: 'Яйца С2 Столовые', brand: 'Окское',
    category: 'Молочные', analogGroup: 'eggs',
    price: 89, rating: 3.9, reviewsCount: 1450, inStock: true, deliveryDays: 1,
    description: 'Яйца С2, 10 шт',
    image: '🥚', salePrice: 79
  },

  // ======================== ШОКОЛАД ========================
  {
    id: 'choco-1', name: 'Шоколад Milka молочный', brand: 'Milka',
    category: 'Сладости', analogGroup: 'chocolate',
    price: 149, rating: 4.5, reviewsCount: 4300, inStock: true, deliveryDays: 1,
    description: 'Молочный шоколад, 90 г',
    image: '🍫'
  },
  {
    id: 'choco-2', name: 'Шоколад Lindt Excellence 85%', brand: 'Lindt',
    category: 'Сладости', analogGroup: 'chocolate',
    price: 320, rating: 4.8, reviewsCount: 1900, inStock: true, deliveryDays: 1,
    description: 'Тёмный шоколад 85%, 100 г',
    image: '🍫'
  },
  {
    id: 'choco-3', name: 'Шоколад Алёнка молочный', brand: 'Красный Октябрь',
    category: 'Сладости', analogGroup: 'chocolate',
    price: 79, rating: 4.2, reviewsCount: 6700, inStock: true, deliveryDays: 1,
    description: 'Молочный шоколад, 90 г',
    image: '🍫', salePrice: 65
  },
  {
    id: 'choco-4', name: 'Шоколад Ritter Sport миндаль', brand: 'Ritter Sport',
    category: 'Сладости', analogGroup: 'chocolate',
    price: 189, rating: 4.6, reviewsCount: 2800, inStock: true, deliveryDays: 1,
    description: 'Шоколад с миндалём, 100 г',
    image: '🍫'
  },
  {
    id: 'choco-5', name: 'Шоколад Бабаевский горький 72%', brand: 'Бабаевский',
    category: 'Сладости', analogGroup: 'chocolate',
    price: 119, rating: 4.3, reviewsCount: 3100, inStock: true, deliveryDays: 1,
    description: 'Горький шоколад 72%, 90 г',
    image: '🍫'
  },

  // ======================== СЫР ========================
  {
    id: 'cheese-1', name: 'Сыр Маасдам нарезка', brand: 'Хохланд',
    category: 'Молочные', analogGroup: 'cheese',
    price: 320, rating: 4.4, reviewsCount: 1800, inStock: true, deliveryDays: 1,
    description: 'Нарезка, 200 г',
    image: '🧀'
  },
  {
    id: 'cheese-2', name: 'Сыр Чеддер', brand: 'President',
    category: 'Молочные', analogGroup: 'cheese',
    price: 450, rating: 4.6, reviewsCount: 980, inStock: true, deliveryDays: 1,
    description: 'Кусок, 250 г',
    image: '🧀'
  },
  {
    id: 'cheese-3', name: 'Сыр Российский', brand: 'Костромской',
    category: 'Молочные', analogGroup: 'cheese',
    price: 220, rating: 4.1, reviewsCount: 3400, inStock: true, deliveryDays: 1,
    description: 'Кусок, 300 г',
    image: '🧀', salePrice: 189
  },
  {
    id: 'cheese-4', name: 'Сыр Бри', brand: 'President',
    category: 'Молочные', analogGroup: 'cheese',
    price: 390, rating: 4.7, reviewsCount: 720, inStock: true, deliveryDays: 1,
    description: 'Мягкий сыр, 125 г',
    image: '🧀'
  },

  // ======================== КОРМ ДЛЯ СОБАК ========================
  {
    id: 'dogfood-1', name: 'Royal Canin Adult для средних пород', brand: 'Royal Canin',
    category: 'Корм для собак', analogGroup: 'dogfood',
    price: 2190, rating: 4.6, reviewsCount: 5400, inStock: true, deliveryDays: 1,
    description: 'Сухой корм, 3 кг',
    image: '🦴'
  },
  {
    id: 'dogfood-2', name: 'Purina Pro Plan Adult', brand: 'Purina',
    category: 'Корм для собак', analogGroup: 'dogfood',
    price: 1890, rating: 4.4, reviewsCount: 3200, inStock: true, deliveryDays: 1,
    description: 'Сухой корм с курицей, 3 кг',
    image: '🦴', salePrice: 1690
  },
  {
    id: 'dogfood-3', name: 'Hill\'s Science Plan', brand: 'Hill\'s',
    category: 'Корм для собак', analogGroup: 'dogfood',
    price: 2890, rating: 4.8, reviewsCount: 1600, inStock: true, deliveryDays: 2,
    description: 'Сухой корм премиум, 3 кг',
    image: '🦴'
  },
  {
    id: 'dogfood-4', name: 'Pedigree для взрослых собак', brand: 'Pedigree',
    category: 'Корм для собак', analogGroup: 'dogfood',
    price: 990, rating: 3.8, reviewsCount: 7800, inStock: true, deliveryDays: 1,
    description: 'Сухой корм, 3 кг',
    image: '🦴'
  },

  // ======================== КОРМ ДЛЯ КОШЕК ========================
  {
    id: 'catfood-1', name: 'Whiskas сухой для взрослых кошек', brand: 'Whiskas',
    category: 'Корм для кошек', analogGroup: 'catfood',
    price: 890, rating: 4.0, reviewsCount: 9200, inStock: true, deliveryDays: 1,
    description: 'Сухой корм с рыбой, 2 кг',
    image: '🐟'
  },
  {
    id: 'catfood-2', name: 'Royal Canin Indoor для домашних кошек', brand: 'Royal Canin',
    category: 'Корм для кошек', analogGroup: 'catfood',
    price: 1590, rating: 4.6, reviewsCount: 4300, inStock: true, deliveryDays: 1,
    description: 'Сухой корм, 2 кг',
    image: '🐟'
  },
  {
    id: 'catfood-3', name: 'Hill\'s Science Plan для кошек', brand: 'Hill\'s',
    category: 'Корм для кошек', analogGroup: 'catfood',
    price: 1890, rating: 4.7, reviewsCount: 2100, inStock: true, deliveryDays: 2,
    description: 'Сухой корм премиум, 1.5 кг',
    image: '🐟'
  },
  {
    id: 'catfood-4', name: 'KiteKat с мясом и овощами', brand: 'KiteKat',
    category: 'Корм для кошек', analogGroup: 'catfood',
    price: 690, rating: 3.7, reviewsCount: 5600, inStock: true, deliveryDays: 1,
    description: 'Сухой корм, 2 кг',
    image: '🐟', salePrice: 590
  },

  // ======================== НАПОЛНИТЕЛЬ ========================
  {
    id: 'litter-1', name: 'CatSan классический', brand: 'CatSan',
    category: 'Уход за кошками', analogGroup: 'litter',
    price: 690, rating: 4.2, reviewsCount: 6100, inStock: true, deliveryDays: 1,
    description: 'Минеральный наполнитель, 10 л',
    image: '🧹'
  },
  {
    id: 'litter-2', name: 'Pi-Pi-Bent комкующийся', brand: 'Pi-Pi-Bent',
    category: 'Уход за кошками', analogGroup: 'litter',
    price: 490, rating: 4.0, reviewsCount: 4800, inStock: true, deliveryDays: 1,
    description: 'Минеральный наполнитель, 10 кг',
    image: '🧹', salePrice: 390
  },
  {
    id: 'litter-3', name: 'CatSilica силикагелевый', brand: 'CatSilica',
    category: 'Уход за кошками', analogGroup: 'litter',
    price: 890, rating: 4.5, reviewsCount: 2300, inStock: true, deliveryDays: 1,
    description: 'Силикагелевый наполнитель, 10 л',
    image: '🧹'
  },
  {
    id: 'litter-4', name: 'Nature\'s Fresh древесный', brand: 'Nature\'s Fresh',
    category: 'Уход за кошками', analogGroup: 'litter',
    price: 390, rating: 4.3, reviewsCount: 3700, inStock: true, deliveryDays: 1,
    description: 'Древесный наполнитель, 10 л',
    image: '🧹'
  },

  // ======================== ШАМПУНЬ ========================
  {
    id: 'shampoo-1', name: 'Шампунь L\'Oréal Paris Elvive', brand: 'L\'Oréal',
    category: 'Уход за волосами', analogGroup: 'shampoo',
    price: 490, rating: 4.3, reviewsCount: 5600, inStock: true, deliveryDays: 1,
    description: 'Восстанавливающий шампунь, 500 мл',
    image: '🧴'
  },
  {
    id: 'shampoo-2', name: 'Шампунь Pantene Pro-V', brand: 'Pantene',
    category: 'Уход за волосами', analogGroup: 'shampoo',
    price: 350, rating: 4.1, reviewsCount: 8900, inStock: true, deliveryDays: 1,
    description: 'Шампунь для всех типов, 400 мл',
    image: '🧴', salePrice: 290
  },
  {
    id: 'shampoo-3', name: 'Шампунь Head & Shoulders', brand: 'Head & Shoulders',
    category: 'Уход за волосами', analogGroup: 'shampoo',
    price: 420, rating: 4.2, reviewsCount: 7200, inStock: true, deliveryDays: 1,
    description: 'Против перхоти, 400 мл',
    image: '🧴'
  },
  {
    id: 'shampoo-4', name: 'Шампунь Natura Siberica', brand: 'Natura Siberica',
    category: 'Уход за волосами', analogGroup: 'shampoo',
    price: 390, rating: 4.5, reviewsCount: 3100, inStock: true, deliveryDays: 2,
    description: 'Облепиховый шампунь, 400 мл',
    image: '🧴'
  },

  // ======================== ПАРАЦЕТАМОЛ ========================
  {
    id: 'paracetamol-1', name: 'Парацетамол таблетки', brand: 'Фармстандарт',
    category: 'Обезболивающее', analogGroup: 'paracetamol',
    price: 45, rating: 4.4, reviewsCount: 12000, inStock: true, deliveryDays: 1,
    description: '500 мг, 10 таблеток',
    image: '💊'
  },
  {
    id: 'paracetamol-2', name: 'Парацетамол-Акрихин', brand: 'Акрихин',
    category: 'Обезболивающее', analogGroup: 'paracetamol',
    price: 55, rating: 4.3, reviewsCount: 4500, inStock: true, deliveryDays: 1,
    description: '500 мг, 20 таблеток',
    image: '💊'
  },
  {
    id: 'paracetamol-3', name: 'Панадол Экспресс', brand: 'Панадол',
    category: 'Обезболивающее', analogGroup: 'paracetamol',
    price: 120, rating: 4.6, reviewsCount: 3200, inStock: true, deliveryDays: 1,
    description: '500 мг, 12 таблеток в оболочке',
    image: '💊'
  },

  // ======================== ВИТАМИН D ========================
  {
    id: 'vitd-1', name: 'Витамин D3 2000 МЕ', brand: 'Solgar',
    category: 'Витамины', analogGroup: 'vitamind',
    price: 890, rating: 4.7, reviewsCount: 2800, inStock: true, deliveryDays: 2,
    description: '60 капсул',
    image: '☀️'
  },
  {
    id: 'vitd-2', name: 'Витамин D3 1000 МЕ', brand: 'Эвалар',
    category: 'Витамины', analogGroup: 'vitamind',
    price: 390, rating: 4.3, reviewsCount: 5600, inStock: true, deliveryDays: 1,
    description: '60 таблеток',
    image: '☀️', salePrice: 290
  },
  {
    id: 'vitd-3', name: 'АкваДетрим капли', brand: 'Медана Фарма',
    category: 'Витамины', analogGroup: 'vitamind',
    price: 210, rating: 4.5, reviewsCount: 8900, inStock: true, deliveryDays: 1,
    description: 'Водный раствор, 10 мл',
    image: '☀️'
  },

  // ======================== ПРОТЕИН ========================
  {
    id: 'protein-1', name: 'Протеин Whey Gold Standard', brand: 'Optimum Nutrition',
    category: 'Спортпит', analogGroup: 'protein',
    price: 3490, rating: 4.8, reviewsCount: 15000, inStock: true, deliveryDays: 2,
    description: 'Сывороточный протеин, 900 г',
    image: '🍫'
  },
  {
    id: 'protein-2', name: 'Протеин Impact Whey', brand: 'Myprotein',
    category: 'Спортпит', analogGroup: 'protein',
    price: 1990, rating: 4.5, reviewsCount: 8200, inStock: true, deliveryDays: 3,
    description: 'Сывороточный протеин, 1 кг',
    image: '🍫', salePrice: 1690
  },
  {
    id: 'protein-3', name: 'Протеин 100% Whey', brand: 'Dymatize',
    category: 'Спортпит', analogGroup: 'protein',
    price: 2890, rating: 4.6, reviewsCount: 4300, inStock: true, deliveryDays: 2,
    description: 'Сывороточный протеин, 900 г',
    image: '🍫'
  },

  // ======================== ПОПКОРН ========================
  {
    id: 'popcorn-1', name: 'Попкорн Act II микроволновка', brand: 'Act II',
    category: 'Снеки', analogGroup: 'popcorn',
    price: 189, rating: 4.2, reviewsCount: 3400, inStock: true, deliveryDays: 1,
    description: 'Для микроволновки, 3 шт × 100 г',
    image: '🍿'
  },
  {
    id: 'popcorn-2', name: 'Попкорн Act II карамель', brand: 'Act II',
    category: 'Снеки', analogGroup: 'popcorn',
    price: 219, rating: 4.4, reviewsCount: 2100, inStock: true, deliveryDays: 1,
    description: 'Карамельный, 3 шт × 90 г',
    image: '🍿'
  },
  {
    id: 'popcorn-3', name: 'Попкорн Бон Пари сыр', brand: 'Бон Пари',
    category: 'Снеки', analogGroup: 'popcorn',
    price: 149, rating: 3.9, reviewsCount: 1800, inStock: true, deliveryDays: 1,
    description: 'Сырный, 3 шт × 80 г',
    image: '🍿', salePrice: 119
  },

  // ======================== КОЛА ========================
  {
    id: 'cola-1', name: 'Coca-Cola классическая', brand: 'Coca-Cola',
    category: 'Напитки', analogGroup: 'cola',
    price: 109, rating: 4.5, reviewsCount: 12000, inStock: true, deliveryDays: 1,
    description: '1.5 л',
    image: '🥤'
  },
  {
    id: 'cola-2', name: 'Pepsi', brand: 'Pepsi',
    category: 'Напитки', analogGroup: 'cola',
    price: 99, rating: 4.3, reviewsCount: 9800, inStock: true, deliveryDays: 1,
    description: '1.5 л',
    image: '🥤', salePrice: 79
  },
  {
    id: 'cola-3', name: 'Cola-Cola Zero Sugar', brand: 'Coca-Cola',
    category: 'Напитки', analogGroup: 'cola',
    price: 109, rating: 4.2, reviewsCount: 5400, inStock: true, deliveryDays: 1,
    description: '1.5 л, без сахара',
    image: '🥤'
  },

  // ======================== ВИНО ========================
  {
    id: 'wine-1', name: 'Киндзмараули полусладкое', brand: 'Киндзмараули',
    category: 'Алкоголь', analogGroup: 'wine',
    price: 890, rating: 4.6, reviewsCount: 3400, inStock: true, deliveryDays: 1,
    description: 'Красное полусладкое, 750 мл',
    image: '🍷'
  },
  {
    id: 'wine-2', name: 'Хванчкара полусладкое', brand: 'Хванчкара',
    category: 'Алкоголь', analogGroup: 'wine',
    price: 990, rating: 4.5, reviewsCount: 2100, inStock: true, deliveryDays: 1,
    description: 'Красное полусладкое, 750 мл',
    image: '🍷'
  },
  {
    id: 'wine-3', name: 'Мукузани сухое', brand: 'Мукузани',
    category: 'Алкоголь', analogGroup: 'wine',
    price: 1290, rating: 4.8, reviewsCount: 1600, inStock: true, deliveryDays: 2,
    description: 'Красное сухое, 750 мл',
    image: '🍷'
  },
  {
    id: 'wine-4', name: 'Саперави полусухое', brand: 'Саперави',
    category: 'Алкоголь', analogGroup: 'wine',
    price: 690, rating: 4.3, reviewsCount: 4200, inStock: true, deliveryDays: 1,
    description: 'Красное полусухое, 750 мл',
    image: '🍷', salePrice: 590
  },

  // ======================== ОМЕГА-3 ========================
  {
    id: 'omega3-1', name: 'Омега-3 рыбий жир', brand: 'Solgar',
    category: 'Витамины', analogGroup: 'omega3',
    price: 1290, rating: 4.7, reviewsCount: 4200, inStock: true, deliveryDays: 2,
    description: '90 капсул',
    image: '🐟'
  },
  {
    id: 'omega3-2', name: 'Омега-3 Эвалар', brand: 'Эвалар',
    category: 'Витамины', analogGroup: 'omega3',
    price: 690, rating: 4.3, reviewsCount: 6700, inStock: true, deliveryDays: 1,
    description: '90 капсул',
    image: '🐟', salePrice: 540
  },
  {
    id: 'omega3-3', name: 'Omega-3 Doppelherz', brand: 'Doppelherz',
    category: 'Витамины', analogGroup: 'omega3',
    price: 590, rating: 4.4, reviewsCount: 3800, inStock: true, deliveryDays: 1,
    description: '80 капсул',
    image: '🐟'
  },
]

// Группы аналогов для быстрого поиска
export const analogGroups = {}
kuperCatalog.forEach(product => {
  if (!analogGroups[product.analogGroup]) {
    analogGroups[product.analogGroup] = []
  }
  analogGroups[product.analogGroup].push(product)
})

// Категории каталога
export const catalogCategories = [...new Set(kuperCatalog.map(p => p.category))]

// Получить финальную цену (с учётом salePrice)
export function getFinalPrice(product) {
  return product.salePrice ?? product.price
}
