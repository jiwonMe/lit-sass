import { build } from 'esbuild';
import aliasPlugin from 'esbuild-plugin-alias';
import path from 'path';

build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  target: 'es2020',
  minify: true,
  bundle: true,
  plugins: [
    aliasPlugin(
      { aliases: { '@': path.resolve(__dirname, 'src') } },
    ),
  ],
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: process.env.NODE_ENV === 'test',
  },
  sourcemap: true,
});
