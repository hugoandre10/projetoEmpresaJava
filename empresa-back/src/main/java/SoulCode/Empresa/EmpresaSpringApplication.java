package SoulCode.Empresa;

import java.util.Locale;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.web.servlet.i18n.FixedLocaleResolver;

@SpringBootApplication
public class EmpresaSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmpresaSpringApplication.class, args);
//		System.out.println(new BCryptPasswordEncoder().encode("1234"));
	}
	
	@Bean
	public FixedLocaleResolver localResolver() {
		return new FixedLocaleResolver(new Locale("pt","BR"));
	}

}
