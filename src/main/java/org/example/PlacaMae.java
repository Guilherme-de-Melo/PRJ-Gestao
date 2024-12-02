package org.example;

public class PlacaMae {

    private int id;
    private String nome;
    private String soquete;
    private double preco;

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getSoquete() {
        return soquete;
    }

    public double getPreco() {
        return preco;
    }

    public PlacaMae(int id, String nome, String soquete, double preco) {
        this.id = id;
        this.nome = nome;
        this.soquete = soquete;
        this.preco = preco;
    }

}
