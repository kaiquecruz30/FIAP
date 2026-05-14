package menus;

import interfaces.interfaceMenu;
import java.util.Scanner;

public class Menu {
    public static void main(String[] args) throws InterruptedException {

        interfaceMenu inter = new interfaceMenu();
        Scanner ler = new Scanner(System.in);
        int opc = 0;

        while (opc != 9) {
            System.out.println("\nMenus.Menu Principal:\n\n1 - Cadastrar Usuário\n2 - Entrar\n9 - Finalizar\n");
            opc = ler.nextInt();

            switch (opc) {
                case 1:
                    System.out.println("\nUsuário Cadastrado.\n");
                    inter.intefaceUsuario();
                    Thread.sleep(1000);
                    break;
                case 2:
                    System.out.println("\nEntrando no sistema.\n");
                    inter.interfaceEntrar();
                    Thread.sleep(1000);
                    break;
                case 9:
                    System.out.println("\nSistema Finalizado.\n");
                    break;
                default:
                    System.out.println("\n!!!ERRO!!!\n\nOpção não existe, tente novamente.");
                    Thread.sleep(1000);
            }
        }
        System.out.print("Programa Finalizado");
        ler.close();
    }
}