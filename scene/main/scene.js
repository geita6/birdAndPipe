class Scene extends GScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
        this.dragBird()
    }
    setup() {
        let game = this.game
        // 加入bg
        let bg = GImage.new(game, 'bg')
        this.addElement(bg)
        // 加入水管
        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)
        // 加入地面
        this.floor = Floor.new(game)
        this.addElement(this.floor)
        //加入鸟动画
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
        // 按 p 暂停
        if (window.paused) {
            return
        }
        for (let p of this.pipe.pipes) {
            // 判断加分
            if (Math.abs(this.bird.x - p.w - p.x) <= 0.5) {
                this.score += 100
                break
            }
            // 判断相撞
            if (p.collide(this.bird)) {
                this.bird.down()
                this.floor.keyigvds = false
                this.pipe.keyigvds = false
            }
        }
        if (this.bird.y == this.bird.deathline) {
            // 跳转到 游戏结束 的场景
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
    // 拖动鸟的位置
    dragBird() {
        let game = this.game
        let b = this.bird
        // mouse event
        let enableDrag = false
        game.canvas.addEventListener('mousedown', function (event) {
            let x = event.offsetX
            let y = event.offsetY
            // 检查是否点中了 ball
            if (b.hasPoint(x, y)) {
                // 设置拖拽状态
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
            log(x, y, 'up')
            enableDrag = false
        })
    }
}


