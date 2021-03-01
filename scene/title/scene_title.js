class SceneTitle extends GScene {
    constructor(game) {
        super(game)
        this.setup()
        this.game = game
        game.registerAction('Enter', function () {
            let s = Scene.new(game)
            game.replaceScene(s)
        })
    }
    setup() {
        let game = this.game
        // 加入bg
        let bg = GImage.new(game, 'bg')
        this.addElement(bg)
        // 加入地面
        this.floor = Floor.new(game)
        this.addElement(this.floor)
        // 加入标题
        let title0 = GImage.new(game, 'title0')
        title0.x = 80
        title0.y = 100
        this.addElement(title0)
        let 开始 = "回车开始,空格跳"
        this.label = GLabel.new(game, 开始, 90, 200)
        this.addElement(this.label)

    }
    draw() {
        super.draw()
    }

}
