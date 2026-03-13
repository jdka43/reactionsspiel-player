radio.onReceivedNumber(function (receivedNumber) {
    if (ist_gedrückt == 1) {
        if (receivedNumber == 1) {
            basic.setLedColor(0x007fff)
            if (input.buttonIsPressed(Button.A)) {
                radio.sendValue(player, 1)
                basic.setLedColor(0x000000)
            } else if (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB)) {
                radio.sendValue(player, 2)
                basic.setLedColor(0x000000)
            }
        } else if (receivedNumber == 2) {
            basic.setLedColor(0xff0000)
            if (input.buttonIsPressed(Button.B)) {
                radio.sendValue(player, 2)
                basic.setLedColor(0x000000)
            } else if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.AB)) {
                radio.sendValue(player, 1)
                basic.setLedColor(0x000000)
            }
        } else if (receivedNumber == 3) {
            if (input.buttonIsPressed(Button.AB)) {
                basic.setLedColor(0xffff00)
                radio.sendValue(player, 3)
                basic.setLedColor(0x000000)
            } else if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                radio.sendValue(player, 1)
                basic.setLedColor(0x000000)
            }
        }
    }
})
radio.onReceivedString(function (receivedString) {
    player = receivedString
    radio.setGroup(88)
    basic.showString("p:")
    basic.showString(player)
    basic.pause(1000)
    basic.clearScreen()
    ist_gedrückt = 1
})
let player = ""
let ist_gedrückt = 0
ist_gedrückt = 0
radio.setGroup(88)
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
if (input.buttonIsPressed(Button.A)) {
    radio.setGroup(99)
    radio.sendString("player")
    basic.showString("send")
}
