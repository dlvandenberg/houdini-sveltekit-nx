import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

// An experiment on adding tsconfig aliases to the svelte config for NX monorepos
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const baseTsConfigJson = require('../../tsconfig.base.json');

const nxTsconfigPaths = baseTsConfigJson.compilerOptions.paths;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// The following (along with lines 4-6) are an experimental way to include the
		// default NX import paths from the base config as aliases for a Sveltekit app.
		alias: {
			...Object.keys(nxTsconfigPaths).reduce((result, key) => {
				result[key] = `../../${nxTsconfigPaths[key][0]}`;
				return result;
			}, {}),
			$houdini: path.resolve('.', '$houdini')
		}
	}
};

export default config;
