const db = require('../dataBase/connection');

module.exports = {
    async cadastrarBairros(request, response){
        try{
            const {ID_Bairro, NM_Bairro, ID_Setor} = request.body;

            const sql = `
                INSERT INTO bairro
                     (ID_Bairro, NM_Bairro, ID_Setor)
                VALUES
                     (?,?,?);
            `;

            const values = [ID_Bairro, NM_Bairro, ID_Setor];

            const [result] = await db.query(sql, values);

            const ID_Bairro = result.insertId;

            return response.status(200).json({
                sucesso: true,
                mensagem: "Cadastro de Bairros",
                dados: ID_Bairro
            });
        } catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    };

    async listarBairros(request, response){
        try{

            const sql = 'SELECT ID_Bairro, NM_Bairro, ID_Setor FROM bairro;' ;

            const [rows] = await db.query(sql);

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de Bairros.',
                itens: rows.length,
                dados: rows
            });
        } catch (error){
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    },

    async inserirBairros(request, response){
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Inserir Bairros.',
                dados:null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    },

    async atualizarBairros(request, response){
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Atualizar Bairros.',
                dados:null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    },

    async excluirBairros(request, response){
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Excluir Bairros.',
                dados:null
            });
        }catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.mensage
            });
        }
    }

    
}