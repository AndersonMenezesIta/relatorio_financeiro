import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';

const FinancialDashboard = () => {
  const [currentPage, setCurrentPage] = useState('overview');
  const [selectedYear, setSelectedYear] = useState('2024');
  
  // Dados simulados
  const revenueData = [
    { month: 'Jan', revenue: 45000, profit: 15000, expenses: 30000 },
    { month: 'Fev', revenue: 52000, profit: 18000, expenses: 34000 },
    { month: 'Mar', revenue: 48000, profit: 16500, expenses: 31500 },
    { month: 'Abr', revenue: 51000, profit: 17000, expenses: 34000 },
    { month: 'Mai', revenue: 54000, profit: 19000, expenses: 35000 },
    { month: 'Jun', revenue: 58000, profit: 20500, expenses: 37500 }
  ];

  // Componente Overview
  const Overview = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Receita Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 308.000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lucro Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 106.000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Despesas Totais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">R$ 202.000</p>
          </CardContent>
        </Card>
      </div>

      <Card className="h-64">
        <CardHeader>
          <CardTitle>Receita x Tempo</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  // Componente Details
  const Details = () => (
    <div className="space-y-4">
      <Card className="h-64">
        <CardHeader>
          <CardTitle>Análise de Despesas</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expenses" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="p-4 space-y-4">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Financeiro</h1>
        <div className="space-x-2">
          <Button
            onClick={() => setCurrentPage('overview')}
            variant={currentPage === 'overview' ? 'default' : 'outline'}
          >
            Visão Geral
          </Button>
          <Button
            onClick={() => setCurrentPage('details')}
            variant={currentPage === 'details' ? 'default' : 'outline'}
          >
            Detalhes
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card className="p-4">
        <div className="flex space-x-4">
          <Button
            variant={selectedYear === '2024' ? 'default' : 'outline'}
            onClick={() => setSelectedYear('2024')}
          >
            2024
          </Button>
          <Button
            variant={selectedYear === '2023' ? 'default' : 'outline'}
            onClick={() => setSelectedYear('2023')}
          >
            2023
          </Button>
        </div>
      </Card>

      {/* Conteúdo */}
      {currentPage === 'overview' ? <Overview /> : <Details />}
    </div>
  );
};

export default FinancialDashboard;
