const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// Configuração do banco de dados
const dbConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'ficha_my_hero'
};

// Função para popular o banco
async function populateDatabase() {
    const connection = await mysql.createConnection(dbConfig);

    try {
        console.log('✅ Conectado ao banco de dados.');

        // Criando usuário mestre
        const hashedPassword = await bcrypt.hash('securepass', 10);
        const [userResult] = await connection.execute(
            'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
            ['Fioravante', 'mathfg6@gmail.com', hashedPassword]
        );
        const userId = userResult.insertId;
        console.log('✅ Usuário "Fioravante" criado.');

        // Criando personagem "Natalie Putit"
        const [charResult] = await connection.execute(
            `INSERT INTO UserCharacter (user_id, name, level, position, quirk, hp, defense_da, defense_res, defense_cm,
             strength, accuracy, agility, vigor, intelligence, wisdom, charisma, talent, skillPoints) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, "Natalie Putit", 6, "???", "Glitch", 40, 14, 11, 14, 18, 20, 25, 11, 25, 15, 12, "Pulo do Gato", 0]
        );
        const characterId = charResult.insertId;
        console.log('✅ Personagem "Natalie Putit" criada.');

        // Criando perícias para "Natalie Putit"
        const skills = [
            ['Atletismo', 4], ['Furtividade', 5], ['Prestidigitação', 4], ['Acrobacia', 6],
            ['Investigação', 4], ['Individualidade', 6], ['Conhecimentos Gerais', 4], ['Intuição', 3],
            ['Medicina', 3], ['Percepção', 3], ['Atuação', 1], ['Enganação', 1],
            ['Intimidação', 1], ['Persuasão', 1]
        ];

        for (const [name, value] of skills) {
            await connection.execute(
                'INSERT INTO CharacterSkills (character_id, name, value) VALUES (?, ?, ?)',
                [characterId, name, value]
            );
        }

        console.log('✅ Perícias de "Natalie Putit" adicionadas.');
    } catch (error) {
        console.error('❌ Erro ao popular o banco:', error);
    } finally {
        await connection.end();
        console.log('🔌 Conexão com banco de dados encerrada.');
    }
}

// Executando a função
populateDatabase();
