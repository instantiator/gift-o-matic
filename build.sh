#!/bin/bash

pushd gift-o-matic
mkdir -p out
rm -r out/*
npx next build
popd
