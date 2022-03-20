package SoulCode.Empresa.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
public class Supervisor {

	@Id	
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id_supervisor;
	
	@Column(nullable = false , length = 40)
	private String sup_nome;
	
	@Column(nullable = false, length = 60)
	private String sup_cidade;
	
	@Column(nullable = true) 
	private String sup_foto;
	
	
	public String getSup_foto() {
		return sup_foto;
	}

	public void setSup_foto(String sup_foto) {
		this.sup_foto = sup_foto;
	}

	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "id_cargo" , unique = true)
	private Cargo cargo;

	public Integer getId_supervisor() {
		return id_supervisor;
	}

	public void setId_supervisor(Integer id_supervisor) {
		this.id_supervisor = id_supervisor;
	}

	public String getSup_nome() {
		return sup_nome;
	}

	public void setSup_nome(String sup_nome) {
		this.sup_nome = sup_nome;
	}

	public String getSup_cidade() {
		return sup_cidade;
	}

	public void setSup_cidade(String sup_cidade) {
		this.sup_cidade = sup_cidade;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}
	
	
	
}
