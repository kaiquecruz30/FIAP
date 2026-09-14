package org.example.model;

import java.sql.Date;

public class Solicitacao {

    private int id_solicitacao;
    private int id_usuario;
    private int id_equipe;
    private int id_buraco;
    private int id_banco;
    private boolean concluido;
    private String descricao;
    private Date dt_solicitacao;

    public Solicitacao(int id_solicitacao, int id_usuario, int id_equipe, int id_buraco, int id_banco, boolean concluido, String descricao, Date dt_solicitacao) {
        this.id_solicitacao = id_solicitacao;
        this.id_usuario = id_usuario;
        this.id_equipe = id_equipe;
        this.id_buraco = id_buraco;
        this.id_banco = id_banco;
        this.concluido = concluido;
        this.descricao = descricao;
        this.dt_solicitacao = dt_solicitacao;
    }

    public Solicitacao(int id_usuario, int id_equipe, int id_buraco, int id_banco, boolean concluido, String descricao, Date dt_solicitacao) {
        this.id_usuario = id_usuario;
        this.id_equipe = id_equipe;
        this.id_buraco = id_buraco;
        this.id_banco = id_banco;
        this.concluido = concluido;
        this.descricao = descricao;
        this.dt_solicitacao = dt_solicitacao;
    }

    public Solicitacao() {}

    public int getId_solicitacao() {
        return id_solicitacao;
    }

    public void setId_solicitacao(int id_solicitacao) {
        this.id_solicitacao = id_solicitacao;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public int getId_equipe() {
        return id_equipe;
    }

    public void setId_equipe(int id_equipe) {
        this.id_equipe = id_equipe;
    }

    public int getId_buraco() {
        return id_buraco;
    }

    public void setId_buraco(int id_buraco) {
        this.id_buraco = id_buraco;
    }

    public int getId_banco() {
        return id_banco;
    }

    public void setId_banco(int id_banco) {
        this.id_banco = id_banco;
    }

    public boolean isConcluido() {
        return concluido;
    }

    public void setConcluido(boolean concluido) {
        this.concluido = concluido;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Date getDt_solicitacao() {
        return dt_solicitacao;
    }

    public void setDt_solicitacao(Date dt_solicitacao) {
        this.dt_solicitacao = dt_solicitacao;
    }
}
