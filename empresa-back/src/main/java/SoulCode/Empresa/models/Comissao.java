package SoulCode.Empresa.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;





@Entity
public class Comissao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_comissao;
	
	@Column(nullable = false)
	private String co_descricao;

	@DateTimeFormat(pattern = "dd-MM-yyyy")
//	@Temporal(TemporalType.DATE)
	@Column(columnDefinition = "date" , nullable = false)
	private Date co_dataPagamento;
	
	@NumberFormat(pattern = "#.##0,00")
	@Column(nullable = false)
	private Double co_valor;
	
	@Enumerated(EnumType.STRING)
	private StatusComissao co_status;

	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "id_funcionario")
	private Funcionario funcionario;

	public Integer getId_comissao() {
		return id_comissao;
	}

	public void setId_comissao(Integer id_comissao) {
		this.id_comissao = id_comissao;
	}

	public String getCo_descricao() {
		return co_descricao;
	}

	public void setCo_descricao(String co_descricao) {
		this.co_descricao = co_descricao;
	}

	public Date getCo_dataPagamento() {
		return co_dataPagamento;
	}

	public void setCo_dataPagamento(Date co_dataPagamento) {
		this.co_dataPagamento = co_dataPagamento;
	}

	public Double getCo_valor() {
		return co_valor;
	}

	public void setCo_valor(Double co_valor) {
		this.co_valor = co_valor;
	}

	public StatusComissao getCo_status() {
		return co_status;
	}

	public void setCo_status(StatusComissao co_status) {
		this.co_status = co_status;
	}

	public Funcionario getFuncionario() {
		return funcionario;
	}

	public void setFuncionario(Funcionario funcionario) {
		this.funcionario = funcionario;
	}

}
