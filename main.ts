input.onButtonPressed(Button.A, function () {
    basic.showString("Bilangan cacah")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    hitungan = 0
})
input.onButtonPressed(Button.B, function () {
    hitungan += 1
    if (hitungan < 9) {
        basic.showNumber(hitungan)
    } else {
        basic.showNumber(9)
        hitungan = 9
    }
})
let hitungan = 0
basic.showNumber(0)
hitungan = 0
