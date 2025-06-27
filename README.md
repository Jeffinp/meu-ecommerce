# MeuShop – E-commerce Moderno

Projeto enterprise-grade desenvolvido com Angular 15+, TypeScript, Tailwind CSS e arquitetura modular, focado em performance, escalabilidade e experiência de usuário excepcional.

## 🚀 Visão Geral

O **MeuShop** é um e-commerce moderno, otimizado para SEO, responsivo e acessível, com código limpo, testável e pronto para produção. O projeto segue padrões avançados de arquitetura Angular, integrações RESTful e design system baseado em Tailwind CSS.

## 🛠️ Tecnologias & Ferramentas

- **Angular 15+** (CLI, DI, Lazy Loading, Feature Modules)
- **TypeScript** (strict mode, interfaces robustas)
- **Tailwind CSS** (utility-first, design tokens)
- **SCSS** (BEM, ITCSS)
- **RxJS** (Observables, operadores avançados)
- **Jest/Jasmine** para testes unitários
- **Cypress/Protractor** para testes e2e
- **NgRx** (opcional para estados complexos)
- **Arquitetura modular** e separação de responsabilidades

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

## ⚙️ Como rodar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Ambiente de desenvolvimento

```bash
npm start
# ou
ng serve
```

Acesse: http://localhost:4200/

### 3. Build de produção

```bash
ng build --configuration production
```

### 4. Testes unitários

```bash
ng test
```

### 5. Testes end-to-end

```bash
ng e2e
```

## 🧪 Testes e Qualidade

- Cobertura mínima recomendada: 80%
- Testes unitários em todos os serviços e componentes críticos
- Testes e2e para principais fluxos de usuário
- Linting e formatação automatizados

## 📦 Deploy & CI/CD

- Build otimizado para produção (bundle size, lazy loading)
- Pronto para integração com pipelines CI/CD (GitHub Actions, Azure DevOps, etc)
- Considerações de SSR e SEO para produção

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

## 📄 Licença

MIT

---

**MeuShop** – Código enterprise-grade, UX excepcional e arquitetura escalável para crescimento sustentável.
