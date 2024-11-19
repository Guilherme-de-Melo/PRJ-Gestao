package org.example;

public class Processador {

    private int id;
    private String fabricante;
    private double averageTemp;
    private double custo;
    private double tdp;

    public Processador(int id, double averageTemp, String fabricante, double custo, double tdp) {
        this.id = id;
        this.averageTemp = averageTemp;
        this.custo = custo;
        this.tdp = tdp;
    }

    public double getCusto() {
        return custo;
    }
    
}
