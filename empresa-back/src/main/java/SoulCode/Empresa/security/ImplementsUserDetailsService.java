//package SoulCode.Empresa.security;
//
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Repository;
//
//import SoulCode.Empresa.models.Usuario;
//import SoulCode.Empresa.repositorys.UsuarioRepository;
//
//
//
//@Repository
//@Transactional
//public class ImplementsUserDetailsService implements UserDetailsService {
//
//	
//	@Autowired
//	private UsuarioRepository usuarioRepository;
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		
//		Usuario usuario = usuarioRepository.findByUsername(username);
//		
//		if(usuario == null) {
//			throw new UsernameNotFoundException("Usuário não encontrado");
//			
//		}
//		else {
//				
//		return new User(usuario.getUsername() , usuario.getPassword() , true , true , true , true , usuario.getAuthorities());
//		
//		}
//	}
//}
