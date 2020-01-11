# Como rodar o backend

Instale o docker no seu computador, com o docker instalado execute o comando "docker run --name mongogen -p 27017:27017
-d -t mongo" no seu terminal para que crie uma imagem no MongoDB.
Depois que criar a imagem do MongoDB, entre nas pasta do backend pelo terminal e execute o comando "yarn" 
para instalar as dependências.
Com as dependências instaladas, abra o seu terminal na pasta do backend novamente e execute "docker ps" para
verificar se a imagem do MongoDB está rodando, se estiver rodando execute o comando "yarn dev" para que o 
backend comece a rodar, caso a imagem não esteja rodando, execute "docker start mongogen" espere a imagem 
subir e depois execute o comando "yarn dev".

