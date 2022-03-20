package SoulCode.Empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import SoulCode.Empresa.models.Cargo;
import SoulCode.Empresa.models.Supervisor;
import SoulCode.Empresa.repositorys.CargoRepository;
import SoulCode.Empresa.repositorys.SupervisorRepository;
import SoulCode.Empresa.services.exceptions.DataIntegrityViolationException;
import SoulCode.Empresa.services.exceptions.ObjectNotFoundException;



@Service
public class CargoService {

	@Autowired
	private CargoRepository cargoRepository;
	
	@Lazy
	@Autowired
	private SupervisorService supervisorService;

	public List<Cargo> mostrarTodosCargos() {
		return cargoRepository.findAll();
	}

	public Cargo buscarUmCargo(Integer id_cargo) {
		Optional<Cargo> cargo = cargoRepository.findById(id_cargo);
		return cargo.orElseThrow(() -> new ObjectNotFoundException("Cargo não encontrado"));
	}
	
	public List<Cargo> cargoSemSupervisor(){
		return cargoRepository.cargoSemSupervisor();
	}
	
	public Cargo cargoDoSupervisor(Integer id_supervisor) {
		Cargo cargo = cargoRepository.cargoDoSupervisor(id_supervisor);
		return cargo;
	}
	
	public List<List> cargoComSeuSupervisor(){
		return cargoRepository.cargoComSeuSupervisor();
	}

	public Cargo cadastrarCargo(Integer id_supervisor, Cargo cargo) {
		// é uma forma de segurança para não setarmos o id
		cargo.setId_cargo(null);
		if (id_supervisor != null) {
			Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
			cargo.setSupervisor(supervisor);
			
		}
		
		return cargoRepository.save(cargo);
	}
	
	

	public Cargo editarCargo(Cargo cargo) {
		buscarUmCargo(cargo.getId_cargo());
		return cargoRepository.save(cargo);

	}

	public void deletarUmCargo(Integer id_cargo) {
		buscarUmCargo(id_cargo);
		try {
			cargoRepository.deleteById(id_cargo);
		} catch (org.springframework.dao.DataIntegrityViolationException e) {
			throw new DataIntegrityViolationException(
					"O cargo não pode ser deletado , pois possui funcionários alocados!");
		}
	}
	
	
	public Cargo atribuirSupervisor(Integer id_cargo , Integer id_supervisor) {
		Cargo cargo = buscarUmCargo(id_cargo);
		Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
		cargo.setSupervisor(supervisor);
		supervisor.setCargo(cargo);
		return cargoRepository.save(cargo);
	}
	
	
	
	public Cargo deixarCargoSemSupervisor(Integer id_cargo, Integer id_supervisor) {
		Cargo cargo = buscarUmCargo(id_cargo);
		cargo.setSupervisor(null);
		Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
		supervisor.setCargo(null);
		return cargoRepository.save(cargo);
	}

}
