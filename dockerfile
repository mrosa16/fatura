FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Define a variável de ambiente padrão
ENV NODE_ENV=development

# Comando para iniciar o NestJS em modo dev
CMD ["npm", "run", "start:dev"]
