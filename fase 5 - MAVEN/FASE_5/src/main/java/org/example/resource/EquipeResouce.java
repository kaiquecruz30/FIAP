package org.example.resource;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import org.example.exception.EntidadeNaoEncontradaException;
import org.example.dao.EquipeDao;
import org.example.model.Equipe;

import java.sql.SQLException;
import java.util.List;

@Path("equipes")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class EquipeResouce {

    private EquipeDao equipeDao;

    public EquipeResouce() throws  SQLException {
        equipeDao = new EquipeDao();
    }

    @POST
    public Response cadastrar(Equipe equipe, @Context UriInfo uriInfo) throws SQLException {
        equipeDao.cadastrar(equipe);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(equipe.getId_equipe()));
        return Response.created(uri.build()).entity(equipe).build();
    }

    @GET
    @Path("busca")
    public List<Equipe> listar(@QueryParam("id") int id) throws SQLException {
        return equipeDao.pesquisarPorId(id);
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Equipe equipe) throws SQLException {
        equipe.setId_equipe(id);
        try {
            equipeDao.atualizar(equipe);
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok().entity(equipe).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            equipeDao.remover(id);
            return Response.noContent().build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PATCH
    @Path("{id}")
    public Response atualizarParcial(@PathParam("id") int id, Equipe equipeParcial) throws SQLException {
        try {
            Equipe equipeExistente = equipeDao.pesquisar(id);
            if (equipeParcial.getId_equipe() != 0) {
                equipeExistente.getId_equipe();
            }
            if (equipeParcial.getQt_integrantes() != 0) {
                equipeExistente.getQt_integrantes();
            }
            if (equipeParcial.getEquipamentos() != null) {
                equipeExistente.getEquipamentos();
            }
            equipeDao.atualizar(equipeExistente);
            return Response.ok(equipeExistente).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}
