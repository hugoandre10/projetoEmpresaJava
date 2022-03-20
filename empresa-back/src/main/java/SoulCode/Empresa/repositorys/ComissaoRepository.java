package SoulCode.Empresa.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import SoulCode.Empresa.models.Comissao;




public interface ComissaoRepository extends JpaRepository<Comissao, Integer> {
	
	@Query(value="SELECT * FROM bd_empresa.comissao WHERE id_funcionario = :id_funcionario" , nativeQuery = true)
	List<Comissao> buscarComissaoDoFuncionario(Integer id_funcionario);

}
