#!/usr/bin/env bash

rm -r ./proto
wget https://github.com/bufbuild/buf/releases/download/v1.13.1/buf-Linux-x86_64
sudo chmod 777 ./buf-Linux-x86_64
./buf-Linux-x86_64 export buf.build/cosmos/cosmos-sdk:v0.47.0 --output ./proto
rm ./buf-Linux-x86_64

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
proto_files=()

for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

npx pbjs \
  -o ./src/proto.cjs \
  -t static-module \
  --force-long \
  --keep-case \
  --no-create \
  --path=./proto/ \
  --root="@cosmos-client/core" \
  ${proto_files[@]}

npx pbjs \
  -o ./src/proto.js \
  -t static-module \
  -w es6 \
  --es6 \
  --force-long \
  --keep-case \
  --no-create \
  --path=./proto/ \
  --root="@cosmos-client/core" \
  ${proto_files[@]}

npx pbts \
  -o ./src/proto.d.ts \
  ./src/proto.js

echo Edit proto.d.ts to resolve the conflict of tendermint namespace.
echo Require to rename cometbft proto

rm -r ./proto
