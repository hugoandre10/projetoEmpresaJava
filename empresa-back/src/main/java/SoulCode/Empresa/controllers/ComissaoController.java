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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import SoulCode.Empresa.models.Comissao;
import SoulCode.Empresa.services.ComissaoService;



@CrossOrigin
@RestController
@RequestMapping("empresa")
public class ComissaoController {

	@Autowired
	private ComissaoService comissaoService;
	
	
	@GetMapping("/funcionario/comissao")
	public List<Comissao> buscarTodasComissoes(){
	List<Comissao> comissao = comissaoService.buscarTodasComissoes();
	
	return comissao;
		
	}
	
	@GetMapping("/funcionario/comissao/{id_comissao}")
	public ResponseEntity<Comissao> buscarUmaComissao(@PathVariable Integer id_comissao){
		Comissao comissao = comissaoService.buscarUmaComissao(id_comissao);
		return ResponseEntity.ok().body(comissao);
	}
	
	@GetMapping("/funcionario/comissao-funcionario/{id_funcionario}")
	public List<Comissao> buscarComissaoDoFuncionario(@PathVariable Integer id_funcionario){
		List<Comissao> comissao = comissaoService.buscarComissaoDoFuncionario(id_funcionario);
		return comissao;
	}
	
	@PostMapping("/funcionario/comissao/{id_funcionario}")
	public ResponseEntity<Comissao> adicionarComissao(@RequestBody Comissao comissao, @PathVariable Integer id_funcionario){
		comissao = comissaoService.inserirComissao(comissao, id_funcionario);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(comissao.getId_comissao()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping("/funcionario/pagarComissao/{id_comissao}")
	public ResponseEntity<Comissao> pagarComissao(@PathVariable Integer id_comissao){
		comissaoService.pagarComissao(id_comissao);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/funcionario/cancelarComissao/{id_comissao}")
	public ResponseEntity<Comissao> cancelarComissao(@PathVariable Integer id_comissao){
		comissaoService.cancelarComissao(id_comissao);
		return ResponseEntity.noContent().build();
	}
	
	
	@PutMapping("/funcionario/comissao/{id_comissao}/{id_funcionario}")
	public ResponseEntity<Comissao> editarComissao(@RequestBody Comissao comissao , @PathVariable Integer id_comissao ,  @PathVariable Integer id_funcionario){
		comissaoService.editarComissao(comissao, id_comissao , id_funcionario);
		return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping("/funcionario/comissao/{id_comissao}")
	public ResponseEntity<Comissao> deletarUmaComissao(@PathVariable Integer id_comissao){
		comissaoService.deletarUmaComissao(id_comissao);
		return ResponseEntity.noContent().build();
	}
}
