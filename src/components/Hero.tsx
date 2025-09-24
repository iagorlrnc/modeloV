import React from 'react';
import { Download, BookOpen, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-rosa-marfil-1 to-white flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
                Anemia Falciforme &{' '}
                <span className="text-accent">Planejamento Reprodutivo</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Uma abordagem abrangente sobre cuidados de enfermagem, orientações reprodutivas 
                e materiais educativos para profissionais e pacientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('sobre')}
                className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>Ler Pesquisa</span>
              </button>
              <button className="border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Baixar Resumo</span>
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-96 h-96 bg-gradient-to-br from-accent/20 to-rosa-marfil-2/40 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="text-center space-y-4 z-10">
                <div className="w-24 h-24 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-accent">Enfermagem</h3>
                  <p className="text-gray-600">Cuidado Especializado</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-accent/30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-accent/50 rounded-full"></div>
              <div className="absolute top-1/3 left-4 w-4 h-4 bg-rosa-marfil-2/60 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 lg:mt-20">
          <button
            onClick={() => scrollToSection('sobre')}
            className="animate-bounce p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-300"
          >
            <ArrowDown className="w-6 h-6 text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;