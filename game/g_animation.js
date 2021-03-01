class GAnimation {
    constructor(game) {
        this.game = game
        this.frames = []
        for (let i = 1; i < 4; i++) {
            let name = `b${i}`
            let t = game.textureByName(name)
            this.frames.push(t)
        }

        this.texture = this.frames[0]

        this.w = this.texture.width
        this.h = this.texture.height

        this.frameIndex = 0
        this.frameCount = 3
        // 
        this.flipX = false
        
        this.alpha = 1
    }
    static new(game) {
        return new this(game)
    }

    update() {
        // log('anim update', this.frameCount)
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]

        }
    }
    draw() {
        let context = this.game.context

        context.save()
        let w2 = this.w / 2
        let h2 = this.h / 2
        let x = this.x + w2
        let y = this.y + h2
        // 翻转
        context.translate(x, y)
        if (this.flipX) {
            context.scale(-1, 1)
        }

        context.globalAlpha = this.alpha

        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture, 0, 0)
        context.restore()

    }
    move(x) {
        this.flipX = (x < 0)
        this.x += x
    }

}

