import css from 'rollup-plugin-import-css';
import terser from '@rollup/plugin-terser';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import externals from 'rollup-plugin-node-externals';
export default {
  input: 'lib/index.js',
  watch:true,
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    name: '<HADLEY ENTER A NAME HERE>',
  },
  preserveSymlinks: true,
  plugins: [image(), nodeResolve(), commonjs(), css(), terser(), externals({
    deps: false,
  })],
};