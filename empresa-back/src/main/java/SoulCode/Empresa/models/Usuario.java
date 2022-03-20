//package SoulCode.Empresa.models;
//
//import java.util.Collection;
//import java.util.List;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//
//@Entity
//public class Usuario implements UserDetails {
//
//	
//	
//public Usuario() {
//		
//	}
//	
//	@Id
//	private String username;
//	
//	@Column(nullable = false , length = 150)
//	private String usu_nome;
//	
//	@Column(nullable = false , length = 150)
//	private String usu_sobrenome;
//	
//	@Column(nullable = false , length = 150)
//	private String email;
//	
//	@Column(nullable = true , length = 150)
//	private String password;
//	
//	
//	
//	@JsonIgnore
//	@ManyToMany
//	@JoinTable(name="usuario_roles",
//	joinColumns = @JoinColumn(name = "id_usuario" , referencedColumnName = "username") ,
//	inverseJoinColumns = @JoinColumn(name="id_role" , referencedColumnName = "nomerole"))
//	private List<Role> roles;
//	
//	public String getUsu_nome() {
//		return usu_nome;
//	}
//
//	public void setUsu_nome(String usu_nome) {
//		this.usu_nome = usu_nome;
//	}
//
//	public String getUsu_sobrenome() {
//		return usu_sobrenome;
//	}
//
//	public void setUsu_sobrenome(String usu_sobrenome) {
//		this.usu_sobrenome = usu_sobrenome;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	
//
//
//	public List<Role> getRoles() {
//		return roles;
//	}
//
//	public void setRoles(List<Role> roles) {
//		this.roles = roles;
//	}
//	
//	
//	
//	
//	
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		return (Collection<? extends GrantedAuthority>) this.roles;
//	}
//
//	
//
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isEnabled() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//	
//
//
//
//}
