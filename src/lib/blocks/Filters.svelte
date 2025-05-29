<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
    import ReferenceTable from "$lib/components/ReferenceTable.svelte";

	const blur: Record<string, string> = {
		"Lightest Blur": "--lightest-blur",
		"Lighter Blur": "--lighter-blur",
		"Light Blur": "--light-blur",
		"Medium Blur": "--medium-blur",
		"Heavy Blur": "--heavy-blur",
		"Heavier Blur": "--heavier-blur",
		"Heaviest Blur": "--heaviest-blur",
	};

	const brightness: Record<string, string> = {
		"Lowest Brightness": "--lowest-brightness",
		"Lower Brightness": "--lower-brightness",
		"Low Brightness": "--low-brightness",
		"High Brightness": "--high-brightness",
		"Higher Brightness": "--higher-brightness",
		"Highest Brightness": "--highest-brightness"
	};

	const contrast: Record<string, string> = {
		"Lowest Contrast": "--lowest-contrast",
		"Lower Contrast": "--lower-contrast",
		"Low Contrast": "--low-contrast",
		"High Contrast": "--high-contrast",
		"Higher Contrast": "--higher-contrast",
		"Highest Contrast": "--highest-contrast"
	};

	const saturation: Record<string, string> = {
		"Lowest Saturation": "--lowest-saturation",
		"Lower Saturation": "--lower-saturation",
		"Low Saturation": "--low-saturation",
		"High Saturation": "--high-saturation",
		"Higher Saturation": "--higher-saturation",
		"Highest Saturation": "--highest-saturation"
	};

	const reference = Object.values({
		...blur,
		...brightness,
		...contrast,
		...saturation
	});
</script>

<Divider title="Filter Effects" id="filters">
	<ReferenceTable props={reference} />
	<Paragraph>Semantic Props provides CSS <code>filter</code> values for various types of media.</Paragraph>

</Divider>