#!/bin/bash


echo "Clean, Building static files to be uploaded"
echo ""
gatsby clean
gatsby build
echo "Uploading to surge.sh"
surge public/ --domain jin-dev.surge.sh