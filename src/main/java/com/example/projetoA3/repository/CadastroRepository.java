package com.example.projetoA3.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.projetoA3.model.Cadastro;

public interface CadastroRepository extends JpaRepository<Cadastro, Long> {
    

// Exemplo: buscar por email
Cadastro findByEmail(String email);

// Exemplo: buscar por nome
List<Cadastro> findByNomeContaining(String nome);
}

