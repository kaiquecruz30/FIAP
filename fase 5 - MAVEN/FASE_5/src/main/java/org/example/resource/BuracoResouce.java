package org.example.resource;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import org.example.exception.EntidadeNaoEncontradaException;
import org.example.dao.BuracoDao;
import org.example.model.Buraco;

import java.sql.SQLException;
import java.util.List;

@Path("buracos")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class BuracoResouce {

    private BuracoDao buracoDao;

    public BuracoResouce() throws  SQLException {
        buracoDao = new BuracoDao();
    }

    @POST
    public Response cadastrar(Buraco buraco, @Context UriInfo uriInfo) throws SQLException {
        buracoDao.cadastrar(buraco);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(buraco.getId_buraco()));
        return Response.created(uri.build()).entity(buraco).build();
    }

    @GET
    @Path("busca")
    public List<Buraco> listar(@QueryParam("id") int id) throws SQLException {
        return buracoDao.pesquisarPorId(id);
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Buraco buraco) throws SQLException {
        buraco.setId_buraco(id);
        try {
            buracoDao.atualizar(buraco);
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok().entity(buraco).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            buracoDao.remover(id);
            return Response.noContent().build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PATCH
    @Path("{id}")
    public Response atualizarParcial(@PathParam("id") int id, Buraco buracoParcial) throws SQLException {
        try {
            Buraco buracoExistente = buracoDao.pesquisar(id);
            if (buracoParcial.getId_buraco() != 0) {
                buracoExistente.getId_buraco();
            }
            if (buracoParcial.getEndereco() != null) {
                buracoExistente.getEndereco();
            }
            if (buracoParcial.getTamanho() != 0) {
                buracoExistente.getTamanho();
            }
            buracoDao.atualizar(buracoExistente);
            return Response.ok(buracoExistente).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}
