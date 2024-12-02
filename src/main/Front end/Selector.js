const dropdownProcessador = document.querySelector('.dropdown');
const selectProcessador = dropdownProcessador.querySelector('.select');
const caretProcessador = dropdownProcessador.querySelector('.caret');
const menuProcessador = dropdownProcessador.querySelector('.menuP');
const optionsProcessador = menuProcessador.querySelectorAll('li');
const selectedProcessador = dropdownProcessador.querySelector('.selected');

const dropdownPlacaVideo = document.querySelectorAll('.dropdown')[1]; 
const selectPlacaVideo = dropdownPlacaVideo.querySelector('.select');
const caretPlacaVideo = dropdownPlacaVideo.querySelector('.caret');
const menuPlacaVideo = dropdownPlacaVideo.querySelector('.menuP');
const optionsPlacaVideo = menuPlacaVideo.querySelectorAll('li');
const selectedPlacaVideo = dropdownPlacaVideo.querySelector('.selected');

const dropdownPlacaMae = document.querySelector('.dropdownPM');
const selectPlacaMae = dropdownPlacaMae.querySelector('.select');
const caretPlacaMae = dropdownPlacaMae.querySelector('.caret');
const menuPlacaMae = dropdownPlacaMae.querySelector('.menuPM');
const optionsPlacaMae = menuPlacaMae.querySelectorAll('li');
const selectedPlacaMae = dropdownPlacaMae.querySelector('.selected');

const botoesProcessador = document.querySelectorAll('.botaoProcessador button');
const botoesPlacaVideo = document.querySelectorAll('.botaoPVideo button');

let fabricanteProcessadorAtivo = null;
let fabricantePlacaVideoAtivo = null;

function gerenciarSelecao(botoes, classeAtiva, filtroTipo) {
    botoes.forEach((botao) => {
        botao.addEventListener('click', (event) => {
            event.preventDefault();  

            botoes.forEach((btn) => btn.classList.remove(classeAtiva));
         
            botao.classList.add(classeAtiva);

            if (filtroTipo === "processador") {
                fabricanteProcessadorAtivo = botao.getAttribute('data-fabricante');
                aplicarFiltro(fabricanteProcessadorAtivo, filtroTipo);
            } else if (filtroTipo === "placaVideo") {
                fabricantePlacaVideoAtivo = botao.getAttribute('data-fabricante');
                aplicarFiltro(fabricantePlacaVideoAtivo, filtroTipo);
            }
        });
    });
}

function toggleDropdown(select, caret, menu) {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
}

function aplicarFiltro(fabricante, tipoFiltro) {
    let options, selectedText;

    if (tipoFiltro === "processador") {
        options = optionsProcessador;
        selectedText = selectedProcessador;
    } else if (tipoFiltro === "placaVideo") {
        options = optionsPlacaVideo;
        selectedText = selectedPlacaVideo;
    }

    if (!fabricante || fabricante === '--') {
        selectedText.innerText = '--';  
        return;  
    }
    
    options.forEach(item => {
        item.style.display = 'block';  
    });

    console.log(options);

    options.forEach(item => {
        if (item.textContent === '--' || item.textContent.includes(fabricante)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function selecionarItem(tipoFiltro) {
    let options, select, caret, menu, selectedText;
    if (tipoFiltro === "processador") {
        options = optionsProcessador;
        select = selectProcessador;
        caret = caretProcessador;
        menu = menuProcessador;
        selectedText = selectedProcessador;
    } else if (tipoFiltro === "placaVideo") {
        options = optionsPlacaVideo;
        select = selectPlacaVideo;
        caret = caretPlacaVideo;
        menu = menuPlacaVideo;
        selectedText = selectedPlacaVideo;
    }

    options.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();

            selectedText.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            if (tipoFiltro === "processador") {
                aplicarFiltro(fabricanteProcessadorAtivo, "processador");
            } else if (tipoFiltro === "placaVideo") {
                aplicarFiltro(fabricantePlacaVideoAtivo, "placaVideo");
            }
        });
    });
}

function garantirExibicaoInicial() {
    aplicarFiltro('--', "processador");
    aplicarFiltro('--', "placaVideo");
}
gerenciarSelecao(botoesProcessador, 'botao-selecionado', "processador");
gerenciarSelecao(botoesPlacaVideo, 'botao-selecionado', "placaVideo");

const botaoProcessadorInicial = document.querySelector('.botaoProcessador .botao-selecionado');
if (botaoProcessadorInicial) {
    fabricanteProcessadorAtivo = botaoProcessadorInicial.getAttribute('data-fabricante');
    aplicarFiltro(fabricanteProcessadorAtivo, "processador");
} else {

    garantirExibicaoInicial();
}

const botaoPlacaVideoInicial = document.querySelector('.botaoPVideo .botao-selecionado');
if (botaoPlacaVideoInicial) {
    fabricantePlacaVideoAtivo = botaoPlacaVideoInicial.getAttribute('data-fabricante');
    aplicarFiltro(fabricantePlacaVideoAtivo, "placaVideo");
} else {

    garantirExibicaoInicial();
}

selectProcessador.addEventListener('click', () => toggleDropdown(selectProcessador, caretProcessador, menuProcessador));
selectPlacaVideo.addEventListener('click', () => toggleDropdown(selectPlacaVideo, caretPlacaVideo, menuPlacaVideo));

selecionarItem("processador");
selecionarItem("placaVideo");
function gerarArquivoDownload(fonteRecomendada, valorAproximado) {
    const configuracoes = `
Processador: ${selectedProcessador.innerText}
Placa de Vídeo: ${selectedPlacaVideo.innerText}
Fabricante do Processador: ${fabricanteProcessadorAtivo}
Fabricante da Placa de Vídeo: ${fabricantePlacaVideoAtivo}
Placa Mãe: ${selectedPlacaMae.innerText}
Fonte Recomendada: ${fonteRecomendada}
Valor Aproximado: ${valorAproximado}
`;

    const blob = new Blob([configuracoes], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'configuracoes_maquina.txt';  
    link.click();
}

// const url = "http://127.0.0.1:5500/src/main/Front%20end/index.html";

//         fetch(url)
//         .then(response => {
//             console.log("entrou");
//             console.log(response);
//             return response.text();
//         })
//         .then(data => {
//             console.log("entrou em data:");
//             console.log(data);
//         })
//         .catch(error => {
//             console.error("Erro:", error); 
//         });

function toggleDropdownPlacaMae() {
    selectPlacaMae.classList.toggle('select-clicked');
    caretPlacaMae.classList.toggle('caret-rotate');
    menuPlacaMae.classList.toggle('open');
}

function selecionarItemPlacaMae() {
    optionsPlacaMae.forEach(option => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            selectedPlacaMae.innerText = option.innerText;
            selectPlacaMae.classList.remove('select-clicked');
            caretPlacaMae.classList.remove('caret-rotate');
            menuPlacaMae.classList.remove('open');
        });
    });
}

function mostrarAlerta(mensagem) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');

    alertMessage.textContent = mensagem; 
    alertBox.classList.remove('hidden'); 
}

function fecharAlerta() {
    const alertBox = document.getElementById('customAlert');
    alertBox.classList.add('hidden'); 
}


document.querySelector('.botaoSubmit').addEventListener('click', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário sempre

    // Validações
    const processadorSelecionado = document.querySelector('.botaoProcessador .active');
    const videoSelecionado = document.querySelector('.botaoPVideo .active');
    const placaMaeSelecionada = document.querySelector('.dropdownPM .selected');

    // Verifique se todos os campos necessários estão preenchidos
    if (!processadorSelecionado || processadorSelecionado.textContent === '--') {
        mostrarAlerta("Por favor, selecione um processador.");
        return; // Interrompe o processo
    }

    if (!videoSelecionado || videoSelecionado.textContent === '--') {
        mostrarAlerta("Por favor, selecione uma placa de vídeo.");
        return; // Interrompe o processo
    }

    if (!placaMaeSelecionada || placaMaeSelecionada.textContent === '--') {
        mostrarAlerta("Por favor, selecione uma placa mãe.");
        return; // Interrompe o processo
    }

    console.log(selectedProcessador.textContent);
    console.log(selectedPlacaVideo.textContent);
    fetch('http://localhost:3000/exemplo/dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ placaDeVideo: selectedPlacaVideo.textContent, processador: selectedProcessador.textContent })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta do servidor:', data);
        atualizarInformacoes('Acima de ' + data.tdp + ' de TDP', data.precoProduto);
        // Caso todas as validações sejam aprovadas, prossiga
        gerarArquivoDownload(data.tdp, data.precoProduto);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
});

function atualizarInformacoes(novaFonte, novoValor) {
    const fontesRecomendadas = document.querySelector('.Considerações :nth-child(2)');
    const valorAproximado = document.querySelector('.Considerações h3:last-child');

    fontesRecomendadas.textContent = `Fonte recomendada: ${novaFonte}`;
    valorAproximado.textContent = `Valor aproximado: R$ ${novoValor}`;
  }



