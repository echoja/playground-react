/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */

const svelte = require('svelte/compiler');

const { readFileSync } = require('fs');

const source = readFileSync('svelte-test/test.svelte', 'utf-8');

const result = svelte.compile(source, {
  format: 'esm',
  filename: 'svelte-test/output.js',
  name: 'Sveltest',
  enableSourcemap: false,
  generate: 'dom'
  // css: false,
  // hydratable: false,
  // immutable: false,
  // legacy: false,
  // preserveComments: false,
  // preserveWhitespace: false
  // store: false,
  // accessors: false,
  // customElement: false,
  // tag: 'sveltest',
  // cssHash: () => 'sveltest',
  // onwarn: () => {},
  // onerror: () => {},
  // outputFilename: 'hoho.js'
  // shared: false,
  // immutableOptions: {},
  // context: {},
  // moduleContext: {},
  // external: [],
  // paths: {},
  // extensions: [],
  // preserveEntrySignatures: 'strict'
});

console.log(result);
