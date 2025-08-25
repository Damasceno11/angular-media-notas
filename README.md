# 📊 Sistema de Notas Escolares

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 📋 Descrição do Projeto

Sistema moderno desenvolvido em Angular para gerenciamento de notas escolares, permitindo cadastrar alunos, calcular médias automaticamente e visualizar situações de forma colorida e intuitiva.

## ✨ Funcionalidades

- ✅ **Cadastro de Alunos** com nome e duas notas
- ✅ **Cálculo Automático** de médias via Pipe personalizado
- ✅ **Status Coloridos** (Aprovado/Recuperação/Reprovado)
- ✅ **Interface Moderna** com Angular Material
- ✅ **Design Responsivo** para todos os dispositivos
- ✅ **Animações Suaves** e efeitos visuais
- ✅ **Validações** em tempo real
- ✅ **Gradientes** e cores vibrantes

## 🛠️ Tecnologias Utilizadas

- **Angular 17** - Framework principal
- **TypeScript** - Linguagem de programação
- **Angular Material** - Componentes UI modernos
- **Reactive Forms** - Formulários reativos
- **CSS3** - Estilização avançada com gradientes e animações

## 🎨 Visual Moderno

![Captura de Tela](https://via.placeholder.com/800x400/3f51b5/ffffff?text=Sistema+de+Notas+Escolares)
*(Imagem ilustrativa - o sistema possui design real com gradientes e cores vibrantes)*

## 📦 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── sistema-notas/
│   │       ├── sistema-notas.component.ts
│   │       ├── sistema-notas.component.html
│   │       └── sistema-notas.component.css
│   ├── pipes/
│   │   └── media.pipe.ts
│   ├── models/
│   │   └── aluno.model.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.config.ts
├── assets/
└── environments/
```

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sistema-notas-escolares.git

# Instale as dependências
npm install

# Execute em modo desenvolvimento
ng serve

# Acesse no navegador
http://localhost:4200
```

## 📋 Funcionalidades Detalhadas

### 🎯 Cadastro de Alunos
- Formulário reativo com validações
- Campos para nome e duas notas (0-10)
- Validação em tempo real

### 📊 Cálculo de Médias
- Pipe personalizado `media` para cálculo automático
- Arredondamento para uma casa decimal
- Atualização em tempo real

### 🎨 Sistema de Status
- **🟢 Aprovado** - Média ≥ 7.0
- **🟡 Recuperação** - Média entre 5.0 e 6.9  
- **🔴 Reprovado** - Média < 5.0

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Grid system flexível
- Experiência otimizada para todos os dispositivos

## 🎨 Paleta de Cores

| Situação | Cor | Hexadecimal |
|----------|-----|-------------|
| **Aprovado** | 🟢 Verde | `#4caf50` |
| **Recuperação** | 🟡 Laranja | `#ff9800` |
| **Reprovado** | 🔴 Vermelho | `#f44336` |

## ⚡ Performance

- **Carregamento rápido** com otimizações Angular
- **Animações CSS** suaves e performáticas
- **Bundle otimizado** com tree-shaking
- **Renderização eficiente** com Change Detection

## 📈 Próximas Melhorias

- [ ] Exportação para PDF/Excel
- [ ] Gráficos estatísticos
- [ ] Modo escuro/claro
- [ ] Backup local dos dados
- [ ] Integração com API
- [ ] Sistema de login
- [ ] Relatórios detalhados

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 🐛 Reportar Bugs

Encontrou um bug? [Abra uma issue](https://github.com/seu-usuario/sistema-notas-escolares/issues) descrevendo o problema.

## 💡 Dicas de Uso

1. **Valores decimais**: Use ponto (.) para casas decimais
2. **Nome completo**: Digite o nome completo do aluno
3. **Validação**: Notas devem estar entre 0 e 10
4. **Responsivo**: Use em desktop, tablet ou smartphone

## 🌟 Destaques Técnicos

- **Angular 17**: Última versão com Signals
- **Standalone Components**: Arquitetura moderna
- **Reactive Forms**: Validações robustas
- **Material Design**: UI consistente e acessível
- **CSS Moderno**: Gradientes, animações e responsividade

## 📊 Estatísticas

![Code Size](https://img.shields.io/github/languages/code-size/seu-usuario/sistema-notas-escolares?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/seu-usuario/sistema-notas-escolares?style=flat-square)
![Issues](https://img.shields.io/github/issues/seu-usuario/sistema-notas-escolares?style=flat-square)

---

## 👨‍💻 Desenvolvido por

**Pedro Paulo Damasceno Muniz**  
📊 Contador | 💻 Analista de Sistemas em Formação  
🎓 +Devs2Blu - Formação Intensiva em Desenvolvimento Full Stack  
📍 Blumenau/SC - Brasil  

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-damasceno-23b330150/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Damasceno11)

## 🙏 Agradecimentos

**Blusoft** - Associação das empresas de tecnologia de Blumenau  
**Proway Cursos** pelo treinamento e suporte  
**+Devs2Blu** pela formação intensiva e oportunidade  
**Angular Team** pelo framework incrível  
**Professor Ralf Lima** pela expertise em desenvolvimento front-end e back-end, didática clara e por tornar o desenvolvimento web acessível e interessante

---

**⭐️ Se este projeto te ajudou, deixe uma estrela no repositório!**

---

*Este projeto foi desenvolvido para fins educacionais como parte da formação +Devs2Blu.*
