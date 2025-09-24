import React from 'react';
import { Heart, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Anemia Falciforme', href: '#anemia' },
    { name: 'Planejamento Reprodutivo', href: '#planejamento' },
    { name: 'Métodos Contraceptivos', href: '#contraceptivos' },
    { name: 'Gestação', href: '#gestacao' },
    { name: 'Recursos', href: '#recursos' }
  ];

  const legalLinks = [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'Contato', href: '#contato' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">TCC Enfermagem</h3>
                <p className="text-sm text-gray-300">Anemia Falciforme & Reprodução</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Uma pesquisa dedicada ao desenvolvimento de práticas de cuidado e orientações 
              reprodutivas especializadas para pessoas com anemia falciforme.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-accent" />
              <a 
                href="mailto:contato.tcc.enfermagem@unifesp.br"
                className="text-sm text-gray-300 hover:text-accent transition-colors duration-200"
              >
                contato.tcc.enfermagem@unifesp.br
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Navegação Rápida</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Info */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Informações Acadêmicas</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-accent mb-1">Orientadora</h5>
                <p className="text-gray-300 text-sm">Prof.ª Dra. Maria Silva Santos</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-accent mb-1">Instituição</h5>
                <p className="text-gray-300 text-sm">Universidade Federal de São Paulo</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-accent mb-1">Curso</h5>
                <p className="text-gray-300 text-sm">Graduação em Enfermagem</p>
              </div>
            </div>
          </div>

          {/* Legal & Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-white mb-6">Informações Legais</h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <button
              onClick={scrollToTop}
              className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-all duration-200 hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Voltar ao Topo</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} TCC Enfermagem - UNIFESP. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="text-gray-400 text-sm">
              Desenvolvido com
            </div>
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            <div className="text-gray-400 text-sm">
              para a comunidade acadêmica
            </div>
          </div>
        </div>

        {/* Academic Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-xs text-center leading-relaxed">
            <strong>Aviso Acadêmico:</strong> Este conteúdo é parte de um trabalho de conclusão de curso e tem finalidade 
            educativa. Não substitui orientação médica profissional. Sempre consulte um profissional de saúde 
            qualificado para questões específicas sobre anemia falciforme.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;