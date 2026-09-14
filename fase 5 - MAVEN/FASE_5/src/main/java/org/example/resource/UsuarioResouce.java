package org.example.resource;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import org.example.exception.EntidadeNaoEncontradaException;
import org.example.dao.UsuarioDao;
import org.example.model.Usuario;

import java.sql.SQLException;
import java.util.List;

@Path("usuarios")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioResouce {

    private UsuarioDao usuarioDao;

    public UsuarioResouce() throws  SQLException {
        usuarioDao = new UsuarioDao();
    }

    @POST
    public Response cadastrar(Usuario usuario, @Context UriInfo uriInfo) throws SQLException {
        usuarioDao.cadastrar(usuario);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(usuario.getId_usuario()));
        return Response.created(uri.build()).entity(usuario).build();
    }

    @GET
    @Path("busca")
    public List<Usuario> listar(@QueryParam("nome") String nome) throws SQLException {
        return usuarioDao.pesquisarPorNome(nome);
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, Usuario usuario) throws SQLException {
        usuario.setId_usuario(id);
        try {
            usuarioDao.atualizar(usuario);
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok().entity(usuario).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            usuarioDao.remover(id);
            return Response.noContent().build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PATCH
    @Path("{id}")
    public Response atualizarParcial(@PathParam("id") int id, Usuario usuarioParcial) throws SQLException {
        try {
            Usuario usuarioExistente = usuarioDao.pesquisar(id);
            if (usuarioParcial.getSenha_usuario() != null) {
                usuarioExistente.getSenha_usuario();
            }
            if (usuarioParcial.getNome_usuario() != null) {
                usuarioExistente.getNome_usuario();
            }
            if (usuarioParcial.getGps_usuario() != null) {
                usuarioExistente.getGps_usuario();
            }
            usuarioDao.atualizar(usuarioExistente);
            return Response.ok(usuarioExistente).build();
        } catch (EntidadeNaoEncontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}
