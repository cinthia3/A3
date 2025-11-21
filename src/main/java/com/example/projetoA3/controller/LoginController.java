package com.example.projetoA3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.projetoA3.model.Cadastro;
import com.example.projetoA3.model.Login;
import com.example.projetoA3.repository.CadastroRepository;
import com.example.projetoA3.service.TokenService;

import com.example.projetoA3.model.AuthResponse;

@RestController
@RequestMapping("/fazer-login")
public class LoginController {

    private final TokenService tokenService;
    private final CadastroRepository cadastroRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public LoginController(TokenService tokenService, CadastroRepository cadastroRepository, PasswordEncoder passwordEncoder) {
    this.tokenService = tokenService;
    this.cadastroRepository = cadastroRepository;
    this.passwordEncoder = passwordEncoder;
}



    @PostMapping
    public ResponseEntity<AuthResponse> login(@RequestBody Login login) {
        Cadastro cadastro = cadastroRepository.findByEmail(login.getEmail());

        if (cadastro == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new AuthResponse("Usuário não encontrado. Cadastre-se primeiro."));
        }
        if (passwordEncoder.matches(login.getSenha(), cadastro.getSenha())) {
            String token = tokenService.generateToken(cadastro.getEmail());
            return ResponseEntity.ok(new AuthResponse(token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED) .body(new AuthResponse("Senha incorreta, tente novamente"));
        }
        
    }
}
