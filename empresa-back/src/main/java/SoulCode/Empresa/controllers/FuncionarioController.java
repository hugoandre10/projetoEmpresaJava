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
import SoulCode.Empresa.models.Funcionario;
import SoulCode.Empresa.repositorys.FuncionarioRepository;
import SoulCode.Empresa.services.FuncionarioService;





@CrossOrigin
@RestController
@RequestMapping("empresa")
public class FuncionarioController {

	@Autowired
	private FuncionarioRepository funcionarioRepository;

	@Autowired
	private FuncionarioService funcionarioService;

	@GetMapping("/funcionario")
	public List<Funcionario> mostrarTodosFuncionarios() {

		List<Funcionario> funcionario = funcionarioService.mostrarTodosFuncionarios();
		return funcionario;
	}
	
	
	@GetMapping("funcionario-cargo")
	public List<List> funcionarioComCargo(){
		List<List> funcionarioCargo = funcionarioService.funcionarioComCargo();
		return funcionarioCargo;
	}

	@GetMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<?> buscarUmFuncionario(@PathVariable Integer id_funcionario) {

		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		return ResponseEntity.ok().body(funcionario);
	}
	
	
	@GetMapping("/funcionario/busca-cargo/{id_cargo}")
	public List<Funcionario> buscarFuncionarioCargo(@PathVariable Integer id_cargo){
		List<Funcionario> funcionario = funcionarioService.buscarFuncionarioCargo(id_cargo);
		return funcionario;
	}

//	Cadastrar funcionário e o cargo
	@PostMapping("/funcionario")
	public ResponseEntity<Void> InserirFuncionario(@RequestParam(value = "cargo") Integer id_cargo ,@RequestBody Funcionario funcionario) {
		funcionario = funcionarioService.InserirFuncionario(id_cargo , funcionario);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/funcionario/{id}")
				.buildAndExpand(funcionario.getId_funcionario()).toUri();
		return ResponseEntity.created(uri).build();

	}
	
	
//	Apenas cadastrar funcionário
	@PostMapping("/apenasFuncionario")
	public ResponseEntity<Funcionario> InserirFuncionario(@RequestBody Funcionario funcionario){
		funcionario = funcionarioService.cadastrarFuncionario(funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(funcionario.getId_funcionario()).toUri();
		return ResponseEntity.created(uri).build();
		
	}

	@DeleteMapping("/funcionario/{id_funcionario}")

	public ResponseEntity<Void> deletarUmFuncionario(@PathVariable Integer id_funcionario) {

		funcionarioService.deletarUmFuncionario(id_funcionario);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("/funcionario/{id_funcionario}")
	public ResponseEntity<Void> editarFuncionario(@RequestParam(value = "cargo")Cargo cargo,@PathVariable Integer id_funcionario,
			@RequestBody Funcionario funcionario) {
		funcionario.setId_funcionario(id_funcionario);
		funcionario.setCargo(cargo);
		funcionario = funcionarioService.editarFuncionario(funcionario);
		return ResponseEntity.noContent().build();

	}
	
	@PutMapping("/editarApenasfuncionario/{id_funcionario}")
	public ResponseEntity<Void> editarApenasFuncionario(@PathVariable Integer id_funcionario , @RequestBody Funcionario funcionario){
	funcionario.setId_funcionario(id_funcionario);
	funcionario = funcionarioService.editarFuncionario(funcionario);
	return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/inserirCargo/{id_funcionario}")
	public ResponseEntity<Funcionario> inserirFuncionarioNoCargo(@PathVariable Integer id_funcionario, @RequestBody Cargo cargo){
		Funcionario funcionario = funcionarioService.inserirFuncionarioNoCargo(id_funcionario, cargo);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/deixarSemCargo/{id_funcionario}")
	public ResponseEntity<Funcionario> deixarFuncionarioSemCargo(@PathVariable Integer id_funcionario){
		Funcionario funcionario = funcionarioService.deixarFuncionarioSemCargo(id_funcionario);
		return ResponseEntity.noContent().build();
	}

}
