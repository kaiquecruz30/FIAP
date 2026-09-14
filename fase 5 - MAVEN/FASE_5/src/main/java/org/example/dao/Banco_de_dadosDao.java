package org.example.dao;

import org.example.exception.EntidadeNaoEncontradaException;
import org.example.factory.ConnectionFactory;
import org.example.model.Banco_de_dados;
import org.example.model.Buraco;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class Banco_de_dadosDao {

    private Connection conexao;

    public Banco_de_dadosDao() throws SQLException {
        conexao = ConnectionFactory.getConnection();
    }

    public void cadastrar(Banco_de_dados Banco_de_dados) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO tb_Banco_de_dados (int id_banco, int id_gerente, int id_usuario) VALUES (1, ?, ?, ?, ?, ?)", new String[] {"id_banco"});
        stm.setInt(1, Banco_de_dados.getId_gerente());
        stm.setInt(2, Banco_de_dados.getId_usuario());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next()) {
            Banco_de_dados.setId_banco(generatedKeys.getInt(1));
        }
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public Banco_de_dados pesquisar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_Banco_de_dados WHERE id_banco = ?");
        stm.setInt(1, id);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEncontradaException("Banco_de_dados não encontrado");
        Integer id_banco = result.getInt("id_banco");
        Integer id_gerente = result.getInt("id_gerente");
        Integer id_usuario = result.getInt("id_usuario");
        return new Banco_de_dados(id_banco, id_gerente, id_usuario);
    }

    public List<Banco_de_dados> pesquisarPorId(int idBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_banco where nome like ?");
        stm.setInt(1, idBusca);
        ResultSet result = stm.executeQuery();
        List<Banco_de_dados> lista = new ArrayList<>();
        while (result.next()){
            Integer id_banco = result.getInt("id_banco");
            Integer id_gerente = result.getInt("id_gerente");
            Integer id_usuario = result.getInt("id_usuario");
            lista.add(new Banco_de_dados(id_banco, id_gerente, id_usuario));
        }
        return lista;
    }

    public List<Banco_de_dados> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_Banco_de_dados");
        ResultSet result = stm.executeQuery();
        List<Banco_de_dados> lista = new ArrayList<>();
        while (result.next()){
            Integer id_banco = result.getInt("id_banco");
            Integer id_gerente = result.getInt("id_gerente");
            Integer id_usuario = result.getInt("id_usuario");
            lista.add(new Banco_de_dados(id_banco, id_gerente, id_usuario));
        }
        return lista;
    }


    public void atualizar(Banco_de_dados Banco_de_dados) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE tb_Banco_de_dados SET id_usuario = ?, acesso_Banco_de_dados = ?, where id_Banco_de_dados = ?");
        stm.setInt(1, Banco_de_dados.getId_banco());
        stm.setInt(2, Banco_de_dados.getId_gerente());
        stm.setInt(3, Banco_de_dados.getId_usuario());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Banco_de_dados não encontrado para ser atualizado");
    }


    public void remover(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from tb_Banco_de_dados where id_Banco_de_dados = ?");
        stm.setInt(1, id);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Banco_de_dados não encontrado para ser removido");
    }


}