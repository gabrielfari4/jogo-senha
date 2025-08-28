# 🎮 Jogo de Adivinhação - Palavra ou Número

Este é um jogo interativo desenvolvido em **React** com **CSS Modules**, onde o jogador pode escolher entre dois modos de jogo:

- **Palavra** → Uma palavra aleatória de 5 letras será gerada, e o jogador terá **7 chances** para adivinhar.
- **Número** → Um número aleatório de 5 dígitos será gerado, e o jogador terá **5 chances** para adivinhar.

O jogo dá feedback visual para cada tentativa, indicando:

- ✅ **Letra/Dígito correto e na posição correta**
- 🔄 **Letra/Dígito correto mas na posição errada**
- ❌ **Letra/Dígito incorreto**

---

## 🚀 Funcionalidades

- Seleção de modo: **Palavra** ou **Número**
- Campo de entrada para digitar letras ou números
- **Validação**: só permite entradas de 5 caracteres (letras ou números, conforme modo de jogo)
- Botão **Adivinhar**
- **Feedback visual** após cada tentativa
- **GIFs animados** para:
    - Erro ⚠️
  - Vitória 🎉
  - Derrota 💀
  
- Botão **Jogar Novamente** ao final da partida

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- JavaScript (ES6+)

---

## 📂 Estrutura do Projeto

```bash
├── node_modules/          # Dependências do projeto
├── public/                # Arquivos públicos
├── src/
│   ├── assets/            # Imagens, GIFs e outros arquivos estáticos
│   ├── components/        # Componentes React reutilizáveis
│   ├── context/           # Context API (gerenciamento de estado global)
│   ├── json/              # Arquivo JSON (lista de palavras)
│   ├── App.css            # Estilos globais
│   ├── App.jsx            # Componente principal do app
│   ├── index.css          # Estilos base
│   ├── main.jsx           # Ponto de entrada da aplicação
├── .gitignore             # Arquivos/ pastas ignorados pelo Git
├── eslint.config.js       # Configuração do ESLint
├── index.html             # Estrutura HTML principal
├── package-lock.json      # Lockfile do npm
├── package.json           # Dependências e scripts do projeto
├── README.md              # Documentação do projeto
└── vite.config.js         # Configuração do Vite


