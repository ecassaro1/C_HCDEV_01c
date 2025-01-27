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

    local:
        puxar o xsuaa pelo Cloud Foundry no menu da esquerda do Studio. Ajustar o arquivo pra default-env.json

        2024: não está rodando local. Algum problema com o redirect... Tentei ajustar no xsuaa-config.json, mas não funfou

    2024: no CF funfou

cf3: front igual ao do cf2 acessando o backend do cf1
    para criar o XSUAA:
        cf create-service xsuaa application cf3-xsuaa -c xsuaa-config.json
    para criar o Destination
        cf create-service destination lite cf1Destination -c dest-config.json

    2024: ok no cf

cf4: back e front num MTA, com destination e xsuaa
    mbt build
    deploy no .MTAR

    2024: ok no cf, atualizando o destination do BE (destinations.json)

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

    Na nuvem não funcionou... não sei pq. Na hora de puxar do cf1 dá algum pau e o log fica pifado

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

consume_cap: acessando o cap2 do anterior, mas desta vez via destination (ao invés de token do xsuaa)
    ... não está funfando...

-cf24: exemplo do Somnath Paul: https://www.youtube.com/watch?v=0e2RFlX3dN0&list=PL54JdsBCvI0mPwzMkzlNnulw3NaxoWzks&index=5
    CAP - HANA - Fiori Elements - E2E Application Development | VSCode | HANA HDI

    -sem authentication. A autenticação é no vídeo seguinte, mas é bugada. Nos comentários do vídeo aparece uma solução.

-cf25: brincadeiras com o approuter:
    -tem rotas locais
    -tem rotas remotas, de destination:
        -uma é via destination service
        -outra é definida localmente no default-env.json

-cf26: cap / hana / approuter / xsuaa / fiori elements
    -local
        -rodar o cap
        -rodar o approuter

        -pre-reqs:
            -o default-env.json precisa estar com as credenciais em ambos os diretórios
                -para isso fazer um deploy e pegar as credenciais pelo cockpit

    -na nuvem:
        -deploy do mta e acessa pelo link do cf26 (approuter)

-cf27: sap-cloud-sdk (odata-client)
    https://sap.github.io/cloud-sdk/docs/js/features/odata/overview

    É um cap que tem:
        -o Books do sample
        -uma função de hello
        *-->-uma função que busca os dados do Products da Northwind por meio do sap-cloud-sdk/odata-client
    
    rodando local

    precisa ter:
        -a destination 'northwind' configurada dentro de um destination service
            -definition na pasta srv/destinations
        -o destination service precisa estar bindado
            -commands:
                >cds bind -2 <mydestination> (no caso é 'cf-dest')

    a linha de comando que gerou o client:
        (a partir do raiz)
        npx generate-odata-client --input ./srv/external/Northwind.edmx --outputDir ./srv/external --optionsPerService --overwrite -t

    pra puxar os dados:
        https://port4004-workspaces-ws-45m2m.us10.trial.applicationstudio.cloud.sap/odata/v4/catalog/getNwProducts()

    
-cf28: CAP service integration
    https://cap.cloud.sap/docs/guides/using-services#external-service-api

    -integra o Northwind/products

    -roda local
        cds watch --profile sandbox

    -a url do nw está no package.json


-cf29: CAP service integration com authentication
    -igual ao cf28, mas integrando com o cf26, que é um CAP authenticado

    -precisa instanciar um destination service e subir a destination cf26-dest1

    -local
        cds watch --profile sandbox

-cf30: Local CAP Project & HTML repo
    https://github.com/SAP-samples/btp-end-to-end-scenario-use-cases/blob/main/topic3/README.md

    Este link é do hands-on da SAP. Neste cf30 implementamos um dev semelhando ao exercício #1. A parte 
    nova é que diferentemente dos anteriores, este app fiori é gerado sobre o CAP local. E também que o
    App fiori fica no HTML Repo do Workzone, diferentemente dos anteriores que ficava dentro dos diretórios
    do approuter.

    - cds init cf30 --add tiny-sample
    - cd cf30
    - cds add hana,xsuaa --for production
    - [f1] Fiori: Open Application Generator
        - List Report
        - Local CAP project
    - cds add mta
    - [f1] Create MTA module from template
        - App Router Configuration
        - Managed
        - [Action] Do not overwrite
        - 
    - [na página do app (Application info)]
        - Add Fiori Launchpad Config
        - Add Deploy Config
            - Destination Name: Local CAP API (instance based destination)
    - mbt build
    - deploy MTA to BTP
        - garantir que o HANADB esteja rodando. E qdo criar, abrir para todos IPs.
    - após deployado, o app estará no HTML Repo, na subaccount
        - para poder acessar é precisa fazer uma subscription no Workzone (subscription)

-cf30b: um repeteco do cf30, pra consolidar.
-cf30c: mais um, só que com o CRUD (draft-enabled habilita o CRUD)

-cf31: CAP básico com UI annotations, association, search-help, srv.js validation

-cf32: AnalyticTable

-cf33: CAP com service.js

-cf34: CAP com Swagger/OpenAPI
    https://cap.cloud.sap/docs/advanced/publishing-apis/openapi

-cf35: comunicação entre CAPs
    cf35a é o provider
    cf35b é o consumer, via fetch
        configurar o host:porta do cf35a no .env
    cf35c é outro consumer, mas via external service API
        https://cap.cloud.sap/docs/guides/using-services#external-service-api

        este repo consome o cf35a, via external API import

        as partes interessantes estão nos seguintes files:
            package.json
                cds/requires
            service.js
            service.cds

        no cf35a
            cds compile srv -s CatalogService -2 edmx -o srv\external

        no cf35c
            cds import ..\cf35a\srv\external\CatalogService.xml --as cds        
        
-cf36: CAP com typescript
    https://cap.cloud.sap/docs/node.js/typescript


-cf37: CAP com TS e OO

-cf38: todas as formas de conexão (sem authenticação)
    -cf38a: tiny-sample (base)
        pra ser sem authenticação precisa estar assim no package.json:
            "cds": {
                "sql": {
                    "native_hana_associations": false
                },
                "requires": {
                    "auth": {
                        "restrict_all_services": false,
                        "kind": "xsuaa"
                    }
                }
            }        

    -cf38b: 
    
    -cf38c: destination/cloud-sdk
        https://sap.github.io/cloud-sdk/docs/js/overview

        está em TS (cds add typescript)
            o problema é que os 'npm i' depois ficam dando pau... tem algum conflito
                pra resolver é 'npm i --force

        pra funcionar:
            npm i @sap-cloud-sdk/generator (já está instalado aqui)
            no srv/external
                trazer o edmx do cf38a
                criar o options-per-service.json
            pra gerar o client
                npx generate-odata-client --input ./srv/external --outputDir ./srv/external --optionsPerService ./srv/external options-per-service.json --overwrite
            pra rodar
                no BTP CF o srv38-srv precisa estar rodando
                criar uma destination (service)
                cf create-service destination lite cf38a-dest -c ./destinations/CF38A.json (talvez tenha que criar na mão)
                cf bind -2 cf38a-dest
                criar no package.json este script
                    "h-watch": "cds-tsx w --profile hybrid"
                rodar com
                    npm run h-watch
                no client:
                    http://localhost:4004/odata/v4/books-consumer/getCF38aBooks()


    -hana-client
    -external service API
    -fetch
    
    


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

    (nova versão, vide CF30)

Bind para rodar local
    puxar o serviço pra dentro do projeto a partir do 'farolzinho' de targets do cloud foundry (no BAS)
    ajustar o arquivo:
        -ele cria um arquivo ".env"
        -mudar para "default-env.json" e ajustar internamente pra virar JSON
        