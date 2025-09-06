import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';
interface TopBarProps {
  onToggleSidebar: () => void;
}
export function TopBar({
  onToggleSidebar
}: TopBarProps) {
  return <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center">
        <button onClick={onToggleSidebar} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
          <Menu size={20} />
        </button>
        <div className="relative ml-4">
          <input type="text" placeholder="Tìm kiếm..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#0B6EFD] focus:border-transparent" />
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center">
        <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="ml-4 flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="ml-2 text-sm font-medium text-[#0F1724]">
            Nguyễn Văn A
          </span>
        </div>
      </div>
    </header>;
}