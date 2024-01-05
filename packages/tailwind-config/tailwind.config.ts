import type { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  plugins: [flowbite],
};
export default config;
