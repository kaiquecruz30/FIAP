package org.example.dao;

import org.example.exception.EntidadeNaoEncontradaException;
import org.example.factory.ConnectionFactory;
import org.example.model.Equipe;
import org.example.model.Solicitacao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class EquipeDao {

    private Connection conexao;

    public EquipeDao() throws SQLException {
        conexao = ConnectionFactory.getConnection();
    }

    public void cadastrar(Equipe equipe) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO tb_equipe (int id_equipe, boolean disponiveis, int qt_integrantes, String equipamentos) VALUES (1, ?, ?, ?, ?, ?)", new String[] {"id_equipe"});
        stm.setBoolean(1, equipe.isDisponiveis());
        stm.setInt(2, equipe.getQt_integrantes());
        stm.setString(3, equipe.getEquipamentos());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next()) {
            equipe.setId_equipe(generatedKeys.getInt(1));
        }
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public Equipe pesquisar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_equipe WHERE id_equipe = ?");
        stm.setInt(1, id);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEncontradaException("Equipe não encontrado");
        Integer id_equipe = result.getInt("id_equipe");
        Boolean disponivel = result.getBoolean("disponivel");
        Integer qt_integrantes = result.getInt("qt_integrantes");
        String equipamentos = result.getString("equipamentos");
        return new Equipe(id_equipe, disponivel, qt_integrantes, equipamentos);
    }

    public List<Equipe> pesquisarPorId(int idBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_equipe where nome like ?");
        stm.setInt(1, idBusca);
        ResultSet result = stm.executeQuery();
        List<Equipe> lista = new ArrayList<>();
        while (result.next()){
            Integer id_equipe = result.getInt("id_equipe");
            Boolean disponivel = result.getBoolean("disponivel");
            Integer qt_integrantes = result.getInt("qt_integrantes");
            String equipamentos = result.getString("equipamentos");
            lista.add(new Equipe(id_equipe, disponivel, qt_integrantes, equipamentos));
        }
        return lista;
    }

    public List<Equipe> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_equipe");
        ResultSet result = stm.executeQuery();
        List<Equipe> lista = new ArrayList<>();
        while (result.next()){
            Integer id_equipe = result.getInt("id_equipe");
            Boolean disponivel = result.getBoolean("disponivel");
            Integer qt_integrantes = result.getInt("qt_integrantes");
            String equipamentos = result.getString("equipamentos");
            lista.add(new Equipe(id_equipe, disponivel, qt_integrantes, equipamentos));
        }
        return lista;
    }


    public void atualizar(Equipe equipe) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE tb_equipe SET id_usuario = ?, acesso_equipe = ?, where id_equipe = ?");
        stm.setInt(1, equipe.getId_equipe());
        stm.setBoolean(2, equipe.isDisponiveis());
        stm.setInt(3, equipe.getQt_integrantes());
        stm.setString(4, equipe.getEquipamentos());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Equipe não encontrado para ser atualizado");
    }


    public void remover(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from tb_equipe where id_equipe = ?");
        stm.setInt(1, id);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Equipe não encontrado para ser removido");
    }


}