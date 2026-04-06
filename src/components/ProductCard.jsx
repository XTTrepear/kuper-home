import { motion } from 'framer-motion'

const statusColors = {
  good: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-700',
  urgent: 'bg-red-100 text-red-700',
}

export default function ProductCard({ product, color, index }) {
  const colorMap = {
    fridge: 'bg-fridge-500',
    bathroom: 'bg-bathroom-500',
    pet: 'bg-pet-500',
  }

  const statusColor = statusColors[product.status]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 10 }}
        className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl"
      >
        {product.icon}
      </motion.div>

      {/* Info */}
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{product.name}</h4>
        <p className="text-gray-500 text-sm">{product.desc}</p>
      </div>

      {/* Price/Date */}
      <motion.div
        className={`${statusColor} px-3 py-1.5 rounded-full text-sm font-medium`}
        whileHover={{ scale: 1.1 }}
      >
        {product.price}
      </motion.div>
    </motion.div>
  )
}
