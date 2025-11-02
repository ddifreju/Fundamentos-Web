import { PaperPlaneTilt, GithubLogo, LinkedinLogo, WhatsappLogo, Envelope, DownloadSimple } from "@phosphor-icons/react";

export function Contact() {
  return (
    <section id="contato" className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Botões de ação rápida (Lado esquerdo) */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-bold text-center text-purple-700">Entre em contato agora</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5511978651766&text=Ol%C3%A1%20Juliana%2C%20vim%20atrav%C3%A9s%20do%20seu%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow transition-all"
              >
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp
              </a>

              <a
                href="mailto:seuemail@exemplo.com"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow transition-all"
              >
                <Envelope size={20} weight="fill" />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/juliana-freddi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow transition-all"
              >
                <LinkedinLogo size={20} weight="fill" />
                LinkedIn
              </a>

              <a
                href="https://github.com/ddifreju"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl shadow transition-all"
              >
                <GithubLogo size={20} weight="fill" />
                GitHub
              </a>

              <a
                href="https://drive.google.com/file/d/1i1cz4BSrVhaDutH-4glMaMy-WPIHdvV6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow transition-all col-span-2"
              >
                <DownloadSimple size={20} weight="fill" />
                Currículo
              </a>
            </div>
          </div>

          {/* Formulário (Lado direito) */}
          <div className="w-full max-w-lg">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-[0_10px_40px_rgba(139,211,221,0.25)] border border-white/60">
              <form
                action="https://formspree.io/f/xjkaykdk"
                method="POST"
                className="flex flex-col gap-5"
              >
                <h2
                  className="text-4xl font-black text-center mb-4 font-poppins tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899, #7e22ce)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Fale comigo
                </h2>

                <div>
                  <label htmlFor="name" className="text-zinc-600 mb-2 block font-medium text-sm">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 rounded-xl bg-[#eaf4fb] border border-[rgba(44,62,80,0.08)] text-zinc-800 placeholder:text-zinc-400 shadow-sm focus:border-pink-700 focus:ring-1 focus:ring-pink-700 outline-none transition-all text-sm"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-zinc-600 mb-2 block font-medium text-sm">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-xl bg-[#eaf4fb] border border-[rgba(44,62,80,0.08)] text-zinc-800 placeholder:text-zinc-400 shadow-sm focus:border-pink-700 focus:ring-1 focus:ring-pink-700 outline-none transition-all text-sm"
                    placeholder="voce@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-zinc-600 mb-2 block font-medium text-sm">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full p-3 rounded-xl bg-[#eaf4fb] border border-[rgba(44,62,80,0.08)] text-zinc-800 placeholder:text-zinc-400 shadow-sm focus:border-pink-700 focus:ring-1 focus:ring-pink-700 outline-none transition-all text-sm"
                    placeholder="Escreva sua mensagem"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 mt-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 text-white font-bold py-3 px-6 rounded-xl hover:shadow-md transition-all shadow-lg"
                >
                  <PaperPlaneTilt size={20} weight="bold" />
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
