#!/usr/bin/env node

console.log('here---')

console.log(process.argv.slice(2))

import { createRequire } from 'node:module'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { $ } from './core.js'
import url from 'node:url'
;(async () => {
  const helloFilePath = './hello.mjs'
  const origin = resolve(helloFilePath)
  const require = createRequire(origin)
  Object.assign(global, { require })
  await import(url.pathToFileURL(origin).toString())
})()

Object.assign(global, { $ })
