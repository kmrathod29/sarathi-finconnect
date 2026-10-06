import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function PrimaryButton({ children, href, to, onClick, className = "", ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 " +
    "bg-brand-navy text-white font-semibold text-[0.9375rem] leading-tight " +
    "rounded-lg cursor-pointer border-none " +
    "transition-colors duration-200 " +
    "hover:bg-brand-navy-deep " +
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold";

  const combinedClasses = `${baseClasses} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link to={to} className={combinedClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

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

