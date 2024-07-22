# Changelog

All relevant changes to Semantic Props will be documented here.

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