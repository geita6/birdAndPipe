class SceneEnd extends GScene {
    constructor(game) {
        super(game)
        this.setup()
        this.game = game
        game.registerAction('r', function () {
            let s = SceneTitle.new(game)
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
        let title1 = GImage.new(game, 'title1')
        title1.x = 80
        title1.y = 100
        this.addElement(title1)
        let 结束 = "按 r 返回标题界面"
        this.label = GLabel.new(game, 结束, 90, 200)
        this.addElement(this.label)

    }
    draw() {
        super.draw()
        // this.game.context.fillStyle = "white";
        // this.game.context.fillText(this.label.text, 100, 190)
    }

}
