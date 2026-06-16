import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  ...props
}) {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 cursor-pointer border'

  const variants = {
    primary:
      'bg-neon-blue text-dark-950 border-neon-blue hover:bg-transparent hover:text-neon-blue',
    secondary:
      'bg-transparent text-white border-white/20 hover:border-neon-blue hover:text-neon-blue',
    ghost:
      'bg-transparent text-white/70 border-transparent hover:text-white',
    gradient:
      'bg-gradient-to-r from-neon-blue to-electric-purple text-white border-transparent hover:shadow-lg hover:shadow-neon-blue/20',
  }

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }

  return content
}
