let e = sel => document.querySelector(sel)

let log = console.log.bind(console)

let imageFromPath = function (path) {
    let img = new Image()
    img.src = path
    return img
}

let rectIntersects = function (a, b) {
    let o = a
    if (b.y > o.y && b.y < o.y + o.h) {
        if (b.x > o.x && b.x < o.x + o.w) {
            return true
        }
    }
    return false
}

let Birdcollision = function (b, p) {
    for (let i = 0; i < p.length; i++) {
        if (b.y > p[i].y && b.y < p[i].y + p[i].h) {
            if (b.x > p[i].x && b.x < p[i].x + p[i].w) {
                return true
            }
        }
        return false
    }

}

const randomBetween = function (start, end) {
    let n = Math.random() * (end - start)
    return Math.floor(n + start)
}