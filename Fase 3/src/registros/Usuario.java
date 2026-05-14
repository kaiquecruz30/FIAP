package registros;


public class Usuario {



    private Integer Cpf;
    private Integer senha;



    public Usuario(Integer Cpf, Integer senha) {
        this.Cpf = Cpf;
        this.senha = senha;
    }

    public Usuario() {}



    public void setCpf(Integer Cpf) {
        this.Cpf = Cpf;
    }

    public Integer getCpf() {
        return this.Cpf;
    }



    public void setSenha(Integer senha) {
        this.senha = senha;
    }

    public Integer getSenha() {
        return this.senha;
    }



}
