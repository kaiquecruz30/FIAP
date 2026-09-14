package org.example.model;

public class Buraco {

    private int id_buraco;
    private String endereco;
    private boolean fechado;
    private float tamanho;

    public Buraco(int id_buraco, String endereco, boolean fechado, float tamanho) {
        this.id_buraco = id_buraco;
        this.endereco = endereco;
        this.fechado = fechado;
        this.tamanho = tamanho;
    }

    public Buraco(String endereco, boolean fechado, float tamanho) {
        this.endereco = endereco;
        this.fechado = fechado;
        this.tamanho = tamanho;
    }

    public Buraco() {}

    public int getId_buraco() {
        return id_buraco;
    }

    public void setId_buraco(int id_buraco) {
        this.id_buraco = id_buraco;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public boolean isFechado() {
        return fechado;
    }

    public void setFechado(boolean fechado) {
        this.fechado = fechado;
    }

    public float getTamanho() {
        return tamanho;
    }

    public void setTamanho(float tamanho) {
        this.tamanho = tamanho;
    }
}
