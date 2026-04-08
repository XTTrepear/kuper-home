// Движок сравнения товаров
// Формула скоринга: Цена (40%) + Рейтинг (35%) + Отзывы (25%)

import { kuperCatalog, getFinalPrice } from '../data/kuperCatalog'

// Вес критериев
const WEIGHTS = {
  price: 0.40,
  rating: 0.35,
  reviews: 0.25,
}

/**
 * Найти все аналоги товара по его analogGroup
 * @param {string} productId - ID товара
 * @returns {Array} - Массив аналогов
 */
export function findAnalogs(productId) {
  const product = kuperCatalog.find(p => p.id === productId)
  if (!product) return []

  return kuperCatalog.filter(p => p.analogGroup === product.analogGroup && p.id !== productId)
}

/**
 * Получить полную группу аналогов включая сам товар
 * @param {string} productId - ID товара
 * @returns {Array} - Массив всех аналогов + сам товар
 */
export function getAnalogGroup(productId) {
  const product = kuperCatalog.find(p => p.id === productId)
  if (!product) return []

  return kuperCatalog.filter(p => p.analogGroup === product.analogGroup)
}

/**
 * Рассчитать скоринг для группы товаров
 * @param {Array} products - Массив товаров
 * @returns {Array} - Массив товаров с calculated score и badges
 */
export function scoreProducts(products) {
  if (products.length === 0) return []

  // Нормализация значений
  const prices = products.map(p => getFinalPrice(p))
  const ratings = products.map(p => p.rating)
  const reviews = products.map(p => p.reviewsCount)

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const maxRating = 5.0
  const minRating = 1.0
  const maxReviews = Math.max(...reviews)
  const minReviews = Math.min(...reviews)

  const scored = products.map(product => {
    const finalPrice = getFinalPrice(product)

    // Нормализация цены (меньше = лучше)
    const priceRange = maxPrice - minPrice || 1
    const priceScore = 1 - ((finalPrice - minPrice) / priceRange)

    // Нормализация рейтинга
    const ratingRange = maxRating - minRating
    const ratingScore = (product.rating - minRating) / ratingRange

    // Нормализация отзывов (больше = лучше)
    const reviewsRange = maxReviews - minReviews || 1
    const reviewsScore = (product.reviewsCount - minReviews) / reviewsRange

    // Итоговый скоринг
    const totalScore =
      priceScore * WEIGHTS.price +
      ratingScore * WEIGHTS.rating +
      reviewsScore * WEIGHTS.reviews

    return {
      ...product,
      finalPrice,
      score: Math.round(totalScore * 100),
      priceScore: Math.round(priceScore * 100),
      ratingScore: Math.round(ratingScore * 100),
      reviewsScore: Math.round(reviewsScore * 100),
      badges: [],
    }
  })

  // Определение бейджей
  const lowestPrice = Math.min(...scored.map(p => p.finalPrice))
  const highestRating = Math.max(...scored.map(p => p.rating))
  const mostReviews = Math.max(...scored.map(p => p.reviewsCount))

  scored.forEach(product => {
    if (product.finalPrice === lowestPrice) {
      product.badges.push('best-price')
    }
    if (product.rating === highestRating) {
      product.badges.push('top-rating')
    }
    if (product.reviewsCount === mostReviews) {
      product.badges.push('most-reviews')
    }
    if (product.salePrice) {
      product.badges.push('sale')
    }
  })

  // Сортировка по итоговому скорингу (по убыванию)
  return scored.sort((a, b) => b.score - a.score)
}

/**
 * Получить лучший товар по скорингу
 * @param {string} analogGroup - Группа аналогов
 * @returns {Object|null} - Лучший товар
 */
export function getBestChoice(analogGroup) {
  const group = kuperCatalog.filter(p => p.analogGroup === analogGroup)
  const scored = scoreProducts(group)
  return scored[0] || null
}

/**
 * Получить рекомендации для категории
 * @param {string} category - Категория
 * @param {number} limit - Лимит рекомендаций
 * @returns {Array} - Рекомендуемые товары
 */
export function getCategoryRecommendations(category, limit = 5) {
  const categoryProducts = kuperCatalog.filter(p => p.category === category)

  // Группируем по analogGroup и берём лучший из каждой
  const groups = {}
  categoryProducts.forEach(product => {
    if (!groups[product.analogGroup]) {
      groups[product.analogGroup] = []
    }
    groups[product.analogGroup].push(product)
  })

  const bestOfEachGroup = Object.values(groups).map(group => {
    const scored = scoreProducts(group)
    return scored[0]
  })

  return bestOfEachGroup
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

/**
 * Получить общие рекомендации (лучшие товары из всех категорий)
 * @param {number} limit - Лимит
 * @returns {Array} - Рекомендуемые товары
 */
export function getTopRecommendations(limit = 10) {
  // Берём по лучшему товару из каждой группы аналогов
  const groups = {}
  kuperCatalog.forEach(product => {
    if (!groups[product.analogGroup]) {
      groups[product.analogGroup] = []
    }
    groups[product.analogGroup].push(product)
  })

  const bestOfEachGroup = Object.values(groups).map(group => {
    const scored = scoreProducts(group)
    return scored[0]
  })

  return bestOfEachGroup
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
}

/**
 * Объяснение, почему товар рекомендован
 * @param {Object} product - Товар с score
 * @returns {string} - Объяснение
 */
export function getRecommendationReason(product) {
  const reasons = []

  if (product.badges.includes('best-price')) {
    reasons.push(`лучшая цена — ${product.finalPrice} ₽`)
  }
  if (product.badges.includes('top-rating')) {
    reasons.push(`высший рейтинг ${product.rating}⭐`)
  }
  if (product.badges.includes('most-reviews')) {
    reasons.push(`${product.reviewsCount.toLocaleString('ru')} отзывов`)
  }
  if (product.badges.includes('sale')) {
    const discount = Math.round((1 - product.finalPrice / product.price) * 100)
    reasons.push(`скидка ${discount}%`)
  }

  if (reasons.length === 0) {
    reasons.push('оптимальный баланс цены и качества')
  }

  return reasons.join(', ')
}
