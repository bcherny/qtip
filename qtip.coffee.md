
	qtip = do ->

		div = null

		options =
			dataAttribute: 'data-qtip'
			id: 'qtip'
			visibleClass: 'visible'

## initialize

		initialize = ->

attach events

			elements = document.querySelectorAll "[title][#{options.dataAttribute}]"

			for element in elements

mobile

				element.addEventListener 'touchstart', show
				element.addEventListener 'touchend', hide

desktop

				element.addEventListener 'mousedown', show
				element.addEventListener 'mouseup', hide

create qtip div

			div = document.createElement 'div'
			div.id = options.id
			document.body.appendChild div

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