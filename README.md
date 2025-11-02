# Portfólio Pessoal de Desenvolvedora - Juliana Freddi

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar meus projetos, habilidades e experiência como desenvolvedora Full-Stack. O projeto foi construído do zero com foco em criar uma experiência de utilizador moderna, interativa e visualmente atraente.

**[Acesse a versão em produção (Deploy) aqui!](https://portfolio-theta-six-12.vercel.app/)**


## ✨ Visão Geral do Projeto

O objetivo deste portfólio é ir além de uma lista estática de projetos. Ele foi desenhado para ser uma experiência imersiva que demonstra minhas habilidades em front-end de forma prática. A "vibe" do design é uma mistura de futurista e profissional, usando um tema escuro com fundos dinâmicos, efeitos de "vidro fosco" (glassmorphism) e uma paleta de cores vibrantes (tons de verde-água, roxo e amarelo).

## 🚀 Funcionalidades Principais

O site é um SPA (Single Page Application) com diversas funcionalidades interativas:

* **Navegação Fixa com Rolagem Suave:** Um cabeçalho fixo que utiliza a biblioteca `react-scroll` para navegar suavemente entre as diferentes seções da página.
* **Carrossel de Projetos Interativo:**
    * Os projetos são apresentados num carrossel 3D (`Swiper.js` com Effect Coverflow).
    * **Destaque do Slide Ativo:** O card do projeto que está em foco é destacado com uma borda amarela brilhante, conectando-o visualmente ao vídeo.
    * **Modal com Vídeo:** Ao clicar em "Ver mais sobre o projeto", um modal flutuante é aberto, apresentando uma faixa superior com o título/tags e um vídeo do YouTube incorporado (com autoplay) para demonstrar o projeto em ação.
* **Carrossel de Habilidades 3D:**
    * As habilidades são exibidas num carrossel responsivo.
    * Utiliza logos 3D estilizadas para cada tecnologia, criando um visual limpo e moderno, sem bordas.
* **Formulário de Contato Funcional:**
    * Um formulário de contato com design limpo e moderno, inspirado em referências de UI.
    * Integrado com o **Formspree** para receber as mensagens diretamente no meu e-mail, sem a necessidade de um back-end próprio.
    * Links diretos para contato via WhatsApp (com mensagem pré-definida), LinkedIn e GitHub.
* **Design Totalmente Responsivo:** O layout foi construído com a abordagem "mobile-first", adaptando-se perfeitamente a todos os tamanhos de tela, desde telemóveis até monitores grandes.
* **Estilização Personalizada:**
    * Imagem de fundo fixa (ou com rolagem, conforme a versão) com tema de "nebulosa".
    * Scrollbar personalizada e estilizada para combinar com a identidade visual do site.

## 🛠️ Tecnologias Utilizadas (Stack)

Este projeto foi construído com um stack moderno e focado em performance:

* **Front-End:** [React.js](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/) (para um desenvolvimento e build ultra-rápidos)
* **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (para prototipagem rápida e design consistente)
* **Animação e Carrosséis:** [Swiper.js](https://swiperjs.com/)
* **Ícones:** [Phosphor Icons](https://phosphoricons.com/)
* **Navegação (Scroll):** [React Scroll](https://github.com/fisshy/react-scroll)
* **Formulário (Back-end):** [Formspree](https://formspree.io/)
* **Hospedagem:** [Vercel](https://vercel.com/)

## 🏁 Como Executar o Projeto Localmente

Para clonar e executar este projeto na sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_GIT]
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd nome-do-projeto
    ```

3.  **Instale as dependências (usando Yarn):**
    ```bash
    yarn
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    yarn dev
    ```

5.  Abra [http://localhost:5173/](http://localhost:5173/) (ou a porta indicada no seu terminal) no seu navegador.
