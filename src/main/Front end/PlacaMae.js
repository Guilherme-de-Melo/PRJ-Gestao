document.querySelectorAll('.botaoProcessador button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.botaoProcessador button').forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
        const fabricante = button.getAttribute('data-fabricante');
        atualizarSoquetePlacaMae(fabricante);
    });
});

function atualizarSoquetePlacaMae(fabricante) {
    const soqueteMap = {
        "AMD": "AM5",
        "Intel": "LGA1700"
    };

    const soquete = soqueteMap[fabricante] || "--";

    const selectedPlacaMae = document.querySelector('.dropdownPM .selected');
    selectedPlacaMae.innerText = soquete;

    document.querySelectorAll('.menuPM li').forEach(item => {
        item.classList.remove('active');
        if (item.innerText === soquete) {
            item.classList.add('active');
        }
    });
}
function atualizarInformacoes(novaFonte, novoValor) {
    const fontesRecomendadas = document.querySelector('.Consideracoes h3:first-child');
    const valorAproximado = document.querySelector('.Consideracoes h3:last-child');
  
    fontesRecomendadas.textContent = `Fonte recomendada: ${novaFonte}`;
    valorAproximado.textContent = `Valor aproximado: R$ ${novoValor}`;
  }
  
  atualizarInformacoes('Nova Fonte XYZ', 150);

  