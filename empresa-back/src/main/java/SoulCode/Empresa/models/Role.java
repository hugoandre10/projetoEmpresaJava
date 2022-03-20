//package SoulCode.Empresa.models;
//
//import java.util.List;
//
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
//
//import org.springframework.security.core.GrantedAuthority;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//
//
//@Entity
//public class Role implements GrantedAuthority {
//
//public Role() {
//		
//	}
//
//	@Id
//	private String nomeRole;
//
//	public String getNomeRole() {
//		return nomeRole;
//	}
//
//	public void setNomeRole(String nomeRole) {
//		this.nomeRole = nomeRole;
//	}
//	
//	@JsonIgnore
//	@ManyToMany
//	@JoinTable(name="usuario_roles",
//	joinColumns = @JoinColumn(name = "id_role" , referencedColumnName = "nomeRole") ,
//	inverseJoinColumns = @JoinColumn(name="id_usuario" , referencedColumnName = "username"))
//	private List<Usuario> usuarios;
//
//	public List<Usuario> getUsuarios() {
//		return usuarios;
//	}
//
//	public void setUsuarios(List<Usuario> usuarios) {
//		this.usuarios = usuarios;
//	}
//	
//	
//	
//	@Override
//	public String getAuthority() {
//		// TODO Auto-generated method stub
//		return this.nomeRole;
//	}
//
//}
