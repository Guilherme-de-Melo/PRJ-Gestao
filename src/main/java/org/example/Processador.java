package org.example;

public class Processador {

    private int id;
    private String fabricante;
    private String modelo;
    private String soquete;
    private double custo;
    private double tdp;

    public Processador(int id, String fabricante, String modelo, String soquete, double custo, double tdp) {
        this.id = id;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.soquete = soquete;
        this.custo = custo;
        this.tdp = tdp;
    }

    public double getCusto() {
        return custo;
    }
    
}
