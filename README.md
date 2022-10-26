# C_HCDEV_01c
Desenvolvimento BTP Cloud Foundry

cf1: Hello World nodejs
    local:
        npm start
        no browser: http://localhost:8080/

    na nuvem:
        push cf
        acessar a rota fornecida pelo push

cf2: Hello World HTML com AppRouter e Authentication
    para criar o XSUAA:
        cf create-service xsuaa application cf2-xsuaa -c xs-security.json

cf3: front igual ao do cf2 acessando o backend do cf1
    para criar o XSUAA:
        cf create-service xsuaa application cf3-xsuaa -c xs-security.json
    para criar o Destination
        cf create-service destination lite cf1Destination -c dest-config.json

cf4: back e front num MTA, com destination e xsuaa
    mbt build
    deploy no .MTAR

cf5: cópia do cf4 add db module
    fe: https://ae797c74trial-dev-cf5fe.cfapps.us10.hana.ondemand.com/index.html

cf6: versão Nutela, usando CAP e Fiori Elements
    fe: https://ae797c74trial-dev-cf6-fe1.cfapps.us10.hana.ondemand.com/index.html
    
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
    funcionando local. Precisa bindar um XSUAA genérico e o destination cf11-dest (arquivo para upload)

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

cf16: um REACT acessando o cf2 por meio de destination semelhante ao cf11.
    para criar o Destination
        cf create-service destination lite cf16tocf1 -c dest-config.json