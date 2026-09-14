package org.example.dao;

import org.example.exception.EntidadeNaoEncontradaException;
import org.example.factory.ConnectionFactory;
import org.example.model.Solicitacao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SolicitacaoDao {

    private Connection conexao;

    public SolicitacaoDao() throws SQLException {
        conexao = ConnectionFactory.getConnection();
    }

    public void cadastrar(Solicitacao solicitacao) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO tb_solicitacao (int id_solicitacao, int id_usuario, int id_equipe, int id_buraco, int id_banco, boolean concluido, String descricao, Date dt_solicitacao) VALUES (1, ?, ?, ?, ?, ?)", new String[] {"id_solicitacao"});
        stm.setInt(1, solicitacao.getId_usuario());
        stm.setInt(2, solicitacao.getId_equipe());
        stm.setInt(3, solicitacao.getId_buraco());
        stm.setInt(4, solicitacao.getId_banco());
        stm.setBoolean(5, solicitacao.isConcluido());
        stm.setString(6, solicitacao.getDescricao());
        stm.setDate(7, solicitacao.getDt_solicitacao());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next()) {
            solicitacao.setId_solicitacao(generatedKeys.getInt(1));
        }
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public Solicitacao pesquisar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_solicitacao WHERE id_solicitacao = ?");
        stm.setInt(1, id);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEncontradaException("Solicitacao não encontrado");
        Integer id_solicitacao = result.getInt("id_solicitacao");
        Integer id_usuario = result.getInt("id_usuario");
        Integer id_equipe = result.getInt("id_equipe");
        Integer id_buraco = result.getInt("id_buraco");
        Integer id_banco = result.getInt("id_banco");
        Boolean concluido = result.getBoolean("concluido");
        String descricao = result.getString("descricao");
        Date dt_solicitacao = result.getDate("dt_solicitacao");
        return new Solicitacao(id_solicitacao, id_usuario, id_equipe, id_buraco, id_banco, concluido, descricao, dt_solicitacao);
    }

    public List<Solicitacao> pesquisarPorId(int idBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_usuario where nome like ?");
        stm.setInt(1, idBusca);
        ResultSet result = stm.executeQuery();
        List<Solicitacao> lista = new ArrayList<>();
        while (result.next()){
            Integer id_solicitacao = result.getInt("id_solicitacao");
            Integer id_usuario = result.getInt("id_usuario");
            Integer id_equipe = result.getInt("id_equipe");
            Integer id_buraco = result.getInt("id_buraco");
            Integer id_banco = result.getInt("id_banco");
            Boolean concluido = result.getBoolean("concluido");
            String descricao = result.getString("descricao");
            Date dt_solicitacao = result.getDate("dt_solicitacao");
            lista.add(new Solicitacao(id_solicitacao, id_usuario, id_equipe, id_buraco, id_banco, concluido, descricao, dt_solicitacao));
        }
        return lista;
    }

    public List<Solicitacao> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_solicitacao");
        ResultSet result = stm.executeQuery();
        List<Solicitacao> lista = new ArrayList<>();
        while (result.next()){
            Integer id_solicitacao = result.getInt("id_solicitacao");
            Integer id_usuario = result.getInt("id_usuario");
            Integer id_equipe = result.getInt("id_equipe");
            Integer id_buraco = result.getInt("id_buraco");
            Integer id_banco = result.getInt("id_banco");
            Boolean concluido = result.getBoolean("concluido");
            String descricao = result.getString("descricao");
            Date dt_solicitacao = result.getDate("dt_solicitacao");
            lista.add(new Solicitacao(id_solicitacao, id_usuario, id_equipe, id_buraco, id_banco, concluido, descricao, dt_solicitacao));
        }
        return lista;
    }


    public void atualizar(Solicitacao solicitacao) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE tb_solicitacao SET id_usuario = ?, id_equipe = ?, id_buraco = ?, id_banco = ?, concluido = ?, descrição = ?, dT_solicitacao = ?, where id_solicitacao = ?");
        stm.setInt(1, solicitacao.getId_usuario());
        stm.setInt(2, solicitacao.getId_equipe());
        stm.setInt(3, solicitacao.getId_buraco());
        stm.setInt(4, solicitacao.getId_banco());
        stm.setBoolean(5, solicitacao.isConcluido());
        stm.setString(6, solicitacao.getDescricao());
        stm.setDate(7, solicitacao.getDt_solicitacao());
        stm.executeUpdate();
        stm.setInt(8, solicitacao.getId_solicitacao());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Solicitacao não encontrado para ser atualizado");
    }


    public void remover(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from t_solicitacao where id_cpf = ?");
        stm.setInt(1, id);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Solicitacao não encontrado para ser removido");
    }


}