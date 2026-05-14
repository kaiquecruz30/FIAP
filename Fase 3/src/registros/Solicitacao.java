package registros;


public class Solicitacao {


    private boolean processado;
    private boolean solicitado;
    private String descricao;




    public Solicitacao(boolean processado, boolean solicitado, String descricao) {
        this.processado = processado;
        this.solicitado = solicitado;
        this.descricao = descricao;
    }

    public Solicitacao() {
    }



    public void setProcessado(boolean processado) {
        this.processado = processado;
    }

    public boolean getProcessado() {
        return processado;
    }



    public void setSolicitado(boolean solicitado) {
        this.solicitado = solicitado;
    }

    public boolean getSolicitado() {
        return solicitado;
    }



    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }



    public void print() {
        System.out.println("\nAs suas solicitações são: \n\nSolicitado: " + getSolicitado() + "\nProcessado: " + getProcessado() + "\nDescrição: " + getDescricao());
    }
}
