import { motion } from 'framer-motion'
import { Crown, Check } from 'lucide-react'

const plans = [
  {
    id: 'free',
    name: 'Бесплатный',
    price: '0 ₽',
    features: ['Базовые категории', 'Ручной заказ', '1 профиль'],
    color: 'from-gray-100 to-gray-200',
    btnColor: 'bg-gray-300',
    active: false,
  },
  {
    id: 'pro',
    name: 'Про',
    price: '299 ₽/мес',
    features: ['Все категории', 'Автозаказ', 'До 4 профилей', 'Аналитика', 'Умные сеты'],
    color: 'from-lime-300 to-lime-400',
    btnColor: 'bg-white',
    active: true,
  },
  {
    id: 'family',
    name: 'Семейный',
    price: '499 ₽/мес',
    features: ['Всё из Про', 'Безлимит профилей', 'Общий календарь', 'Приоритетная доставка'],
    color: 'from-blue-300 to-blue-400',
    btnColor: 'bg-white',
    active: false,
  },
]

export default function SubscriptionCard() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
        <Crown size={20} className="text-yellow-500" />
        Подписка
      </h3>

      <div className="space-y-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-r ${plan.color} rounded-[20px] p-5 shadow-sm ${
              plan.active ? 'ring-2 ring-lime-400' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{plan.name}</h4>
                <p className="text-sm text-gray-700">{plan.price}</p>
              </div>
              {plan.active && (
                <span className="bg-white/80 text-lime-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Текущий
                </span>
              )}
            </div>

            <ul className="space-y-1.5 mb-4">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-800">
                  <Check size={14} className="text-white flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {!plan.active && (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full ${plan.btnColor} text-gray-900 font-semibold py-2.5 rounded-[14px] shadow-sm`}
              >
                Переключить
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
