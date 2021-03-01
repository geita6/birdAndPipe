class GLabel {
    constructor(game, text, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.text = text
        this.setup()
    }
    setup() {
        this.textx = this.x + 28
        this.texty = this.y + 45
        this.texture = this.game.textureByName('label')
    }
    static new(game, text, x, y) {
        let i = new this(game, text, x, y)
        return i
    }
    draw() {
        this.game.context.drawImage(this.texture, this.x, this.y)

        this.game.context.fillText(this.text, this.textx, this.texty)

        this.game.context.font = "20px Arial";

    }
    update() {
    }

}

