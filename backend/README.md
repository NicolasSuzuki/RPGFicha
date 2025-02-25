# Run SQL Script
```
CREATE DATABASE ficha_my_hero;
USE ficha_my_hero;

-- Criando tabela de usuários
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    is_master BOOLEAN DEFAULT 0,
    password_hash VARCHAR(255) NOT NULL
);

-- Criando tabela de personagens
CREATE TABLE UserCharacter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    name VARCHAR(50) NOT NULL,
    level INT DEFAULT 1,
    position VARCHAR(50) NOT NULL,
    quirk VARCHAR(50) NOT NULL,
    hp INT NOT NULL,
    defense_da INT NOT NULL,
    defense_res INT NOT NULL,
    defense_cm INT NOT NULL,
    strength INT NOT NULL,
    accuracy INT NOT NULL,
    agility INT NOT NULL,
    vigor INT NOT NULL,
    intelligence INT NOT NULL,
    wisdom INT NOT NULL,
    charisma INT NOT NULL,
    talent VARCHAR(50) NOT NULL,
    skillPoints INT DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

-- Criando tabela de perícias (skills)
CREATE TABLE CharacterSkills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    character_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    value INT NOT NULL,
    FOREIGN KEY (character_id) REFERENCES UserCharacter(id) ON DELETE CASCADE
);
```
