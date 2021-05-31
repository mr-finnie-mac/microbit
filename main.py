# Vibe Light Ver 0.01 #

def on():
    led.plot_bar_graph(5, 5)

def reduceBrightness():
    led.set_brightness(led.brightness() - 10)

def increaseBrightness():
    led.set_brightness(led.brightness() + 10)

def on_forever():
    if input.button_is_pressed(Button.A):
        reduceBrightness()
    elif input.button_is_pressed(Button.B):
        increaseBrightness()
        
basic.forever(on_forever)
on()
