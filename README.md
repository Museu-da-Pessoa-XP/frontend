# Museu da Pessoa - Frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/92746fd813506f4fcb89/maintainability)](https://codeclimate.com/github/Museu-da-Pessoa-XP/frontend/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/92746fd813506f4fcb89/test_coverage)](https://codeclimate.com/github/Museu-da-Pessoa-XP/frontend/test_coverage)

## To install
=======
The Museu da Pessoa backend is part of the Museu da Pessoa project and is responsible for saving the users' data such as name, email, text, audio and video


## Install docker on Linux (ubuntu flavors)
```shell
sudo apt-get update
sudo apt-get install docker
sudo apt-get install docker-compose
```
## Clone frontend repository and changing to the right branch
```shell
git clone https://github.com/Museu-da-Pessoa-XP/frontend.git
cd frontend
git checkout develop
git pull
```

## Start the React/Node project
```shell
docker-compose up -d
```

## Check the containers status
```shell
docker ps
```
You must have 1 container running, just like this:
```shell
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
3c017f232d33        frontend_frontend   "docker-entrypoint.s…"   3 days ago          Up 10 seconds       0.0.0.0:3000->3000/tcp   frontend_frontend_1
```

## Access the appliction
Open your web-browser (Chrome, Firefox, ...) on the address: <http://localhost:3000>

## Extras 

It is suggested to edit and lint the code with VSCode running with the following extensions. 

### To install VSCode
``` 
sudo apt update
sudo apt install code
```

### To install the suggested extensions
```
code --install-extension dbaeumer.vscode-eslint
code --install-extension Orta.vscode-jest
code --install-extension dsznajder.es7-react-js-snippets
```
