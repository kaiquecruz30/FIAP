package org.example.model;

public class Usuario {

    private int id_usuario;
    private String cpf_usuario;
    private String nome_usuario;
    private String senha_usuario;
    private Boolean gps_usuario;
    private Solicitacao solicitacao;

    public Usuario(int id_usuario, String cpf_usuario, String nome_usuario, String senha_usuario, Boolean gps_usuario) {
        this.id_usuario = id_usuario;
        this.cpf_usuario = cpf_usuario;
        this.nome_usuario = nome_usuario;
        this.senha_usuario = senha_usuario;
        this.gps_usuario = gps_usuario;
    }

    public Usuario(String cpf_usuario, String nome_usuario, String senha_usuario, Boolean gps_usuario) {
        this.cpf_usuario = cpf_usuario;
        this.nome_usuario = nome_usuario;
        this.senha_usuario = senha_usuario;
        this.gps_usuario = gps_usuario;
    }

    public Usuario() {
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getCpf_usuario() {
        return cpf_usuario;
    }

    public void setCpf_usuario(String cpf_usuario) {
        this.cpf_usuario = cpf_usuario;
    }

    public String getNome_usuario() {
        return nome_usuario;
    }

    public void setNome_usuario(String nome_usuario) {
        this.nome_usuario = nome_usuario;
    }

    public String getSenha_usuario() {
        return senha_usuario;
    }

    public void setSenha_usuario(String senha_usuario) {
        this.senha_usuario = senha_usuario;
    }

    public Boolean getGps_usuario() {
        return gps_usuario;
    }

    public void setGps_usuario(Boolean gps_usuario) {
        this.gps_usuario = gps_usuario;
    }

    public Solicitacao getSolicitacao() {
        return solicitacao;
    }

    public void setSolicitacao(Solicitacao solicitacao) {
        this.solicitacao = solicitacao;
    }
}
