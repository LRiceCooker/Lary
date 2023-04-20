import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

// eslint-disable-next-line
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
      
    ],
    plugins: [
      resolve(),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.ts', '.tsx'],
        presets: ['@babel/preset-env', '@babel/preset-react'],
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
    external: ['react', 'react-native'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    plugins: [dts.default()],
  },
];
