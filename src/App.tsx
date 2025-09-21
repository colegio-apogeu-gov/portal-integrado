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
  },
  {
    id: 'portal-de-formularios',
    title: 'Portal de Formulários',
    url: 'https://app.pipefy.com/organizations/301366705/interfaces/78d02e88-3a27-4690-86be-565298dfd95b/pages/2a84fbac-3721-44cb-b6f1-a8ddf746050a',
    description: 'O Portal de Formulários é a ferramenta para centralizar e organizar os pedidos direcionados ao DP. A plataforma simplifica o fluxo de trabalho, permitindo que os usuários abram, acompanhem e gerenciem suas solicitações de forma eficiente. Com essa organização, garante-se mais agilidade e transparência no atendimento às demandas, otimizando a comunicação e a resolução de pendências.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-emerald-700'
  },
  {
    id: 'fluxo-financeiro',
    title: 'Apogeu - Fluxo de Solicitações Financeiras',
    url: 'https://app.pipefy.com/public/form/sscgyzWQ',
    description: 'O Fluxo de Solicitações Financeiras foi desenvolvido para padronizar e agilizar os pedidos de pagamento e reembolso. Por meio de um formulário detalhado, a ferramenta organiza as requisições financeiras, como pagamentos a fornecedores, salários PJ, reembolsos e outras solicitações. O sistema assegura que todas as informações necessárias sejam fornecidas corretamente, garantindo mais controle, transparência e eficiência na gestão dos processos financeiros.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-yellow-500 to-yellow-700'
  },
  {
    id: 'farois-gestao',
    title: 'Faróis de Gestão',
    url: 'https://farois-apggov.netlify.app/',
    description: 'Os Faróis de Gestão representam o modelo de gestão do APGGov, criado para transformar dados em ações estratégicas. Utilizando um sistema de cores (verde, amarelo e vermelho), a ferramenta monitora indicadores-chave de desempenho nas frentes que definimos como importantes. O preenchimento é realizado quinzenalmente pelos coordenadores administrativos e diretores regionais, permitindo a criação de diagnósticos precisos e planos de ação para a melhoria contínua.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-indigo-500 to-indigo-700'
  },
  {
    id: 'carreiras-gupy',
    title: 'Página de Carreiras Gupy',
    url: 'https://apg-gov.gupy.io/',
    description: 'A página de Carreiras na Gupy é o nosso portal oficial para a divulgação de vagas e gestão de processos seletivos. Nela, centralizamos todas as oportunidades abertas para fazer parte do time APGGov, desde cargos pedagógicos até administrativos e de gestão. Este é o principal canal para atrair novos talentos alinhados à nossa cultura de excelência e ao propósito de transformar a educação.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-purple-500 to-purple-700'
  },
  {
    id: 'site-apggov',
    title: 'Site Institucional',
    url: 'https://apggov.com.br/#home',
    description: 'O site institucional do APGGov é a nossa principal plataforma de comunicação externa, onde apresentamos nossa missão, valores e o impacto do nosso trabalho na educação pública. O portal detalha nosso modelo de gestão inovador, que foca no apoio às escolas, na melhoria da infraestrutura e no desenvolvimento da comunidade escolar.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-sky-500 to-sky-700'
  },
  {
    id: 'onboarding',
    title: 'Onboarding',
    url: 'https://drive.google.com/file/d/1VvF8705C0HsE8znccscx6kw1ehjGqVOw/view?usp=sharing',
    description: 'O Onboarding, nosso processo de integração de novos colaboradores, é um encontro mensal fundamental para que os novos membros do time se sintam bem-vindos e preparados para sua jornada no APGGov. Neste momento, apresentamos nossa cultura e os pilares da organização, abordando temas essenciais como nossos fundamentos institucionais, Código de Conduta, fluxos de comunicação e informações importantes do Departamento Pessoal.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-pink-500 to-pink-700'
  },
  {
    id: 'portal-integridade',
    title: 'Portal de Integridade',
    url: 'https://www.helloethics.com/apggov/pt/main.html',
    description: 'O Portal de Integridade é a plataforma dedicada a promover um ambiente ético, transparente e seguro no APGGov. A principal ferramenta do portal é o Canal de Integridade, um meio seguro e confidencial, operado por uma empresa independente, para relatar violações ao Código de Conduta, irregularidades ou assédio.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-red-500 to-red-700'
  },
  {
    id: 'politicas-apggov',
    title: 'Políticas APG GOV',
    url: 'https://www.helloethics.com/apggov/pt/policies.html',
    description: 'A seção de Políticas APG GOV é o nosso repositório oficial de diretrizes, criada para garantir a transparência e a integridade em todas as nossas ações. Neste espaço, centralizamos os guias e políticas institucionais que orientam a conduta e os processos internos.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-gray-500 to-gray-700'
  },
  {
    id: 'codigo-vestimenta',
    title: 'Código de Vestimenta',
    url: 'https://drive.google.com/file/d/1vvgHq8QwR55utFHvD69L2xKyEqCZLv0O/view?usp=sharing',
    description: 'O Código de Vestimenta Institucional é o guia que orienta todos os colaboradores da APG Gov sobre a apresentação pessoal no ambiente de trabalho. Seu principal objetivo é fortalecer uma cultura de profissionalismo, respeito e segurança, refletindo os valores da nossa instituição.',
    icon: <Users className="w-8 h-8" />,
    gradient: 'from-orange-500 to-orange-700'
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
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-white/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-2 border-white/8 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/5 w-2 h-2 bg-white/15 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/6 left-3/4 w-4 h-4 bg-white/10 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Header com Logo */}
      <header className="relative w-full py-8 shadow-2xl overflow-hidden" style={{ backgroundColor: '#1300B0' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
          <div className="absolute -top-10 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-white/3 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
    <span className="inline-block bg-white/95 border border-slate-200 rounded-2xl px-5 py-2 shadow-sm">
      Portal de Sistemas
    </span>
  </h1>
  <p className="text-base md:text-lg text-slate-700 max-w-3xl mx-auto">
    Acesse nossos sistemas integrados para gestão educacional e análise de desempenho
  </p>
</div>

        {/* Cards Grid - agora 3 colunas no desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {systems.map((system) => (
            <div
              key={system.id}
              className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
              onMouseEnter={(e) => handleCardHover(system.id, e)}
              onMouseMove={(e) => setTooltipPosition({ x: e.clientX, y: e.clientY })}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardClick(system.url)}
            >
              <div
                className={`
                  relative overflow-hidden rounded-3xl p-8 min-h-[16rem]
                  bg-gradient-to-br ${system.gradient}
                  transition-all duration-500 ease-out
                  shadow-2xl hover:shadow-3xl
                  border border-white/10
                  backdrop-blur-sm
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/10 rounded-full blur-lg animate-ping" style={{ animationDelay: '2s' }}></div>
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

                  {/* Título com borda e sombra para destacar no fundo branco */}
                  <div className="mt-4">
                    <h2
                      className="
                        text-xl font-semibold mb-2
                      "
                    >
                      <span
                        className="
                          inline-block bg-white text-slate-900
                          border border-slate-200/80 rounded-xl
                          shadow-lg px-3 py-1.5 leading-tight
                        "
                      >
                        {system.title}
                      </span>
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
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-900/95"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
