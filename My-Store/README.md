# 🎮 SearchStore

Uma biblioteca de jogos pessoal feita em React, onde você pode adicionar, visualizar e remover jogos da sua coleção.

---

## 📸 Preview

<img width="1149" height="941" alt="image" src="https://github.com/user-attachments/assets/9497ec12-6097-49bb-8ac9-84fc7a1a1859" />


---

## 🚀 Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- CSS puro com variáveis e design responsivo

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── Cards.jsx       # Renderiza os cards de cada jogo
│   ├── Cards.css
│   ├── Form.jsx        # Formulário para adicionar jogos
│   └── Form.css
├── assets/
│   └── iconSearchStore.png
├── App.jsx             # Componente raiz — estado e lógica
├── App.css
└── main.jsx
```

---

## ⚙️ Como rodar localmente

**Pré-requisitos:** Node.js instalado

```bash
# Clone o repositório
git clone https://github.com/RyuuSenac/Store-Search.git

# Entre na pasta do projeto
cd Store-Search/My-Store

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse em: `http://localhost:5173`

---

## 🧠 Como funciona

O estado da aplicação fica centralizado no `App.jsx` e é distribuído para os componentes filhos via **props**:

```
App.jsx  →  Form.jsx   (recebe: estados dos inputs + handleSubmit)
         →  Cards.jsx  (recebe: lista de jogos + removeGame)
```

**Adicionar um jogo:** preencha título, URL da imagem e link de referência no formulário e clique em "Adicionar à biblioteca".

**Remover um jogo:** clique no botão "Remover" dentro do card.

---

## 🌱 Melhorias futuras

- [ ] Persistência com `localStorage`
- [ ] Busca e filtro por nome
- [ ] Categorias / tags por gênero
- [ ] Deploy na Vercel

---

## 👤 Autor

**RyuuSenac**  
[github.com/RyuuSenac](https://github.com/RyuuSenac)
