import React from 'react';
import { CheckCircle, User, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {

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
                  <h4 className="font-semibold text-text">Aluna</h4>
                </div>
                <p className="text-gray-600">Laís Pereira Dias</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-rosa-marfil-2 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-accent" />
                  <h4 className="font-semibold text-text">Instituição</h4>
                </div>
                <p className="text-gray-600">Universidade Federal do Tocantins</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
