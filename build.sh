#!/bin/bash

pushd puzzle-matic
mkdir -p out
rm -r out/*
npx next build
popd
