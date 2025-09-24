import React, { useState } from 'react';
import { Download, BookOpen, Users, Stethoscope, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface Recommendation {
  id: string;
  target: 'professionals' | 'patients';
  title: string;
  description: string;
  items: string[];
}

const Recommendations: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'professionals' | 'patients'>('professionals');

  const faqData: FAQItem[] = [
    {
      id: 'faq1',
      question: 'Quais são os principais cuidados durante a gravidez com anemia falciforme?',
      answer: 'Durante a gravidez, é essencial manter acompanhamento pré-natal especializado, com consultas mais frequentes, monitorização fetal constante, suplementação adequada de ácido fólico, hidratação otimizada e preparação para possíveis intercorrências como crises álgicas.'
    },
    {
      id: 'faq2',
      question: 'Qual método contraceptivo é mais recomendado para pessoas com anemia falciforme?',
      answer: 'O DIU de cobre é geralmente a primeira opção por não interferir na coagulação. Métodos de barreira como preservativos também são sempre recomendados. Métodos hormonais requerem avaliação individualizada devido ao risco trombótico.'
    },
    {
      id: 'faq3',
      question: 'Como a anemia falciforme afeta o planejamento familiar?',
      answer: 'A anemia falciforme requer planejamento reprodutivo cuidadoso, incluindo aconselhamento genético, avaliação de riscos maternos e fetais, consulta pré-concepcional obrigatória e acompanhamento multidisciplinar durante toda a gestação.'
    },
    {
      id: 'faq4',
      question: 'Quais sinais de alerta devem ser observados durante a gestação?',
      answer: 'Sinais de alerta incluem: crises de dor mais intensas ou frequentes, falta de ar, febre, diminuição dos movimentos fetais, contrações prematuras, sangramento, pressão alta e sinais de infecção.'
    },
    {
      id: 'faq5',
      question: 'É seguro amamentar com anemia falciforme?',
      answer: 'Sim, a amamentação é segura e recomendada. É importante manter hidratação adequada, alimentação balanceada, suplementação vitamínica e acompanhamento médico regular durante o período de aleitamento.'
    }
  ];

  const recommendations: Recommendation[] = [
    {
      id: 'prof1',
      target: 'professionals',
      title: 'Acompanhamento Pré-Natal Especializado',
      description: 'Diretrizes para profissionais de saúde no atendimento de gestantes com anemia falciforme',
      items: [
        'Iniciar pré-natal precocemente, idealmente antes da 6ª semana',
        'Consultas quinzenais após 28 semanas de gestação',
        'Equipe multidisciplinar (obstetra, hematologista, anestesista)',
        'Monitorização fetal intensiva no terceiro trimestre',
        'Preparo para emergências obstétricas e hematológicas'
      ]
    },
    {
      id: 'prof2',
      target: 'professionals',
      title: 'Protocolos de Emergência',
      description: 'Condutas para situações de urgência e emergência',
      items: [
        'Reconhecimento precoce de crises vaso-oclusivas',
        'Protocolo de hidratação e analgesia adequada',
        'Monitorização de sinais vitais e saturação de oxigênio',
        'Critérios para internação e cuidados intensivos',
        'Comunicação efetiva entre especialidades'
      ]
    },
    {
      id: 'pat1',
      target: 'patients',
      title: 'Cuidados Pessoais Durante a Gestação',
      description: 'Orientações essenciais para gestantes com anemia falciforme',
      items: [
        'Manter hidratação adequada (2-3 litros de água/dia)',
        'Tomar medicações conforme prescrição médica',
        'Comparecer a todas as consultas pré-natais',
        'Monitorar movimentos fetais diariamente',
        'Procurar atendimento imediato em caso de dor ou febre'
      ]
    },
    {
      id: 'pat2',
      target: 'patients',
      title: 'Planejamento Familiar',
      description: 'Informações importantes para o planejamento reprodutivo',
      items: [
        'Consulta pré-concepcional obrigatória',
        'Uso de ácido fólico 5mg/dia antes da concepção',
        'Discussão sobre métodos contraceptivos adequados',
        'Aconselhamento genético para o casal',
        'Avaliação de risco materno-fetal individualizada'
      ]
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const filteredRecommendations = recommendations.filter(rec => rec.target === activeTab);

  const generatePDF = () => {
    // Esta função seria implementada com uma biblioteca como html2pdf ou jsPDF
    alert('Funcionalidade de download em desenvolvimento. Em breve você poderá baixar o resumo completo em PDF.');
  };

  return (
    <section id="recomendacoes" className="py-20 bg-rosa-marfil-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Recomendações e Orientações
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Recomenda-se educação em saúde contínua, acesso a referências especializadas 
            e protocolos de atendimento para reduzir riscos.
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text mb-4">Material Educativo</h3>
            <p className="text-gray-600 mb-6">
              Baixe um resumo completo com todas as orientações e recomendações em formato PDF
            </p>
            <button
              onClick={generatePDF}
              className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <Download className="w-5 h-5" />
              <span>Baixar Resumo Completo (PDF)</span>
            </button>
          </div>
        </div>

        {/* Recommendations Tabs */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-xl shadow-sm">
              <button
                onClick={() => setActiveTab('professionals')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'professionals'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Stethoscope className="w-5 h-5" />
                <span>Para Profissionais</span>
              </button>
              <button
                onClick={() => setActiveTab('patients')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'patients'
                    ? 'bg-accent text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Para Pacientes</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredRecommendations.map((recommendation) => (
              <div key={recommendation.id} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  {activeTab === 'professionals' ? (
                    <Stethoscope className="w-6 h-6 text-accent" />
                  ) : (
                    <Users className="w-6 h-6 text-accent" />
                  )}
                  <h3 className="text-xl font-bold text-text">{recommendation.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{recommendation.description}</p>
                
                <ul className="space-y-3">
                  {recommendation.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="w-8 h-8 text-accent" />
            <h3 className="text-2xl font-bold text-text">Perguntas Frequentes</h3>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="border border-rosa-marfil-2 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-rosa-marfil-1 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-text pr-4">{faq.question}</h4>
                  <div className="flex-shrink-0 text-accent">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="pl-4 border-l-4 border-accent">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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

export default Recommendations;