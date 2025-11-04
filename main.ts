input.onButtonPressed(Button.A, function () {
    led.plot(2, 2)
    if (led.brightness() > 254) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            led.setBrightness(214)
            basic.pause(100)
            led.setBrightness(152)
            basic.pause(100)
            led.setBrightness(100)
            basic.pause(100)
            led.setBrightness(88)
            basic.pause(100)
            led.setBrightness(44)
        }
    } else {
        led.setBrightness(0)
        basic.pause(100)
        led.setBrightness(41)
        basic.pause(100)
        led.setBrightness(88)
        basic.pause(100)
        led.setBrightness(152)
        basic.pause(100)
        led.setBrightness(214)
        basic.pause(100)
        led.setBrightness(255)
    }
})
