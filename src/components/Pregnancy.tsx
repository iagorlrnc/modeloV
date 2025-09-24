import React, { useState } from 'react';
import { Calendar, Heart, AlertTriangle, Baby, Stethoscope, X } from 'lucide-react';

interface PregnancyWeek {
  week: number;
  title: string;
  description: string;
  keyPoints: string[];
  risks: string[];
  monitoring: string[];
}

const Pregnancy: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<PregnancyWeek | null>(null);
  const [showModal, setShowModal] = useState(false);

  const pregnancyTimeline: PregnancyWeek[] = [
    {
      week: 6,
      title: 'Primeira Consulta Pré-Natal',
      description: 'Confirmação da gravidez e início do acompanhamento especializado',
      keyPoints: [
        'Confirmação laboratorial da gravidez',
        'Avaliação do estado clínico atual',
        'Planejamento do acompanhamento'
      ],
      risks: ['Risco de aborto espontâneo aumentado', 'Necessidade de ajustes medicamentosos'],
      monitoring: ['Hemograma completo', 'Função renal e hepática', 'Eletroforese de hemoglobina']
    },
    {
      week: 12,
      title: 'Avaliação Multidisciplinar',
      description: 'Consulta com equipe especializada e exames morfológicos',
      keyPoints: [
        'Ultrassom morfológico de primeiro trimestre',
        'Avaliação cardiológica',
        'Ajustes na suplementação'
      ],
      risks: ['Desenvolvimento de pré-eclâmpsia', 'Restrição do crescimento fetal'],
      monitoring: ['Ultrassom doppler', 'Ecocardiograma materno', 'Dosagem de ácido fólico']
    },
    {
      week: 20,
      title: 'Ultrassom Morfológico',
      description: 'Avaliação detalhada da anatomia fetal e crescimento',
      keyPoints: [
        'Ultrassom morfológico detalhado',
        'Avaliação do crescimento fetal',
        'Rastreamento de complicações'
      ],
      risks: ['Malformações fetais', 'Alterações placentárias'],
      monitoring: ['Ultrassom detalhado', 'Dopplerfluxometria', 'Perfil biofísico fetal']
    },
    {
      week: 28,
      title: 'Terceiro Trimestre - Intensificação',
      description: 'Monitoramento mais frequente e preparação para o parto',
      keyPoints: [
        'Consultas quinzenais',
        'Monitoramento fetal intensivo',
        'Planejamento do tipo de parto'
      ],
      risks: ['Crises álgicas mais frequentes', 'Síndrome torácica aguda'],
      monitoring: ['Cardiotocografia', 'Perfil biofísico fetal', 'Contagem de movimentos fetais']
    },
    {
      week: 34,
      title: 'Preparação para o Parto',
      description: 'Finalização do plano de parto e preparação hospitalar',
      keyPoints: [
        'Definição da via de parto',
        'Planejamento da analgesia',
        'Preparação para emergências'
      ],
      risks: ['Trabalho de parto prematuro', 'Necessidade de cesariana'],
      monitoring: ['Avaliação da maturidade pulmonar fetal', 'Exames laboratoriais completos']
    },
    {
      week: 37,
      title: 'Termo - Parto',
      description: 'Parto a termo com acompanhamento especializado',
      keyPoints: [
        'Parto em centro de referência',
        'Equipe multidisciplinar presente',
        'Manejo da dor especializado'
      ],
      risks: ['Complicações no trabalho de parto', 'Hemorragia pós-parto'],
      monitoring: ['Monitorização cardíaca contínua', 'Controle de sinais vitais', 'Gasometria arterial']
    }
  ];

  const openModal = (week: PregnancyWeek) => {
    setSelectedWeek(week);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWeek(null);
  };

  const riskFactors = [
    {
      title: 'Maternos',
      icon: <Heart className="w-6 h-6 text-red-500" />,
      items: [
        'Crises vaso-oclusivas aumentadas',
        'Síndrome torácica aguda',
        'Infecções frequentes',
        'Anemia severa',
        'Pré-eclâmpsia',
        'Trabalho de parto prematuro'
      ]
    },
    {
      title: 'Fetais',
      icon: <Baby className="w-6 h-6 text-blue-500" />,
      items: [
        'Restrição do crescimento intrauterino',
        'Baixo peso ao nascer',
        'Parto prematuro',
        'Sofrimento fetal',
        'Malformações congênitas',
        'Morte perinatal'
      ]
    }
  ];

  return (
    <section id="gestacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Gestação e Anemia Falciforme
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Durante a gestação, é essencial o acompanhamento pré-natal intensificado, 
            controle da anemia e preparo para possíveis intercorrências.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text mb-8 text-center">
            Timeline de Acompanhamento Gestacional
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent/30"></div>
            
            <div className="space-y-8">
              {pregnancyTimeline.map((week, index) => (
                <div
                  key={week.week}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <span className="text-white text-xs font-bold">{week.week}</span>
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'
                  } flex-1`}>
                    <button
                      onClick={() => openModal(week)}
                      className="bg-rosa-marfil-1 p-6 rounded-xl hover:bg-rosa-marfil-2 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer text-left w-full"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-text text-lg">{week.title}</h4>
                        <span className="text-sm text-accent font-medium">{week.week}ª semana</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{week.description}</p>
                      <div className="flex items-center text-accent text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Clique para ver detalhes</span>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {riskFactors.map((category, index) => (
            <div key={index} className="bg-rosa-marfil-1 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-text">Riscos {category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Recommendations */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
          <div className="flex items-center space-x-3 mb-6">
            <Stethoscope className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-900">Recomendações Essenciais</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-3">Acompanhamento</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Consultas quinzenais após 28 semanas</li>
                <li>• Equipe multidisciplinar sempre</li>
                <li>• Monitorização fetal frequente</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-3">Medicações</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Ácido fólico 5mg/dia</li>
                <li>• Suplementação de ferro</li>
                <li>• Profilaxia para infecções</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-3">Parto</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Centro de referência</li>
                <li>• Analgesia adequada</li>
                <li>• Hidratação otimizada</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && selectedWeek && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-text">{selectedWeek.title}</h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Pontos Principais:</h4>
                    <ul className="space-y-2">
                      {selectedWeek.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3">Riscos a Monitorar:</h4>
                    <ul className="space-y-2">
                      {selectedWeek.risks.map((risk, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Monitorização:</h4>
                    <ul className="space-y-2">
                      {selectedWeek.monitoring.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Stethoscope className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pregnancy;