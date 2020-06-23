basic.showString("Temp Meter")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.temperature() <= 10) {
        pins.servoWritePin(AnalogPin.P0, 0)
    } else if (input.temperature() > 10 && input.temperature() <= 20) {
        pins.servoWritePin(AnalogPin.P0, 30)
    } else if (input.temperature() > 20 && input.temperature() <= 30) {
        pins.servoWritePin(AnalogPin.P0, 60)
    } else if (input.temperature() > 30 && input.temperature() <= 40) {
        pins.servoWritePin(AnalogPin.P0, 120)
    } else {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.showLeds(`
            . . . # .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showString("Too Hot")
    }
})
