import React from 'react';
import { Card } from '../components/ui/Card';
import { TrendingUp, ShoppingCart, DollarSign, AlertTriangle, Package, ArrowUpRight, ArrowDownRight } from 'lucide-react';
export function Dashboard() {
  // Mock data for the dashboard
  const kpiData = [{
    title: 'Doanh thu hôm nay',
    value: '12,500,000₫',
    change: '+15.3%',
    increasing: true,
    icon: <TrendingUp size={20} />,
    color: 'bg-blue-50 text-[#0B6EFD]'
  }, {
    title: 'Hóa đơn',
    value: '24',
    change: '+8.2%',
    increasing: true,
    icon: <ShoppingCart size={20} />,
    color: 'bg-green-50 text-[#00B894]'
  }, {
    title: 'Lợi nhuận',
    value: '3,750,000₫',
    change: '+12.1%',
    increasing: true,
    icon: <DollarSign size={20} />,
    color: 'bg-purple-50 text-purple-500'
  }, {
    title: 'Cảnh báo tồn kho',
    value: '5',
    change: '-2',
    increasing: false,
    icon: <AlertTriangle size={20} />,
    color: 'bg-orange-50 text-[#FFA500]'
  }];
  const topProducts = [{
    id: 1,
    name: 'Tai nghe Bluetooth XYZ',
    sku: 'TN-BT-001',
    sold: 12,
    revenue: '3,600,000₫'
  }, {
    id: 2,
    name: 'Sạc dự phòng 10000mAh',
    sku: 'SDP-10K-002',
    sold: 10,
    revenue: '2,500,000₫'
  }, {
    id: 3,
    name: 'Ốp lưng iPhone 13',
    sku: 'OL-IP13-003',
    sold: 8,
    revenue: '1,600,000₫'
  }, {
    id: 4,
    name: 'Cáp sạc Type-C',
    sku: 'CS-TC-004',
    sold: 7,
    revenue: '700,000₫'
  }, {
    id: 5,
    name: 'Chuột không dây M100',
    sku: 'CKD-M100-005',
    sold: 5,
    revenue: '1,250,000₫'
  }];
  const lowStockItems = [{
    id: 1,
    name: 'Tai nghe Bluetooth XYZ',
    sku: 'TN-BT-001',
    stock: 2,
    threshold: 5
  }, {
    id: 2,
    name: 'Sạc dự phòng 10000mAh',
    sku: 'SDP-10K-002',
    stock: 3,
    threshold: 5
  }, {
    id: 3,
    name: 'Ốp lưng iPhone 13',
    sku: 'OL-IP13-003',
    stock: 4,
    threshold: 10
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0F1724]">Tổng quan</h1>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Hôm nay</option>
            <option>Tuần này</option>
            <option>Tháng này</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => <Card key={index} className="border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#556270]">{kpi.title}</p>
                <h3 className="text-2xl font-bold mt-2 text-[#0F1724]">
                  {kpi.value}
                </h3>
                <div className="flex items-center mt-2">
                  <span className={`flex items-center text-xs font-medium ${kpi.increasing ? 'text-[#00B894]' : 'text-[#E74C3C]'}`}>
                    {kpi.increasing ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                    {kpi.change}
                  </span>
                  <span className="text-xs text-[#556270] ml-1">
                    so với hôm qua
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${kpi.color}`}>{kpi.icon}</div>
            </div>
          </Card>)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2" title="Doanh thu 7 ngày qua">
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-[#556270]">
              Biểu đồ doanh thu sẽ hiển thị ở đây
            </p>
          </div>
        </Card>
        <Card title="Cảnh báo tồn kho thấp">
          <div className="space-y-4">
            {lowStockItems.map(item => <div key={item.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-md mr-3">
                    <Package size={16} className="text-[#FFA500]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#0F1724]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#556270]">SKU: {item.sku}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#E74C3C]">
                    {item.stock}
                  </p>
                  <p className="text-xs text-[#556270]">
                    Ngưỡng: {item.threshold}
                  </p>
                </div>
              </div>)}
          </div>
        </Card>
      </div>
      <Card title="Top 5 sản phẩm bán chạy">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                  Sản phẩm
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                  Đã bán
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#556270] uppercase tracking-wider">
                  Doanh thu
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map(product => <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-[#0F1724]">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#556270]">
                    {product.sku}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#0F1724] font-medium">
                    {product.sold}
                  </td>
                  <td className="px-4 py-3 text-sm text-[#0F1724]">
                    {product.revenue}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
    </div>;
}