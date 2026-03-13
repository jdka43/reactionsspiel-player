radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.setLedColor(0x007fff)
        if (input.buttonIsPressed(Button.A)) {
            radio.sendValue(player, 1)
        } else if (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB)) {
            radio.sendValue(player, 2)
        }
    } else if (receivedNumber == 2) {
        basic.setLedColor(0xff0000)
        if (input.buttonIsPressed(Button.B)) {
            radio.sendValue(player, 2)
        } else if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.AB)) {
            radio.sendValue(player, 1)
        }
    } else if (receivedNumber == 3) {
        if (input.buttonIsPressed(Button.AB)) {
            basic.setLedColor(0xffff00)
            radio.sendValue(player, 3)
        } else if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            radio.sendValue(player, 1)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    player = receivedString
})
let player = ""
radio.setGroup(88)
WaitUntilBlocks.waitUntilButtonPressed(Button.A)
radio.sendString("player")
basic.showString("senden")
