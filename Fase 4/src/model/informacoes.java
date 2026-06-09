package model;

public class informacoes {

    private double altura;
    private double peso;
    private double gravidade;
    private boolean tempestades;
    private String corpo_celeste;


    public informacoes () {
        this.altura = 0;
        this.peso = 0;
        this.gravidade = 0;
        this.tempestades = false;
        this.corpo_celeste = null;
    }


    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }

    public double getPeso() {
        return peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }

    public double getGravidade() {
        return gravidade;
    }

    public void setGravidade(double gravidade) {
        this.gravidade = gravidade;
    }

    public boolean getTempestades() {
        return tempestades;
    }

    public void setTempestades(boolean tempestades) {
        this.tempestades = tempestades;
    }

    public String getCorpo_Celeste() {
        return corpo_celeste;
    }

    public void setCorpo_Celeste(String corpo_celeste) {
        this.corpo_celeste = corpo_celeste;
    }
}
