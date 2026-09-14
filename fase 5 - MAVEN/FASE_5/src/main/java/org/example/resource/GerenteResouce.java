package org.example.resource;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import org.example.exception.EntidadeNaoEncontradaException;
import org.example.dao.GerenteDao;
import org.example.model.Gerente;

import java.sql.SQLException;
import java.util.List;

@Path("gerentes")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class GerenteResouce {

    private GerenteDao gerenteDao;

    public GerenteResouce() throws  SQLException {
        gerenteDao = new GerenteDao();
    }

    @POST
    public Response cadastrar(Gerente gerente, @Context UriInfo uriInfo) throws SQLException {
        gerenteDao.cadastrar(gerente);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(gerente.getId_gerente()));
        return Response.created(uri.build()).entity(gerente).build();
    }

    @GET
    @Path("busca")
    public List<Gerente> listar(@QueryParam("id") int id) throws SQLException {
        return gerenteDao.pesquisarPorId(id);
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Gerente gerente) throws SQLException {
        gerente.setId_gerente(id);
        try {
            gerenteDao.atualizar(gerente);
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok().entity(gerente).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            gerenteDao.remover(id);
            return Response.noContent().build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PATCH
    @Path("{id}")
    public Response atualizarParcial(@PathParam("id") int id, Gerente gerenteParcial) throws SQLException {
        try {
            Gerente gerenteExistente = gerenteDao.pesquisar(id);
            if (gerenteParcial.getId_gerente() != 0) {
                gerenteExistente.getId_gerente();
            }
            if (gerenteParcial.getId_usuario() != 0) {
                gerenteExistente.getId_usuario();
            }
            gerenteDao.atualizar(gerenteExistente);
            return Response.ok(gerenteExistente).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}
