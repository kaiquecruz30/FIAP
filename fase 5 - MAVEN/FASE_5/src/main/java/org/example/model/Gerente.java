package org.example.model;

public class Gerente {

    private int id_gerente;
    private int id_usuario;
    private boolean acesso_gerente;

    public Gerente(int id_gerente, int id_usuario, boolean acesso_gerente) {
        this.id_gerente = id_gerente;
        this.id_usuario = id_usuario;
        this.acesso_gerente = acesso_gerente;
    }

    public Gerente(int id_usuario, boolean acesso_gerente) {
        this.id_usuario = id_usuario;
        this.acesso_gerente = acesso_gerente;
    }

    public int getId_gerente() {
        return id_gerente;
    }

    public void setId_gerente(int id_gerente) {
        this.id_gerente = id_gerente;
    }

    public int getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public boolean isAcesso_gerente() {
        return acesso_gerente;
    }

    public void setAcesso_gerente(boolean acesso_gerente) {
        this.acesso_gerente = acesso_gerente;
    }
}
