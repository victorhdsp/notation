# Etapa 1: Build environment
FROM node:20-bullseye AS build

# Instala as dependências do sistema necessárias para o Tauri
RUN apt-get update && apt-get install -y \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    libwebkit2gtk-4.0-dev \
    librsvg2-dev \
    libsoup2.4-dev \
    curl \
    build-essential \
    xauth xorg \
    && rm -rf /var/lib/apt/lists/*

# Instala PNPM globalmente
RUN npm install -g pnpm

# Instala o Rustup e o Cargo
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

# Adiciona o binário do Cargo ao PATH
ENV PATH="/root/.cargo/bin:${PATH}"

# Cria e define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto para o diretório de trabalho
COPY . .

# Instala as dependências
RUN pnpm install

# Etapa 2: Runtime environment
FROM node:20-bullseye

# Instala as dependências do sistema necessárias para o Tauri
RUN apt-get update && apt-get install -y \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    libwebkit2gtk-4.0-dev \
    librsvg2-dev \
    libsoup2.4-dev \
    curl \
    build-essential \
    xauth xorg \
    && rm -rf /var/lib/apt/lists/*

# Instala PNPM globalmente
RUN npm install -g pnpm

# Instala o Rustup e o Cargo
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y

# Adiciona o binário do Cargo ao PATH
ENV PATH="/root/.cargo/bin:${PATH}"

# Define o diretório de trabalho
WORKDIR /app

# Copia as dependências instaladas e os arquivos do projeto
COPY --from=build /app /app

# Expor a porta que o Tauri vai usar (por padrão, 3000)
EXPOSE 3000

# Comando para iniciar o modo de desenvolvimento do Tauri
CMD ["pnpm", "run", "tauri", "dev"]
