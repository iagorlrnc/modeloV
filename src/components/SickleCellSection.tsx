import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Info, TrendingUp, Users, AlertTriangle } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon: React.ReactNode;
}

const SickleCellSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('sinais');
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  const accordionData: AccordionItem[] = [
    {
      id: 'sinais',
      title: 'Sinais e Sintomas',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: 'Episódios de dor intensa (crises álgicas), fadiga, falta de ar, icterícia, inchaço nas mãos e pés, infecções frequentes, atraso no crescimento e desenvolvimento, problemas de visão.'
    },
    {
      id: 'causas',
      title: 'Causas Genéticas',
      icon: <Info className="w-5 h-5" />,
      content: 'Mutação no gene da beta-globina, resultando na produção de hemoglobina S. É uma herança autossômica recessiva - ambos os pais devem carregar o gene alterado para que o filho tenha a doença.'
    },
    {
      id: 'diagnostico',
      title: 'Diagnóstico',
      icon: <TrendingUp className="w-5 h-5" />,
      content: 'Teste do pezinho (eletroforese de hemoglobina), exames de sangue complementares, teste de falcização, análise do esfregaço sanguíneo e testes genéticos para confirmação.'
    },
    {
      id: 'prevalencia',
      title: 'Prevalência no Brasil',
      icon: <Users className="w-5 h-5" />,
      content: 'Cerca de 25.000 a 50.000 pessoas com anemia falciforme no país. Maior incidência na população afrodescendente, com prevalência de 1:1.000 nascimentos na Bahia e outras regiões.'
    }
  ];

  const statsData = [
    { label: '0-5 anos', value: 35, description: 'Maior incidência de crises' },
    { label: '6-12 anos', value: 28, description: 'Período de adaptação' },
    { label: '13-18 anos', value: 22, description: 'Adolescência crítica' },
    { label: '19+ anos', value: 15, description: 'Adultos com complicações' }
  ];

  return (
    <section id="anemia" className="py-20 bg-rosa-marfil-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            O que é Anemia Falciforme
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Anemia falciforme é uma doença genética caracterizada pela presença de hemácias em forma de foice, 
            causando episódios de dor e risco de complicações sérias. Este conteúdo apresenta causas, 
            sinais e opções de manejo clínico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Diagram */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-text mb-6">Comparação Celular</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center relative group">
                  <div className="w-16 h-16 bg-green-500 rounded-full transition-transform duration-300 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-text">Hemácia Normal</h4>
                  <p className="text-sm text-gray-600">Formato circular flexível</p>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center relative group">
                  <div className="w-4 h-16 bg-red-500 rounded-full transform rotate-45 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90"></div>
                  <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-text">Hemácia Falciforme</h4>
                  <p className="text-sm text-gray-600">Formato de foice rígido</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-text mb-6">Incidência por Faixa Etária (%)</h3>
            <div className="space-y-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredStat(stat.label)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text">{stat.label}</span>
                    <span className="text-sm text-gray-600">{stat.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <div
                      className="h-3 bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${stat.value}%` }}
                    ></div>
                  </div>
                  {hoveredStat === stat.label && (
                    <div className="absolute top-full left-0 mt-2 bg-text text-white text-xs px-3 py-2 rounded-lg shadow-lg z-10">
                      {stat.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {accordionData.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-accent">{item.icon}</div>
                    <h3 className="font-semibold text-text">{item.title}</h3>
                  </div>
                  <div className="text-accent">
                    {openAccordion === item.id ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                {openAccordion === item.id && (
                  <div className="px-6 pb-4">
                    <div className="pl-8 pr-4">
                      <p className="text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SickleCellSection;