import { Property } from 'csstype';

/** Default CSS `border-style` property value. */
declare const borderStyle: Property.BorderStyle;
/** Default CSS `border-collapse` property value. */
declare const borderCollapse: Property.BorderCollapse;
/** Default CSS `border-spacing` property value. */
declare const borderSpacing: Property.BorderSpacing;
/** Semantic Props for CSS `border-radius` property value. */
declare const radius: Record<string, Property.BorderRadius>;

/** Semantic Props for CSS `<color>` type. */
declare const color: Record<string, Property.Color>;

/** Semantic Props for CSS `filter` `blur()` function. */
declare const blur: Record<string, Property.Filter>;
/** Semantic Props for CSS `filter` `brightness()` function. */
declare const brightness: Record<string, Property.Filter>;
/** Semantic Props for CSS `filter` `contrast()` function. */
declare const contrast: Record<string, Property.Filter>;
/** Semantic Props for CSS `filter` `saturate()` function. */
declare const saturate: Record<string, Property.Filter>;

/** Semantic Props for CSS `font-family` property value. */
declare const family: Record<string, Property.FontFamily>;
/** Semantic Props for CSS `font-weight` property value. */
declare const weight: Record<string, Property.FontWeight>;
/** Semantic Props for CSS `letter-spacing` property value. */
declare const letter: Record<string, Property.LetterSpacing>;
/** Semantic Props for CSS `line-height` property value. */
declare const line: Record<string, Property.LineHeight>;
/** Semantic Props for CSS `word-spacing` property value. */
declare const word: Record<string, Property.WordSpacing>;

/** Semantic Props for CSS `opacity` property value. */
declare const opacity: Record<string, Property.Opacity>;

/** Semantic Props for CSS `aspect-ratio` property value. */
declare const ratio: Record<string, Property.AspectRatio>;

/** Semantic Props for display safe-areas. */
declare const safe: Record<string, string>;

/** Semantic Props for CSS `text-shadow` property value. */
declare const textShadow: Record<string, Property.TextShadow>;
/** Semantic Props for CSS `box-shadow` property value. */
declare const boxShadow: Record<string, Property.BoxShadow>;
/** Semantic Props for CSS `filter` `drop-shadow()` function. */
declare const dropShadow: Record<string, Property.Filter>;

/** Semantic Props container sizes. */
declare const container: Record<string, Property.InlineSize>;
/** Semantic Props font/whitespace sizes. */
declare const size: Record<string, Property.FontSize>;

/** Default CSS `caption-side` property value. */
declare const captionSide: Property.CaptionSide;
/** Default CSS `empty-cells` property value. */
declare const emptyCells: Property.EmptyCells;

/** Semantic Props for CSS `<easing-function>` type. */
declare const easing: Record<string, Property.AnimationTimingFunction>;
/** Semantic Props for CSS `<time>` type. */
declare const time: Record<string, Property.AnimationDuration>;

/** Semantic Props for CSS `scaleX()` transform function. */
declare const scaleX: Record<string, Property.Transform>;
/** Semantic Props for CSS `scaleY()` transform function. */
declare const scaleY: Record<string, Property.Transform>;
/** Semantic Props for CSS `scale()` transform function. */
declare const scale: Record<string, Property.Transform>;

/** Semantic Props for CSS `z-index` property value. */
declare const z: Record<string, Property.ZIndex>;

declare const _import_blur: typeof blur;
declare const _import_borderCollapse: typeof borderCollapse;
declare const _import_borderSpacing: typeof borderSpacing;
declare const _import_borderStyle: typeof borderStyle;
declare const _import_boxShadow: typeof boxShadow;
declare const _import_brightness: typeof brightness;
declare const _import_captionSide: typeof captionSide;
declare const _import_color: typeof color;
declare const _import_container: typeof container;
declare const _import_contrast: typeof contrast;
declare const _import_dropShadow: typeof dropShadow;
declare const _import_easing: typeof easing;
declare const _import_emptyCells: typeof emptyCells;
declare const _import_family: typeof family;
declare const _import_letter: typeof letter;
declare const _import_line: typeof line;
declare const _import_opacity: typeof opacity;
declare const _import_radius: typeof radius;
declare const _import_ratio: typeof ratio;
declare const _import_safe: typeof safe;
declare const _import_saturate: typeof saturate;
declare const _import_scale: typeof scale;
declare const _import_scaleX: typeof scaleX;
declare const _import_scaleY: typeof scaleY;
declare const _import_size: typeof size;
declare const _import_textShadow: typeof textShadow;
declare const _import_time: typeof time;
declare const _import_weight: typeof weight;
declare const _import_word: typeof word;
declare const _import_z: typeof z;
declare namespace _import {
  export {
    _import_blur as blur,
    _import_borderCollapse as borderCollapse,
    _import_borderSpacing as borderSpacing,
    _import_borderStyle as borderStyle,
    _import_boxShadow as boxShadow,
    _import_brightness as brightness,
    _import_captionSide as captionSide,
    _import_color as color,
    _import_container as container,
    _import_contrast as contrast,
    _import_dropShadow as dropShadow,
    _import_easing as easing,
    _import_emptyCells as emptyCells,
    _import_family as family,
    _import_letter as letter,
    _import_line as line,
    _import_opacity as opacity,
    _import_radius as radius,
    _import_ratio as ratio,
    _import_safe as safe,
    _import_saturate as saturate,
    _import_scale as scale,
    _import_scaleX as scaleX,
    _import_scaleY as scaleY,
    _import_size as size,
    _import_textShadow as textShadow,
    _import_time as time,
    _import_weight as weight,
    _import_word as word,
    _import_z as z,
  };
}

export { _import as default };
