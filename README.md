# Cypress - Fleet Analytics

Este projeto contém os testes automatizados desenvolvidos para o teste técnico para a vaga de Analista de Testes (QA) no Fretadão.

## Tecnologias utilizadas
- [Cypress](https://www.cypress.io/) (para automação de testes)
- Node.js

## Requisitos
- Node.js instalado
- npm

## Como baixar e rodar o projeto
1. Clone o repositório:
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

## Instale as dependências:
npm install

## Executar os testes 
npx cypress open

## Cenários de Teste Funcionais e não Funcionais

### Cenário 1 – Validação de caracteres inválidos no campo de cidade
Abrir a página de passageiros: https://www.fretadao.com.br/passageiros.  
No campo de origem, inserir caracteres especiais.
No campo de destino, inserir uma cidade válida. 
Clicar no botão para buscar linhas disponíveis.  
Verificar se o sistema impede a busca ou exibe uma mensagem de erro.  

### Cenário 2 – Desempenho do campo de cidade ao inserir caracteres especiais
Acessar a página de passageiros: https://www.fretadao.com.br/passageiros.
Inserir uma sequência de 100+ caracteres especiais no campo de cidade (origem ou destino).
Verificar o tempo de resposta ao digitar.
Validar se o campo apresenta lentidão ou travamentos.
Verificar o sistema deve processar a entrada rapidamente, sem travar ou apresentar falhas.

### Cenário 3 – validação de campos obrigatórios no formulário de lista de espera
Abrir a página de passageiros: https://www.fretadao.com.br/passageiros.  
No campo de origem, inserir a cidade válida para .  
No campo de destino, inserir a cidade válida.  
Buscar pelas opções de linhas disponíveis.  
Verificar se o resultado indica entrada na lista de espera.  
Tentar enviar o formulário de lista de espera deixando algum campo obrigatório vazio.  

### Cenário 4 – testar com conexão lenta
Simular uma internet lenta (tipo 3G ou usar o throttling no DevTools).
Preencher o formulário e enviar.
Verificar se o site continua funcionando sem grandes travas, mostrando mensagens e carregando o que precisa.
O esperado é que o sistema aguente a conexão ruim e não quebre a experiência do usuário.


### BUGS SIMULADOS

### Bug 1 – validação incorreta do campo de email no formulário de lista de espera
Resumo:
- O formulário aceita emails inválidos, como "teste@teste" ou "email@.com", permitindo o envio mesmo com formato incorreto.

Passos para reproduzir:
1. Abrir a página de passageiros: https://www.fretadao.com.br/passageiros.
2. Preencher o formulário de lista de espera.
3. No campo de email, inserir um endereço inválido, por exemplo, "teste@teste".
4. Tentar enviar o formulário.

Comportamento atual:
- O sistema permite enviar o formulário sem apresentar erro de validação no email.

Comportamento esperado:
- O sistema deve validar o formato do email e impedir o envio, exibindo uma mensagem clara de erro.

### Bug 2 – mapa de rota não exibe ao clicar no botão
Resumo:
- Ao clicar para visualizar a rota no mapa após buscar linhas, o mapa não é exibido ou permanece em branco.

Passos para reproduzir:
1. Abrir a página de passageiros: https://www.fretadao.com.br/passageiros.
2. Inserir cidade válida no campo de origem e destino.
3. Buscar pelas linhas disponíveis.
4. Clicar no botão para ver a rota no mapa.

Comportamento atual:
- O mapa não carrega e não mostra a rota desejada.

Comportamento esperado:
- O mapa deve carregar corretamente e exibir a rota entre origem e destino. -->
