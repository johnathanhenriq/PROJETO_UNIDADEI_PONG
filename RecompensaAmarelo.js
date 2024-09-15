class RecompensaAmarelo extends Recompensa {
    constructor(x, y, canvas) {
        super(x, y, 'amarelo', canvas);
    }

    aplicar(barraEsquerda, barraDireita) {
        if (this.x < this.canvas.width / 2) { // Se a recompensa está perto da barra direita
            barraDireita.diminuirAltura(0.7); // Diminui a altura da barra direita em 30%
        } else { // Caso contrário, diminui a altura da barra esquerda
            barraEsquerda.diminuirAltura(0.7); // Diminui a altura da barra esquerda em 30%
        }
    }
}
