#!/usr/bin/env node
// browser-sync that uses parcel for build and live reloading
import fs from 'fs'
import Bundler from 'parcel'
import BrowserSync from 'browser-sync'

const package_json = JSON.parse(fs.readFileSync('./package.json'))
const bundler = new Bundler(package_json.entries || './src/index.*')
const browserSync = BrowserSync.create()

bundler.on('bundled', bundle => {
  if (browserSync.active) {
    browserSync.reload() // TODO: pass list of files in bundle for HMR
  }
})

browserSync.init({
  open: false,                     // better defaults
  online: false,
  ...package_json['browser-sync'], // use options in package.json if present
  server: bundler.options.outDir,  // server mode, using bundler's directory
  watch: false,                    // watching is done by bundler
}, (err, bs) => {
  if (err && err.message) console.error(err.message)
  bs.options.middleware = bundler.middleware()
})
