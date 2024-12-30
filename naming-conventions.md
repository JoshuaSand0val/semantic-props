# Naming Conventions

Semantic Props can be named after the following conventions:

## CSS Property Names

Primarily, Semantic Props should be named after CSS property names using the name context. Remember: context. The usage must be understandable by the name alone.

A few valid examples:

- Property `font-family` can become `--font-body` or `--font-display`.
- Property `line-height` can become `--line-tall` or `--line-short`.
- Property `background-color` can become `--background-red` or `--background-green`.

A few invalid examples:

- Property `color` should not become `--color-red` as **red** is not replacing any contextual part of the property name. The property `--red` should be used instead (as seen in *CSS keywords*).
- Property `flex-grow` should not become `--flex-1` or `--grow` as the context and semantics are lost. Simply use `--flex-grow` in this context.

## CSS Keywords

In the situation using a property name is invalid or not advantageous (such as with length), an existing CSS keyword can and should be used. Such as `--red` for a `<color>` or `--ease-in` for a `<easing-function>` CSS data type.

## CSS Data Types

If there is no suitable CSS property name or keyword to name after, CSS data types such as `<color>` or `<time>` should be used as a prefix or suffix to the name, whichever is more readable.

Examples include:

- `--primary-color` and `--secondary-color`.
- `--fast-time` and `--slow-time`.

## CSS Values

In the worst case scenario there is no CSS property name, keyword or data type to reference... using the most contextual part of the defined value (or instances intended CSS property name for usage) should be used as a prefix or suffix, again, whichever is more readable.

Examples include:

- `--safe-top` for the CSS environment variable `env(safe-area-inset-top)`;
- `--light-blur` or `--heavy-blur` for CSS filter property `blur()` function.
- `--zoom-in` or `--zoom-out` for the CSS `zoom` property.

## The Extra Syntax

There will be occasions to scale Semantic Props up or down by intensity. For these, rather than use new terminology, use the extra syntax `x-` as a prefix to the size, using numbers to describe the intensity.

Examples include:

- `--font-x-small` or `--font-2x-large` for varied `font-size`.
- `--x-fast-time` or `--x-slow-time` for varied `<time>` data types.
- `--x-low-opacity` or `--x-high-opacity` for varied `opacity`.