class GGame {
    constructor(fps, images, runCallback) {

        window.fps = fps
        this.images = images
        this.runCallback = runCallback

        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')

        let self = this

        window.addEventListener('keydown', event => {
            self.keydowns[event.key] = 'down'
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = 'up'
        })

        this.init()

    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(img) {
        this.context.drawImage(img.texture, img.x, img.y)
    }
    update() {
        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        let g = this
        let actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            let status = g.keydowns[key]
            if (status == 'down') {
                g.actions[key]('down')
            } else if (status == 'up') {
                g.actions[key]('up')
                g.keydowns[key] = null
            }
        }
        g.update()
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        g.draw()
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }
    textureByName(name) {
        let g = this
        let img = g.images[name]
        return img
    }
    runWithScene(scene) {
        let g = this
        g.scene = scene
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)
    }

    init() {
        let g = this
        let loads = []
        let names = Object.keys(g.images)

        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                g.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }
}
