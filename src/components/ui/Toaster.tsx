import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, XCircle, X } from 'lucide-react';
interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}
function Toast({
  message,
  type,
  onClose
}: ToastProps) {
  const icons = {
    success: <CheckCircle className="text-[#00B894]" size={20} />,
    error: <XCircle className="text-[#E74C3C]" size={20} />,
    warning: <AlertCircle className="text-[#FFA500]" size={20} />,
    info: <AlertCircle className="text-[#0B6EFD]" size={20} />
  };
  const bgColors = {
    success: 'bg-[#EEFAF6]',
    error: 'bg-[#FDEEEC]',
    warning: 'bg-[#FFF6E9]',
    info: 'bg-[#EBF3FF]'
  };
  return <div className={`${bgColors[type]} border-l-4 border-${type === 'success' ? '[#00B894]' : type === 'error' ? '[#E74C3C]' : type === 'warning' ? '[#FFA500]' : '[#0B6EFD]'} p-4 rounded-lg shadow-md flex items-start`}>
      <div className="mr-3 mt-0.5">{icons[type]}</div>
      <div className="flex-1">{message}</div>
      <button onClick={onClose} className="ml-3 text-gray-500 hover:text-gray-700">
        <X size={16} />
      </button>
    </div>;
}
export function Toaster() {
  const [toasts, setToasts] = useState<Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
  }>>([]);
  // For demonstration purposes only
  useEffect(() => {
    // This would be replaced with a real toast system
    // Currently empty
  }, []);
  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  if (toasts.length === 0) return null;
  return <div className="fixed top-4 right-4 z-50 space-y-2 max-w-md">
      {toasts.map(toast => <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />)}
    </div>;
}