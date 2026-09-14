package org.example.dao;

import org.example.exception.EntidadeNaoEncontradaException;
import org.example.factory.ConnectionFactory;
import org.example.model.Gerente;
import org.example.model.Solicitacao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class GerenteDao {

    private Connection conexao;

    public GerenteDao() throws SQLException {
        conexao = ConnectionFactory.getConnection();
    }

    public void cadastrar(Gerente gerente) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO tb_gerente (int id_gerente, int id_usuario, boolean acesso_gerente) VALUES (1, ?, ?, ?, ?, ?)", new String[] {"id_gerente"});
        stm.setInt(1, gerente.getId_usuario());
        stm.setBoolean(2, gerente.isAcesso_gerente());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next()) {
            gerente.setId_gerente(generatedKeys.getInt(1));
        }
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public Gerente pesquisar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_gerente WHERE id_gerente = ?");
        stm.setInt(1, id);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEncontradaException("Gerente não encontrado");
        Integer id_gerente = result.getInt("id_gerente");
        Integer id_usuario = result.getInt("id_usuario");
        Boolean acesso_gerente = result.getBoolean("acesso_gerente");
        return new Gerente(id_gerente, id_usuario, acesso_gerente);
    }

    public List<Gerente> pesquisarPorId(int idBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_gerente where nome like ?");
        stm.setInt(1, idBusca);
        ResultSet result = stm.executeQuery();
        List<Gerente> lista = new ArrayList<>();
        while (result.next()){
            Integer id_gerente = result.getInt("id_gerente");
            Integer id_usuario = result.getInt("id_usuario");
            Boolean acesso_gerente = result.getBoolean("acesso_gerente");
            lista.add(new Gerente(id_gerente, id_usuario, acesso_gerente));
        }
        return lista;
    }

    public List<Gerente> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_gerente");
        ResultSet result = stm.executeQuery();
        List<Gerente> lista = new ArrayList<>();
        while (result.next()){
            Integer id_gerente = result.getInt("id_gerente");
            Integer id_usuario = result.getInt("id_usuario");
            Boolean acesso_gerente = result.getBoolean("acesso_gerente");
            lista.add(new Gerente(id_gerente, id_usuario, acesso_gerente));
        }
        return lista;
    }


    public void atualizar(Gerente gerente) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE tb_gerente SET id_usuario = ?, acesso_gerente = ?, where id_gerente = ?");
        stm.setInt(1, gerente.getId_gerente());
        stm.setInt(2, gerente.getId_usuario());
        stm.setBoolean(3, gerente.isAcesso_gerente());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Gerente não encontrado para ser atualizado");
    }


    public void remover(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from tb_gerente where id_gerente = ?");
        stm.setInt(1, id);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Gerente não encontrado para ser removido");
    }


}