/** Calculates CSS range from percentage, min and max. */
export default (min: string, max: string, percentage: string) => {
	return `calc(${min} + (${max} - ${min}) * ${percentage})`;
};