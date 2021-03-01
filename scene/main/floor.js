class Floor extends GScene {

    constructor(game) {

        super(game)
        this.setup()
    }
    setup() {
        let game = this.game
        this.keyigvds = true
        // 循环复制地面
        this.grounds = []
        for (let i = 0; i < 30; i++) {
            let g = GImage.new(game, 'ground')
            g.x = i * 20
            g.y = 540
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 5

    }
    update() {
        super.update()
        if (this.keyigvds == false) {
            return 
        }
        // 地面移动
        this.skipCount--
        let offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for (let i = 0; i < 30; i++) {
            let g = this.grounds[i]
            g.x += offset
        }
    }
}
