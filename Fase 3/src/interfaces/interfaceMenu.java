package interfaces;


import registros.Usuario;
import java.util.Scanner;


public class interfaceMenu {

    static Usuario usu = new Usuario();

    public void intefaceUsuario() throws InterruptedException {

        int cpf = -1;
        int senha = -1;

        Scanner ler = new Scanner(System.in);

        do {
            System.out.println("\nDigite o seu número de CPF: \n");
            cpf = ler.nextInt();
            if (cpf <= 0) {
                System.out.println("\n!!ERRO!!. Cpf não pode ser 0 nem negativo.\n");
            } else  {
                System.out.println("\nCpf - Registrado.\n");
            }
        } while (cpf <= 0);

        do {
            System.out.println("\nDigite a sua senha: \n");
            senha = ler.nextInt();
            if (senha <= 0) {
                System.out.println("\n!!ERRO!!. Senha não pode ser 0 nem negativo.\n");
            } else  {
                System.out.println("\nSenha - Registrado.\n");
            }
        } while (senha <= 0);


        usu.setCpf(cpf);
        usu.setSenha(senha);


        Thread.sleep(1000);
    }



    public void interfaceEntrar() throws InterruptedException {


        interfaceSolicitacao interSoli = new interfaceSolicitacao();
        Scanner ler = new Scanner(System.in);
        int cpf = -1;
        int senha = -1;


        while (cpf != usu.getCpf() || senha != usu.getSenha()) {
            System.out.println("\nInsira o seu CPF: \n");
            cpf = ler.nextInt();

            System.out.println("\nInsira a sua SENHA: \n");
            senha = ler.nextInt();

            if (cpf != usu.getCpf() && senha != usu.getSenha()) {
                System.out.println("\nCpf - Incorreto, Senha - Incorreto, tente novamente.\n");
                Thread.sleep(500);
            } else if (senha != usu.getSenha()) {
                System.out.println("\nCpf - Correto, Senha - incorreto, tente novamente.\n");
                Thread.sleep(500);
            } else if (cpf != usu.getCpf()) {
                System.out.println("\nCpf - Incorreto, Senha - Correto, tente novamente.\n");
                Thread.sleep(500);
            } else {
                System.out.println("\nCpf - Correto, Senha - Correto, tente novamente.\n");
                Thread.sleep(500);
                interSoli.menuSolicitacao();
                break;
            }
        }
    }

}
