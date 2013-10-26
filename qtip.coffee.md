
	qtip = do ->

		div = null

## initialize

		initialize = ->

hover event

			elements = document.querySelectorAll '[title][data-qtip]'

			for element in elements

				element.addEventListener 'touchstart', show
				element.addEventListener 'touchend', hide

				element.addEventListener 'mousedown', show
				element.addEventListener 'mouseup', hide

create qtip div

			div = document.createElement 'div'
			div.id = 'qtip'
			document.body.appendChild div

## hide

		hide = (event) ->

			div.classList.remove 'visible'

## show

		show = (event) ->

			event.preventDefault()

			element = event.target

compute the `element`'s position on screen

			offset = element.getBoundingClientRect()

set the qtip's text

			div.innerHTML = element.getAttribute 'title'

position it

			left = offset.left + (element.offsetWidth - div.offsetWidth)/2
			top = offset.top + element.offsetHeight

			div.style.cssText = """
				left: #{left}px;
				top: #{top}px;
			"""

show it

			div.classList.add 'visible'

go!

		initialize()