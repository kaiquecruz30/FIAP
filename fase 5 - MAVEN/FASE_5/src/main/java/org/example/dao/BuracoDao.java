package org.example.dao;

import org.example.exception.EntidadeNaoEncontradaException;
import org.example.factory.ConnectionFactory;
import org.example.model.Buraco;
import org.example.model.Equipe;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BuracoDao {

    private Connection conexao;

    public BuracoDao() throws SQLException {
        conexao = ConnectionFactory.getConnection();
    }

    public void cadastrar(Buraco buraco) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO tb_buraco (int id_buraco, String endereco, boolean fechado, float tamanho) VALUES (1, ?, ?, ?)", new String[] {"id_buraco"});
        stm.setString(1, buraco.getEndereco());
        stm.setBoolean(2, buraco.isFechado());
        stm.setFloat(3, buraco.getTamanho());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next()) {
            buraco.setId_buraco(generatedKeys.getInt(1));
        }
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public Buraco pesquisar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_buraco WHERE id_buraco = ?");
        stm.setInt(1, id);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEncontradaException("Buraco não encontrado");
        Integer id_buraco = result.getInt("id_buraco");
        String endereco = result.getString("endereco");
        Boolean fechado = result.getBoolean("fechado");
        Float tamanho = result.getFloat("tamanho");
        return new Buraco(id_buraco, endereco, fechado, tamanho);
    }

    public List<Buraco> pesquisarPorId(int idBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_buraco where nome like ?");
        stm.setInt(1, idBusca);
        ResultSet result = stm.executeQuery();
        List<Buraco> lista = new ArrayList<>();
        while (result.next()){
            Integer id_buraco = result.getInt("id_buraco");
            String endereco = result.getString("endereco");
            Boolean fechado = result.getBoolean("fechado");
            Float tamanho = result.getFloat("tamanho");
            lista.add(new Buraco(id_buraco, endereco, fechado, tamanho));
        }
        return lista;
    }

    public List<Buraco> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_buraco");
        ResultSet result = stm.executeQuery();
        List<Buraco> lista = new ArrayList<>();
        while (result.next()){
            Integer id_buraco = result.getInt("id_buraco");
            String endereco = result.getString("endereco");
            Boolean fechado = result.getBoolean("fechado");
            Float tamanho = result.getFloat("tamanho");
            lista.add(new Buraco(id_buraco, endereco, fechado, tamanho));
        }
        return lista;
    }


    public void atualizar(Buraco buraco) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE tb_buraco SET id_buraco = ?, endereco = ?, fechado = ?, tamanho = ?, where id_buraco = ?");
        stm.setInt(1, buraco.getId_buraco());
        stm.setString(2, buraco.getEndereco());
        stm.setBoolean(3, buraco.isFechado());
        stm.setFloat(4, buraco.getTamanho());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Buraco não encontrado para ser atualizado");
    }


    public void remover(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from tb_buraco where id_buraco = ?");
        stm.setInt(1, id);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Buraco não encontrado para ser removido");
    }


}