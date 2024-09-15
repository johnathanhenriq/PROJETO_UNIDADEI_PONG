class Recompensa {
    constructor(x, y, tipo, canvas) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
        this.width = 20;
        this.height = 20;
        this.velocidade = 2;
        this.duracao = 10000; // 10 segundos de duração
        this.startTime = Date.now();
        this.canvas = canvas; // Armazena o canvas
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.tipo === 'amarelo' ? 'yellow' : 'red';
        context.fill();
        context.closePath();
    }

    update() {
        // Movimento do drop em direção ao destino já é gerenciado em sua própria classe
        if (Date.now() - this.startTime > this.duracao) {
            return true; // Drop expirado
        }
        return false;
    }

    colidiuCom(barra) {
        return this.x < barra.x + barra.width &&
               this.x + this.width > barra.x &&
               this.y < barra.y + barra.height &&
               this.y + this.height > barra.y;
    }

    // Método aplicar será implementado nas subclasses
    aplicar(barraEsquerda, barraDireita, pontuacao) {}
}
