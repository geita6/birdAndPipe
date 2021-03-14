class Scene extends GScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
        this.dragBird()
    }
    setup() {
        let game = this.game
        let bg = GImage.new(game, 'bg')
        this.addElement(bg)
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)
        this.floor = Floor.new(game)
        this.addElement(this.floor)
        this.bird = Bird.new(game)
        this.addElement(this.bird)
        this.birdSpeed = 2
        this.score = 0
    }
    setupInputs() {
        let self = this
        let b = this.bird
        self.game.registerAction('a', function () {
            b.move(-self.birdSpeed)
        })
        self.game.registerAction('d', function () {
            b.move(self.birdSpeed)
        })
        self.game.registerAction(' ', function () {
            b.jump()
        })
    }
    update() {
        if (window.paused) {
            return
        }
        for (let p of this.pipe.pipes) {
            if (Math.abs(this.bird.x - p.w - p.x) <= 0.5) {
                this.score += 100
                break
            }
            if (p.collide(this.bird)) {
                this.bird.down()
                this.floor.keyigvds = false
                this.pipe.keyigvds = false
            }
        }
        if (this.bird.y == this.bird.deathline) {
            let end = SceneEnd.new(this.game)
            this.game.replaceScene(end)
        }
        super.update()

    }
    draw() {
        super.draw()
        this.game.context.fillText('分数: ' + this.score, 50, 100)
        this.game.context.font = "20px Arial";
    }
    dragBird() {
        let game = this.game
        let b = this.bird
        let enableDrag = false
        game.canvas.addEventListener('mousedown', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            if (b.hasPoint(x, y)) {
                enableDrag = true
            }
        })
        game.canvas.addEventListener('mousemove', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            if (enableDrag) {
                log(x, y, 'drag')
                b.x = x
                b.y = y
            }
        })
        game.canvas.addEventListener('mouseup', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            enableDrag = false
        })
    }
}


