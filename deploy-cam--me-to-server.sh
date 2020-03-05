#!/usr/bin/env bash

today=`date '+%Y_%m_%d__%H_%M_%S'`;
TARGET='cam-maths:~/public_html'
LOCAL_DEV=${PWD}
echo ""
echo "Running sync-cam--me-to-server.sh"
echo "ME =======> University of Cambridge, Maths (Live)"
read -p "Are you sure? (y/n) " -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "===============Building with RavenID============="
    gatsby build --prefix-paths
    echo "===============RSYNC Uploading============="
    rsync -avz $LOCAL_DEV/public/ ${TARGET}
    echo "================================================"
    echo ""
    echo "================================="
    echo "gatsby public build uploaded ^^^^^"
    echo "================================="
fi
