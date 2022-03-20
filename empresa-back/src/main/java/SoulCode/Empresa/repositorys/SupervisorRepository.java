package SoulCode.Empresa.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import SoulCode.Empresa.models.Supervisor;




public interface SupervisorRepository extends JpaRepository<Supervisor, Integer > {

	@Query(value="SELECT * FROM supervisor WHERE id_cargo = :id_cargo" , nativeQuery = true)
	Supervisor buscaSupervisorDoCargo(Integer id_cargo);
	
	@Query(value = "SELECT * from supervisor WHERE id_cargo is null" , nativeQuery = true )
	List<Supervisor> supervisorSemCargo();
	
	@Query(value = "SELECT supervisor.id_supervisor,supervisor.sup_nome,supervisor.sup_cidade, supervisor.sup_foto , cargo.id_cargo,cargo.car_nome,cargo.car_atribuicao FROM cargo right JOIN supervisor ON supervisor.id_cargo = cargo.id_cargo order by supervisor.sup_nome;",nativeQuery = true)
	List<List> supervisorComSeuCargo();
	
	@Query(value = "SELECT * FROM supervisor WHERE sup_nome = :sup_nome", nativeQuery = true)
	Supervisor fetchByName(String sup_nome);
	
//	@Query(value = "SELECT id_funcionario , func_nome , func_cidade , car_nome , car_atribuicao FROM cargo right JOIN funcionario ON funcionario.id_cargo = cargo.id_cargo" , nativeQuery = true)
//	List<List> funcionarioComCargo();
	
}
