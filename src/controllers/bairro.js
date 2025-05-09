const db = require('../dataBase/connection');

module.exports = {

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
            // Parametro passado via url na chamada da api pelo front-end
            const { id } = request.params;
            // comando de exclusão
            const sql = `DELETE FROM bairro WHERE ID_Bairro = ?`;
            // array com parametro de exclusão
            const values = [id];
            // executa instrução no banco de dados
            const [result] = await db.query(sql, values);

            if (result.affectedRows === 0){
                return response.status(404).json({
                    sucesso: false,
                    mensagem: `Bairro ${ID_Bairro} não encontrado!`,
                    dados: null
                });
            }


            return response.status(200).json({
                sucesso: true,
                mensagem: `Bairro ${id} excluído com sucesso.`,
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