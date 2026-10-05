import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root to this project to avoid Next.js picking a
  // parent-level lockfile when inferring the root.
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
