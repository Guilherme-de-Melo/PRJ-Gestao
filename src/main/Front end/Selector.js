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

    options.forEach(item => {
        item.style.display = 'block';  
    });

    if (!fabricante || fabricante === '--') {
        selectedText.innerText = '--';  
        return;  
    }

    options.forEach(item => {
        if (item.innerText === '--' || item.innerText.includes(fabricante)) {
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
function gerarArquivoDownload() {
    const configuracoes = `
Processador: ${selectedProcessador.innerText}
Placa de Vídeo: ${selectedPlacaVideo.innerText}
Fabricante do Processador: ${fabricanteProcessadorAtivo}
Fabricante da Placa de Vídeo: ${fabricantePlacaVideoAtivo}
Placa Mãe: ${selectedPlacaMae.innerText}
Fonte Recomendada: ${fonteRecomendada.innerText}
Valor Aproximado: ${valorAproximado.innerText}
`;

    const blob = new Blob([configuracoes], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'configuracoes_maquina.txt';  
    link.click();
}

const url = "http://127.0.0.1:5500/src/main/Front%20end/index.html";

        fetch(url)
        .then(response => {
            console.log("entrou");
            console.log(response);
            return response.text();
        })
        .then(data => {
            console.log("entrou em data:");
            console.log(data);
        })
        .catch(error => {
            console.error("Erro:", error); 
        });

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

selectPlacaMae.addEventListener('click', () => toggleDropdownPlacaMae());

selecionarItemPlacaMae()


document.querySelector('.botaoSubmit').addEventListener('click', (event) => {
    event.preventDefault(); 
    gerarArquivoDownload();  
});