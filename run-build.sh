#!/bin/bash

./build.sh

pushd gift-o-matic/out
python3 -m http.server 3000
popd
