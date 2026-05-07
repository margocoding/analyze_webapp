'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import TransactionsTable from '../components/TransactionsTable';

// Mock data for prototype
const mockTransactions = [
  { id: '1', date: '2024-01-15', merchant: 'Kaspi Market', amount: 15000, type: 'expense' as const, category: 'Продукты' },
  { id: '2', date: '2024-01-14', merchant: 'Яндекс Такси', amount: 2500, type: 'expense' as const, category: 'Транспорт' },
  { id: '3', date: '2024-01-13', merchant: 'Зарплата', amount: 500000, type: 'income' as const, category: 'Доход' },
  { id: '4', date: '2024-01-12', merchant: 'Netflix', amount: 5900, type: 'expense' as const, category: 'Развлечения' },
  { id: '5', date: '2024-01-11', merchant: 'Магнит', amount: 8700, type: 'expense' as const, category: 'Продукты' },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <div className="flex-1 flex flex-col lg:ml-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <StatCard
              title="Общий баланс"
              value="1,250,000 ₸"
              change="+12.5%"
              trend="up"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <StatCard
              title="Доходы"
              value="850,000 ₸"
              change="+8.2%"
              trend="up"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              }
            />
            <StatCard
              title="Расходы"
              value="420,000 ₸"
              change="-3.1%"
              trend="down"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                </svg>
              }
            />
            <StatCard
              title="Накопления"
              value="430,000 ₸"
              change="+15.3%"
              trend="up"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
            <ChartCard title="Динамика доходов и расходов">
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[65, 45, 78, 52, 89, 67, 75, 58, 82, 71, 63, 88].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all hover:from-blue-600 hover:to-purple-600"
                      style={{ height: `${value}%` }}
                    ></div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </ChartCard>

            <ChartCard title="Расходы по категориям">
              <div className="h-64 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e4e4e7" strokeWidth="20" className="dark:stroke-zinc-800" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="150 100" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="80 170" strokeDashoffset="-150" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="50 200" strokeDashoffset="-230" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-zinc-900 dark:text-white">420K</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">расходы</p>
                    </div>
                  </div>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Продукты (60%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Транспорт (32%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">Развлечения (8%)</span>
                  </div>
                </div>
              </div>
            </ChartCard>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Последние транзакции</h3>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Показать все →
              </button>
            </div>
            <TransactionsTable transactions={mockTransactions} />
          </div>

          {/* Kaspi Integration Info */}
          <div className="mt-6 lg:mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Подключите Kaspi API</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Получайте актуальные данные о ваших продажах и тратьте меньше времени на аналитику
                </p>
                <button className="px-4 py-2 bg-white text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors">
                  Подключить Kaspi
                </button>
              </div>
              <div className="hidden sm:block">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🏦</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
