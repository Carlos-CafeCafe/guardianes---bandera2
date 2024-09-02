enum RadioMessage {
    message1 = 49434
}
function medirDistancia () {
    distancia = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    if (distancia != 0 && distancia < 20) {
        alerta = 1
    } else {
        alerta = 0
    }
    basic.pause(500)
}
let alerta = 0
let distancia = 0
distancia = 30
alerta = 0
basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    medirDistancia()
    while (alerta == 1) {
        for (let index = 0; index < 3; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(100)
        }
        medirDistancia()
    }
})
