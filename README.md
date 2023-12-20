# C_HCDEV_01c
Desenvolvimento BTP Cloud Foundry

cf1: Hello World nodejs
    local:
        npm start
        no browser: http://localhost:8080/

    na nuvem:
        cf push
        acessar a rota fornecida pelo push

cf2: Hello World HTML com AppRouter e Authentication
    para criar o XSUAA:
        cf create-service xsuaa application cf2-xsuaa -c xsuaa-config.json

cf3: front igual ao do cf2 acessando o backend do cf1
    para criar o XSUAA:
        cf create-service xsuaa application cf3-xsuaa -c xsuaa-config.json
    para criar o Destination
        cf create-service destination lite cf1Destination -c dest-config.json

cf4: back e front num MTA, com destination e xsuaa
    mbt build
    deploy no .MTAR

cf5: cópia do cf4 add db module
    fe: https://ae797c74trial-dev-cf5fe.cfapps.us10.hana.ondemand.com/index.html

cf6: versão Nutela, usando CAP e Fiori Elements
    fe: https://ae797c74trial-dev-cf6-fe1.cfapps.us10.hana.ondemand.com/index.html

    o app router fica no app/fe1;
    o build do cf6-elem1 (no MTA) joga o resultado dentro do app/fe1, para que seja
        roteado a partir do app router;
    o cf6-elem1 portanto é apenas o fonte. A parte executável fica no fe1.

    antes de deployar
        no raiz: 
            cds build
            mbt build
    
cf7: cópia do cf3 mas acessando backend na AWS

cf8: cópia do cf7 mas acessando backend ABAP Environment
    instruções no diretório

cf9: db e be. Node acessando o HANA. Roda localmente. Consegui rodar num EC2 da AWS.

cf10: acessar o /sap/opu/odata/sap/userdefaults/I_Userdetails?$format=json&$top=1 no Demo21 via destination e app-router
    /sap/opu/odata/sap/userdefaults/I_Userdetails?$format=json&$top=1
    /sap/opu/odata/sap/userdefaults/I_Userdetails('BPINST')?$format=json

    https://blogs.sap.com/2018/11/12/how-to-setup-cloud-connection/

cf11: acessando o backend cf1 via nodejs
    baseado no blog https://blogs.sap.com/2018/10/08/using-the-destination-service-in-the-cloud-foundry-environment/

    o resultado sai no console (do express)
    funcionando local. Precisa bindar xsuaa cf11-auth e o destination cf11-dest

    para criar o XSUAA:
        cf create-service xsuaa application cf11-auth -c xsuaa-config.json
    para criar o Destination
        cf create-service destination lite cf11-dest -c dest-config.json

    Na nuvem não funcionou... não sei pq. Na hora de puxar do cf1 dá algum pau e p log fica pifado

cf12: fullstack padrão golden path
    cds init
    cds add samples
    cds add mta
    cds add hana
    cds add approuter
    npm i
    cds build
    open generator (sem deploy config)
    config manual do fiori gerado
    config manual do approuter
    mbt build
    deploy

cf13: fullstack golden path com três apps e authentication
    Dois apps na pasta app. O 1o é só um hello.html. O 2o é um fiori elements list-report. O 3o é um worklist.
    O welcome file tem um link pra cada app.
    (por alguma razão os apps só funcionam depois do 2o deploy)

    no cat-service tem umas funcionalidades extra

cf14: brincando com modelagem no CAP

cf15: um CAP como base pra hdb e hana-client

cf16: um CAP para estudar CAP

cf17: HANA Native

cf18: fullstack padrão golden path, igual ao cf12 mas com auth
    cds init
    cds add samples
    cds add mta
    cds add hana
    cds add approuter
    cds add xsuaa
    npm i
    cds build
    open generator (sem deploy config)
    config manual do fiori gerado
    config manual do approuter
    mbt build
    deploy

    curiosidade: no xs-app.json tive que configurar diferente do cf12:
        cf18
            "localDir": "./webapp/",
        cf12
            "localDir": "webapp/",

        estava dando pau no deploy na hora de startar o cf18 (approuter)

cf19: um nodejs simples que recebe um valor na query string e retorna o seu dobro. Criei
    pra ser usado como teste numa action do BPA.

cf20: nodejs. Acessa um attributo dentro de um JSON

cf21: recebe um JSON e acessa um atributo

cf22: recebe um JSON dentro de uma string e retorna um JSON com os attributos buscados

cf23: um cap hello mas com authentication via router
    Funcionou!!

consume_cap: um nodejs (que é o CAP3) consumingo um CAP (CAP2), via XSUAA
    -faça o deploy do cap2
    -crie a role collection com a role do cap2.admin e atribua ao seu user na subaccount
    -local
        -copie o env variables do cap2 para o default-env.json do cap3
        -rode o CAP3 mesmo localmente, passando o seguinte path:
            .../odata/v4/tst/getHello(to='World')
        -o cap3-srv vai buscar o JWT no cap2-xsuaa e repassa para o cap2, que é authenticado
        -o próprio cap3-srv tbm é authenticado
    -cf
        -faça o deploy do cap3
        -crie a role collection com a role do cap3.admin e atribua ao seu user na subaccount
        -cf bind-service cap3-srv cap2-auth
        -.../odata/v4/tst/getHello(to='World')
        -o cap3-srv tbm é authenticado, então é interessante fazer esta chamada pelo approuter dele, o 'cap3'
        
        -o fluxo então fica assim:
            -o client (browser? postman?) chama pelo approuter https://7601e67ftrial-dev-cap3.cfapps.us10-001.hana.ondemand.com/odata/v4/tst/getHello(to='World')
            -o approuter chama o IDP, que é o cap3-xsuaa
            -o cap3-xsuaa verifica se o user logado tem a role constante no xs-security.json do cap3
            -caso positivo, este retorna para a uri que consta no redirect-uris do xs-security do cap3, que é o path dentro do cap3-srv
            -esta foi a 1a authenticação, a do cap3, feita via approuter
            -o cap3-srv busca nas variáveis de ambiente, via @sap/xsenv, as credenciais que estão no cap2-xsuaa
            -faz então uma chamada na url deste xsuaa, passando clientid e clientsecret, pra recuperar o token
            -o cap2-xsuaa verifica se o user logado tem a role constante no xs-security.json do cap2
            -caso positivo, retorna o token
            -com o token em mãos, o cap3-srv coloca o mesmo num header e passa pro cap2-srv
            -o cap2-srv gera o 'hello' e retorna para o cap3-srv, que retorna para quem chamou

# Generic How-to

Debugar o CAP:
    cds watch
    (qdo estiver rodando...) digite 'debug' no terminal (e enter). Ficará em modo de debug
    mas ainda precisa attachar o debugger: F1 / Debug: Attach to node process. Escolha o seu (é o que termina com .../cds watch)

Debugar um node qualquer:
    ...

Fullstack padrão golden path
    cds init
    cds add samples
    cds add mta
    cds add hana
    cds add approuter
    npm i
    cds build
    open generator (sem deploy config)
    config manual do fiori gerado
    config manual do approuter
    mbt build
    deploy

Bind para rodar local
    puxar o serviço pra dentro do projeto a partir do 'farolzinho' de targets do cloud foundry (no BAS)
    ajustar o arquivo:
        -ele cria um arquivo ".env"
        -mudar para "default-env.json" e ajustar internamente pra virar JSON