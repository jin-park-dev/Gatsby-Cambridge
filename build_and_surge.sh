#!/bin/bash


echo "Building static files to be uploaded"
echo ""
gatsby build
echo "Uploading to surge.sh"
surge public/ --domain jin-dev.surge.sh