import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
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
    typescript(),
  ],
  external: ['react', 'react-native'],
};