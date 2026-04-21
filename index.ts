/**
 * Timestamp Prepender Extension
 * 
 * Automatically prepends the current date and time to every user prompt.
 * Format: YYYY-MM-DD - HH:mm
 * 
 * Example:
 *   User types: "Hello, how are you?"
 *   Sent to LLM: "2026-04-21 - 14:30 | Hello, how are you?"
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

function getTimestamp(): string {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	return `${year}-${month}-${day} - ${hours}:${minutes}`;
}

export default function (pi: ExtensionAPI) {
	// Prepend timestamp to all user input
	pi.on("input", async (event, ctx) => {
		// Skip if already has our format or empty
		if (!event.text.trim()) return;

		// Skip extension commands and skill/template expansion
		if (event.text.startsWith("/") && !event.text.startsWith("//")) {
			return;
		}

		const timestamp = getTimestamp();
		const separator = " | ";

		// Check if already has timestamp (avoid double-prepending)
		if (event.text.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}/)) {
			return;
		}

		return {
			action: "transform",
			text: `${timestamp}${separator}${event.text}`,
		};
	});

	// Register command to toggle the prepender on/off
	let isEnabled = true;

	pi.registerCommand("timestamp-on", {
		description: "Enable timestamp prepender",
		handler: async (_args, ctx) => {
			isEnabled = true;
			ctx.ui.notify("Timestamp prepender enabled", "info");
		},
	});

	pi.registerCommand("timestamp-off", {
		description: "Disable timestamp prepender",
		handler: async (_args, ctx) => {
			isEnabled = false;
			ctx.ui.notify("Timestamp prepender disabled", "info");
		},
	});

	pi.registerCommand("timestamp-toggle", {
		description: "Toggle timestamp prepender on/off",
		handler: async (_args, ctx) => {
			isEnabled = !isEnabled;
			ctx.ui.notify(
				`Timestamp prepender ${isEnabled ? "enabled" : "disabled"}`,
				"info"
			);
		},
	});
}
