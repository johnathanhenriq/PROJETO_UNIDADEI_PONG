class Bola {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speedX = 5;
        this.speedY = 5;
    }

    draw(context) {
        context.beginPath(); //desenha a trajetoria da bola
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
    }   

    update(canvas, barraEsquerda, barraDireita, colisao, pontuacao) {
        this.x += this.speedX;
        this.y += this.speedY;

        //colisao cima, baixo
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY = -this.speedY;
        }
        //colisao bola-barra
        if (colisao.detectar(this, barraEsquerda) || colisao.detectar(this, barraDireita)) {
            this.speedX = -this.speedX;
        }

        //colisao esq, dir
        if (this.x + this.radius > canvas.width) {
            pontuacao.incrementarEsquerda();
            this.reset(canvas);
        }

        if (this.x - this.radius < 0) {
            pontuacao.incrementarDireita();
            this.reset(canvas);
        }
    }

    reset(canvas) {
        this.x = canvas.width / 2; // inicializar na metade do mundo
        this.y = canvas.height / 2;
        this.speedX = -this.speedX; //inicializa sempre na posição contraria (cima/baixo)
    }
}
