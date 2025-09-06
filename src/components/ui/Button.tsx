import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-[#0B6EFD] text-white hover:bg-[#0A5ED7]',
    secondary: 'bg-white border border-gray-300 text-[#0F1724] hover:bg-gray-50',
    success: 'bg-[#00B894] text-white hover:bg-[#00A583]',
    danger: 'bg-[#E74C3C] text-white hover:bg-[#D44333]',
    text: 'bg-transparent text-[#0B6EFD] hover:bg-gray-100'
  };
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };
  return <button className={`rounded-lg font-medium flex items-center justify-center transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {icon && <span className={`${children ? 'mr-2' : ''}`}>{icon}</span>}
      {children}
    </button>;
}