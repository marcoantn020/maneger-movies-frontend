# Projeto de Catálogo de Filmes 🎬

Este é um projeto de catálogo de filmes desenvolvido com foco em design moderno e componentes reutilizáveis utilizando React, styled-components e outras bibliotecas modernas.

## 🚀 Funcionalidades

### 🛡️ Autenticação
- Login com validação de campos
- Cadastro de novos usuários
- Persistência de sessão
- Proteção de rotas privadas

### 🎥 Gerenciamento de Filmes
- Cadastro com upload de imagem (URL ou arquivo)
- Edição de informações
- Exclusão com confirmação modal
- Listagem paginada
- Busca por título

### 🎨 UI/UX
- Componentes reutilizáveis
- Feedback visual para todas ações
- Validações em tempo real
- Design responsivo
- Animações e transições

## 🛠️ Tecnologias Utilizadas

| Tecnologia          | Uso no Projeto                          |
|---------------------|-----------------------------------------|
| React               | Biblioteca principal                    |
| TypeScript          | Tipagem estática                        |
| Redux               | Gerenciamento de estado global          |
| styled-components   | Estilização CSS-in-JS                   |
| react-router-dom    | Navegação entre páginas                 |
| phosphor-react      | Ícones                                  |
| Axios               | Requisições HTTP                        |
| Vite                | Build e desenvolvimento                 |

## 📂 Estrutura de Pastas Detalhada
```
src/
├── @types/             # Tipagens styled-components
├── assets/             # Imagens e ícones
├── components/         # Componentes reutilizáveis (Botões, Cards, Inputs, etc.)
├── hooks/              # logica centralizada codigo mais limpo
├── layouts/            # Componentes layout default
├── pages/              # Páginas principais (Login, Cadastro, Detalhes, etc.)
├── service/            # conexão com api e request
├── store/              # arquivos do redux
├── styles/             # Estilos globais
├── Router/             # Arquivo de rotas
└── App.tsx             # Componente principal
```

## 🧩 Componentes Principais

### `Input.tsx`
- Validação em tempo real
- Ícones personalizáveis
- Tratamento de erros
- Suporte a máscaras (telefone, etc)

### `MovieCard.tsx`
- Exibição responsiva
- Hover effects
- Integração com API de filmes

### `DeleteConfirmationModal.tsx`
- Modal acessível
- Animações de entrada/saída
- Confirmação em 2 passos

## 🚧 Página NotFound
- Design amigável
- Botão de retorno
- Ilustração personalizada
- Código de erro 404

## 🔧 Scripts
Executar projeto
```bash
  docker-compose up -d
```

## 🌈 Design System
- Cores centralizadas no `theme.ts`
- Tipografia consistente
- Espaçamento modular (8px base)
- Breakpoints responsivos:
    - Mobile: até 400px
    - Tablet: 768px
    - Desktop: 1024px

---

Desenvolvido por Marco Antonio