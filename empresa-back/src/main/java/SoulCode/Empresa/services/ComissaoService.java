package SoulCode.Empresa.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SoulCode.Empresa.models.Comissao;
import SoulCode.Empresa.models.Funcionario;
import SoulCode.Empresa.models.StatusComissao;
import SoulCode.Empresa.repositorys.ComissaoRepository;


@Service
public class ComissaoService {

	@Autowired
	private ComissaoRepository comissaoRepository;
	
	@Autowired
	private FuncionarioService funcionarioService;
	
	public List<Comissao> buscarTodasComissoes(){
		return comissaoRepository.findAll();
	}
	
	public Comissao buscarUmaComissao(Integer id_comissao) {
		Optional<Comissao> comissao = comissaoRepository.findById(id_comissao);
		return comissao.orElseThrow();
	}
	
	public List<Comissao> buscarComissaoDoFuncionario(Integer id_funcionario) {
		List<Comissao> comissao = comissaoRepository.buscarComissaoDoFuncionario(id_funcionario);
		return comissao;
			}
	
	public Comissao inserirComissao(Comissao comissao, Integer id_funcionario) {
		comissao.setId_comissao(null);
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		comissao.setFuncionario(funcionario);
		return comissaoRepository.save(comissao);
	}
	
	public void deletarUmaComissao(Integer id_comissao) {
		comissaoRepository.deleteById(id_comissao);
	}
	
	public Comissao editarComissao(Comissao comissao , Integer id_comissao , Integer id_funcionario) {
		buscarUmaComissao(id_comissao);
		Funcionario funcionario = funcionarioService.buscarUmFuncionario(id_funcionario);
		comissao.setFuncionario(funcionario);
		return comissaoRepository.save(comissao);
	}
	
	
	public Comissao pagarComissao(Integer id_comissao) {
		Comissao comissao = buscarUmaComissao(id_comissao);
		StatusComissao cs1 = StatusComissao.PAGA;
		comissao.setCo_status(cs1);
		return comissaoRepository.save(comissao);
		}
	
	
	public Comissao cancelarComissao(Integer id_comissao) {
		Comissao comissao = buscarUmaComissao(id_comissao);
		StatusComissao cs1 = StatusComissao.CANCELADA;
		comissao.setCo_status(cs1);
		return comissaoRepository.save(comissao);
		}
	
}
