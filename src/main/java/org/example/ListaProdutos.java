package org.example;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ListaProdutos {

    List<Processador> listaProcessadores;
    List<PlacaMae> listaPlacasMae;

    ListaProdutos(){
        List<Processador> listaProcessador = new ArrayList<>();
        listaProcessador.add(new Processador(1, "AMD", "Ryzen™ 5 9600X", "AM5", 2000, 65));
        listaProcessador.add(new Processador(2, "AMD", "Ryzen™ 7 9700X", "AM5", 2500, 65));
        listaProcessador.add(new Processador(3, "AMD", "Ryzen™ 7 9800X3D", "AM5", 4200, 120));
        listaProcessador.add(new Processador(4, "AMD", "Ryzen™ 9 9900X", "AM5", 3200, 120));
        listaProcessador.add(new Processador(5, "AMD", "Ryzen™ 9 9950X", "AM5", 4800, 170));
        listaProcessador.add(new Processador(1, "Intel", "Intel® Core™ i3 14100F", "LGA 1700", 620, 60));
        listaProcessador.add(new Processador(2, "Intel", "Intel® Core™ i5 14400F", "LGA 1700", 1230, 65));
        listaProcessador.add(new Processador(3, "Intel", "Intel® Core™ i5-14600KF", "LGA 1700", 2000, 125));
        listaProcessador.add(new Processador(4, "Intel", "Intel® Core™ i7-14700KF", "LGA 1700", 2800, 125));
        listaProcessador.add(new Processador(5, "Intel", "Intel® Core™ i9-14900K", "LGA 1700", 3800, 125));
        this.listaProcessadores = listaProcessador;

        List<PlacaMae> listaPlacasMae = new ArrayList<>();
        listaPlacasMae.add(new PlacaMae(1, "A620M","AM5", 630));
        listaPlacasMae.add(new PlacaMae(1, "B650M","AM5", 900));
        listaPlacasMae.add(new PlacaMae(1, "X6700M","AM5", 2000));
        listaPlacasMae.add(new PlacaMae(1, "H610M","LGA 1700", 520));
        listaPlacasMae.add(new PlacaMae(1, "B760M","LGA 1700", 700));
        listaPlacasMae.add(new PlacaMae(1, "Z620M","LGA 1700", 1900));
        this.listaPlacasMae = listaPlacasMae;

    }
    
}
