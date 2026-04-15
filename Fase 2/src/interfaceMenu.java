import java.util.Scanner;

public class interfaceMenu {

    static Usuario usu = new Usuario();

    public void intefaceUsuario() throws InterruptedException {

        Scanner ler = new Scanner(System.in);
        int Cpf;

        System.out.println("\nDigite o seu número de CPF: \n");
        usu.Cpf = ler.nextInt();

        System.out.println("\nCpf - Registrado.\n");
        Thread.sleep(2000);
    }

    public void interfaceEntrar() throws InterruptedException {

        interfaceSolicitacao interSoli = new interfaceSolicitacao();
        Scanner ler = new Scanner(System.in);
        int cpf = 1;

        while (cpf != usu.Cpf) {
            System.out.println("\nInsira o seu CPF: \n");
            cpf = ler.nextInt();

            if (cpf != usu.Cpf) {
                System.out.println("\nCpf - incorreto, tente novamente.\n");
                Thread.sleep(2000);
            } else {
                System.out.println("\nCpf - correto.\n");
                Thread.sleep(1000);
                interSoli.menuSolicitacao();
                break;
            }
        }
    }

}
