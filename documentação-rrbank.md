# Documentação Técnica - RR Bank

## 1. Visão Geral

O RR Bank é um aplicativo móvel desenvolvido com React Native e Expo, simulando funcionalidades básicas de um banco digital. Ele inclui telas de login, extrato, pix, pagamento de contas e outras interações comuns em aplicativos bancários.

## 2. Estrutura do Projeto

A estrutura do projeto segue o padrão de aplicativos Expo/React Native, com a organização de componentes e telas em diretórios específicos:

```
rr-bank/
├── assets/                     # Imagens e ícones do aplicativo
│   ├── imgs/                   # Imagens específicas das telas
├── src/                        # Código fonte da aplicação
│   ├── Aula/                   # Módulos de aula/exemplo (ex: calculadora, login)
│   ├── app/                    # Telas principais do aplicativo (navegação)
│   │   ├── (login)/            # Tela de login
│   │   ├── extrato/            # Tela de extrato
│   │   ├── inicio/             # Tela inicial
│   │   ├── menu/               # Menu principal
│   │   ├── pag_recebpix/       # Tela de recebimento de Pix
│   │   ├── pagarconta/         # Tela de pagamento de contas
│   │   └── pix/                # Tela de Pix
│   └── components/             # Componentes reutilizáveis da UI
│       └── botao/              # Componente de botão
├── app.json                    # Configurações do aplicativo Expo
├── babel.config.js             # Configurações do Babel
├── eas.json                    # Configurações do Expo Application Services
├── package.json                # Dependências e scripts do projeto
├── package-lock.json           # Bloqueio de dependências
└── tsconfig.json               # Configurações do TypeScript
```

## 3. Tecnologias Utilizadas

*   **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
*   **Expo**: Plataforma para desenvolvimento rápido de aplicativos React Native, facilitando a configuração e o build.
*   **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.

## 4. Funcionalidades Principais

O aplicativo RR Bank oferece as seguintes funcionalidades:

*   **Login**: Autenticação de usuário.
*   **Extrato**: Visualização do histórico de transações.
*   **Pix**: Envio e recebimento de transferências via Pix.
*   **Pagamento de Contas**: Funcionalidade para pagar boletos e outras contas.
*   **Navegação**: Menu intuitivo para acesso às diferentes seções do aplicativo.

## 5. Configuração e Execução (Ambiente de Desenvolvimento)

Para configurar e executar o projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

*   Node.js (versão LTS recomendada)
*   npm ou Yarn
*   Expo CLI (`npm install -g expo-cli`)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/rafaelcrb/rr-bank.git
    cd rr-bank
    ```
2.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Execução

1.  Inicie o servidor de desenvolvimento Expo:
    ```bash
    expo start
    ```
2.  O Expo CLI abrirá uma página no seu navegador com um QR code. Você pode:
    *   Escanear o QR code com o aplicativo Expo Go no seu celular (Android ou iOS).
    *   Pressionar `a` para abrir no emulador Android.
    *   Pressionar `i` para abrir no simulador iOS (macOS).
    *   Pressionar `w` para abrir no navegador web (para testes rápidos, mas a experiência pode ser limitada).

## 6. Considerações de Desenvolvimento

*   O projeto utiliza TypeScript para maior robustez e manutenção do código.
*   A organização das telas em `src/app` e componentes em `src/components` promove a modularidade e reutilização de código.
*   As imagens e ícones estão centralizados na pasta `assets` para fácil gerenciamento.


