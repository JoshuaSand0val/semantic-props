# Changelog

All relevant changes to Semantic Props will be documented here.

## [2.0.0] - 2025-MM-DD

A **breaking change** release that greatly improves browser compatibility.

### Added

- Added viewport unit fallbacks to props using container query units.
- Added `--margin-size` prop as replacement for `--responsive-size`. Used for page margins.
- Added `box-shadow` variants of `shadow` props.
- Added fallback values for safe-area props.
- Added new color system using weights numbered `0` to `9`.

### Removed

- Removed color palette relying on CSS relative colors and `light-dark` function.
- Removed `--responsive-size` prop in favor of `--margin-size`.
- Removed use of `:where`, improving browser support.

## [1.0.0] - 2025-01-05

### Added

- Added distributable files for all CSS modules.
- Added border props.
- Added timing-function ease props.
- Added filter props.
- Added `letter-` letter-spacing props.
- Added `word-` word-spacing props.
- Added ratio props.
- Added scale props.
- Added opacity props.

### Changed

- Changed scope selector from `:where(:root, .--semantic)` to `:where(.semantic)`.
- Changed breakpoint into container props.
- Changed color system to implement more colors via weight syntax with light-dark values.
- Changed `--font` prop to `--body-font` and value to `system-ui`.
- Changed `--display-font` value to `var(--body-font)`.
- Changed `--brand-font` to `--accent-font` and value to `var(--body-font)`.
- Changed `-font-leading` props naming to `line-`.
- Changed `--regular-font` value from `400` to `500`.
- Changed `--bold-font` value from `600` to `700`.
- Changed absolute and relative font-size system to include more sizing using `clamp()`.
- Changed `-layer` props naming to `z-`.
- Changed padding, margin `-size` system to use `clamp()`.
- Changed `-timing` props naming to `-time`.

### Removed

- Removed all JavaScript/TypeScript.
- Removed breakpoint JavaScript-powered HTML classes.
- Removed color JavaScript-powered HTML classes.
- Removed all deprecated props.
- Removed `--font-scale-ratio` prop.

### Fixed

- Fixed [prettier](https://prettier.io/) configuration.

## [0.2.1] - 2024-08-10

### Added

- Added configurations for [editorconfig](https://editorconfig.org/) and [prettier](https://prettier.io/).

### Changed

- Changed text color lightness custom properties for light colors, reduced by `0.05` to meet WCAG color contrast requirements.
- Changed color classes to be forced via CSS `color-scheme` property values.
- Changed "responsive-size" custom property to be smaller on extra small breakpoints.

### Fixed

- Fixed breakpoint classes from not taking non-pixel CSS values into account.

## [0.2.0] - 2024-07-21

### Added

- Added new layer custom properties to replace deprecated z-index properties.
- Added "responsive-size" custom property for content padding/margin.
- Added new color custom properties for background and text.
- Added light and dark color classes for querying and forcing color modes in CSS and HTML.
- Added breakpoint classes for querying container sizes in CSS.
- Added "semantic" function for initializing Semantic Props on mount in JavaScript frameworks.
- Added "font-scale-ratio" custom property.
- Added "size-scale-ratio" custom property.

### Changed

- Changed Semantic Props from using `:root` selector to now using `--semantic` class.
- Changed font-size custom properties to use new "font-scale-ratio" custom property.
- Changed "heavy-font" value to `900` from previous `800`.
- Changed font-family custom property stacks using presets from [Modern Font Stacks](https://github.com/system-fonts/modern-font-stacks).
- Changed size custom properties to use new "size-scale-ratio" custom property.

### Deprecated

- Deprecated Z-Index custom properties.
- Deprecated One-Up Size and "content-margin-size" custom properties.

## [0.1.0] - 2024-07-09

### Added

- Added breakpoint, color, font, safe-area, size, timing, and z-index custom properties.

[0.1.0]: https://github.com/JoshuaSand0val/semantic-props/releases/tag/v0.1.0
[0.2.0]: https://github.com/JoshuaSand0val/semantic-props/releases/tag/v0.2.0
[0.2.1]: https://github.com/JoshuaSand0val/semantic-props/releases/tag/v0.2.1
[1.0.0]: https://github.com/JoshuaSand0val/semantic-props/releases/tag/v1.0.0
[2.0.0]: https://github.com/JoshuaSand0val/semantic-props/compare/main...v2.0.0