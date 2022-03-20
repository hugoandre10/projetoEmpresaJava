package SoulCode.Empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SoulCode.Empresa.models.Cargo;
import SoulCode.Empresa.models.Funcionario;
import SoulCode.Empresa.repositorys.FuncionarioRepository;


@Service
public class FuncionarioService {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	@Autowired
	private CargoService cargoService;

//	GET de todos
	
	public List<Funcionario> mostrarTodosFuncionarios() {
		return funcionarioRepository.findAll();
	}

//	Get de um só

	public Funcionario buscarUmFuncionario(Integer id_funcionario) {
		Optional<Funcionario> funcionario = funcionarioRepository.findById(id_funcionario);
		return funcionario.orElseThrow();

	}
	
//	Buscar funcionário de acordo com seu cargo
	public List<Funcionario> buscarFuncionarioCargo(Integer id_cargo){
		List<Funcionario> funcionario = funcionarioRepository.fetchByCargo(id_cargo);
		return funcionario;
	}
	
	
//	Inserir funcionário em um cargo
	public Funcionario inserirFuncionarioNoCargo(Integer id_funcionario, Cargo cargo) {
		Funcionario funcionario = buscarUmFuncionario(id_funcionario);
		funcionario.setCargo(cargo);
		return funcionarioRepository.save(funcionario);
	}
	
//	Retirar funcionário de um cargo
	public Funcionario deixarFuncionarioSemCargo(Integer id_funcionario) {
		Funcionario funcionario = buscarUmFuncionario(id_funcionario);
		funcionario.setCargo(null);
		return funcionarioRepository.save(funcionario);
	}

//	ADD funcionário no cargo

	public Funcionario InserirFuncionario(Integer id_cargo, Funcionario funcionario) {
		funcionario.setId_funcionario(null);
		Cargo cargo = cargoService.buscarUmCargo(id_cargo);
		funcionario.setCargo(cargo);

		return funcionarioRepository.save(funcionario);

	}
	
	
//	Apenas cadastrar funcionário
	public Funcionario cadastrarFuncionario(Funcionario funcionario) {
		funcionario.setId_funcionario(null);
		return funcionarioRepository.save(funcionario);
	}

//	DELETE funcionário
	public void deletarUmFuncionario(Integer id_funcionario) {
		funcionarioRepository.deleteById(id_funcionario);
	}

//	PUT funcionário
	public Funcionario editarFuncionario(Funcionario funcionario) {
		buscarUmFuncionario(funcionario.getId_funcionario());
		return funcionarioRepository.save(funcionario);
	}
	
//	Buscar funcionários com cargo
	public List<List> funcionarioComCargo(){
		return funcionarioRepository.funcionarioComCargo();
	}


}
