import { motion } from 'framer-motion'
import { User } from 'lucide-react'

export default function AccountButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-300 to-lime-400 flex items-center justify-center shadow-md"
    >
      <User size={20} className="text-white" />
    </motion.button>
  )
}
