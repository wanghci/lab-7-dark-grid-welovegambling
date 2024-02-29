# Dark Grid

1. We'll continue from where you left off last lab.
    * Clone this repository!
1. First, let's add the `dark.css` file to the HTML file
    * It's external, so we'll need to use the [`link` tag](https://www.w3schools.com/tags/tag_link.asp).
1. Take a look at the `debug.css` file.
    * See how it has a [nested rule](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting) for the `debug` class?
    * In the HTML file, add the `debug` class to the `body` tag. What happens?
        * All the rules inside that nested rule now applies!
1. In `dark.css`, add a rule for a `dark` class
    * Inside, add nested rules to style your page to be dark themed
    * Follow the format of the `debug` rule in `debug.css`
    * Try changing the class of the `body` to `dark` and test it! (Remove the class once done.)
1. Edit `dark.css` such that if the user has a "dark" preference, the page will be styled with a dark theme.
    * Hint: is there a [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) to check for this?
    * You will (unfortunately) need to copy-and-paste all the nested rules you created for the `dark` class
    * Paste these nested rules inside the rule with your media query
1. Add a script tag that loads `script.js` at the bottom of the `body` in the HTML file.
    * `script.js` is an **external** JavaScript file, so we'll need to use the [`src` attribute](https://www.w3schools.com/TAGS/att_script_src.asp).
1. In `script.js`, add an event listener such that when the user clicks any of the 3 `nav` items, the page will render with the selected color scheme.
    * Most often, dynamic styling is best implemented via (a) defining style rules for corresponding classes in css and (b) adding/removing classes to the necessary elements dynamically
    * Remember, we can add/remove/toggle and element's classes using the [`.classList` property](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) in JavaScript

## Optional: Making it more better

So, this works, but the DRY (Don't Repeat Yourself) principle says that having the same exact styles for the media query AND the dark class feels bad, man.

Possible alternative:
* Instead of having the media query in CSS, you can [check the media query](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) in JavaScript!
    * You can then dynamically change the class based on the result of this query
* You can use CSS variables to store the state of dark/light mode and then specify both colors in a single rule
    * This is trickier to understand, BUT it is a really *elegant* solution
    * [This article](https://css-tricks.com/a-dry-approach-to-color-themes-in-css/) and [this StackOverflow post](https://stackoverflow.com/a/70934827) give some explanation
