package org.example.resource;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import org.example.exception.EntidadeNaoEncontradaException;
import org.example.dao.SolicitacaoDao;
import org.example.model.Solicitacao;

import java.sql.SQLException;
import java.util.List;

@Path("solicitacaos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class SolicitacaoResouce {

    private SolicitacaoDao solicitacaoDao;

    public SolicitacaoResouce() throws  SQLException {
        solicitacaoDao = new SolicitacaoDao();
    }

    @POST
    public Response cadastrar(Solicitacao solicitacao, @Context UriInfo uriInfo) throws SQLException {
        solicitacaoDao.cadastrar(solicitacao);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(solicitacao.getId_solicitacao()));
        return Response.created(uri.build()).entity(solicitacao).build();
    }

    @GET
    @Path("busca")
    public List<Solicitacao> listar(@QueryParam("id") int id) throws SQLException {
        return solicitacaoDao.pesquisarPorId(id);
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Solicitacao solicitacao) throws SQLException {
        solicitacao.setId_solicitacao(id);
        try {
            solicitacaoDao.atualizar(solicitacao);
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok().entity(solicitacao).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            solicitacaoDao.remover(id);
            return Response.noContent().build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PATCH
    @Path("{id}")
    public Response atualizarParcial(@PathParam("id") int id, Solicitacao solicitacaoParcial) throws SQLException {
        try {
            Solicitacao solicitacaoExistente = solicitacaoDao.pesquisar(id);
            if (solicitacaoParcial.getId_solicitacao() != 0) {
                solicitacaoExistente.getId_solicitacao();
            }
            if (solicitacaoParcial.getId_usuario() != 0) {
                solicitacaoExistente.getId_usuario();
            }
            if (solicitacaoParcial.getId_equipe() != 0) {
                solicitacaoExistente.getId_equipe();
            }
            if (solicitacaoParcial.getId_buraco() != 0) {
                solicitacaoExistente.getId_buraco();
            }
            if (solicitacaoParcial.getId_banco() != 0) {
                solicitacaoExistente.getId_banco();
            }
            if (solicitacaoParcial.getDescricao() != null) {
                solicitacaoExistente.getDescricao();
            }
            if (solicitacaoParcial.getDt_solicitacao() != null) {
                solicitacaoExistente.getDt_solicitacao();
            }
            solicitacaoDao.atualizar(solicitacaoExistente);
            return Response.ok(solicitacaoExistente).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}
