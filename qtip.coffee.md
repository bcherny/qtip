# qtip

	qtip = do ->

		options =
			dataAttribute: 'data-qtip'
			id: 'qtip-bubble'
			visibleClass: 'visible'

create qtip div

		div = document.createElement 'div'
		div.id = options.id
		document.body.appendChild div

register that holds elements that we've already initialized

		attached = {}

## initialize

		initialize = ->

attach events

			elements = document.querySelectorAll "[title][#{options.dataAttribute}]"

			for element in elements

ensure we don't double-attach elements

				if element not of attached

					attached[element] = true

mobile

					element.addEventListener 'touchstart', show
					element.addEventListener 'touchend', hide

desktop

					element.addEventListener 'mousedown', show
					element.addEventListener 'mouseup', hide

## hide

		hide = (event) ->

			div.classList.remove options.visibleClass

## show

		show = (event) ->

			event.preventDefault()

			element = event.target

compute the `element`'s position on screen

			offset = element.getBoundingClientRect()

set the qtip's text

			div.innerHTML = element.getAttribute 'title'

position it

			left = offset.left + (element.offsetWidth - div.offsetWidth) / 2
			top = offset.top - div.offsetHeight - 10 # small offset so it's not covered up by the user's finger

			div.style.cssText = """
				left: #{left}px;
				top: #{top}px;
			"""

show it

			div.classList.add options.visibleClass

go!

		initialize()

return

		face =
			initialize: initialize