package menu;

import controller.simulacao;

import javax.swing.*;

public class pagina_Principal {


    public static void main(String[] agrs) {

        simulacao si = new simulacao();
        int opc = 0;

        while( opc != 9) {

            opc = Integer.parseInt(JOptionPane.showInputDialog("Tipos de Simulações:\n\n1 - Simulação planetária\n2 - Simulação local\n"));

            switch (opc) {
                case 1:
                    si.planetaria();
                    break;
                case 2:
                    si.local();
                    break;
                case 9:
                    JOptionPane.showMessageDialog(null, "");
                    break;
                default:
                    JOptionPane.showMessageDialog(null, "!!!Opção inexistente!!!\n\nTente novamente.", "AVISO", JOptionPane.ERROR_MESSAGE);
            }
        }


    }
}
