"use client";

import Image from "next/image";

export default function Home() {
  // Função de scroll suave compensando o header fixo
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 70; // altura aproximada do header
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed w-full z-50 bg-gradient-to-r from-blue-800 to-blue-900 shadow-xl border border-blue-800/40 backdrop-blur-md rounded-b-1xl">
        <nav className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <div className="flex items-center h-full">
            <Image
              src="/images/home/draftar.png"
              alt="Logo Draftar+"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </div>

          {/* Links com scroll suave */}
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li>
              <button
                onClick={() => scrollToSection("features")}
                className="hover:text-cyan-600 transition-colors"
              >
                Funcionalidades
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("workflow")}
                className="hover:text-cyan-600 transition-colors"
              >
                Como Funciona
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("benefits")}
                className="hover:text-cyan-600 transition-colors"
              >
                Benefícios
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-cyan-600 transition-colors"
              >
                Comece
              </button>
            </li>
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-block bg-cyan-400 text-blue-900 font-bold px-5 py-2 rounded-full hover:shadow-2xl hover:scale-105 transition transform"
          >
            Experimente Agora
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero relative text-center py-32 px-6 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight drop-shadow-md">
            Gestão Completa para Seu Negócio
          </h1>
          <p className="text-lg md:text-xl font-extrabold mb-8 text-gray-200">
            Organize estoque, clientes e orçamentos de forma simples, rápida e eficiente.
          </p>
        </div>

        {/* PNG Transparente Centralizado */}
        <div className="absolute inset-0 mx-auto w-full h-[800px] md:h-[900px] pointer-events-none overflow-hidden translate-y-15">
          <Image
            src="/images/home/home-image03.png"
            alt="Imagem ilustrativa"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-80"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-35"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="scroll-mt-32 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Funcionalidades Principais</h2>
          <p className="text-gray-600 mb-12">
            Tudo que você precisa para gerenciar seu negócio com eficiência.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-bold text-xl mb-2 text-blue-900">Gestão de Estoque</h3>
              <p className="text-gray-600">
                Controle produtos, entradas, saídas e receba alertas automáticos de estoque baixo.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="font-bold text-xl mb-2 text-blue-900">Clientes & CRM</h3>
              <p className="text-gray-600">
                Organize informações de clientes, histórico de compras e oportunidades de vendas.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-bold text-xl mb-2 text-blue-900">Orçamentos & Cotações</h3>
              <p className="text-gray-600">
                Gere orçamentos profissionais e cotações rapidamente para seus clientes.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-bold text-xl mb-2 text-blue-900">Relatórios & Análises</h3>
              <p className="text-gray-600">
                Dashboards claros para acompanhar desempenho, vendas e produtividade.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="font-bold text-xl mb-2 text-blue-900">Acesso Mobile</h3>
              <p className="text-gray-600">
                Gerencie seu negócio de qualquer lugar com aplicativos nativos para iOS e Android.
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-bold text-xl mb-2 text-blue-900">Segurança & Backup</h3>
              <p className="text-gray-600">
                Dados protegidos com criptografia e backups automáticos, seguindo as melhores práticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="scroll-mt-32 py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Como Funciona</h2>
          <p className="text-gray-600 mb-12">
            Simples, rápido e intuitivo. O Draftar+ organiza seu negócio em passos claros:
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-blue-900 text-xl mb-2">1. Cadastro</h3>
              <p className="text-gray-600">
                Cadastre produtos, clientes e fornecedores rapidamente.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-blue-900 text-xl mb-2">2. Controle</h3>
              <p className="text-gray-600">
                Monitore estoque, vendas e cotações em tempo real.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-blue-900 text-xl mb-2">3. Gestão</h3>
              <p className="text-gray-600">
                Tome decisões inteligentes com relatórios completos e dashboards intuitivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="scroll-mt-32 py-8 bg-gradient-to-b from-blue-600 via-blue-550 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Benefícios com Draftar+</h2>
          <p className="mb-12 text-gray-200">
            Automatize processos, organize informações e potencialize suas vendas com uma plataforma completa.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Mais Produtividade",
                text: "Menos tempo em tarefas repetitivas, mais foco no crescimento do negócio.",
              },
              {
                title: "Decisões Inteligentes",
                text: "Relatórios e dashboards claros para analisar cada detalhe do seu negócio.",
              },
              {
                title: "Controle Total",
                text: "Gerencie clientes, produtos, estoque e orçamentos de forma centralizada.",
              },
              {
                title: "Colaboração em Equipe",
                text: "Facilite o trabalho em conjunto com acesso multiusuário e permissões personalizadas.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-blue-800 rounded-xl shadow-lg transition-transform duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2025 Draftar+. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
