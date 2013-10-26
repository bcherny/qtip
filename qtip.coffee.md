
	qtip = do ->

		div = null

## initialize

		initialize = ->

hover event

			elements = document.querySelectorAll '[title][data-qtip]'
			elements.addEventListener 'mousedown', show
			elements.addEventListener 'mouseup', hide

create qtip div

			div = document.createElement 'div'
			div.id = 'qtip'
			document.appendChild div

## hide

		hide = (event) ->

			div.classList.remove 'visible'

## show

		show = (event) ->

			element = event.target

compute the `element`'s position on screen

			offset = element.getBoundingClientRect()

set the qtip's text

			div.innerHTML = element.getAttribute 'title'

position it

			div.style.cssText = """
				left: #{offset.left}px;
				top: #{offset.top}px;
			"""

show it

			div.classList.add 'visible'

go!

		initialize()