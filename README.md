[Português](#pt-br) | [English](#en)

# Mind Pixel <a name="pt-br"></a>
Este projeto, desenvolvido em Angular, é um CRUD completo que permite aos usuários adicionar, editar e excluir pensamentos, trechos de músicas, de livros, entre outros. Além disso, oferece três modelos de card para exibir os trechos salvos.

## Demo
![Demonstração em GIF]()

## Tecnologias Utilizadas
- HTML
- CSS
- Angular
- TypeScript
- JSON-Server

## Funcionalidades Implementadas
- Rotas e Navegação: Configuração e utilização de rotas com RouterModule; Navegação utilizando a propriedade routerLink; Diretiva <router-outlet> para renderizar componentes de rota;
- Diretivas: Utilização de diretivas estruturais (ngFor, ngIf) para inclusão e exclusão de elementos no DOM; Estilização dinâmica de elementos com ngClass;
- Simulação de API: Uso do JSON-Server para simular uma API REST e armazenar dados em db.json;
- Serviços e Dependências: Criação de Services com o decorator @Injectable()
Injeção de dependências;
- HTTP e Observables: Métodos de requisição HTTP utilizando HttpClient
Manipulação de Observables para lidar com respostas assíncronas;
- CRUD: Criação, Leitura, Atualização e Exclusão de trechos e pensamentos; 
Escolha entre três modelos de card para exibição.

## Como Executar
- Clone este repositório;
- Instale as dependências com npm install;
- Inicie o servidor de desenvolvimento com ng serve;
- Inicie o JSON-Server com json-server --watch db.json.

# Mind Pixel<a name="en"></a>
This project, developed in Angular, is a complete CRUD that allows users to add, edit, and delete thoughts, music excerpts, book excerpts, and more. Additionally, it offers three card templates to display the saved excerpts.

## Demo
![Demonstração em GIF]()

## Technologies 
- HTML
- CSS
- Angular
- TypeScript
- JSON-Server

## Implemented Features
- Routing and Navigation: Configuring and using routes with RouterModule; Navigating using the routerLink property; Using the <router-outlet> directive to render route components.
- Directives: Using structural directives (ngFor, ngIf) to include and exclude elements in the DOM; Dynamically styling elements with ngClass.
- API Simulation: Using JSON-Server to simulate a REST API and store data in db.json.
- Services and Dependencies: Creating Services with the @Injectable() decorator; Injecting dependencies.
- HTTP and Observables: Making HTTP requests using HttpClient; Handling Observables to deal with asynchronous responses.
- CRUD: Creating, Reading, Updating, and Deleting excerpts and thoughts; Choosing between three card templates for display.

## How to Run
- Clone this repository;
- Install the dependencies with npm install;
- Start the development server with ng serve;
- Start the JSON-Server with json-server --watch db.json.
