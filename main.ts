input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C G C5 F G A C F ", 120), music.PlaybackMode.UntilDone)
})
let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.clear()
basic.forever(function () {
    basic.showString("martin")
    basic.showIcon(IconNames.Sword)
})
basic.forever(function () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(1000)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    basic.pause(1000)
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(1000)
})
