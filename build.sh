#!/bin/bash

pug views/ --out static/ && prettier ./static/*.html --write
cp -r public/ static/
