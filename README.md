# C_HCDEV_01b
Desenvolvimento BTP Cloud Foundry

cf1: Hello World nodejs
    local:
        npm start
        no browser: http://localhost:8080/

    na nuvem:
        push cf
        acessar a rota fornecida pelo push

cf2: Hello World HTML com AppRouter e Authentication

cf3: front igual ao do cf2 acessando o backend do cf1

cf4: back e front num MTA, com destination e xsuaa

cf5: cópia do cf4 add db module
    