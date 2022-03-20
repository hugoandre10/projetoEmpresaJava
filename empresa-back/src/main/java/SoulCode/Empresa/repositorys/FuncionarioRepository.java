package SoulCode.Empresa.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import SoulCode.Empresa.models.Funcionario;


public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {

	@Query(value = "SELECT * FROM funcionario WHERE id_cargo = :id_cargo", nativeQuery = true)
	List<Funcionario> fetchByCargo(Integer id_cargo);
	
	@Query(value = "SELECT id_funcionario , func_nome , func_cidade , car_nome , car_atribuicao , cargo.id_cargo FROM cargo right JOIN funcionario ON funcionario.id_cargo = cargo.id_cargo" , nativeQuery = true)
	List<List> funcionarioComCargo();
}
