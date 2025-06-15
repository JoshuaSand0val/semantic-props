// Semantic Props for sizing containers, fonts and whitespace.

import type { Property } from "csstype";

/** Semantic Props container sizes. */
export const container: Record<string, Property.InlineSize> = {
	smallest: "10rem", // 160px
	smaller: "15rem", // 240px
	small: "20rem", // 320px
	medium: "30rem", // 480px
	large: "40rem", // 640px
	larger: "64rem", // 1024px
	largest: "80rem" // 1280px
};

/** Semantic Props font/whitespace sizes. */
export const size: Record<string, Property.FontSize> = {
	[-5]: "0.125rem", // 2px
	[-4]: "0.25rem", // 4px
	[-3]: "0.5rem", // 8px
	[-2]: "0.75rem", // 12px
	[-1]: "0.875rem", // 14px
	[0]: "1rem", // 16px
	[1]: "1.125rem", // 18px
	[2]: "1.25rem", // 20px
	[3]: "1.5rem", // 24px
	[4]: "1.875rem", // 30px
	[5]: "2.25rem", // 36px
	[6]: "3rem", // 48px
	[7]: "3.75rem", // 60px
	[8]: "4.5rem", // 72px
	[9]: "6rem", // 96px
	[10]: "8rem", // 128px
	smaller: "0.875em", // 14/16px
	larger: "1.125em", // 18/16px
	margin: "5%"
};