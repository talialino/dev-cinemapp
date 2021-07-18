# dev-cinemapp

### Nesse aplicativo você pode:

- [x] Buscar por filmes que gostamos
- [x] Listar os filmes encontrados
- [x] Permitir que escolhamos nosso filmes favoritos
- [x] Permitir que removamos um filme de nossos favoritos 
- [x] Listar nossos filmes favoritos

### Para usar a aplicação, você pode baixa-lo diretamente no seu aparelho Android! Basta clicar [aqui](https://drive.google.com/file/d/1NmrFyEMBV6BCsgxPdrf8VBLuMV6b1dfO/view?usp=sharing).

### Se seu aparelho não for Android ou se preferir, execute no emulador de sua preferência. Primeiro você precisa:

 1. Clonar o projeto
> $ git clone https://github.com/talialino/dev-cinemapp.git

 2. Instalar dependências dentro do projeto
> $ yarn

 3. Executar projeto
> $ npx react-native run-android  
> $ yarn start

#### Certifique-se de ter seu ambiente preparado para rodar o projeto em um emulador. Você vai precisar ter a versão mais recente do Yarn e do Node.js (LTS) pra rodar npx.

### Como funciona:

O nome do filme desejado deve ser digitado na barra de busca e o botão de 'Buscar' deve ser pressionado. Logo após, uma chamada a API será feita e todos os filmes, com sua foto, Título e data de exibição, serão listados. Quando o ícone de favoritar for precionado, seus filmes favoritados serão salvos na aba de 'Favoritos', a lista será atualizada conforme você favoritar ou desfavoritar.
 
### Processo de criação

Comecei a criação do aplicativo estudando a API e os valores que precisaria manipular. Usei o Postman pra fazer os teste da API e para visualizar as requisições. 

Resolvi criar a aplicação com React Native no código nativo para Android, por eu já ter as ferramentas e material de trabalho necessários, e também é o que estou mais familiarizada a desenvolver. Comecei pela estilização do projeto, fiz um esqueleto inicialemente pra receber as chamadas a API e renderiza-las. Ao invés de usar Redux, optei por usar somente o Context API, por ser uma ferramenta React Native com boa eficiência para aplicações mais simples. Finalizei com algumas alterações no layout.

Concluo que, em todo processo de criação, algo novo sempre aparecia pra que eu aprendesse a lidar, tanto no código quanto em outras ferramentas que utilizei. Tive alguns problemas de permissão com o Git durante e no final da criação do projeto, mas aprendi a contornar toda a situação e fiquei satisfeita com o resultado final. Tive desafios que foram superados, o que tornou esse processo muito produtivo e vantajoso.

#### Tecnologias utilizadas
 - React Native  
 - Context API
 - Yarn
 - Axios
 - EsLint
 - Prettier 
 - EditorConfig 

