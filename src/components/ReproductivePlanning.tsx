import React, { useState } from 'react';
import { CheckCircle, Circle, Heart, AlertCircle, Users, Calendar } from 'lucide-react';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

interface SimulatorQuestion {
  id: string;
  question: string;
  options: string[];
  selectedOption: string | null;
}

const ReproductivePlanning: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'Consulta pré-concepcional com hematologista', completed: false },
    { id: '2', text: 'Avaliação cardiovascular e pulmonar', completed: false },
    { id: '3', text: 'Exames laboratoriais completos', completed: false },
    { id: '4', text: 'Suplementação de ácido fólico', completed: false },
    { id: '5', text: 'Aconselhamento genético', completed: false },
    { id: '6', text: 'Planejamento contraceptivo adequado', completed: false },
    { id: '7', text: 'Vacinação atualizada', completed: false },
    { id: '8', text: 'Acompanhamento psicológico', completed: false }
  ]);

  const [simulatorData, setSimulatorData] = useState<SimulatorQuestion[]>([
    {
      id: 'age',
      question: 'Qual a sua faixa etária?',
      options: ['Menos de 18 anos', '18-25 anos', '26-35 anos', 'Mais de 35 anos'],
      selectedOption: null
    },
    {
      id: 'severity',
      question: 'Qual a gravidade da sua anemia falciforme?',
      options: ['Leve', 'Moderada', 'Grave', 'Não sei'],
      selectedOption: null
    },
    {
      id: 'complications',
      question: 'Você tem complicações frequentes?',
      options: ['Raramente', 'Ocasionalmente', 'Frequentemente', 'Constantemente'],
      selectedOption: null
    }
  ]);

  const [showRecommendations, setShowRecommendations] = useState(false);

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => prev.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const updateSimulatorAnswer = (questionId: string, answer: string) => {
    setSimulatorData(prev => prev.map(q => 
      q.id === questionId ? { ...q, selectedOption: answer } : q
    ));
  };

  const generateRecommendations = () => {
    setShowRecommendations(true);
  };

  const getRecommendations = () => {
    const answers = simulatorData.reduce((acc, q) => ({
      ...acc,
      [q.id]: q.selectedOption
    }), {} as Record<string, string | null>);

    const recommendations = [];

    if (answers.age === 'Menos de 18 anos') {
      recommendations.push('Aguardar maioridade e maior estabilidade clínica');
      recommendations.push('Focar no controle da doença e educação sobre planejamento reprodutivo');
    }

    if (answers.severity === 'Grave' || answers.complications === 'Frequentemente') {
      recommendations.push('Acompanhamento pré-concepcional intensivo obrigatório');
      recommendations.push('Avaliação de risco materno-fetal com equipe multidisciplinar');
      recommendations.push('Considerar métodos contraceptivos de longa duração');
    }

    if (answers.age === 'Mais de 35 anos') {
      recommendations.push('Atenção especial para riscos relacionados à idade materna');
      recommendations.push('Rastreamento genético pré-implantacional pode ser considerado');
    }

    return recommendations.length > 0 ? recommendations : [
      'Consulta pré-concepcional é fundamental',
      'Manter acompanhamento hematológico regular',
      'Suplementação adequada de vitaminas e minerais'
    ];
  };

  const completedCount = checklist.filter(item => item.completed).length;
  const progressPercentage = (completedCount / checklist.length) * 100;

  return (
    <section id="planejamento" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Planejamento Reprodutivo
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            O planejamento reprodutivo para pessoas com anemia falciforme deve considerar 
            risco materno e fetal, uso de profilaxia, e acompanhamento multidisciplinar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Checklist */}
          <div className="bg-rosa-marfil-1 p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-accent" />
                Checklist Pré-Concepcional
              </h3>
              <div className="text-right">
                <div className="text-2xl font-bold text-accent">{completedCount}/{checklist.length}</div>
                <div className="text-sm text-gray-600">Itens concluídos</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progresso</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="h-3 bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {checklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleChecklistItem(item.id)}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200 text-left"
                >
                  <div className="flex-shrink-0">
                    {item.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <span className={`${item.completed ? 'text-green-700 line-through' : 'text-text'} transition-colors duration-200`}>
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Simulator */}
          <div className="bg-white border border-rosa-marfil-2 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-text mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-3 text-accent" />
              Simulador de Orientações
            </h3>

            <div className="space-y-6">
              {simulatorData.map((question, index) => (
                <div key={question.id} className="space-y-3">
                  <h4 className="font-semibold text-text">{index + 1}. {question.question}</h4>
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => updateSimulatorAnswer(question.id, option)}
                        className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                          question.selectedOption === option
                            ? 'border-accent bg-accent/10 text-accent'
                            : 'border-gray-200 hover:border-accent/50 hover:bg-gray-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <button
                onClick={generateRecommendations}
                disabled={simulatorData.some(q => q.selectedOption === null)}
                className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Gerar Orientações Personalizadas
              </button>

              {showRecommendations && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Suas Recomendações:
                  </h4>
                  <ul className="space-y-2">
                    {getRecommendations().map((rec, index) => (
                      <li key={index} className="text-blue-800 text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-rosa-marfil-1 rounded-xl">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="font-semibold text-text mb-2">Equipe Multidisciplinar</h4>
            <p className="text-gray-600 text-sm">
              Acompanhamento com hematologista, obstetra, geneticista e psicólogo.
            </p>
          </div>

          <div className="text-center p-6 bg-rosa-marfil-1 rounded-xl">
            <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="font-semibold text-text mb-2">Cuidado Personalizado</h4>
            <p className="text-gray-600 text-sm">
              Plano individual baseado na gravidade da doença e histórico clínico.
            </p>
          </div>

          <div className="text-center p-6 bg-rosa-marfil-1 rounded-xl">
            <AlertCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h4 className="font-semibold text-text mb-2">Monitoramento Contínuo</h4>
            <p className="text-gray-600 text-sm">
              Avaliações regulares durante todo o período reprodutivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReproductivePlanning;