package br.com.fiap.dao;

import br.com.fiap.exception.EntidadeNaoEcontradaException;
import br.com.fiap.factory.ConnectionFactory;
import br.com.fiap.model.Usuario;

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
        PreparedStatement stm = conexao.prepareStatement("INSERT INTO t_usuario (id_usuario_G,  email_usuario_G,  telefone_usuario_G, senha_usuario_G) VALUES (seq_usuario.nextval, ?, ?, ?)", new String[] {"id_usuario_G"});
        stm.setString(1, usuario.getEmail_usuario_G());
        stm.setString(2, usuario.getTelefone_usuario_G());
        stm.setString(3, usuario.getSenha_usuario_G());
        stm.executeUpdate();

        ResultSet generatedKeys = stm.getGeneratedKeys();
        if (generatedKeys.next())
            usuario.setId_usuario_G(generatedKeys.getInt(1));
    }

    public void fecharConexao() throws SQLException {
        conexao.close();
    }

    public Usuario pesquisar(int id_usuario_G) throws SQLException, EntidadeNaoEcontradaException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM t_usuario WHERE id_usuario_G = ?");
        stm.setInt(1, id_usuario_G);
        ResultSet result = stm.executeQuery();
        if (!result.next())
            throw new EntidadeNaoEcontradaException("Usuario não encontrado");
        String email_usuario_G = result.getString("email_usuario_G");
        String telefone_usuario_G = result.getString("telefone_usuario_G");
        String senha_usuario_G = result.getString("senha_usuario_G");
        return new Usuario(id_usuario_G, email_usuario_G, telefone_usuario_G, senha_usuario_G);
    }


    public List<Usuario> listar() throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM t_usuario");
        ResultSet result = stm.executeQuery();
        List<Usuario> lista = new ArrayList<>();
        while (result.next()){
            Integer id_usuario_G = result.getInt("id_usuario_G");
            String email_usuario_G = result.getString("email_usuario_G");
            String telefone_usuario_G = result.getString("telefone_usuario_G");
            String senha_usuario_G = result.getString("senha_usuario_G");
            lista.add(new Usuario(id_usuario_G, email_usuario_G, telefone_usuario_G, senha_usuario_G));
        }
        return lista;
    }


    public void atualizar(Usuario usuario) throws SQLException, EntidadeNaoEcontradaException {
        PreparedStatement stm = conexao.prepareStatement("UPDATE t_usuario SET email_usuario_G = ?, telefone_usuario_G = ?, senha_usuario_G = ? where id_usuario_G = ?");
        stm.setString(1, usuario.getEmail_usuario_G());
        stm.setString(2, usuario.getTelefone_usuario_G());
        stm.setString(3, usuario.getSenha_usuario_G());
        stm.setInt(4, usuario.getId_usuario_G());
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEcontradaException("Usuario não encontrado para ser atualizado");
    }


    public void remover(int id_usuario_G) throws SQLException, EntidadeNaoEcontradaException {
        PreparedStatement stm = conexao.prepareStatement("DELETE from t_usuario where id_usuario_G = ?");
        stm.setInt(1, id_usuario_G);
        int linha = stm.executeUpdate();
        if (linha == 0)
            throw new EntidadeNaoEcontradaException("Usuario não encontrado para ser removido");
    }

    public List<Usuario> pesquisarPorEmail(String emailBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM t_usuario where email_usuario_G like ?");
        stm.setString(1, "%"+emailBusca+"%");
        ResultSet result = stm.executeQuery();
        List<Usuario> lista = new ArrayList<>();
        while (result.next()){
            Integer id_usuario_G = result.getInt("id_usuario_G");
            String email_usuario_G = result.getString("email_usuario_G");
            String telefone_usuario_G = result.getString("telefone_usuario_G");
            String senha_usuario_G = result.getString("senha_usuario_G");
            lista.add(new Usuario(id_usuario_G, email_usuario_G, telefone_usuario_G, senha_usuario_G));
        }
        return lista;
    }

    public Boolean existe(String emailBusca) throws SQLException {
        PreparedStatement stm = conexao.prepareStatement("SELECT * FROM t_usuario where email_usuario_G like ?");
        stm.setString(1, "%"+emailBusca+"%");
        ResultSet result = stm.executeQuery();
        while (result.next()){
            return true;
        }
        return false;
    }

}