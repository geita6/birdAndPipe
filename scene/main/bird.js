class Bird extends GAnimation {
    constructor(game) {
        super(game)
        this.setup()

    }
    setup() {
        // 位置
        this.x = 150
        this.y = 200
        // 重力和加速度
        this.gy = 10
        this.vy = 0
        this.rotation = 0

        this.deathline = 510

        this.alive = true
    }
    jump() {
        if (this.alive == true) {
            this.vy = -10
            this.rotation = -45
        } else {
            return
        }

    }
    update() {
        super.update();
        // 更新alpha
        if (this.alpha > 0) {
            this.alpha -= 0.05
        }
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2
        if (this.y > this.deathline) {
            this.y = this.deathline
        }
        // 更新角度,旋转
        if (this.rotation < 45) {
            this.rotation += 5
        }
    }
    down() {
        this.alive = false
        this.rotation = 90
    }
    hasPoint(x, y) {
        let xIn = x >= this.x && x <= this.x + this.w
        let yIn = y >= this.y && y <= this.y + this.h
        return xIn && yIn
    }

}