/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  Zap, 
  Utensils, 
  Leaf, 
  ShieldCheck, 
  Clock, 
  Truck, 
  ChevronRight,
  Menu,
  X,
  Eye,
  Flame,
  Pill,
  Lock,
  ArrowRight,
  Volume2,
  MessageSquare
} from 'lucide-react';

type Page = 'landing' | 'vsl' | 'privacy' | 'terms' | 'studies' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Gerenciador de SEO (Meta Tags e Título dinâmico)
  useEffect(() => {
    const seoData = {
      landing: { title: 'Secaps Black Chá | Emagrecimento Natural', desc: 'Descubra como o Secaps Black Chá com Hibisco e Cúrcuma apoia seu metabolismo.' },
      vsl: { title: 'Apresentação Exclusiva | Secaps Black Chá', desc: 'Assista ao vídeo e descubra o método natural.' },
      privacy: { title: 'Política de Privacidade | Secaps', desc: 'Nossa política de proteção de dados.' },
      terms: { title: 'Termos de Serviço | Secaps', desc: 'Termos de uso do nosso site.' },
      studies: { title: 'Estudos Científicos | Secaps', desc: 'A ciência por trás da nossa fórmula.' },
      contact: { title: 'Contato | Secaps Black Chá', desc: 'Fale conosco para tirar suas dúvidas.' }
    };

    const currentSEO = seoData[currentPage];
    document.title = currentSEO.title;

    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = currentSEO.desc;
  }, [currentPage]);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'landing') {
      setCurrentPage('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const PageHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="text-center mb-16">
      <button 
        onClick={() => setCurrentPage('landing')}
        className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-8 hover:gap-3 transition-all cursor-pointer"
      >
        <ChevronRight className="rotate-180" size={16} />
        Voltar para a Home
      </button>
      <h1 className="text-4xl md:text-6xl font-display font-black mb-6">{title}</h1>
      {subtitle && <p className="text-white/60 max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  );

  const PrivacyPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <PageHeader title="Política de Privacidade" subtitle="Sua privacidade é nossa prioridade. Entenda como tratamos seus dados." />
      <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">1. Coleta de Informações</h2>
          <p>Coletamos informações que você nos fornece diretamente ao realizar uma compra ou se inscrever em nossa newsletter. Isso pode incluir seu nome, e-mail, endereço e dados de pagamento, processados de forma segura e criptografada.</p>
        </section>
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">2. Uso de Cookies</h2>
          <p>Utilizamos cookies para melhorar sua experiência de navegação, entender como você interage com nosso site e personalizar anúncios. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.</p>
        </section>
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">3. Conformidade LGPD/GDPR</h2>
          <p>Estamos em total conformidade com a Lei Geral de Proteção de Dados (LGPD) no Brasil e o GDPR na Europa. Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento, entrando em contato com nosso suporte.</p>
        </section>
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">4. Segurança dos Dados</h2>
          <p>Implementamos medidas técnicas e organizacionais rigorosas para proteger seus dados contra acesso não autorizado, alteração ou destruição.</p>
        </section>
      </div>
    </motion.div>
  );

  const TermsPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 max-w-4xl mx-auto px-6">
      <PageHeader title="Termos de Serviço" subtitle="Regras e diretrizes para o uso do nosso site e produtos." />
      <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">1. Aceitação dos Termos</h2>
          <p>Ao acessar o site Secaps Black, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
        </section>
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">2. Uso de Licença</h2>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais no site Secaps Black apenas para visualização transitória pessoal e não comercial.</p>
        </section>
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">3. Isenção de Responsabilidade</h2>
          <p>Os materiais no site da Secaps Black são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas, e por este meio isentamos e negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização.</p>
        </section>
        <section>
          <h2 className="text-2xl font-display font-bold text-white mb-4">4. Limitações</h2>
          <p>Em nenhum caso a Secaps Black ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em nosso site.</p>
        </section>
      </div>
    </motion.div>
  );

  const StudiesPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <PageHeader title="A Ciência por trás do Secaps Black Chá" subtitle="Evidências clínicas e estudos sobre nossos ingredientes premium: Hibisco e Cúrcuma." />
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Hibisco (Hibiscus sabdariffa)", content: "Estudos comprovam que o Hibisco auxilia na redução da retenção de líquidos e no controle da pressão arterial, sendo um potente aliado contra o inchaço abdominal.", ref: "Ref: Journal of Ethnopharmacology, 2021." },
          { title: "Cúrcuma (Curcuma longa)", content: "A curcumina possui propriedades anti-inflamatórias e digestivas que otimizam o metabolismo e auxiliam na queima de gordura de forma natural.", ref: "Ref: Clinical Nutrition Research, 2022." },
          { title: "Sabor Morango e Polifenóis", content: "O extrato natural de morango não apenas garante um sabor delicioso, mas fornece antioxidantes que combatem o estresse oxidativo celular.", ref: "Ref: International Journal of Obesity, 2023." },
          { title: "Suplementação Solúvel", content: "A forma solúvel garante uma absorção mais rápida e eficiente dos nutrientes, facilitando a adesão a uma rotina de bem-estar sustentável.", ref: "Ref: Nutrients Journal, 2020." }
        ].map((study, i) => (
          <div key={i} className="card-dark border-l-4 border-primary">
            <h3 className="text-xl font-display font-bold mb-4 text-white">{study.title}</h3>
            <p className="text-white/60 mb-6 leading-relaxed">{study.content}</p>
            <div className="text-xs font-mono text-primary/50 uppercase tracking-widest">{study.ref}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const ContactPage = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 max-w-4xl mx-auto px-6 text-center">
      <PageHeader title="Contato" subtitle="Estamos aqui para apoiar sua jornada com Secaps Black Chá." />
      <div className="card-dark max-w-2xl mx-auto p-12">
        <p className="text-white/60 mb-8">Nossa equipe está disponível no WhatsApp para tirar todas as suas dúvidas sobre o Secaps Black Chá.</p>
        <div className="space-y-6">
          <a 
            href="https://wa.me/seunumerowhatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/80 transition-all transform hover:scale-105"
          >
            <MessageSquare size={24} />
            Fale Conosco pelo WhatsApp
          </a>
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-2 uppercase tracking-widest">E-mail de Suporte</p>
            <p className="text-xl font-display font-bold text-white">contato@secapsblackcha.com.br</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const LandingPage = () => (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
            alt="Wellness Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-secondary via-secondary/80 to-secondary"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-6">
                Conquiste uma Rotina mais Leve e <span className="italic text-turquoise">Ative seu Metabolismo com o Sabor Irresistível do Morango</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
                Conheça o <span className="text-turquoise">Secaps Black Chá</span>: o suplemento solúvel 100% natural que se adapta perfeitamente ao seu dia a dia para transformar seu bem-estar.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('vsl')}
                  className="btn-primary flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Play size={20} fill="currentColor" />
                  QUERO ASSISTIR AO VÍDEO COMPLETO
                </button>
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
                <CheckCircle2 size={18} className="text-turquoise" />
                <span>Fórmula Natural de Morango</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://i.postimg.cc/v8C2dN9M/Gemini_Generated_Image_58ha0t58ha0t58ha.png" 
                alt="Secaps Black Chá Lifestyle" 
                className="relative z-10 rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-2xl border border-white/10 shadow-2xl z-20 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Premium Edition</p>
                    <p className="font-display font-bold">Secaps Black Chá</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metabolism Section */}
      <section className="py-20 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-linear-to-br from-turquoise/20 to-primary/20 blur-2xl rounded-full transform scale-110"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=800&auto=format&fit=crop" 
                    alt="Metabolism Support" 
                    className="w-2/3 h-auto object-cover rounded-3xl shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://i.postimg.cc/kX81MvF7/Gemini_Generated_Image_qhahm6qhahm6qhah.png" 
                    alt="Secaps Black Chá Produto" 
                    className="absolute -right-4 -bottom-4 w-1/2 h-auto object-contain z-20 drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 backdrop-blur-md p-4 rounded-xl border border-white/10 z-30">
                  <p className="text-sm italic text-white/80">"O segredo natural para equilibrar o seu dia."</p>
                  <p className="text-xs font-bold text-turquoise mt-1">— EQUIPE SECAPS BLACK CHÁ</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6 leading-tight">
                Metabolismo Lento? <br />
                <span className="text-turquoise">Descubra o poder do Hibisco e da Cúrcuma no seu dia a dia.</span>
              </h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  A combinação poderosa de Hibisco e Cúrcuma no Secaps Black Chá atua diretamente na retenção de líquidos e na melhora da digestão.
                </p>
                <blockquote className="border-l-4 border-turquoise pl-6 py-2 italic bg-turquoise/5 rounded-r-xl">
                  Elimine o inchaço abdominal e conquiste um emagrecimento sustentável, sem a necessidade de dietas extremas ou restritivas.
                </blockquote>
                <p>
                  Sinta a leveza de um corpo que funciona em harmonia, apoiando sua rotina ativa com ingredientes selecionados pela ciência da natureza.
                </p>
              </div>
              <button 
                onClick={() => setCurrentPage('vsl')}
                className="btn-primary mt-10 w-full md:w-auto cursor-pointer"
              >
                QUERO ASSISTIR AO VÍDEO COMPLETO
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4">A Excelência em Cada Benefício</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Desenvolvido com ingredientes premium e o poder antioxidante do morango para sua transformação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="text-turquoise" />, title: "Queima e Energia", desc: "Acelera o metabolismo e promove a queima de gordura, garantindo disposição para sua rotina ativa." },
              { icon: <Utensils className="text-turquoise" />, title: "Saciedade e Digestão", desc: "Promove saciedade prolongada e melhora significativamente a função intestinal diária." },
              { icon: <Leaf className="text-turquoise" />, title: "Adeus Inchaço", desc: "Fórmula potente que reduz drasticamente a retenção de líquidos e o inchaço abdominal." },
              { icon: <ShieldCheck className="text-turquoise" />, title: "Fórmula 100% Pura", desc: "Ingredientes naturais de alta qualidade. Totalmente livre de Glúten e Lactose." }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-dark group"
              >
                <div className="w-12 h-12 bg-turquoise/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-turquoise group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="process" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4 underline decoration-primary underline-offset-8">Sua Jornada em 3 Passos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-primary/20 via-primary to-primary/20 z-0"></div>
            
            {[
              { step: "01", icon: <Pill size={32} className="text-turquoise" />, title: "Preparo Fácil", desc: "Dissolva 1 dosador (5g) em 200ml de água, quente ou fria." },
              { step: "02", icon: <Flame size={32} className="text-turquoise" />, title: "Ação Diária", desc: "O Hibisco e a Cúrcuma começam a atuar na sua digestão e metabolismo." },
              { step: "03", icon: <Eye size={32} className="text-turquoise" />, title: "Resultados Reais", desc: "Sinta a leveza, redução de medidas e uma energia renovada todos os dias." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="text-6xl font-display font-black text-white/5 mb-[-2rem] select-none">{item.step}</div>
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 mb-8 border-4 border-secondary">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section id="trust" className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Compra 100% Segura</h4>
                <p className="text-white/50 text-sm">Protocolos de criptografia bancária</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Truck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Entrega Premium</h4>
                <p className="text-white/50 text-sm">Rastreio em tempo real e embalagem discreta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">Sua Transformação Começa Hoje</h2>
            <p className="text-xl text-white/70 mb-12">
              Não adie mais a versão que você merece ser. Junte-se a milhares de pessoas que já encontraram seu equilíbrio com Secaps Black Chá.
            </p>
            <button 
              onClick={() => setCurrentPage('vsl')}
              className="btn-primary text-xl px-12 py-6 cursor-pointer"
            >
              QUERO ASSISTIR AO VÍDEO COMPLETO
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );

  const VSLPage = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 max-w-5xl mx-auto px-6"
    >
      <div className="text-center mb-12">
        <button 
          onClick={() => setCurrentPage('landing')}
          className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-8 hover:gap-3 transition-all cursor-pointer"
        >
          <ChevronRight className="rotate-180" size={16} />
          Voltar para a Home
        </button>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-6">
          <Lock size={14} />
          Acesso Exclusivo Liberado
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-tight mb-6">
          O Segredo Revelado: Como Ativar seu <span className="text-turquoise">Metabolismo com Secaps Black Chá</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          Assista ao vídeo abaixo até o final para descobrir como nossa fórmula de Hibisco e Cúrcuma está transformando rotinas.
        </p>
      </div>

      {/* Video Player Placeholder */}
      <div className="relative aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
        <img 
          src="https://images.unsplash.com/photo-1518311447627-7567ad460ad5?q=80&w=1200&auto=format&fit=crop" 
          alt="Video Thumbnail" 
          className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:scale-110 transition-transform duration-300">
            <Play size={40} fill="currentColor" className="ml-2" />
          </div>
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <Volume2 size={18} className="text-turquoise" />
            <span className="text-sm font-bold uppercase tracking-widest">Clique para Ativar o Áudio</span>
          </div>
        </div>
        
        {/* Fake Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
          <div className="h-full bg-turquoise w-1/3"></div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* LINK DE AFILIADO CORRIGIDO AQUI */}
          <a 
            href="COLOQUE_SEU_LINK_DE_AFILIADO_AQUI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-xl px-12 py-6 flex items-center justify-center gap-3 mx-auto max-w-md hover:scale-105 transition-transform cursor-pointer"
          >
            QUERO EXPERIMENTAR AGORA 
            <ArrowRight size={24} />
          </a>
          <p className="mt-6 text-white/40 text-sm flex items-center justify-center gap-2">
            <ShieldCheck size={16} />
            Pagamento 100% Seguro e Garantia de Satisfação
          </p>
        </motion.div>
      </div>

      {/* Testimonials or Trust in VSL */}
      <div className="mt-24 grid md:grid-cols-3 gap-8">
        {[
          { name: "Maria Silva", text: "Incrível como me sinto mais disposta logo na primeira semana!" },
          { name: "João Pereira", text: "Finalmente algo que realmente funciona e é natural." },
          { name: "Ana Costa", text: "O sabor é maravilhoso e os resultados são visíveis." }
        ].map((t, i) => (
          <div key={i} className="card-dark text-left">
            <div className="flex gap-1 text-turquoise mb-4">
              {[...Array(5)].map((_, i) => <Zap key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-white/70 italic mb-4">"{t.text}"</p>
            <p className="font-bold text-sm">— {t.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-secondary selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('landing')}
          >
            <span className="text-2xl font-display font-black tracking-tighter text-white">
              Secaps <span className="text-turquoise">Chá</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('landing')} className="text-sm font-medium text-turquoise hover:text-white transition-colors cursor-pointer">Início</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-turquoise hover:text-white transition-colors cursor-pointer">Benefícios</button>
            <button onClick={() => scrollToSection('process')} className="text-sm font-medium text-turquoise hover:text-white transition-colors cursor-pointer">Processo</button>
            <button onClick={() => scrollToSection('trust')} className="text-sm font-medium text-turquoise hover:text-white transition-colors cursor-pointer">Segurança</button>
            <button 
              onClick={() => setCurrentPage('vsl')}
              className="bg-turquoise/10 border border-turquoise/30 text-turquoise text-xs font-bold px-4 py-2 rounded-full hover:bg-turquoise hover:text-white transition-all duration-300 cursor-pointer"
            >
              VER APRESENTAÇÃO EXCLUSIVA
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-secondary/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                <button onClick={() => { setCurrentPage('landing'); setIsMenuOpen(false); }} className="text-lg font-medium text-left text-turquoise">Início</button>
                <button onClick={() => scrollToSection('benefits')} className="text-lg font-medium text-left text-turquoise">Benefícios</button>
                <button onClick={() => scrollToSection('process')} className="text-lg font-medium text-left text-turquoise">Processo</button>
                <button onClick={() => scrollToSection('trust')} className="text-lg font-medium text-left text-turquoise">Segurança</button>
                <button 
                  onClick={() => setCurrentPage('vsl')}
                  className="btn-primary text-center py-3 cursor-pointer"
                >
                  VER APRESENTAÇÃO
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'vsl' && <VSLPage />}
        {currentPage === 'privacy' && <PrivacyPage />}
        {currentPage === 'terms' && <TermsPage />}
        {currentPage === 'studies' && <StudiesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div 
              className="text-2xl font-display font-black tracking-tighter cursor-pointer text-white"
              onClick={() => setCurrentPage('landing')}
            >
              Secaps <span className="text-turquoise">Chá</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <button onClick={() => setCurrentPage('landing')} className="hover:text-primary transition-colors cursor-pointer">Início</button>
              <button onClick={() => setCurrentPage('privacy')} className="hover:text-primary transition-colors cursor-pointer">Política de Privacidade</button>
              <button onClick={() => setCurrentPage('terms')} className="hover:text-primary transition-colors cursor-pointer">Termos de Serviço</button>
              <button onClick={() => setCurrentPage('studies')} className="hover:text-primary transition-colors cursor-pointer">Estudos Científicos</button>
              <button onClick={() => setCurrentPage('contact')} className="hover:text-primary transition-colors cursor-pointer">Contato</button>
            </div>
          </div>
          <div className="text-center text-xs text-white/30">
            <p>© 2024 Secaps Black Chá. Editorial Soberano. Todos os Direitos Reservados.</p>
            <p className="mt-2 font-bold text-turquoise/80">Recomendado para maiores de 18 anos.</p>
            <div className="mt-8 max-w-4xl mx-auto px-4 opacity-50 leading-relaxed uppercase tracking-tighter">
              ESTE SITE NÃO É AFILIADO AO FACEBOOK OU A QUALQUER ENTIDADE DO FACEBOOK. DEPOIS QUE VOCÊ SAIR DO FACEBOOK, A RESPONSABILIDADE NÃO É DELES E SIM DO NOSSO SITE. FAZEMOS TODOS OS ESFORÇOS PARA INDICAR CLARAMENTE E MOSTRAR TODAS AS PROVAS DO PRODUTO E USAR RESULTADOS REAIS.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
