import React, { useState } from 'react';
import { Lock, User, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
interface LoginProps {
  onLogin: () => void;
}
export function Login({
  onLogin
}: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [store, setStore] = useState('main');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // Test account credentials
  const testAccount = {
    username: 'test',
    password: '123456'
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear previous error
    setError('');
    // Check if the entered credentials match the test account
    if (username === testAccount.username && password === testAccount.password) {
      onLogin();
      navigate('/'); // Chuyển hướng đến trang chính sau khi đăng nhập thành công
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };
  const handleTestLogin = () => {
    setUsername(testAccount.username);
    setPassword(testAccount.password);
  };
  return <div className="min-h-screen flex items-center justify-center bg-[#F6F8FA]">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#0F1724]">ElectroPOS</h1>
          <p className="text-[#556270] mt-2">
            Hệ thống quản lý bán hàng thiết bị điện tử
          </p>
        </div>
        {error && <div className="mb-4 p-3 bg-red-50 border-l-4 border-[#E74C3C] text-[#E74C3C] rounded-md flex items-center">
            <AlertCircle size={18} className="mr-2" />
            <span>{error}</span>
          </div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="store" className="block text-sm font-medium text-[#556270] mb-1">
              Cửa hàng
            </label>
            <select id="store" value={store} onChange={e => setStore(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]">
              <option value="main">Cửa hàng chính</option>
              <option value="branch1">Chi nhánh 1</option>
              <option value="branch2">Chi nhánh 2</option>
            </select>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="username" className="block text-sm font-medium text-[#556270] mb-1">
              Tên đăng nhập
            </label>
            <div className="relative">
              <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập tên đăng nhập" />
              <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-[#556270] mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B6EFD]" placeholder="Nhập mật khẩu" />
              <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="h-4 w-4 text-[#0B6EFD] focus:ring-[#0B6EFD] border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#556270]">
                Ghi nhớ đăng nhập
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-[#0B6EFD] hover:underline">
                Quên mật khẩu?
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <Button type="submit" variant="primary" className="w-full">
              Đăng nhập
            </Button>
            <div className="text-center">
              <button type="button" onClick={handleTestLogin} className="text-sm text-[#0B6EFD] hover:underline">
                Dùng tài khoản thử nghiệm
              </button>
            </div>
          </div>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#0B6EFD] hover:underline">
            Cấu hình máy in
          </a>
          <span className="mx-2 text-gray-300">|</span>
          <a href="#" className="text-sm text-[#0B6EFD] hover:underline">
            Kiểm tra barcode
          </a>
        </div>
        <div className="mt-4 p-3 bg-blue-50 rounded-md">
          <p className="text-sm text-[#0B6EFD] font-medium mb-1">
            Tài khoản thử nghiệm:
          </p>
          <p className="text-sm text-[#556270]">
            Tên đăng nhập: <span className="font-medium">test</span>
          </p>
          <p className="text-sm text-[#556270]">
            Mật khẩu: <span className="font-medium">123456</span>
          </p>
        </div>
      </div>
    </div>;
}