import React, { useState } from 'react';
import { Shield, Filter, RotateCcw, Eye, EyeOff } from 'lucide-react';

interface ContraceptiveMethod {
  id: string;
  name: string;
  type: 'hormonal' | 'barrier' | 'iud' | 'permanent';
  efficacy: number;
  reversible: boolean;
  suitability: 'recommended' | 'caution' | 'avoid';
  pros: string[];
  cons: string[];
  considerations: string;
}

const ContraceptiveMethods: React.FC = () => {
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const methods: ContraceptiveMethod[] = [
    {
      id: 'pill',
      name: 'Pílula Anticoncepcional',
      type: 'hormonal',
      efficacy: 91,
      reversible: true,
      suitability: 'caution',
      pros: ['Controle do ciclo menstrual', 'Redução de cólicas', 'Facilmente reversível'],
      cons: ['Uso diário necessário', 'Possível aumento do risco de trombose', 'Interações medicamentosas'],
      considerations: 'Requer monitoramento devido ao risco aumentado de eventos tromboembólicos.'
    },
    {
      id: 'iud-copper',
      name: 'DIU de Cobre',
      type: 'iud',
      efficacy: 99,
      reversible: true,
      suitability: 'recommended',
      pros: ['Longa duração (10 anos)', 'Não hormonal', 'Alta eficácia'],
      cons: ['Possível aumento do fluxo menstrual', 'Inserção pode ser desconfortável'],
      considerations: 'Opção preferencial por não interferir na coagulação.'
    },
    {
      id: 'condom',
      name: 'Preservativo',
      type: 'barrier',
      efficacy: 85,
      reversible: true,
      suitability: 'recommended',
      pros: ['Proteção contra DSTs', 'Sem efeitos sistêmicos', 'Acessível'],
      cons: ['Eficácia dependente do uso correto', 'Pode romper'],
      considerations: 'Sempre recomendado independente de outros métodos.'
    },
    {
      id: 'injection',
      name: 'Injeção Trimestral',
      type: 'hormonal',
      efficacy: 94,
      reversible: true,
      suitability: 'caution',
      pros: ['Aplicação trimestral', 'Reduz crises álgicas em algumas mulheres'],
      cons: ['Demora para retorno da fertilidade', 'Ganho de peso', 'Perda óssea'],
      considerations: 'Monitorar densidade óssea e avaliar benefícios vs. riscos.'
    },
    {
      id: 'implant',
      name: 'Implante Subdérmico',
      type: 'hormonal',
      efficacy: 99,
      reversible: true,
      suitability: 'caution',
      pros: ['Duração de 3 anos', 'Redução do fluxo menstrual', 'Não requer lembrança'],
      cons: ['Sangramento irregular', 'Possível interação com medicamentos'],
      considerations: 'Avaliar interações com hidroxiureia e outros medicamentos.'
    },
    {
      id: 'sterilization',
      name: 'Esterilização Cirúrgica',
      type: 'permanent',
      efficacy: 99,
      reversible: false,
      suitability: 'recommended',
      pros: ['Permanente', 'Não hormonal', 'Sem manutenção'],
      cons: ['Irreversível', 'Procedimento cirúrgico', 'Riscos anestésicos'],
      considerations: 'Considerar após prole constituída, devido aos riscos da gravidez.'
    }
  ];

  const filterOptions = [
    { id: 'reversible', label: 'Reversível' },
    { id: 'non-hormonal', label: 'Não-Hormonal' },
    { id: 'long-acting', label: 'Longa Duração' },
    { id: 'recommended', label: 'Recomendado' }
  ];

  const toggleMethodSelection = (methodId: string) => {
    if (selectedMethods.includes(methodId)) {
      setSelectedMethods(prev => prev.filter(id => id !== methodId));
    } else if (selectedMethods.length < 3) {
      setSelectedMethods(prev => [...prev, methodId]);
    }
  };

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const filteredMethods = methods.filter(method => {
    if (activeFilters.length === 0) return true;
    
    return activeFilters.every(filter => {
      switch (filter) {
        case 'reversible':
          return method.reversible;
        case 'non-hormonal':
          return method.type !== 'hormonal';
        case 'long-acting':
          return method.type === 'iud' || method.type === 'permanent' || method.id === 'implant' || method.id === 'injection';
        case 'recommended':
          return method.suitability === 'recommended';
        default:
          return true;
      }
    });
  });

  const getSuitabilityColor = (suitability: string) => {
    switch (suitability) {
      case 'recommended':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'caution':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'avoid':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSuitabilityText = (suitability: string) => {
    switch (suitability) {
      case 'recommended':
        return 'Recomendado';
      case 'caution':
        return 'Atenção';
      case 'avoid':
        return 'Evitar';
      default:
        return 'Neutro';
    }
  };

  return (
    <section id="contraceptivos" className="py-20 bg-rosa-marfil-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Métodos Contraceptivos
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Apresentamos uma visão comparativa dos métodos contraceptivos — eficácia, 
            efeitos adversos e considerações específicas para pessoas com anemia falciforme.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-accent" />
              <span className="font-medium text-text">Filtros:</span>
            </div>
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                  activeFilters.includes(filter.id)
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-accent hover:text-accent'
                }`}
              >
                {filter.label}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="px-3 py-2 text-gray-600 hover:text-accent transition-colors duration-200"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredMethods.map((method) => (
            <div
              key={method.id}
              className={`bg-white p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                selectedMethods.includes(method.id)
                  ? 'border-accent shadow-lg transform scale-105'
                  : 'border-gray-200 hover:border-accent/50 hover:shadow-md'
              }`}
              onClick={() => toggleMethodSelection(method.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-text text-lg">{method.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSuitabilityColor(method.suitability)}`}>
                  {getSuitabilityText(method.suitability)}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Eficácia</span>
                  <span>{method.efficacy}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-500"
                    style={{ width: `${method.efficacy}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-green-700 text-sm mb-1">Vantagens:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {method.pros.slice(0, 2).map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-700 text-sm mb-1">Desvantagens:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {method.cons.slice(0, 2).map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {selectedMethods.includes(method.id) && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600 italic">{method.considerations}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        {selectedMethods.length > 0 && (
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-text">
                Comparação Selecionada ({selectedMethods.length}/3)
              </h3>
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-200"
              >
                {showComparison ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <span>{showComparison ? 'Ocultar' : 'Mostrar'} Detalhes</span>
              </button>
            </div>

            {showComparison && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 font-semibold text-text">Método</th>
                      <th className="text-center py-3 font-semibold text-text">Eficácia</th>
                      <th className="text-center py-3 font-semibold text-text">Adequação</th>
                      <th className="text-left py-3 font-semibold text-text">Considerações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {methods.filter(method => selectedMethods.includes(method.id)).map((method) => (
                      <tr key={method.id} className="border-b border-gray-100">
                        <td className="py-4 font-medium text-text">{method.name}</td>
                        <td className="py-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="font-semibold">{method.efficacy}%</span>
                            <div className="w-12 bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 bg-accent rounded-full"
                                style={{ width: `${method.efficacy}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSuitabilityColor(method.suitability)}`}>
                            {getSuitabilityText(method.suitability)}
                          </span>
                        </td>
                        <td className="py-4 text-gray-600 max-w-xs">
                          <p className="text-xs leading-relaxed">{method.considerations}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Key Message */}
        <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Orientação Importante</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                A escolha do método contraceptivo deve sempre ser individualizada, considerando a 
                gravidade da anemia falciforme, histórico de complicações, preferências pessoais 
                e orientação médica especializada. O preservativo deve sempre ser usado como 
                método adicional para proteção contra DSTs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContraceptiveMethods;