package org.example.model;

public class Equipe {

    private int id_equipe;
    private boolean disponiveis;
    private int qt_integrantes;
    private String equipamentos;

    public Equipe(int id_equipe, boolean disponiveis, int qt_integrantes, String equipamentos) {
        this.id_equipe = id_equipe;
        this.disponiveis = disponiveis;
        this.qt_integrantes = qt_integrantes;
        this.equipamentos = equipamentos;
    }

    public Equipe(boolean disponiveis, int qt_integrantes, String equipamentos) {
        this.disponiveis = disponiveis;
        this.qt_integrantes = qt_integrantes;
        this.equipamentos = equipamentos;
    }

    public Equipe() {}

    public int getId_equipe() {
        return id_equipe;
    }

    public void setId_equipe(int id_equipe) {
        this.id_equipe = id_equipe;
    }

    public boolean isDisponiveis() {
        return disponiveis;
    }

    public void setDisponiveis(boolean disponiveis) {
        this.disponiveis = disponiveis;
    }

    public int getQt_integrantes() {
        return qt_integrantes;
    }

    public void setQt_integrantes(int qt_integrantes) {
        this.qt_integrantes = qt_integrantes;
    }

    public String getEquipamentos() {
        return equipamentos;
    }

    public void setEquipamentos(String equuipamentos) {
        this.equipamentos = equuipamentos;
    }
}
