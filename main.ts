//  Vibe Light Ver 0.01 #
function on() {
    led.plotBarGraph(5, 5)
}

function reduceBrightness() {
    led.setBrightness(led.brightness() - 10)
}

function increaseBrightness() {
    led.setBrightness(led.brightness() + 10)
}

basic.forever(function on_forever() {
    if (input.buttonIsPressed(Button.A)) {
        reduceBrightness()
    } else if (input.buttonIsPressed(Button.B)) {
        increaseBrightness()
    }
    
})
on()
