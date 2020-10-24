
Projeto para teste frontend.

Usei como base meu projeto de boilerplate, com pré configurações do Next JS, Typescript, Jest, entre outras -> https://github.com/GabrielBritoAlmeida/Boilerplate

## Algumas das tecnologias usadas:

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

## Para iniciar o projeto

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Comandos

- `dev`: executa seu aplicativo em `localhost:3000`
- `build`: cria a versão de construção de produção
- `start`: inicia um servidor simples com o código de produção para construção
- `lint`: executa o linter em todos os componentes e páginas
- `test`: executa jest para testar todos os componentes e páginas
- `test: watch`: executa jest no modo de observação
- `storybook`: executa o livro de histórias em` localhost: 6006`
- `build-storybook`: cria a versão compilada do livro de histórias

## Objetivo

Utilizar a API aberta do GitHub para exibir a descrição e listar os repositórios dado uma determinada organização.

Elementos obrigatórios:
- Tela inicial, onde é solicitado o handle da org (ex. facebook)
- Segunda tela, onde são exibidas informações da org, como imagem, localização,descrição...
- Listar os repositórios da organização

Exemplo: Organização: Facebook
URL da org: https://api.github.com/orgs/facebook
URL dos repositórios: https://api.github.com/orgs/facebook/repos
Referência de UI atual: https://github.com/facebook
# test-apto
