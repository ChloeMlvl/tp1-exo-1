let posX = 0
let posY = 0
input.onButtonPressed(Button.A, function () {
    if (posX >= 0) {
        led.plot(posX, posY)
        led.unplot(posX, posY)
        posX += -1
        led.plot(posX, posY)
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX <= 4) {
        led.plot(posX, posY)
        led.unplot(posX, posY)
        posX += 1
        led.plot(posX, posY)
    }
})
basic.forever(function () {
    led.plot(posX, posY)
    basic.pause(1000)
    led.unplot(posX, posY)
    posX += 1
    if (posX > 4) {
        while (posX != 0) {
            led.plot(posX, posY)
            basic.pause(1000)
            led.unplot(posX, posY)
            posX += -1
        }
    }
})
