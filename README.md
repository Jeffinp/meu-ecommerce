# MeuShop – E-commerce Moderno

Projeto enterprise-grade desenvolvido com Angular 15+, TypeScript, Tailwind CSS e arquitetura modular, focado em performance, escalabilidade e experiência de usuário excepcional.

## 🚀 Visão Geral

O **MeuShop** é um e-commerce moderno, otimizado para SEO, responsivo e acessível, com código limpo, testável e pronto para produção. O projeto segue padrões avançados de arquitetura Angular, integrações RESTful e design system baseado em Tailwind CSS. O backend é desenvolvido em **Python** utilizando **Django REST Framework**, com banco de dados **PostgreSQL**, deploy automatizado no **Render.com** e suporte a **Docker** para facilitar o desenvolvimento e a implantação.

## 🛠️ Tecnologias & Ferramentas

- **Frontend:**

  - **Angular 15+** (CLI, DI, Lazy Loading, Feature Modules)
  - **TypeScript** (strict mode, interfaces robustas)
  - **Tailwind CSS** (utility-first, design tokens)
  - **SCSS** (BEM, ITCSS)
  - **RxJS** (Observables, operadores avançados)
  - **Jest/Jasmine** para testes unitários
  - **Cypress/Protractor** para testes e2e
  - **NgRx** (opcional para estados complexos)
  - **Arquitetura modular** e separação de responsabilidades

- **Backend:**
  - **Python** (Django REST Framework)
  - **API RESTful** seguindo padrões OpenAPI/Swagger
  - **PostgreSQL** como banco de dados relacional
  - **Hospedagem Backend:** [Render.com](https://render.com/)
  - **Docker** para ambiente isolado e deploy simplificado

## 📁 Estrutura de Pastas

```
src/
  app/
    components/         # Componentes atômicos e reutilizáveis
    models/             # Interfaces e models TypeScript
    services/           # Serviços, providers e integrações REST
    ...
  public/               # Assets públicos
  styles.scss           # Estilos globais
backend/
  ...                   # Código Python (API REST - Django REST Framework)
dockerfile              # Dockerfile para build e deploy
```

## 🏗️ Padrões e Boas Práticas

- Modularização com lazy loading
- Injeção de dependência otimizada
- Componentização atômica
- Responsividade mobile-first
- Acessibilidade (WCAG 2.1 AA, ARIA, navegação por teclado)
- SEO: meta tags dinâmicas, dados estruturados
- Clean Code & SOLID
- Testes automatizados (unitários e e2e)
- Integração robusta entre Angular e API Python (Django REST Framework)
- Segurança: autenticação, autorização e sanitização de dados

## ⚙️ Como rodar o projeto

### 1. Instale as dependências do frontend

```bash
npm install
```

### 2. Ambiente de desenvolvimento frontend

```bash
npm start
# ou
ng serve
```

Acesse: http://localhost:4200/

### 3. Instale as dependências do backend (Python)

```bash
cd backend
pip install -r requirements.txt
```

### 4. Ambiente de desenvolvimento backend

```bash
python manage.py runserver
```

Acesse: http://localhost:8000/ (ou porta configurada)

### 5. Banco de dados

- Configure o PostgreSQL localmente ou utilize serviço gerenciado
- Defina as variáveis de ambiente de conexão no backend

### 6. Deploy Backend

- O backend é hospedado no [Render.com](https://render.com/)
- Configure variáveis de ambiente e banco de dados PostgreSQL na plataforma

### 7. Utilizando Docker

Para rodar o projeto completo (frontend e backend) via Docker:

```bash
docker build -t meushop .
docker run -p 4200:4200 -p 8000:8000 meushop
```

> Certifique-se de configurar corretamente as variáveis de ambiente e volumes no Dockerfile e docker-compose.yml (se aplicável) para produção.

## 🧪 Testes e Qualidade

- Cobertura mínima recomendada: 80%
- Testes unitários em todos os serviços e componentes críticos
- Testes e2e para principais fluxos de usuário
- Linting e formatação automatizados
- Testes de API backend (pytest, unittest)

## 📦 Deploy & CI/CD

- Build otimizado para produção (bundle size, lazy loading)
- Pronto para integração com pipelines CI/CD (GitHub Actions, Azure DevOps, etc)
- Backend deploy automático no Render.com
- Considerações de SSR e SEO para produção
- Suporte a deploy via Docker

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`feature/nome-da-feature`)
3. Commit e push com mensagens descritivas
4. Abra um Pull Request detalhado
5. Siga os padrões de código e arquitetura do projeto

## 📝 Critérios de Qualidade

- Código limpo, modular e documentado
- Performance otimizada (OnPush, trackBy, lazy loading)
- Segurança: sanitização de inputs, validação, HTTPS
- Acessibilidade e responsividade garantidas
- Manutenibilidade e escalabilidade

## 📚 Referências

- [Angular CLI Docs](https://angular.dev/tools/cli)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [RxJS Docs](https://rxjs.dev/guide/overview)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Render.com Docs](https://render.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Docker Docs](https://docs.docker.com/)

## 📄 Licença

MIT

---

**MeuShop** – Código enterprise-grade, UX excepcional e arquitetura escalável para crescimento sustentável.
