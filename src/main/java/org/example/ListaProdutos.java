package org.example;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ListaProdutos {

    List<Processador> listaProcessadores;
    ListaProdutos(){

        List<Processador> listaProcessador = new ArrayList<>();
        listaProcessador.add(new Processador(1, "AMD", "Ryzen™ 5 9600X", "AM5", 2000, 65));
        listaProcessador.add(new Processador(2, "AMD", "Ryzen™ 7 9700X", "AM5", 2500, 65));
        listaProcessador.add(new Processador(3, "AMD", "Ryzen™ 7 9800X3D", "AM5", 4200, 120));
        listaProcessador.add(new Processador(4, "AMD", "Ryzen™ 9 9900X", "AM5", 3200, 120));
        listaProcessador.add(new Processador(5, "AMD", "Ryzen™ 9 9950X", "AM5", 4800, 170));
        listaProcessador.add(new Processador(1, "Intel", "Intel® Core™ i3 14100F", "Raptor Lake", 620, 60));
        listaProcessador.add(new Processador(2, "Intel", "Intel® Core™ i5 14400F", "Raptor Lake", 1230, 65));
        listaProcessador.add(new Processador(3, "Intel", "Intel® Core™ i5-14600KF", "Raptor Lake", 2000, 125));
        listaProcessador.add(new Processador(4, "Intel", "Intel® Core™ i7-14700KF", "Raptor Lake", 2800, 125));
        listaProcessador.add(new Processador(5, "Intel", "Intel® Core™ i9-14900K", "Raptor Lake", 3800, 125));
        this.listaProcessadores = listaProcessador;

    }
    
}
