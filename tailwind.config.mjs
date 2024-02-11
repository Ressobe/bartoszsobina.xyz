/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: "hsl(var(--color-background) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        accent2: "hsl(var(--color-accent2) / <alpha-value>)",
        background: "hsl(var(--color-background) / <alpha-value>)",
        text: "hsl(var(--color-text) / <alpha-value>)",
      }
    },
	},
	plugins: [],
}
