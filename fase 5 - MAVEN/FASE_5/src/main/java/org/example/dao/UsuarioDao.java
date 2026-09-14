package org.example.dao;

import org.example.exception.EntidadeNaoEncontradaException;
import org.example.factory.ConnectionFactory;
import org.example.model.Usuario;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UsuarioDao {

    private Connection conexao;

    public UsuarioDao() throws SQLException {
        conexao = ConnectionFactory.getConnection();
    }

    public void cadastrar(Usuario usuario) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO tb_usuario (int id_usuario, String cpf_usuario, String nome_usuario, String senha_usuario, Boolean gps_usuario) VALUES (1, ?, ?, ?, ?, ?)", new String[] {"id_usuario"});
        stm.setString(1, usuario.getCpf_usuario());
        stm.setString(2, usuario.getNome_usuario());
        stm.setString(3, usuario.getSenha_usuario());
        stm.setBoolean(4, usuario.getGps_usuario());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next()) {
            usuario.setId_usuario(generatedKeys.getInt(1));
        }
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public Usuario pesquisar(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_usuario WHERE id_usuario = ?");
        stm.setInt(1, id);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEncontradaException("Usuario não encontrado");
        Integer id_usuario = result.getInt("id_usuario");
        String cpf_usuario = result.getString("cpf_usuario");
        String nome_usuario = result.getString("nome_usuario");
        String senha_usuario = result.getString("senha_usuario");
        Boolean gps_usuario = result.getBoolean("gps_usuario");
        return new Usuario(id_usuario, cpf_usuario, nome_usuario, senha_usuario, gps_usuario);
    }

    public List<Usuario> pesquisarPorNome(String nomeBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_usuario where nome like ?");
        stm.setString(1, "%"+nomeBusca+"%");
        ResultSet result = stm.executeQuery();
        List<Usuario> lista = new ArrayList<>();
        while (result.next()){
            Integer id_usuario = result.getInt("id_usuario");
            String cpf_usuario = result.getString("cpf_usuario");
            String nome_usuario = result.getString("nome_usuario");
            String senha_usuario = result.getString("senha_usuario");
            Boolean gps_usuario = result.getBoolean("gps_usuario");
            lista.add(new Usuario(id_usuario, cpf_usuario, nome_usuario, senha_usuario, gps_usuario));
        }
        return lista;
    }

    public List<Usuario> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM tb_usuario");
        ResultSet result = stm.executeQuery();
        List<Usuario> lista = new ArrayList<>();
        while (result.next()){
            Integer id_usuario = result.getInt("id_usuario");
            String cpf_usuario = result.getString("cpf_usuario");
            String nome_usuario = result.getString("nome_usuario");
            String senha_usuario = result.getString("senha_usuario");
            Boolean gps_usuario = result.getBoolean("gps_usuario");
            lista.add(new Usuario(id_usuario, cpf_usuario, nome_usuario, senha_usuario, gps_usuario));
        }
        return lista;
    }


    public void atualizar(Usuario usuario) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE tb_usuario SET cpf = ?, nome = ?, senha = ?, gps = ?, where id_usuario = ?");
        stm.setString(1, usuario.getCpf_usuario());
        stm.setString(2, usuario.getNome_usuario());
        stm.setString(3, usuario.getSenha_usuario());
        stm.setBoolean(4, usuario.getGps_usuario());
        stm.setInt(5, usuario.getId_usuario());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Usuario não encontrado para ser atualizado");
    }


    public void remover(int id) throws SQLException, EntidadeNaoEncontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from t_usuario where id_usuario = ?");
        stm.setInt(1, id);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEncontradaException("Usuario não encontrado para ser removido");
    }


}