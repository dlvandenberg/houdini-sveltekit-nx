
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NX_CLI_SET: string;
	export const NVM_INC: string;
	export const NX_LOAD_DOT_ENV_FILES: string;
	export const TERM_PROGRAM: string;
	export const _P9K_TTY: string;
	export const NVM_CD_FLAGS: string;
	export const TERM: string;
	export const SHELL: string;
	export const TMPDIR: string;
	export const TERM_PROGRAM_VERSION: string;
	export const NODE_AUTH_TOKEN: string;
	export const TERM_SESSION_ID: string;
	export const NX_TASK_TARGET_TARGET: string;
	export const ZSH: string;
	export const NEDAP_SM_DOCKER_PULL_USER: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const LS_COLORS: string;
	export const COMMAND_MODE: string;
	export const NX_TASK_HASH: string;
	export const NEDAP_SM_DOCKER_PULL_PASSWORD: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PAGER: string;
	export const GITHUB_REPO_TOKEN: string;
	export const LSCOLORS: string;
	export const NX_TASK_TARGET_PROJECT: string;
	export const GITHUB_PACKAGES_READ_USERNAME: string;
	export const PATH: string;
	export const NX_WORKSPACE_ROOT: string;
	export const _: string;
	export const LaunchInstanceID: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const P9K_SSH: string;
	export const P9K_TTY: string;
	export const ITERM_PROFILE: string;
	export const XPC_FLAGS: string;
	export const FORCE_COLOR: string;
	export const RBENV_SHELL: string;
	export const XPC_SERVICE_NAME: string;
	export const SHLVL: string;
	export const HOME: string;
	export const COLORFGBG: string;
	export const LC_TERMINAL_VERSION: string;
	export const ITERM_SESSION_ID: string;
	export const LESS: string;
	export const LOGNAME: string;
	export const LC_CTYPE: string;
	export const LERNA_PACKAGE_NAME: string;
	export const BUN_INSTALL: string;
	export const NVM_BIN: string;
	export const _P9K_SSH_TTY: string;
	export const LC_TERMINAL: string;
	export const GITHUB_PACKAGES_READ_TOKEN: string;
	export const SECURITYSESSIONID: string;
	export const SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
	export const COLORTERM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NX_CLI_SET: string;
		NVM_INC: string;
		NX_LOAD_DOT_ENV_FILES: string;
		TERM_PROGRAM: string;
		_P9K_TTY: string;
		NVM_CD_FLAGS: string;
		TERM: string;
		SHELL: string;
		TMPDIR: string;
		TERM_PROGRAM_VERSION: string;
		NODE_AUTH_TOKEN: string;
		TERM_SESSION_ID: string;
		NX_TASK_TARGET_TARGET: string;
		ZSH: string;
		NEDAP_SM_DOCKER_PULL_USER: string;
		NVM_DIR: string;
		USER: string;
		LS_COLORS: string;
		COMMAND_MODE: string;
		NX_TASK_HASH: string;
		NEDAP_SM_DOCKER_PULL_PASSWORD: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		PAGER: string;
		GITHUB_REPO_TOKEN: string;
		LSCOLORS: string;
		NX_TASK_TARGET_PROJECT: string;
		GITHUB_PACKAGES_READ_USERNAME: string;
		PATH: string;
		NX_WORKSPACE_ROOT: string;
		_: string;
		LaunchInstanceID: string;
		__CFBundleIdentifier: string;
		PWD: string;
		P9K_SSH: string;
		P9K_TTY: string;
		ITERM_PROFILE: string;
		XPC_FLAGS: string;
		FORCE_COLOR: string;
		RBENV_SHELL: string;
		XPC_SERVICE_NAME: string;
		SHLVL: string;
		HOME: string;
		COLORFGBG: string;
		LC_TERMINAL_VERSION: string;
		ITERM_SESSION_ID: string;
		LESS: string;
		LOGNAME: string;
		LC_CTYPE: string;
		LERNA_PACKAGE_NAME: string;
		BUN_INSTALL: string;
		NVM_BIN: string;
		_P9K_SSH_TTY: string;
		LC_TERMINAL: string;
		GITHUB_PACKAGES_READ_TOKEN: string;
		SECURITYSESSIONID: string;
		SQLITE_EXEMPT_PATH_FROM_VNODE_GUARDS: string;
		COLORTERM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
