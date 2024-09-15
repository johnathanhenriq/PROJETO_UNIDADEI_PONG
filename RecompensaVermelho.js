class RecompensaVermelho extends Recompensa {
    constructor(x, y, canvas) {
        super(x, y, 'vermelho', canvas);
    }

    aplicar(barraEsquerda, barraDireita, pontuacao) {
        pontuacao.dobrarPontuacao(); // Dobra a pontuação
    }
}
