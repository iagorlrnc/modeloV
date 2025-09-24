import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    if (!formData.consent) {
      newErrors.consent = 'É necessário concordar com o tratamento dos dados';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simular sucesso na maioria dos casos
      if (Math.random() > 0.1) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          consent: false
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-mail',
      info: 'contato.tcc.enfermagem@unifesp.br',
      description: 'Resposta em até 48 horas'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      info: '(11) 5576-4000',
      description: 'Seg a Sex, 8h às 17h'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Endereço',
      info: 'Universidade Federal de São Paulo',
      description: 'Campus São Paulo - Escola de Enfermagem'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-rosa-marfil-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tem dúvidas sobre anemia falciforme ou gostaria de contribuir com este projeto? 
            Estamos aqui para ajudar e sempre abertos a colaborações.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl border border-rosa-marfil-2 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start space-x-4">
                      <div className="text-accent bg-accent/10 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text mb-1">{item.title}</h4>
                        <p className="text-accent font-medium mb-1">{item.info}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-6 rounded-xl border border-rosa-marfil-2">
              <h4 className="font-semibold text-text mb-3">Sobre este Projeto</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Este trabalho de conclusão de curso é orientado pela Prof.ª Dra. Maria Silva Santos 
                e desenvolvido como parte do programa de graduação em Enfermagem da UNIFESP.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nosso objetivo é contribuir para a melhoria dos cuidados de enfermagem direcionados 
                a pessoas com anemia falciforme, especialmente no âmbito reprodutivo.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-text mb-6">Envie uma Mensagem</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-green-800 font-medium">Mensagem enviada com sucesso!</p>
                  <p className="text-green-700 text-sm">Retornaremos em breve.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-red-800 font-medium">Erro ao enviar mensagem</p>
                  <p className="text-red-700 text-sm">Tente novamente ou use outro meio de contato.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-accent'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-accent'
                    }`}
                    placeholder="seu.email@exemplo.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-accent'
                  }`}
                  placeholder="Assunto da sua mensagem"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-vertical ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-accent'
                  }`}
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange('consent', e.target.checked)}
                  className="mt-1 w-4 h-4 text-accent bg-gray-100 border-gray-300 rounded focus:ring-accent focus:ring-2"
                />
                <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                  Concordo com o tratamento dos meus dados pessoais para fins de resposta a esta mensagem, 
                  conforme nossa política de privacidade. *
                </label>
              </div>
              {errors.consent && (
                <p className="text-sm text-red-600">{errors.consent}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white py-4 rounded-lg font-semibold hover:bg-accent/90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;