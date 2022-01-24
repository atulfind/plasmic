import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "eC3957cz5oM1PLKUA6hg6t",  // ID of a project you are using
      token: "8vUmSWuS9Sk1mLJfG1rhFp0ZWpGkPDJri5A2ZGv8d6K17HO7pYK8GlHgNUBYsPWRPVDBPw9aA8QR6cEPKWg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})