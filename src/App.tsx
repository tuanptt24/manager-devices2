import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { POS } from './pages/POS';
import { Products } from './pages/Products';
import { Inventory } from './pages/Inventory';
import { Reports } from './pages/Reports';
import { Customers } from './pages/Customers';
import { Suppliers } from './pages/Suppliers';
import { Staff } from './pages/Staff';
import { Promotions } from './pages/Promotions';
import { Payments } from './pages/Payments';
import { Layout } from './components/layout/Layout';
import { Toaster } from './components/ui/Toaster';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  return <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/*" element={isAuthenticated ? <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/pos" element={<POS />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/inventory" element={<Inventory />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/suppliers" element={<Suppliers />} />
                  <Route path="/staff" element={<Staff />} />
                  <Route path="/promotions" element={<Promotions />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout> : <Navigate to="/login" replace />} />
      </Routes>
      <Toaster />
    </Router>;
}