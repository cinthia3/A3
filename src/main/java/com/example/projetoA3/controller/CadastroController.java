package com.example.projetoA3.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.example.projetoA3.model.Cadastro;
import com.example.projetoA3.repository.CadastroRepository;

@RestController
@RequestMapping("/cadastro")
public class CadastroController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CadastroRepository cadastroRepository;

    @PostMapping
    public Cadastro criarCadastro(@RequestBody Cadastro cadastro) {
        System.out.println(">>> MÉTODO criarCadastro() FOI CHAMADO");
        // Captura a senha original
        String senhaOriginal = cadastro.getSenha();

        // Criptografa a senha
        String senhaCriptografada = passwordEncoder.encode(senhaOriginal);

        // Exibe no console para verificação
        System.out.println("Senha original: " + senhaOriginal);
        System.out.println("Senha criptografada: " + senhaCriptografada);

        // Salva a senha criptografada no objeto
        cadastro.setSenha(senhaCriptografada);

        // Salva no banco e retorna
        return cadastroRepository.save(cadastro);
    }

    @GetMapping
    public List<Cadastro> listarCadastros() {
        return cadastroRepository.findAll();
    }
}
