package SoulCode.Empresa.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import SoulCode.Empresa.models.Cargo;
import SoulCode.Empresa.models.Supervisor;
import SoulCode.Empresa.services.SupervisorService;




@CrossOrigin
@RestController
@RequestMapping("empresa")
public class SupervisorController {
	
	@Autowired
	private SupervisorService supervisorService;
	
//	Buscar todos supervisores
	@GetMapping("/supervisor")
	public List<Supervisor> mostrarTodosSupervisores() {
		List<Supervisor> supervisor = supervisorService.mostrarTodosSupervisores();
		return supervisor;
	}
//	Buscar um supervisor
	@GetMapping("/supervisor/{id_supervisor}")
	public ResponseEntity<Supervisor> mostrarUmSupervisor(@PathVariable Integer id_supervisor) {
		
		Supervisor supervisor = supervisorService.mostrarUmSupervisor(id_supervisor);
		return ResponseEntity.ok().body(supervisor);
		
	}
	
	@GetMapping("/supervisorSemCargo")
	public List<Supervisor> supervisorSemCargo(){
		List<Supervisor> supervisor = supervisorService.supervisorSemCargo();
		return supervisor;
	}
	
	
//	Buscar um supervisor referente ao cargo
	@GetMapping("/supervisor-cargo/{id_cargo}")
	public ResponseEntity<Supervisor> buscaSupervisorDoCargo(@PathVariable Integer id_cargo){
		Supervisor supervisor = supervisorService.buscaSupervisorDoCargo(id_cargo);
		return ResponseEntity.ok().body(supervisor);
	}
	
//	Cadastrar Supervisor
	@PostMapping("/supervisor")
	public ResponseEntity<Supervisor> cadastrarSupervisor(@RequestParam(value="cargo" , required = false)Integer id_cargo , @RequestBody Supervisor supervisor){
	
		supervisor = supervisorService.cadastrarSupervisor(id_cargo, supervisor);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(supervisor.getId_supervisor())
				.toUri();
		return ResponseEntity.created(uri).build();
		
	}
	
//	Editar um supervisor
//	@PutMapping("/supervisor/{id_supervisor}")
//	public ResponseEntity<Supervisor> editarSupervisor(@RequestParam(value="cargo" , required = false)Cargo cargo , @PathVariable Integer id_supervisor , @RequestBody Supervisor supervisor ){
//		supervisor.setId_supervisor(id_supervisor);
//		supervisor.setCargo(cargo);
//		cargo.setSupervisor(supervisor);
//		supervisor = supervisorService.editarSupervisor(supervisor);
//		
//		return ResponseEntity.noContent().build();
//						
//	}
	
	
	
	@PutMapping("/supervisor/{id_supervisor}")
	public ResponseEntity<Supervisor> editarSupervisor(@RequestParam(value="cargo" , required = false)Cargo cargo , @PathVariable Integer id_supervisor , @RequestBody Supervisor supervisor ){
		supervisor.setCargo(cargo);
		cargo.setSupervisor(supervisor);
		supervisor = supervisorService.editarSupervisor(supervisor);
		return ResponseEntity.noContent().build();
						
	}
	
	
	@PutMapping("/editarSomenteSupervisor/{id_supervisor}")
	public ResponseEntity<Supervisor> editarSomenteSupervisor(@PathVariable Integer id_supervisor , @RequestBody Supervisor supervisor ){
		supervisor = supervisorService.editarSupervisor(supervisor);
		return ResponseEntity.noContent().build();
						
	}
	
	
//	Deixar supervisor sem cargo
	@PutMapping("/supervisorSemCargo/{id_supervisor}")
	public ResponseEntity<Supervisor> deixarSupervisorSemCargo(@PathVariable Integer id_supervisor){
		supervisorService.deixarSupervisorSemCargo(id_supervisor);
		return ResponseEntity.noContent().build();
						
	}
	
	
//	Supervisor com cargo
	@GetMapping("/supervisor-cargo")
	public List<List> supervisorComCargo(){
		List<List> supervisorCargo = supervisorService.supervisorComSeuCargo();
		return supervisorCargo;
	}
	
	@GetMapping("/supervisor-nome/{sup_nome}")
	public ResponseEntity<Supervisor> buscarSupervisorPeloNome(@PathVariable String sup_nome){
		Supervisor supervisor = supervisorService.buscarSupervisorPeloNome(sup_nome);
		return ResponseEntity.ok().body(supervisor);
	}
	
	@DeleteMapping("/supervisor/{id_supervisor}")
	
	public ResponseEntity<Supervisor> deletarUmSupervisor(@PathVariable Integer id_supervisor){
		supervisorService.deletarUmSupervisor(id_supervisor);
		return ResponseEntity.noContent().build();
	}

		
	
}
