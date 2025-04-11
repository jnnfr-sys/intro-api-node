use bd_tcc_infonet_224_monit_prev;

SELECT ID_Bairro, NM_Bairro, ID_Setor FROM bairro;
SELECT ID_Setor, NM_Setor from setor;
SELECT ID_Colaborador, Matricula, SN_Temporario, DT_Cadastro, ID_Pessoa, ID_Funcao FROM colaborador;
SELECT ID_Funcao, NM_Funcao FROM funcao;
SELECT ID_Localidade, NM_Localidade, UF_Localidade FROM localidade;
SELECT ID_Pessoa, TP_Pessoa, NM_Pessoa, NO_Documento, DT_Nascimento, NO_Endereco, Complemento, Telefone, Email, ID_Rua FROM pessoa;
SELECT ID_Rua, TP_Rua, NM_Rua, CEP, Numeracao, ID_Bairro, ID_Localidade FROM rua;
SELECT ID_Tipo_Ocorrencia, NM_Tipo_Ocorrencia, ID_Usuario, DT_Cadastro, Icone, Cor FROM tipo_ocorrencia;
SELECT ID_Usuario, CD_Usuario, Senha, DT_Cadastro, DT_Ultimo_Acesso, DT_Vegencia, SN_Bloqueado, ID_Pessoa FROM usuario;
SELECT ID_Visita, ID_Colaborador, DT_Cadastro, DT_Solicitacao, DT_Atendimento, ID_Rua, NO_Imovel, NM_Morador, NO_Telefone, DS_Ponto_Referencia, DS_PSF, NM_Agente_Comunitario, ST_Imovel, SN_Vistoriada, SN_Acidente, SINAN, SN_Demanda_Expontanea, DS_Observacao, SN_Agenda_Retorno, DT_Retono FROM visita;
SELECT ID_Visita_Item, ID_Visita, ID_Tipo_Ocorrencia, QT_Amostra_Coletada, DS_Ocorrencia FROM visita_item;
