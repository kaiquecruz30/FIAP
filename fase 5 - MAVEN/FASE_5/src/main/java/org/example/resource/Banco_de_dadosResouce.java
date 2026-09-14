package org.example.resource;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import org.example.exception.EntidadeNaoEncontradaException;
import org.example.dao.Banco_de_dadosDao;
import org.example.model.Banco_de_dados;

import java.sql.SQLException;
import java.util.List;

@Path("banco_de_dadoss")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class Banco_de_dadosResouce {

    private Banco_de_dadosDao banco_de_dadosDao;

    public Banco_de_dadosResouce() throws  SQLException {
        banco_de_dadosDao = new Banco_de_dadosDao();
    }

    @POST
    public Response cadastrar(Banco_de_dados banco_de_dados, @Context UriInfo uriInfo) throws SQLException {
        banco_de_dadosDao.cadastrar(banco_de_dados);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(banco_de_dados.getId_banco()));
        return Response.created(uri.build()).entity(banco_de_dados).build();
    }

    @GET
    @Path("busca")
    public List<Banco_de_dados> listar(@QueryParam("id") int id) throws SQLException {
        return banco_de_dadosDao.pesquisarPorId(id);
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Banco_de_dados banco_de_dados) throws SQLException {
        banco_de_dados.setId_banco(id);
        try {
            banco_de_dadosDao.atualizar(banco_de_dados);
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok().entity(banco_de_dados).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            banco_de_dadosDao.remover(id);
            return Response.noContent().build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PATCH
    @Path("{id}")
    public Response atualizarParcial(@PathParam("id") int id, Banco_de_dados banco_de_dadosParcial) throws SQLException {
        try {
            Banco_de_dados banco_de_dadosExistente = banco_de_dadosDao.pesquisar(id);
            if (banco_de_dadosParcial.getId_banco() != 0) {
                banco_de_dadosExistente.getId_banco();
            }
            if (banco_de_dadosParcial.getId_gerente() != 0) {
                banco_de_dadosExistente.getId_gerente();
            }
            if (banco_de_dadosParcial.getId_usuario() != 0) {
                banco_de_dadosExistente.getId_usuario();
            }
            banco_de_dadosDao.atualizar(banco_de_dadosExistente);
            return Response.ok(banco_de_dadosExistente).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}
