package SoulCode.Empresa.models;

public enum StatusComissao {

	ANÁLISE("Análise"),
	PAGA("Paga"),
	CANCELADA("Cancelada");
	
	private String descricao;
	
	StatusComissao(String descricao) {
		
		this.descricao = descricao;
	}

	public String getDescricao() {
		return descricao;
	}

	

}
