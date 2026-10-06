import { motion } from "motion/react";

export default function SecondaryButton({ children, href, onClick, className = "", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 " +
    "bg-transparent font-semibold text-[0.9375rem] leading-tight " +
    "rounded-lg cursor-pointer " +
    "border-2 border-brand-navy text-brand-navy " +
    "transition-colors duration-200 " +
    "hover:bg-brand-navy hover:text-white " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
