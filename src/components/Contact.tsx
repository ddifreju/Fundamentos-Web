// src/components/Contact.tsx

import { PaperPlaneTilt, GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

export function Contact() {
  return (
    // O seu código original, que já estava ótimo
    <section id="contato" className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto flex justify-center">
        <div
          className="
            w-full
            max-w-[350px]
            bg-white rounded-3xl shadow-xl border-none
            px-6 py-8
            flex flex-col items-center
          "
        >
          {/* A ÚNICA MUDANÇA ESTÁ AQUI: AUMENTANDO O ESPAÇAMENTO */}
          <div className="flex justify-center gap-6 mb-5"> {/* <-- Alterado de gap-3 para gap-6 */}
            <a
              href="https://api.whatsapp.com/send/?phone=5511978651766&text=Ol%C3%A1%20Juliana%2C%20vim%20atrav%C3%A9s%20do%20seu%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white transition-colors shadow"
              title="WhatsApp"
            >
              <WhatsappLogo size={22} weight="fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/juliana-freddi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white transition-colors shadow"
              title="LinkedIn"
            >
              <LinkedinLogo size={22} weight="fill" />
            </a>
            <a
              href="https://github.com/ddifreju"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white transition-colors shadow"
              title="GitHub"
            >
              <GithubLogo size={22} weight="fill" />
            </a>
          </div>

          {/* O resto do seu código, sem nenhuma alteração */}
          <h2 className="text-center text-2xl font-bold mb-1 text-[#0d9488]">Vamos Conversar!</h2>
          <p className="text-zinc-400 mb-5 text-center text-xs">
            Tenho interesse em oportunidades de trabalho e projetos freelancer.<br />Use o formulário para falar comigo!
          </p>
          <div className="bg-red-500 text-white">Testando Tailwind</div>
          {/* FORMULÁRIO */}
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-sm mx-auto">
            <form
              action="https://formspree.io/f/YOUR_UNIQUE_ID"
              method="POST"
              className="w-full flex flex-col gap-3"
            >
              <div>
                <label htmlFor="name" className="text-zinc-600 mb-1 block font-medium text-sm">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2.5 rounded-lg bg-[#eaf4fb] border border-[rgba(44,62,80,0.08)] text-zinc-800 placeholder:text-zinc-400 shadow-sm focus:border-pink-700 focus:ring-1 focus:ring-pink-700 outline-none transition-all text-sm"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-zinc-600 mb-1 block font-medium text-sm">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2.5 rounded-lg bg-[#eaf4fb] border border-[rgba(44,62,80,0.08)] text-zinc-800 placeholder:text-zinc-400 shadow-sm focus:border-pink-700 focus:ring-1 focus:ring-pink-700 outline-none transition-all text-sm"
                  placeholder="voce@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-zinc-600 mb-1 block font-medium text-sm">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="w-full p-2.5 rounded-lg bg-[#eaf4fb] border border-[rgba(44,62,80,0.08)] text-zinc-800 placeholder:text-zinc-400 shadow-sm focus:border-pink-700 focus:ring-1 focus:ring-pink-700 outline-none transition-all text-sm"
                  placeholder="Escreva sua mensagem"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 mt-2 bg-pink-700 text-white font-bold py-2.5 rounded-lg hover:bg-pink-800 transition-all shadow"
              >
                <PaperPlaneTilt size={18} weight="bold" />
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

