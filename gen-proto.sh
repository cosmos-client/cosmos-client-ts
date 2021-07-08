#!/usr/bin/env bash

proto_files=()

proto_dirs=$(find ./cosmos-sdk/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

proto_dirs=$(find ./cosmos-sdk/third_party/proto/tendermint -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

proto_dirs=$(find ./ibc-go/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

npx pbjs \
  -o ./src/proto.cjs \
  -t static-module \
  --force-long \
  --keep-case \
  --no-create \
  --path=./cosmos-sdk/proto/ \
  --path=./cosmos-sdk/third_party/proto/ \
  --path=./ibc-go/proto/ \
  ${proto_files[@]}

npx pbjs \
  -o ./src/proto.js \
  -t static-module \
  -w es6 \
  --es6 \
  --force-long \
  --keep-case \
  --no-create \
  --path=./cosmos-sdk/proto/ \
  --path=./cosmos-sdk/third_party/proto/ \
  --path=./ibc-go/proto/ \
  ${proto_files[@]}

npx pbts \
  -o ./src/proto.d.ts \
  ./src/proto.js
