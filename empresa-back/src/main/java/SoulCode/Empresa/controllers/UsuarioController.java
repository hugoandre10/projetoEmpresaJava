//package SoulCode.Empresa.controllers;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import SoulCode.Empresa.models.Usuario;
//import SoulCode.Empresa.services.UsuarioService;
//
//
//
//@CrossOrigin
//@RestController
////@RequestMapping("seguranca")
//public class UsuarioController {
//	
//	
//	@Autowired
//	private UsuarioService usuarioService;
//	
//	@GetMapping("/login")
//	public String login() {
//		return "Login efetuado com sucesso";
//	}
//	
//	@GetMapping("/usuario")
//	public List<Usuario> findAll(){
//		List<Usuario> usuario = usuarioService.findAll();
//		return usuario;
//	}
//	
//	@GetMapping("/usuario/{username}")
//	public ResponseEntity<Usuario> buscarUmUsuario(@PathVariable String username){
//		Usuario usuario = usuarioService.buscarUmUsuario(username);
//		return ResponseEntity.ok().body(usuario);
//	}
//
//}
