package br.com.fiap.resource;

import br.com.fiap.dao.UsuarioDao;
import br.com.fiap.dto.AtualizacaoUsuarioDto;
import br.com.fiap.dto.CadastroUsuarioDto;
import br.com.fiap.dto.DetalhesUsuarioDto;
import br.com.fiap.exception.EntidadeNaoEcontradaException;
import br.com.fiap.model.Usuario;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.*;
import org.modelmapper.ModelMapper;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@Path("usuarios")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioResource {

    private UsuarioDao usuarioDao;

    public UsuarioResource() throws SQLException {
        usuarioDao = new UsuarioDao();
    }

    @GET
    public List<DetalhesUsuarioDto> listar() throws SQLException {
        ModelMapper mapper = new ModelMapper();
        return usuarioDao.listar().stream().map(m -> mapper.map(m, DetalhesUsuarioDto.class)).collect(Collectors.toList());
    }

    @GET
    @Path("busca")
    public List<DetalhesUsuarioDto> listar(@QueryParam("email_usuario_G") String email) throws SQLException {
        ModelMapper mapper = new ModelMapper();
        return usuarioDao.pesquisarPorEmail(email).stream().map(m -> mapper.map(m, DetalhesUsuarioDto.class)).collect(Collectors.toList());
    }

    @GET
    @Path("{id}")
    public Response buscarPorId(@PathParam("id") int id) throws SQLException {
        try {
            Usuario usuario = usuarioDao.pesquisar(id);
            ModelMapper mapper = new ModelMapper();
            return Response.ok(mapper.map(usuario, DetalhesUsuarioDto.class)).build();
        } catch (EntidadeNaoEcontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @POST
    public Response cadastrar(CadastroUsuarioDto usuarioDto, @Context UriInfo uriInfo) throws SQLException {
        ModelMapper mapper = new ModelMapper();
        Usuario usuario = mapper.map(usuarioDto, Usuario.class);
        usuarioDao.cadastrar(usuario);
        UriBuilder uri = uriInfo.getAbsolutePathBuilder();
        uri.path(String.valueOf(usuario.getId_usuario_G()));
        return Response.created(uri.build()).entity(mapper.map(usuario, DetalhesUsuarioDto.class)).build();
    }

    @PUT
    @Path("{id}")
    public Response atualizar(@PathParam("id") int id, AtualizacaoUsuarioDto usuarioDto) throws SQLException {
        ModelMapper mapper = new ModelMapper();
        Usuario usuario = mapper.map(usuarioDto, Usuario.class);
        usuario.setId_usuario_G(id);
        try {
            usuarioDao.atualizar(usuario);
        } catch (EntidadeNaoEcontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(mapper.map(usuario, DetalhesUsuarioDto.class)).build();
    }

    @DELETE
    @Path("{id}")
    public Response remover(@PathParam("id") int id) throws SQLException {
        try {
            usuarioDao.remover(id);
            return Response.noContent().build();
        } catch (EntidadeNaoEcontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    @PATCH
    @Path("{id}")
    public Response atualizarParcial(@PathParam("id") int id, AtualizacaoUsuarioDto usuarioParcialDto) throws SQLException {
        try {
            Usuario usuarioExistente = usuarioDao.pesquisar(id);
            if (usuarioParcialDto.getEmail_usuario_G() != null) {
                usuarioExistente.setEmail_usuario_G(usuarioParcialDto.getEmail_usuario_G());
            }
            if (usuarioParcialDto.getTelefone_usuario_G() != null) {
                usuarioExistente.setTelefone_usuario_G(usuarioParcialDto.getTelefone_usuario_G());
            }
            if (usuarioParcialDto.getSenha_usuario_G() != null) {
                usuarioExistente.setSenha_usuario_G(usuarioParcialDto.getSenha_usuario_G());
            }
            usuarioDao.atualizar(usuarioExistente);
            ModelMapper mapper = new ModelMapper();
            return Response.ok(mapper.map(usuarioExistente, DetalhesUsuarioDto.class)).build();
        } catch (EntidadeNaoEcontradaException e) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }
}