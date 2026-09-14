package org.example.model;

public class Banco_de_dados {

    private int id_banco;
    private int id_gerente;
    private int id_usuario;

    public Banco_de_dados(int id_banco, int id_gerente, int id_usuario) {
        this.id_banco = id_banco;
        this.id_gerente = id_gerente;
        this.id_usuario = id_usuario;
    }

    public Banco_de_dados(int id_gerente, int id_usuario) {
        this.id_gerente = id_gerente;
        this.id_usuario = id_usuario;
    }

    public Banco_de_dados() {}

    public int getId_banco() {
        return id_banco;
    }

    public void setId_banco(int id_banco) {
        this.id_banco = id_banco;
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
}
