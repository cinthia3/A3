package com.example.projetoA3.model;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cadastro")

@Data
public class Cadastro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private String telefone;

     // Getters
    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getTelefone() {
        return telefone;
    }

    // Setters
    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

}
