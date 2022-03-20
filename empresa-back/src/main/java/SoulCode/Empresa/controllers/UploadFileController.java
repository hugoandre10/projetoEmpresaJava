package SoulCode.Empresa.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import SoulCode.Empresa.models.Supervisor;
import SoulCode.Empresa.services.SupervisorService;
import SoulCode.Empresa.utils.UploadFileUtil;



@RestController
@RequestMapping("empresa")
@CrossOrigin
public class UploadFileController {

	@Autowired
	private SupervisorService supervisorService;
	
	@PostMapping("/envio/{id_supervisor}")
	public ResponseEntity<String> enviarDados	(@PathVariable Integer id_supervisor, MultipartFile foto, @RequestParam(value="nome") String nome){
	String fileName = nome;
	
	String uploadDir = "C:/Users/hugos/Desktop/empresa-front/empresaFront/src/assets/img";
	
	String nomeMaisCaminho = "assets/img/" + nome;
	
	Supervisor supervisor = supervisorService.salvarFoto(id_supervisor,nomeMaisCaminho);
		
	try {
		UploadFileUtil.salvarArquivo(uploadDir, fileName, foto);
	}
	catch(Exception e) {
		System.out.println("O arquivo não foi enviado" + e);
	
	}
	
	System.out.println("Deu certo: " + nomeMaisCaminho);
	
	return ResponseEntity.ok("Arquivo enviado");
	
	}
}