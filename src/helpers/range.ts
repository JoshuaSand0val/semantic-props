/** Value type for range calculation function. */
type value = string | number;

/** Calculates CSS range from percentage, min and max. */
export default (min: value, max: value, percentage: value) => {
	return `calc(${min} + (${max} - ${min}) * ${percentage})`;
};