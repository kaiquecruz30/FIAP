import java.util.Scanner;

public class interfaceSolicitacao {

    static Solicitacao soli = new Solicitacao();

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
                    Thread.sleep(1000);
                    break;
                default:
                    System.out.println("!!!ERRO!!!\nEssa opção não existe.");
            }
        }

        Thread.sleep(1000);
    }

    public void criarSolicitacao() {

        Scanner registrar = new Scanner(System.in);

        System.out.println("\nDigite uma descrição sobre essa solicitação: ");
        soli.descrição = registrar.nextLine();

        soli.solicitado = true;
        soli.processado = false;

    }

    public void verSolicitacao() throws InterruptedException {

        System.out.println("\nAs suas solicitações são: \n\nSolicitado: " + soli.solicitado + "\nProcessado: " + soli.processado + "\nDescrição: " + soli.descrição);
        Thread.sleep(3000);
    }
}
