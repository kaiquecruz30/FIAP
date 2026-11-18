package br.com.fiap.dto;

public class DetalhesUsuarioDto {

    private int id_usuario_G;
    private String email_usuario_G;
    private String telefone_usuario_G;
    private String senha_usuario_G;


    public int getId_usuario_G() {
        return id_usuario_G;
    }

    public void setId_usuario_G(int id_usuario_G) {
        this.id_usuario_G = id_usuario_G;
    }

    public String getEmail_usuario_G() {
        return email_usuario_G;
    }

    public void setEmail_usuario_G(String email_usuario_G) {
        this.email_usuario_G = email_usuario_G;
    }

    public String getTelefone_usuario_G() {
        return telefone_usuario_G;
    }

    public void setTelefone_usuario_G(String telefone_usuario_G) {
        this.telefone_usuario_G = telefone_usuario_G;
    }

    public String getSenha_usuario_G() {
        return senha_usuario_G;
    }

    public void setSenha_usuario_G(String senha_usuario_G) {
        this.senha_usuario_G = senha_usuario_G;
    }
}