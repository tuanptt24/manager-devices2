import React from 'react';
interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}
export function Card({
  children,
  title,
  className
}: CardProps) {
  return <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      {title && <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-[#0F1724]">{title}</h3>
        </div>}
      <div className="p-6">{children}</div>
    </div>;
}