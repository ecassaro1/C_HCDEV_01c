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

cf6: versão Nutela, usando CAP e Fiori Elements
    
cf7: cópia do cf3 mas acessando backend na AWS

cf8: cópia do cf7 mas acessando backend ABAP Environment
    precisa corrigir o dest-config.json
    está usando o xsuaa do cf7

cf9: db e be. Node acessando o HANA. Roda localmente. Consegui rodar num EC2 da AWS.

cf10: acessar o /sap/opu/odata/sap/userdefaults/I_Userdetails?$format=json&$top=1 no Demo21 via destination e app-router
    /sap/opu/odata/sap/userdefaults/I_Userdetails?$format=json&$top=1
    /sap/opu/odata/sap/userdefaults/I_Userdetails('BPINST')?$format=json

    https://blogs.sap.com/2018/11/12/how-to-setup-cloud-connection/