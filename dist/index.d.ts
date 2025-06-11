import { Property } from 'csstype';

/** Default CSS `border-style` property value. */
declare const borderStyle: Property.BorderStyle;
/** Default CSS `border-collapse` property value. */
declare const borderCollapse: Property.BorderCollapse;
/** Default CSS `border-spacing` property value. */
declare const borderSpacing: Property.BorderSpacing;
/** Semantic Props for CSS `border-radius` property value. */
declare const radius: Record<string, Property.BorderRadius>;

/** Semantic Props for CSS `color` value type. */
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
declare const letterSpacing: Record<string, Property.LetterSpacing>;
/** Semantic Props for CSS `line-height` property value. */
declare const line: Record<string, Property.LineHeight>;
/** Semantic Props for CSS `word-spacing` property value. */
declare const wordSpacing: Record<string, Property.WordSpacing>;

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

/** Semantic Props container sizes in `rem` units. */
declare const container: Record<string, `${number}rem`>;
/** Semantic Props sizes in `rem` or `em` units. */
declare const size: Record<string, `${number}${"rem" | "em"}`>;

/** Default CSS `caption-side` property value. */
declare const captionSide: Property.CaptionSide;
/** Reverse of default CSS `caption-side` property value. */
declare const reverseCaptionSide: Property.CaptionSide;
/** Default CSS `empty-cells` property value. */
declare const emptyCells: Property.EmptyCells;

/** Semantic Props for CSS `<easing-function>` type. */
declare const easing: Record<string, Property.AnimationTimingFunction>;
/** Semantic Props for CSS `<time>` type. */
declare const time: Record<string, Property.AnimationDuration>;

/** Semantic Props for CSS `scaleX()` transform function. */
declare const scaleX: Record<string, `scaleX(${number})`>;
/** Semantic Props for CSS `scaleY()` transform function. */
declare const scaleY: Record<string, `scaleY(${number})`>;
/** Semantic Props for CSS `scale()` transform function. */
declare const scale: Record<string, `scale(${number})`>;

/** Semantic Props for CSS `z-index` property value. */
declare const z: Record<string, Property.ZIndex>;

export { blur, borderCollapse, borderSpacing, borderStyle, boxShadow, brightness, captionSide, color, container, contrast, dropShadow, easing, emptyCells, family, letterSpacing, line, opacity, radius, ratio, reverseCaptionSide, safe, saturate, scale, scaleX, scaleY, size, textShadow, time, weight, wordSpacing, z };
