package SoulCode.Empresa.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;




@Entity
public class Cargo {

//	id_cargo
//	car_nome
//	car_atribuicao

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_cargo;

	@Column(nullable = false, length = 60)
	private String car_nome;

	@Column(nullable = false, length = 60)
	private String car_atribuicao;

	@OneToMany(mappedBy = "cargo")
	private List<Funcionario> funcionario = new ArrayList<>();
	
	@OneToOne
	@JoinColumn(name = "id_cargo" , unique = true)
	private Supervisor supervisor;
	

	public List<Funcionario> getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(List<Funcionario> funcionario) {
		this.funcionario = funcionario;
	}

	public Integer getId_cargo() {
		return id_cargo;
	}

	public void setId_cargo(Integer id_cargo) {
		this.id_cargo = id_cargo;
	}

	public String getCar_nome() {
		return car_nome;
	}

	public void setCar_nome(String car_nome) {
		this.car_nome = car_nome;
	}

	public String getCar_atribuicao() {
		return car_atribuicao;
	}

	public void setCar_atribuicao(String car_atribuicao) {
		this.car_atribuicao = car_atribuicao;
	}

	public Supervisor getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(Supervisor supervisor) {
		this.supervisor = supervisor;
	}
	

}
