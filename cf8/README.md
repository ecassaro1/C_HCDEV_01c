Este projeto acessa um serviço RAP criado no ABAP Environment. A conexão é um pouco diferente. A autenticação na destination precisa ser do tipo OAuth2UserTokenExchange, que funciona em conjunto com um XSUAA. 

serviço do RAP no ABAP Environment:
https://6654aaf7-905f-48ea-b013-3811c03fcba8.abap-web.us10.hana.ondemand.com/sap/opu/odata4/sap/zui_c_travel_m_ec1/srvd/sap/zui_c_travel_m_ec1/0001/Country

primeiro criar o xsuaa
    cf create-service xsuaa application cf8-xsuaa -c xs-security.json
    criar uma service key

criar o destination
    copiar da service key do xsuaa criado os parâmetros para colocar no dest-config.json
        clientid
        clientsecret

    cf create-service destination lite cf8-dest -c dest-config.json

explicação: a destination usa os dados da xsuaa pra acessar o ABAP Environment

com isso pode dar o push

(é meio problemático. Tem hora que não vai. Na hora de lançar a request a destination se perde no caminho e retorna o redirection. Dando alguns refreshes pode funcionar. Nos meus testes um refresh forçado em modo debugging destravou)