import makeloc from './mod.ts'

const { __dirname,  __filename } = makeloc(import.meta)

console.log('Dirname:', __dirname, '\nFilename:', __filename)