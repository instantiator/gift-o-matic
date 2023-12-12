#!/bin/bash

./build.sh

pushd puzzle-matic/out
python3 -m http.server 3000
popd
