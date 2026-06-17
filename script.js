// Captura o número do apartamento pela URL ou define '301' como padrão
const apt = new URLSearchParams(location.search).get('apto') || '301';
document.getElementById('apt-num').textContent = apt;


const URL_DIAGRAMA = "EL-13_DIAGR. E TAB CARGA_R02 (2).pdf"; 
const btnDiagrama = document.getElementById('download-diagrama');

if (btnDiagrama) {
  btnDiagrama.href = URL_DIAGRAMA;
  btnDiagrama.target = '_blank';
  btnDiagrama.download = 'diagrama-apto-' + apt + '.pdf';

  btnDiagrama.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}


const URL_TABELA = "EL-13_DIAGR. E TAB CARGA_R02 (3).pdf"; 
const btnTabela = document.getElementById('download-tabela');

if (btnTabela) {
  btnTabela.href = URL_TABELA;
  btnTabela.target = '_blank';
  btnTabela.download = 'tabela-cargas-apto-' + apt + '.pdf';

  btnTabela.addEventListener('click', () => {
    setTimeout(() => {
      alert('Download concluído ou arquivo aberto!');
    }, 500);
  });
}
