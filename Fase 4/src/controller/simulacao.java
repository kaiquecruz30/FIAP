package controller;

import model.informacoes;
import javax.swing.*;

public class simulacao {

    private String[] corpos_celestes = new String[] {"Lua", "Marte"};

    public void planetaria() {

        informacoes escolha = new informacoes();
        String planeta = "a";
        boolean achou = true;

        while (achou) {

            planeta = JOptionPane.showInputDialog("Corpos celeste disponiveis:\n\n - Lua\n - Marte\n");

            for (int i = 0; i < corpos_celestes.length; i ++) {
                if (corpos_celestes[i].equals(planeta)) {
                    JOptionPane.showMessageDialog(null, "Opção válida.");
                    escolha.setCorpo_Celeste(planeta);
                    achou = false;
                }
            }

            if (achou == true) {
                JOptionPane.showMessageDialog(null, "Opção invalida.");
            }
        }

        double gravidade = 0;

        if (planeta.equals(corpos_celestes[1])) {
            gravidade = 3.71;
        } else {
            gravidade = 1.6;
        }

        escolha.setGravidade(gravidade);

        JOptionPane.showMessageDialog(null, "Corpo Celeste: " + escolha.getCorpo_Celeste() + "\nGravidade: " + escolha.getGravidade() + "m/s^2",  "Conclusão", JOptionPane.INFORMATION_MESSAGE);
    }


    public void local() {

        informacoes escolha = new informacoes();
        String planeta = "a";
        boolean achou = true;

        while (achou) {

            planeta = JOptionPane.showInputDialog("Corpos celeste disponiveis:\n\n - Lua\n - Marte\n");

            for (int i = 0; i < corpos_celestes.length; i ++) {
                if (corpos_celestes[i].equals(planeta)) {
                    JOptionPane.showMessageDialog(null, "Opção válida.");
                    escolha.setCorpo_Celeste(planeta);
                    achou = false;
                }
            }

            if (achou == true) {
                JOptionPane.showMessageDialog(null, "Opcão invalida", "Resultado", JOptionPane.ERROR_MESSAGE);
            }
        }

        double gravidade = 0;

        if (planeta.equals(corpos_celestes[1])) {
            gravidade = 3.71;
        } else {
            gravidade = 1.6;
        }

        escolha.setGravidade(gravidade);

        String temp = "a";
        boolean aceito = true;

        while (!temp.equals("true")  && !temp.equals("false")) {
            temp = JOptionPane.showInputDialog(null, "O Corpo celeste: " + escolha.getCorpo_Celeste() + " tem tem tempestades?\n\nResponda com true ou false.\n\n");

        }

        if (temp.equals("false")) {
            escolha.setTempestades(false);
        } else {
            escolha.setTempestades(true);
        }

        escolha.setAltura(Double.parseDouble(JOptionPane.showInputDialog("Qual a altura da pessoa: ")));
        escolha.setPeso(Double.parseDouble(JOptionPane.showInputDialog("Qual o peso da pessoa: ")));


        JOptionPane.showMessageDialog(null, "Corpo Celeste: " + escolha.getCorpo_Celeste() + "\nGravidade: " + escolha.getGravidade() + "m/s^2\nTem tempestades: " + escolha.getTempestades() + "\n\nPessoa:\nPeso: " + escolha.getPeso() + "Kg\nAltura: " + escolha.getAltura() + "m", "Conclusão", JOptionPane.INFORMATION_MESSAGE);
    }

}
