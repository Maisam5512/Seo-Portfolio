import { ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  icon,
  footer,
  className = '',
  children
}: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 ${className}`}>
      <div className="p-6">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-50 text-primary-600">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
}