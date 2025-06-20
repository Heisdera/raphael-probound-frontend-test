/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * Include any dynamic or error routes as necessary.
 * @type {string[]}
 */
export const publicRoutes: string[] = []

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged-in users to the `DEFAULT_SIGNIN_REDIRECT`.
 * @type {string[]}
 */
export const authRoutes: string[] = [
  '/signin', // Sign-in page
  '/signup', // Sign-up page
  '/error', // Generic error page
]

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for authentication-related API requests.
 * @type {string}
 */
export const apiAuthPrefix: string = '/api/auth'

/**
 * The default redirect path after successful login.
 * Ensure consistency with middleware and app logic.
 * @type {string}
 */
export const DEFAULT_SIGNIN_REDIRECT: string = '/dashboard'
