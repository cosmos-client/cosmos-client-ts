#!/usr/bin/env bash

rm -r ./src/proto
cp -r ~/src/github.com/cosmos/cosmos-sdk/proto ./src/
cp -r ~/src/github.com/cosmos/cosmos-sdk/third_party/proto ./src/

proto_dirs=$(find ./src/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
proto_files=()

for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

./node_modules/.bin/pbjs \
  -o ./src/generated/proto.js \
  -t static-module \
  -w es6 \
  --es6 \
  --force-long \
  --keep-case \
  --no-create \
  ${proto_files[@]}

./node_modules/.bin/pbts \
  -o ./src/generated/proto.d.ts \
  ./src/generated/proto.js

rm -r ./src/proto