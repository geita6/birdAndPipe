class Pipes {
    constructor(game) {
        this.game = game
        this.setup()
    }
    setup() {
        this.pipes = []
        this.pipeSpace = config.pipe_space.value
        this.管子横向间距 = config.管子横向间距.value
        this.columsOfPipes = 10
        this.keyigvds = true

        for (let i = 0; i < this.columsOfPipes; i++) {
            let p1 = GImage.new(this.game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * this.管子横向间距

            let p2 = GImage.new(this.game, 'pipe')
            p2.x = p1.x

            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-400, -100)
        p2.y = p1.y + p1.h + this.pipeSpace
    }
    update() {
        this.debug && this.debug()
        if (this.keyigvds == false) {
            return
        }

        for (let p of this.pipes) {
            p.x -= 5
            if (p.x < -100) {
                p.x += this.管子横向间距 * this.columsOfPipes
            }
        }
    }

    draw() {
        let context = this.game.context
        for (let p of this.pipes) {
            context.save()
            let w2 = p.w / 2
            let h2 = p.h / 2
            let x = p.x + w2
            let y = p.y + h2
            context.translate(x, y)
            let scalex = p.flipX ? -1 : 1
            let scaleY = p.flipY ? -1 : 1
            context.scale(scalex, scaleY)

            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)

            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }


}