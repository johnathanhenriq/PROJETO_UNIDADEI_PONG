class Recompensa {
    constructor(x, y, tipo, destinoX, destinoY, canvas) {
        this.x = x;
        this.y = y;
        this.tipo = tipo;
        this.width = 20;
        this.height = 20;
        this.velocidade = 2;
        this.destinoX = destinoX;
        this.destinoY = destinoY;
        this.duracao = 10000; // 10 segundos de duração
        this.startTime = Date.now();
        this.canvas = canvas; // Armazena o canvas
        this.direcao = Math.random() > 0.5 ? 1 : -1; // Determina a direção inicial aleatoriamente

        // Ajusta a posição inicial e o destino com base na direção
        if (this.direcao === -1) {
            this.x = canvas.width - this.width; // Inicia do lado direito
            this.destinoX = 0; // Destino é o lado esquerdo
        } else {
            this.x = 0; // Inicia do lado esquerdo
            this.destinoX = canvas.width - this.width; // Destino é o lado direito
        }
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fillStyle = this.tipo === 'amarelo' ? 'yellow' : 'red';
        context.fill();
        context.closePath();
    }

    update(bola) {
        const dx = this.destinoX - this.x;
        const dy = this.destinoY - this.y;
        const distancia = Math.sqrt(dx * dx + dy * dy);
        
        if (distancia > 0) {
            const moveX = (dx / distancia) * this.velocidade;
            const moveY = (dy / distancia) * this.velocidade;

            this.x += moveX;
            this.y += moveY;
        }

        if (this.colidiuCom(bola)) {
            console.log('Colisão detectada:', this, bola);
            return true; // Indica que a recompensa deve ser removida após a colisão
        }

        if (Date.now() - this.startTime > this.duracao) {
            return true; // Recompensa expirada
        }
        return false;
    }

    colidiuCom(bola) {
        const colidiu = this.x < bola.x + bola.radius &&
                        this.x + this.width > bola.x - bola.radius &&
                        this.y < bola.y + bola.radius &&
                        this.y + this.height > bola.y - bola.radius;
        
        if (colidiu) {
            console.log('Colisão detectada:', this.bola);
        }
        
        return colidiu;
    }

    aplicar(barraEsquerda, barraDireita, pontuacao) {
        // Esta função será sobrescrita nas subclasses
    }
}
