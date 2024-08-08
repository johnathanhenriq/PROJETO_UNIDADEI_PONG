class Pontuacao {
    constructor() {
        this.pontosEsquerda = 0;
        this.pontosDireita = 0;
    }

//metodos para aumentar a pontuação 

    incrementarEsquerda() {
        this.pontosEsquerda++;
    }

    incrementarDireita() {
        this.pontosDireita++;
    }

    draw(context, canvas) {
        //context.fillStyle = 'blue';
        context.font = '20px Arial'; // alterar a fonte da pontuação
        context.fillText(this.pontosEsquerda, canvas.width / 4, 20); //posicionamento da pontuação
        context.fillText(this.pontosDireita, 3 * canvas.width / 4, 20); //posicionamento da pontuação
    }
}
