@zartsoft/parcel-browser-sync
=============================

This is a wrapper that integrates [Parcel bundler](https://parceljs.org/)
with [browser-sync](https://browsersync.io/). It is a greatly enchanced
version of `parcel serve` that adds synchronisation support to multiple
browsers at once.

See the end of this file for further copyright and license information.


General information
-------------------

- NPM package: https://www.npmjs.com/package/@zartsoft/parcel-browser-sync
- Source code: https://github.com/zartsoft/parcel-browser-sync
- Bug tracker:  https://github.com/zartsoft/parcel-browser-sync/issues


Installation
------------

[Node.js](http://nodejs.org) is required. Use [NPM](https://npmjs.com)
or [Yarn](https://yarnpkg.com/) to install and manage your Node packages.


Installing globally

        npm i -g @zartsoft/parcel-browser-sync
        yarn global add @zartsoft/parcel-browser-sync

Or into your project as developer dependency

        npm i -D @zartsoft/parcel-browser-sync
        yarn add @zartsoft/parcel-browser-sync --dev

You could also run it directly with npx since Node 5.2

        npx @zartsoft/parcel-browser-sync


Usage
-----

Simply run command `parcel-browser-sync` from package root directory.
For now this script doesn't accept any options, but it's on TODO list.
You can customize browser-sync options with package.json and browser-sync key
according to [browser-sync's documentation](https://browsersync.io/docs/options)

Parcel entrypoints are provided by `entries` field of package.json, where it
could be string or array of strings with filenames and wildcards.
Output directory is hard-coded to be default and uses `./dist` for now.

**NOTE: This is a subject to change.**

Programmatic usage is not available at this time.

Version History
---------------

* 0.2.0 (2020-05-16)

        - fixed dependencies

* 0.1.0 (2020-05-16)

        - initial release
        - parcel 1.12.4
        - browser-sync 2.26.7


Copyright and License
--------------------

Uses MIT licensed [Parcel bundler](https://github.com/parcel-bundler/parcel) and
Apache-2.0 licensed [BrowserSync](https://github.com/BrowserSync/browser-sync)

(MIT License)

Copyright (c) 2020 Zart Software

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
