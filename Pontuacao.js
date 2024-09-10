class Pontuacao {
    constructor(mundo) {
        this.pontosEsquerda = 0;
        this.pontosDireita = 0;
        this.mundo = mundo;
    }

    incrementarEsquerda() {
        this.pontosEsquerda++;
        this.mundo.gerarDrop('esquerda'); // Gere um drop quando o lado esquerdo pontuar
    }

    incrementarDireita() {
        this.pontosDireita++;
        this.mundo.gerarDrop('direita'); // Gere um drop quando o lado direito pontuar
    }

    dobrarPontuacao() {
        this.pontosEsquerda *= 2;
        this.pontosDireita *= 2;
    }

    draw(context, canvas) {
        context.fillStyle = 'blue';
        context.font = '20px Arial';
        context.fillText(this.pontosEsquerda, canvas.width / 4, 20);
        context.fillText(this.pontosDireita, 3 * canvas.width / 4, 20);
    }
}
