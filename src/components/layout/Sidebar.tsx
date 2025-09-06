import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, Package, BarChart3, Users, Truck, User, Tag, CreditCard, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
interface SidebarProps {
  collapsed: boolean;
}
export function Sidebar({
  collapsed
}: SidebarProps) {
  const location = useLocation();
  const menuItems = [{
    path: '/',
    label: 'Tổng quan',
    icon: <LayoutDashboard size={20} />
  }, {
    path: '/pos',
    label: 'Bán hàng',
    icon: <ShoppingCart size={20} />
  }, {
    path: '/products',
    label: 'Sản phẩm',
    icon: <Package size={20} />
  }, {
    path: '/inventory',
    label: 'Kho',
    icon: <BarChart3 size={20} />
  }, {
    path: '/customers',
    label: 'Khách hàng',
    icon: <Users size={20} />
  }, {
    path: '/suppliers',
    label: 'Nhà cung cấp',
    icon: <Truck size={20} />
  }, {
    path: '/staff',
    label: 'Nhân viên',
    icon: <User size={20} />
  }, {
    path: '/promotions',
    label: 'Khuyến mãi',
    icon: <Tag size={20} />
  }, {
    path: '/payments',
    label: 'Thanh toán',
    icon: <CreditCard size={20} />
  }, {
    path: '/reports',
    label: 'Báo cáo',
    icon: <BarChart3 size={20} />
  }, {
    path: '/settings',
    label: 'Cấu hình',
    icon: <Settings size={20} />
  }];
  return <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        {!collapsed && <div className="text-xl font-bold text-[#0F1724]">ElectroPOS</div>}
        {collapsed && <div className="mx-auto text-xl font-bold">E</div>}
      </div>
      <nav className="mt-4">
        <ul>
          {menuItems.map(item => <li key={item.path} className="mb-1 px-2">
              <Link to={item.path} className={`flex items-center px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-[#0B6EFD] text-white' : 'text-[#556270] hover:bg-gray-100'}`}>
                <span className="mr-3">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>)}
        </ul>
      </nav>
    </aside>;
}