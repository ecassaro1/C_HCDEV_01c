Este projetinho usa o app-router para acessar um destination (instance) cf10-dest-1.
A destination é do proxy type OnPremisse, ou seja, passa pelo cloud connector, que precisa estar configurado.

Para fazer o deploy no CF:
    posicionar no diretório raiz
    npm i (para instalar os node modules)
    mbt build (para criar o .MTAR)
    cf deploy ./mta_archives/cf10_1.0.0.mtar (para subir no CF)
    ou
    clicar no arquivo MTAR com botão direito e 'deploy MTA archive'

    qdo terminar de subir:
        colocar as suas credencias na destination cf10-dest-1 (dentro do space)
        chamar o link do app-router cf10approuter (em applications)