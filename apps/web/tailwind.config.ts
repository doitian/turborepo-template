import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./app/**/*.tsx",
    "../../packages/ui/src/**/*.tsx",
    "../../packages/ui/node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  presets: [sharedConfig],
};

export default config;
