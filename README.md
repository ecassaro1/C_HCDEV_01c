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