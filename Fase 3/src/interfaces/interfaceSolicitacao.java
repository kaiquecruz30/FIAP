package interfaces;


import registros.Solicitacao;
import java.util.Scanner;


public class interfaceSolicitacao {

    static Solicitacao solicitar = new Solicitacao();

    public void menuSolicitacao() throws InterruptedException {


        Scanner ler = new Scanner(System.in);
        int opc = 0;

        while (opc != 9) {
            System.out.println("\n1 - Criar solicitação\n2 - Ver solicitação\n9 - Voltar\n\n");
            opc = ler.nextInt();

            switch (opc) {
                case 1:
                    criarSolicitacao();
                    break;
                case 2:
                    verSolicitacao();
                    break;
                case 9:
                    System.out.println("\nVoltando a página anterior.\n");
                    break;
                default:
                    System.out.println("!!!ERRO!!!\nEssa opção não existe.");
            }
        }
    }

    public void criarSolicitacao() {


        Scanner registrar = new Scanner(System.in);

        System.out.println("\nDigite uma descrição sobre essa solicitação: ");
        solicitar.setDescricao(registrar.nextLine());

        solicitar.setSolicitado(true);
        solicitar.setProcessado(false);

    }

    public void verSolicitacao() throws InterruptedException {

        solicitar.print();
        Thread.sleep(3000);
    }
}
