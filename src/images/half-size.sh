#!/bin/bash

shopt -s globstar

for file in **/*.png
do
  ext="${file##*.}"
  filename="${file%.*}"
  echo "Copying $file"
  cp -v -- "$file" "${filename}@2x.${ext}"
  echo "Converting $file"
  convert "$file" -resize 50% "$file"
  echo "Finished Converting $file"
  echo "Optimizing $file"
  pngquant -f -v --ext .png $file
  optipng -o7 $file
done
