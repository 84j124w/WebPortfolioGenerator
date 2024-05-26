package com.wpg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class WebsitePortfolioGeneratorApplication implements CommandLineRunner{
	@Autowired
	PasswordEncoder encoder;
	public static void main(String[] args) {
		SpringApplication.run(WebsitePortfolioGeneratorApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		System.out.println(encoder.encode("123"));
		
	}

}
