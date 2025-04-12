import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
export default [
  {
    input: "src/index.ts", // Entry file for components
    output: [
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(), // Excludes peer dependencies from bundle
      nodeResolve({ extensions: [".js", ".ts", ".tsx"] }), // Resolve imports
      commonjs(), // Handle CommonJS dependencies
      typescript({
        tsconfig: "./tsconfig.json",
        noEmitOnError: true,
        noEmit: true,
      }),
      babel({
        extensions: [".js", ".ts", ".tsx"],
        babelHelpers: "bundled",
        presets: ["solid"],
      }),
      terser(), // Minify output
    ],
    external: ["solid-js"], // Prevent bundling Solid itself
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()], // Generate TypeScript declarations
  },
];
