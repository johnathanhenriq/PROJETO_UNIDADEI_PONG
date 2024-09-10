class RecompensaVermelho extends Recompensa {
    constructor(x, y) {
        super(x, y, 'vermelho');
    }

    aplicar(barraEsquerda, barraDireita, pontuacao) {
        pontuacao.dobrarPontuacao(); // Dobra a pontuação
    }
}
