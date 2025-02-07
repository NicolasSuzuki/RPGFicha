# 📜 My Hero RPG - Character Management System

Um sistema de gerenciamento de personagens para um RPG baseado em **My Hero Academia**. O projeto permite criar, listar, atualizar e gerenciar personagens, incluindo atributos, perícias e individualidades.

---

## 🚀 **Tecnologias Utilizadas**
- **Backend**: Node.js, MySQL, Sequelize
- **Frontend**: React.js, Tailwind CSS
- **Autenticação**: JWT (JSON Web Token)
- **Banco de Dados**: MySQL
- **ORM**: Sequelize

---

## 📌 **Pré-requisitos**
Antes de começar, você precisará ter instalado na sua máquina:
- **[Node.js](https://nodejs.org/)**
- **[MySQL](https://www.mysql.com/)**
- **[npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)**
- **[Git](https://git-scm.com/)**

---

## 🔧 **Instalação e Configuração**
### **1️⃣ Clone o repositório**
```bash
git clone https://github.com/NicolasSuzuki/RPGFicha.git
cd RPGFicha
```

### **2️⃣ Configuração do Banco de Dados**
Crie o banco de dados MySQL:
```sql
CREATE DATABASE ficha_my_hero;
```

Crie um arquivo `.env` na raiz do projeto e configure a conexão com o banco, por exemplo:
```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=1234
DB_NAME=ficha_my_hero
DB_PORT=3306
```

### **3️⃣ Instale as dependências**
```bash
# Instalar dependências do backend
cd backend
npm install

# Instalar dependências do frontend
cd ../frontend
npm install
```

---

## ▶️ **Como Rodar o Projeto**
### **📌 Rodando o Backend**
```bash
cd backend
npm start
```
O backend rodará em: **http://localhost:8000**

### **📌 Rodando o Frontend**
```bash
cd frontend
npm start
```
O frontend rodará em: **http://localhost:5173/**

---

## 🛠 **Principais Funcionalidades**
✅ Cadastro de usuários e autenticação  
✅ Criação e gerenciamento de personagens  
✅ Atributos e modificadores automáticos  
✅ Listagem de personagens com habilidades e individualidades  
✅ Sistema de level-up controlado pelo mestre  

---

## 🛡 **Rotas da API**
### **🔹 Autenticação**
| Método | Rota               | Descrição                |
|--------|--------------------|--------------------------|
| POST   | `/api/register`     | Registra um novo usuário |
| POST   | `/api/login`        | Faz login e retorna JWT  |

### **🔹 Personagens**
| Método | Rota                | Descrição                                      |
|--------|---------------------|------------------------------------------------|
| GET    | `/api/get-characters` | Retorna todos os personagens cadastrados      |
| POST   | `/api/register-character` | Cria um novo personagem                     |
| POST   | `/api/level-up`      | Aumenta o nível e distribui pontos de atributos |

---

## 📜 **Executando o Script de População do Banco**
Caso queira popular o banco com um usuário e um personagem inicial (Natalie Putit), execute:
```bash
cd backend
node src/scripts/populate_db.js
```

---

## 📌 **Contribuição**
Se quiser contribuir com o projeto:
1. **Faça um fork** 🍴
2. **Crie uma branch** (`git checkout -b minha-feature`)
3. **Faça commit das mudanças** (`git commit -m 'Adicionei minha feature'`)
4. **Faça push para a branch** (`git push origin minha-feature`)
5. **Crie um Pull Request**
