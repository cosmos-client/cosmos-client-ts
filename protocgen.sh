#!/usr/bin/env bash

set -eo pipefail

protoc_gen_gocosmos() {
  if ! grep "github.com/gogo/protobuf => github.com/regen-network/protobuf" go.mod &>/dev/null ; then
    echo -e "\tPlease run this command from somewhere inside the cosmos-sdk folder."
    return 1
  fi

  go get github.com/regen-network/cosmos-proto/protoc-gen-gocosmos 2>/dev/null
}

protoc_gen_doc() {
  go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc 2>/dev/null
} 

protoc_gen_gocosmos
protoc_gen_doc

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
third_party_dirs=$(find ./third_party/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
proto_array=("${proto_dirs[@]} ${third_party_dirs[@]}")

for dir in $proto_array; do
  protoc \
  -I "proto" \
  -I "third_party/proto" \
  --plugin="protoc-gen-ts=../../cosmos-client/cosmos-client-ts/node_modules/.bin/protoc-gen-ts" \
  --js_out="import_style=commonjs,binary:../../cosmos-client/cosmos-client-ts/src/generated" \
  --ts_out="../../cosmos-client/cosmos-client-ts/src/generated" \
  $(find "${dir}" -maxdepth 1 -name '*.proto')
done
