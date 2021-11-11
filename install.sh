#! /bin/sh
rm -rf ./node_modules
npm install
cd playwright
rm -rf ./node_modules
npm install
npm install -D @playwright/test

