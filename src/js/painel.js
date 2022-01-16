/* Planejamento
    Quando clicar na seta avançar, temos que  esconder todas as imagens e mostrar a próxima imagem.

        A imagem atual começa no 0 porque é a primeira imagem
    assim que for clicado no avançar é preciso adicionar mais 1 ao contador das imagens pra poder saber que agora eu vou mostrar a segunda imagem.

        Esconder todas as imagens.
            Pegar todas as imagens usando o DOM e remover a classe 'mostrar'.

        Mostrar a próxima imagem, descobrir qual é a próxima, e colocar a classe 'mostrar' nela.
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', () => {

    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagem();
});

setaVoltar.addEventListener('click', () => {

    if (imagemAtual === 0) {
        return;
    }
    
    imagemAtual--;
    
    esconderImagens();
    mostrarImagem();
});

