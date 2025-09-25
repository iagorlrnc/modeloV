import React from 'react';
import { CheckCircle, User, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
  const timelineSteps = [
    {
      title: 'Pesquisa',
      description: 'Revisão bibliográfica e fundamentação teórica',
      status: 'completed'
    },
    {
      title: 'Coleta',
      description: 'Coleta de dados e entrevistas estruturadas',
      status: 'completed'
    },
    {
      title: 'Análise',
      description: 'Análise qualitativa e quantitativa dos dados',
      status: 'completed'
    },
    {
      title: 'Conclusão',
      description: 'Elaboração de materiais e recomendações finais',
      status: 'current'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Sobre o Projeto
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uma pesquisa dedicada ao desenvolvimento de práticas de cuidado e orientações 
            reprodutivas especializadas para pessoas com anemia falciforme.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Project Info */}
          <div className="space-y-8">
            <div className="bg-rosa-marfil-1 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-text">Objetivo</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A presente pesquisa visa analisar práticas de cuidado e orientações reprodutivas 
                voltadas a pessoas com anemia falciforme, propondo materiais educativos para 
                profissionais de enfermagem e pacientes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-rosa-marfil-2 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <User className="w-6 h-6 text-accent" />
                  <h4 className="font-semibold text-text">Orientadora</h4>
                </div>
                <p className="text-gray-600">Prof.ª Dra. Maria Silva Santos</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-rosa-marfil-2 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <h4 className="font-semibold text-text">Instituição</h4>
                </div>
                <p className="text-gray-600">Universidade Federal de São Paulo</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-text mb-8">Fases do TCC</h3>
            <div className="space-y-6">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    step.status === 'completed' 
                      ? 'bg-green-100 text-green-600' 
                      : step.status === 'current'
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold mb-1 ${
                      step.status === 'current' ? 'text-accent' : 'text-text'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
