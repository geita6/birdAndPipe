class GScene {
    constructor(game) {
        this.game = game
        this.debugModeEnabled = true
        this.elements = []
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    addElement(img){
        img.scene = this
        this.elements.push(img)
    }
    removeElement(img) {
        img.scene = this
        for (let i = 0; i < this.elements.length; i++) {
            if (this.elements[i] == img) {
                this.elements.splice(i, 1)
            }
        }
    }
    draw() {
        for (let e of this.elements){
            e.draw()
        }
    }
    update() {
        this.debug && this.debug()
        if (this.debugModeEnabled){
            for (let i = 0; i < this.elements.length; i++) {
                let e = this.elements[i]
                e.debug && e.debug()
            }
        }
        for (let i = 0; i < this.elements.length; i++) {
            let e = this.elements[i]
            e.update()
        }
    }
}
