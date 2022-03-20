//package SoulCode.Empresa.services;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import SoulCode.Empresa.models.Usuario;
//import SoulCode.Empresa.repositorys.UsuarioRepository;
//
//
//
//@Service
//public class UsuarioService {
//	
//	@Autowired
//	private UsuarioRepository usuarioRepository;
//	
//	
//	public List<Usuario> findAll(){
//		return usuarioRepository.findAll();
//	}
//	
//	public Usuario buscarUmUsuario(String username){
//		Optional<Usuario> usuario = usuarioRepository.findById(username);
//		return usuario.orElseThrow();
//	}
//
//}
