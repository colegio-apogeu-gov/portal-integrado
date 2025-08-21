import React, { useState } from 'react';
import { ExternalLink, GraduationCap, Users } from 'lucide-react';

interface SystemCard {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const systems: SystemCard[] = [
  {
    id: 'prova-parana',
    title: 'Prova Paraná - APG Gov',
    url: 'https://prova-parana-apggov.netlify.app',
    description: 'O Prova Paraná – APG Gov é uma plataforma voltada para o acompanhamento e análise de métricas de desempenho dos estudantes da rede estadual, integrando dados do Sistema de Avaliação da Educação Básica do Paraná (SAEP). Com recursos intuitivos e relatórios detalhados, o sistema oferece indicadores de aprendizagem por turma, escola e rede, permitindo acompanhar a evolução do desempenho ao longo das avaliações e realizar análises comparativas que apoiam a tomada de decisões pedagógicas. O objetivo é fornecer informações precisas e acessíveis para gestores, professores e órgãos educacionais, fortalecendo estratégias de ensino e contribuindo para a melhoria contínua da qualidade da educação no estado.',
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    id: 'gestao-ausencias',
    title: 'Gestão de Ausências',
    url: 'https://gestaofaltasapogeu.netlify.app',
    description: 'O Gestão de Ausências – Apogeu é um sistema desenvolvido para registrar, monitorar e gerenciar as ausências de professores e coordenadores de forma simples e eficiente. A plataforma permite o registro rápido de faltas e afastamentos, mantém um histórico completo por profissional e período, e disponibiliza relatórios gerenciais que auxiliam no suporte administrativo. Com essas funcionalidades, garante-se mais transparência e organização no controle de presença, possibilitando que as instituições de ensino planejem substituições e assegurem a continuidade das atividades pedagógicas.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-emerald-700'
  }
];

function App() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleCardHover = (cardId: string, event: React.MouseEvent) => {
    setHoveredCard(cardId);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleCardClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#E38B00' }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating bubbles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-white/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-white/8 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/5 w-2 h-2 bg-white/15 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/6 left-3/4 w-4 h-4 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      
      {/* Header com Logo */}
      <header className="relative w-full py-8 shadow-2xl overflow-hidden" style={{ backgroundColor: '#1300B0' }}>
        {/* Header Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
          
          {/* Floating elements in header */}
          <div className="absolute -top-10 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-white/3 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Simple geometric accents */}
          <div className="absolute top-6 left-12 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-6 right-12 w-3 h-3 bg-white/15 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-8 w-1 h-1 bg-white/25 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-8 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <img
              src="https://apggov.com.br/wp-content/uploads/2024/04/APG-GOV-3-1.png" 
              alt="APG Gov Logo" 
              className="relative z-10 h-16 md:h-20 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Portal de Sistemas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Acesse nossos sistemas integrados para gestão educacional e análise de desempenho
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {systems.map((system) => (
            <div
              key={system.id}
              className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onMouseEnter={(e) => handleCardHover(system.id, e)}
              onMouseMove={(e) => setTooltipPosition({ x: e.clientX, y: e.clientY })}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardClick(system.url)}
            >
              <div className={`
                relative overflow-hidden rounded-3xl p-8 h-64
                bg-gradient-to-br ${system.gradient}
                transition-all duration-500 ease-out
                shadow-2xl hover:shadow-3xl
                border border-white/10
                backdrop-blur-sm
              `}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full blur-lg animate-ping" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Geometric overlay */}
                  <div className="absolute top-4 right-8 w-8 h-8 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
                  <div className="absolute bottom-8 left-4 w-6 h-6 border-2 border-white/15 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-white/25 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg">
                      {system.icon}
                    </div>
                    <ExternalLink className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors drop-shadow-lg">
                      {system.title}
                    </h2>
                    <p className="text-white/90 text-sm drop-shadow-md">
                      Clique para acessar o sistema
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <p className="text-white/70 text-sm drop-shadow-md">
            © 2025 Apogeu Gov - Todos os direitos reservados
          </p>
        </footer>
      </main>

      {/* Tooltip */}
      {hoveredCard && (
        <div 
          className="fixed z-50 max-w-md p-4 bg-slate-900/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-white/10 pointer-events-none transform -translate-x-1/2 -translate-y-full"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y - 16,
          }}
        >
          <div className="text-sm leading-relaxed">
            {systems.find(s => s.id === hoveredCard)?.description}
          </div>
          {/* Tooltip Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-900/95"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;