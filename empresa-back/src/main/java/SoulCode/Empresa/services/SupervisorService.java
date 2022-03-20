package SoulCode.Empresa.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import SoulCode.Empresa.models.Cargo;
import SoulCode.Empresa.models.Funcionario;
import SoulCode.Empresa.models.Supervisor;
import SoulCode.Empresa.repositorys.CargoRepository;
import SoulCode.Empresa.repositorys.SupervisorRepository;



@Service
public class SupervisorService {

	@Autowired
	private SupervisorRepository supervisorRepository;
	@Autowired
	private CargoService cargoService;
	@Autowired
	private CargoRepository cargoRepository;
	
	
	
// GET todos Supervisores
	public List<Supervisor> mostrarTodosSupervisores(){
		List<Supervisor> supervisor = supervisorRepository.findAll();
		return supervisor;
	}
	
//	GET único Supervisor
	public Supervisor mostrarUmSupervisor(Integer id_supervisor) {
		Optional<Supervisor> supervisor = supervisorRepository.findById(id_supervisor);
		return supervisor.orElseThrow();
	}
	
//	Buscar supervisor pelo nome
	public Supervisor buscarSupervisorPeloNome(String sup_nome){
		Supervisor supervisor = supervisorRepository.fetchByName(sup_nome);
		return supervisor;
	}
	
	
//	Supervisor sem cargo
	public List<Supervisor> supervisorSemCargo(){
		return supervisorRepository.supervisorSemCargo();
	}
	
	
//	Cadastrar Supervisor
	public Supervisor cadastrarSupervisor(Integer id_cargo , Supervisor supervisor) {
		supervisor.setId_supervisor(null);
		if ( id_cargo != null) {
			Cargo cargo = cargoService.buscarUmCargo(id_cargo);
			supervisor.setCargo(cargo);
			cargo.setSupervisor(supervisor);
		}
		return supervisorRepository.save(supervisor);
		
	}
	
//	Editar Supervisor
	public Supervisor editarSupervisor(Supervisor supervisor) {
		mostrarUmSupervisor(supervisor.getId_supervisor());
		return supervisorRepository.save(supervisor);
	}
	
//	GET de supervisor que está dentro de um cargo
	
	public Supervisor buscaSupervisorDoCargo(Integer id_cargo) {
		Supervisor supervisor = supervisorRepository.buscaSupervisorDoCargo(id_cargo);
		return supervisor;
	}
	
//	Salvar foto
	public Supervisor salvarFoto(Integer id_supervisor, String caminhoFoto) {
		Supervisor supervisor = mostrarUmSupervisor(id_supervisor);
		supervisor.setSup_foto(caminhoFoto);
		return supervisorRepository.save(supervisor);
	}
	

//	DELETE Supervisor
	public void deletarUmSupervisor(Integer id_supervisor) {
		supervisorRepository.deleteById(id_supervisor);
	}
	
	
//	Buscar supervisores com seu cargo
	public List<List> supervisorComSeuCargo(){
		return supervisorRepository.supervisorComSeuCargo();
	}
	
//	Retirar supervisor de um cargo
	public Supervisor deixarSupervisorSemCargo(Integer id_supervisor) {
		Supervisor supervisor = mostrarUmSupervisor(id_supervisor);
		supervisor.setCargo(null);
		return supervisorRepository.save(supervisor);
	}


}
	
	
	

