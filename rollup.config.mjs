import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

// eslint-disable-next-line
const packageJson = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts', '.tsx'],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: 'dist/types',
    }),
  ],
  external: ['react', 'react-native'],
};