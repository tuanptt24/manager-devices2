import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Calendar, FileText, Download, TrendingUp, DollarSign, ShoppingCart, Users, ChevronDown } from 'lucide-react';
export function Reports() {
  const [dateRange, setDateRange] = useState('month');
  const [reportType, setReportType] = useState('sales');
  // Mock data for sales report
  const salesData = [{
    date: '01/05/2023',
    orders: 8,
    revenue: 2500000,
    profit: 750000
  }, {
    date: '02/05/2023',
    orders: 12,
    revenue: 3600000,
    profit: 1080000
  }, {
    date: '03/05/2023',
    orders: 10,
    revenue: 3000000,
    profit: 900000
  }, {
    date: '04/05/2023',
    orders: 15,
    revenue: 4500000,
    profit: 1350000
  }, {
    date: '05/05/2023',
    orders: 9,
    revenue: 2700000,
    profit: 810000
  }, {
    date: '06/05/2023',
    orders: 11,
    revenue: 3300000,
    profit: 990000
  }, {
    date: '07/05/2023',
    orders: 14,
    revenue: 4200000,
    profit: 1260000
  }];
  // Mock data for top products
  const topProducts = [{
    name: 'Tai nghe Bluetooth XYZ',
    sold: 25,
    revenue: 7500000,
    profit: 2250000
  }, {
    name: 'Sạc dự phòng 10000mAh',
    sold: 20,
    revenue: 5000000,
    profit: 1500000
  }, {
    name: 'Ốp lưng iPhone 13',
    sold: 35,
    revenue: 7000000,
    profit: 2800000
  }, {
    name: 'Cáp sạc Type-C',
    sold: 45,
    revenue: 4500000,
    profit: 1800000
  }, {
    name: 'Chuột không dây M100',
    sold: 15,
    revenue: 3750000,
    profit: 1125000
  }];
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#0F1724]">Báo cáo</h1>
        <div className="flex space-x-2">
          <div className="relative">
            <Button variant="secondary" className="flex items-center" icon={<Calendar size={16} />}>
              {dateRange === 'today' ? 'Hôm nay' : dateRange === 'week' ? '7 ngày qua' : dateRange === 'month' ? '30 ngày qua' : 'Tùy chọn'}
              <ChevronDown size={16} className="ml-2" />
            </Button>
            {/* Dropdown would go here */}
          </div>
          <Button variant="secondary" icon={<FileText size={16} />}>
            Xuất báo cáo
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#556270]">Doanh thu</p>
              <h3 className="text-2xl font-bold mt-2 text-[#0F1724]">
                {formatPrice(24500000)}
              </h3>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-xs font-medium text-[#00B894]">
                  <TrendingUp size={14} className="mr-1" />
                  +15.3%
                </span>
                <span className="text-xs text-[#556270] ml-1">
                  so với kỳ trước
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 text-[#0B6EFD]">
              <TrendingUp size={20} />
            </div>
          </div>
        </Card>
        <Card className="border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#556270]">Lợi nhuận</p>
              <h3 className="text-2xl font-bold mt-2 text-[#0F1724]">
                {formatPrice(7350000)}
              </h3>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-xs font-medium text-[#00B894]">
                  <TrendingUp size={14} className="mr-1" />
                  +12.1%
                </span>
                <span className="text-xs text-[#556270] ml-1">
                  so với kỳ trước
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-green-50 text-[#00B894]">
              <DollarSign size={20} />
            </div>
          </div>
        </Card>
        <Card className="border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#556270]">Đơn hàng</p>
              <h3 className="text-2xl font-bold mt-2 text-[#0F1724]">79</h3>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-xs font-medium text-[#00B894]">
                  <TrendingUp size={14} className="mr-1" />
                  +8.2%
                </span>
                <span className="text-xs text-[#556270] ml-1">
                  so với kỳ trước
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 text-purple-500">
              <ShoppingCart size={20} />
            </div>
          </div>
        </Card>
        <Card className="border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-[#556270]">Khách hàng mới</p>
              <h3 className="text-2xl font-bold mt-2 text-[#0F1724]">24</h3>
              <div className="flex items-center mt-2">
                <span className="flex items-center text-xs font-medium text-[#00B894]">
                  <TrendingUp size={14} className="mr-1" />
                  +5.7%
                </span>
                <span className="text-xs text-[#556270] ml-1">
                  so với kỳ trước
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 text-[#FFA500]">
              <Users size={20} />
            </div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2" title="Doanh thu theo ngày">
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-[#556270]">
              Biểu đồ doanh thu sẽ hiển thị ở đây
            </p>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Ngày
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Đơn hàng
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Doanh thu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                    Lợi nhuận
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {salesData.map((day, index) => <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {day.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-[#556270]">
                      {day.orders}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#0F1724]">
                      {formatPrice(day.revenue)}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#00B894]">
                      {formatPrice(day.profit)}
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" size="sm" icon={<Download size={14} />} className="text-xs">
              Tải xuống Excel
            </Button>
          </div>
        </Card>
        <Card title="Top 5 sản phẩm bán chạy">
          <div className="space-y-4">
            {topProducts.map((product, index) => <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${index === 0 ? 'bg-yellow-100 text-yellow-600' : index === 1 ? 'bg-gray-100 text-gray-600' : index === 2 ? 'bg-orange-100 text-orange-600' : 'bg-blue-50 text-[#0B6EFD]'}`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-[#0F1724] truncate max-w-[180px]">
                    {product.name}
                  </h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-[#556270]">
                      Đã bán: {product.sold}
                    </span>
                    <span className="text-xs font-medium text-[#0B6EFD]">
                      {formatPrice(product.revenue)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                    <div className="bg-[#0B6EFD] h-1.5 rounded-full" style={{
                  width: `${product.sold / topProducts[0].sold * 100}%`
                }}></div>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="secondary" size="sm" icon={<Download size={14} />} className="text-xs">
              Tải xuống Excel
            </Button>
          </div>
        </Card>
      </div>
      <Card title="Báo cáo bán hàng theo nhân viên">
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-[#556270]">
            Biểu đồ báo cáo theo nhân viên sẽ hiển thị ở đây
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="secondary" size="sm" icon={<Download size={14} />}>
            Tải xuống Excel
          </Button>
        </div>
      </Card>
    </div>;
}