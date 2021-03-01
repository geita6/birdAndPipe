let enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function (event) {
        let k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        }
    })
    // // 控制速度
    // document.querySelector('#id-input-speed').addEventListener('input', function (event) {
    //     let input = event.target
    //     // log(event, input.value)
    //     window.fps = Number(input.value)
    //     log("window.fps",window.fps)
    // })
}

let _main = function () {
    let images = {
        b1: 'img/b1.png',
        b2: 'img/b2.png',
        b3: 'img/b3.png',
        bg: 'img/bg.png',
        ground: 'img/ground.png',
        pipe: 'img/pipe.png',
        title0: 'img/start.png',
        title1: 'img/game_over.png',
        label: 'img/label.png',
    }
    let game = GGame.instance(30, images, function (g) {

        // let s = Scene.new(g)
        let s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}


