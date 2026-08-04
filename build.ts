import { Buffer } from "node:buffer";
import { minify } from "@minify-html/node";

/** Bun compilation result of source HTML. */
const result = await Bun.build({
	entrypoints: ["./src/index.html"],
	outdir: "./build",
	compile: true,
	target: "browser",
	minify: true
});

// Error out if bundle fails:
if (!result.success) {
	console.error("Bundle failure:", result.logs);
	process.exit(1);
}

/** Build index.html contents. */
const buildHTML = await Bun.file("./build/index.html").text();

/** Minified index.html output. */
const outputHTML = minify(Buffer.from(buildHTML), {
	allow_noncompliant_unquoted_attribute_values: false,
	allow_optimal_entities: true,
	allow_removing_spaces_between_attributes: false,
	keep_closing_tags: true,
	keep_comments: false,
	keep_html_and_head_opening_tags: true,
	keep_input_type_text_attr: false,
	keep_ssi_comments: false,
	minify_css: false,
	minify_doctype: false,
	minify_js: true,
	preserve_brace_template_syntax: true,
	preserve_chevron_percent_template_syntax: true,
	remove_bangs: false,
	remove_processing_instructions: false
}).toString();

// Overwrite build file with output contents:
await Bun.write("./build/index.html", outputHTML);

/** Build index.html Uint8Array. */
const data = new TextEncoder().encode(outputHTML);

/** Data compressed over gzip. */
const gzip = Bun.gzipSync(data);

// Log file sizes to console:
console.log(`Original Size: ${data.byteLength} bytes.`);
console.log(`Gzip Size:     ${gzip.byteLength} bytes.`);