# MeuShop – E-commerce Moderno com Angular, Django REST, PostgreSQL e Docker

![Angular](https://img.shields.io/badge/Angular-^20.0.0-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-^5.8.2-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-^4.1.10-38B2AC?logo=tailwind-css&logoColor=white)
![Django REST](https://img.shields.io/badge/Django%20REST-API-092E20?logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Relational_DB-336791?logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Container-2496ED?logo=docker&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🛒 Sobre o Projeto

O **MeuShop** é um e-commerce moderno, escalável e de alta performance, desenvolvido para simular a experiência completa de uma loja online. O sistema foi projetado para ser referência em arquitetura frontend Angular, integração com backend Python (Django REST Framework), banco de dados PostgreSQL e deploy profissional com Docker e Render.com.

### 🎯 **Objetivo Principal**

Oferecer uma plataforma de e-commerce didática, robusta e pronta para produção, demonstrando as melhores práticas de desenvolvimento web full stack, componentização, integração de APIs RESTful e automação de deploy.

---

## ✨ Funcionalidades

- **Catálogo de Produtos:** Visualização, busca e filtragem de produtos.
- **Carrinho de Compras:** Adição, remoção e atualização de itens.
- **Checkout Simulado:** Processo de finalização de compra.
- **Componentes Reutilizáveis:** UI consistente e responsiva.
- **Notificações e Feedbacks:** UX aprimorada com modais e alertas.
- **Integração com API REST:** Backend Django para dados dinâmicos.
- **Autenticação (roadmap):** Cadastro e login de usuários.
- **Admin (roadmap):** Painel para gestão de produtos e pedidos.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - [Angular 20+](https://angular.dev/) (TypeScript, RxJS, DI, Lazy Loading)
  - [Tailwind CSS](https://tailwindcss.com/) (utility-first)
  - [Lucide Angular](https://lucide.dev/guide/packages/lucide-angular) (ícones)
- **Backend:**
  - [Python 3.12+](https://www.python.org/)
  - [Django REST Framework](https://www.django-rest-framework.org/)
  - [PostgreSQL](https://www.postgresql.org/)
- **DevOps:**
  - [Docker](https://www.docker.com/) (multi-stage build, NGINX)
  - [Render.com](https://render.com/) (deploy backend)
- **Testes:**
  - [Jest/Jasmine](https://jestjs.io/) (unitários frontend)
  - [Cypress](https://www.cypress.io/) (e2e)
  - [Pytest](https://docs.pytest.org/) (backend)

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js 18+
- Angular CLI 17+
- Python 3.12+
- Docker (opcional, recomendado para ambiente completo)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/meu-ecommerce.git
cd meu-ecommerce
```

### 2. Instale as dependências do frontend

```bash
npm install
```

### 3. Execute o frontend

```bash
npm start
# ou
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

### 4. (Opcional) Rode o frontend com Docker

```bash
docker build -t meushop-frontend .
docker run -p 4200:80 meushop-frontend
```

### 5. Backend (Django REST)

- O backend está na pasta `backend/` (consulte README específico lá)
- Exemplo de execução:

```bash
cd backend
pip install -r requirements.txt
python manage.py runserver
```

---

## 📁 Estrutura de Pastas

```
meu-ecommerce/
├── src/
│   ├── app/
│   │   ├── components/     # Componentes da aplicação
│   │   ├── models/         # Modelos e interfaces TypeScript
│   │   ├── services/       # Serviços (lógica de negócio)
│   │   └── ...
│   ├── public/             # Assets públicos
│   ├── styles.scss         # Estilos globais
│   └── main.ts             # Entry point
├── backend/                # Backend Django REST Framework
├── dockerfile              # Dockerfile do frontend
├── angular.json            # Configuração Angular
├── package.json            # Dependências e scripts
└── tailwind.config.js      # Configuração Tailwind CSS
```

---

## 💡 Diferenciais Técnicos

- Arquitetura modular e escalável
- Componentização e reuso extremo
- Responsividade e acessibilidade (WCAG 2.1 AA)
- SEO-friendly e performance otimizada
- Integração real com API RESTful
- Pronto para CI/CD e deploy em cloud
- Código limpo, testável e documentado

---

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Faça um fork do projeto.
2. Crie uma branch (`git checkout -b feature/sua-feature`).
3. Commit (`git commit -m 'feat: sua feature'`).
4. Push (`git push origin feature/sua-feature`).
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

> Feito com ❤️ por Jeff e colaboradores. Sinta-se à vontade para explorar, sugerir melhorias e contribuir!
