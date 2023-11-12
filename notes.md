# width
The `width` property sets the width of an element.

The width of an element does not include padding, borders, or margins!

Note: The `min-width` and `max-width` properties override the `width` property.

# min-width
The `min-width` property defines the minimum width of an element.

If the content is smaller than the minimum width, the minimum width will be applied.

If the content is larger than the minimum width, the `min-width` property has no effect.

Note: This prevents the value of the `width` property from becoming smaller than `min-width`.

# max-width
The `max-width` property defines the maximum width of an element.

If the content is larger than the maximum width, it will automatically change the height of the element.

If the content is smaller than the maximum width, the `max-width` property has no effect.

Note: This prevents the value of the `width` property from becoming larger than `max-width`. The value of the `max-width` property overrides the `width` property.

# height
The `height` property sets the height of an element.

The height of an element does not include padding, borders, or margins!

If `height: auto;` the element will automatically adjust its height to allow its content to be displayed correctly.

If `height` is set to a numeric value (like pixels, (r)em, percentages) then if the content does not fit within the specified height, it will overflow. How the container will handle the overflowing content is defined by the `overflow` property.

Note: The `min-height` and `max-height` properties override the `height` property.

# min-height
The `min-height` property defines the minimum height of an element.

If the content is smaller than the minimum height, the minimum height will be applied.

If the content is larger than the minimum height, the `min-height` property has no effect.

Note: This prevents the value of the `height` property from becoming smaller than `min-height`.

# max-height
The `max-height` property defines the maximum height of an element.

If the content is larger than the maximum height, it will overflow. How the container will handle the overflowing content is defined by the `overflow` property.

If the content is smaller than the maximum height, the `max-height` property has no effect.

Note: This prevents the value of the `height` property from becoming larger than `max-height`. The value of the `max-height` property overrides the `height` property.

# overflow
The `overflow` property specifies what should happen if content overflows an element's box.

This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.

Note: The `overflow` property only works for block elements with a specified height.

# display
The `display` property specifies the display behavior (the type of rendering box) of an element.

In HTML, the default display property value is taken from the HTML specifications or from the browser/user default style sheet. The default value in XML is inline, including SVG elements.

# flexbox
- Main axis
	- Axis following flex direction (horizontal axis for row direction, vertical axis for column direction).
- Cross axis
	- Axis perpendicular to main axis.
- `justify-content`
	- Placement of flex items along main axis.
	- values: flex-start, flex-end, center, space-between, space-around, space-evenly
- `align-items`
	- Placement and sizing of flex items along cross axis.
	- values: normal, stretch, center, flex-start, flex-end, start, end, baseline
- `align-content`
	- Placement and sizing of flex lines along cross axis.
