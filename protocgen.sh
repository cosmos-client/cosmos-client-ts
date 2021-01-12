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

protos='
proto/cosmos/tx/v1beta1/tx.proto
proto/cosmos/crypto/multisig/v1beta1/multisig.proto
proto/cosmos/base/v1beta1/coin.proto
proto/cosmos/tx/signing/v1beta1/signing.proto
third_party/proto/gogoproto/gogo.proto
third_party/proto/google/protobuf/any.proto
'

protos_array=(`echo $protos`)
for proto in "${protos_array[@]}"; do
  protoc \
  -I "proto" \
  -I "third_party/proto" \
  --plugin="protoc-gen-ts=../../cosmos-client/cosmos-client-ts/node_modules/.bin/protoc-gen-ts" \
  --js_out="import_style=commonjs,binary:../../cosmos-client/cosmos-client-ts/src/generated" \
  --ts_out="../../cosmos-client/cosmos-client-ts/src/generated" \
  $proto
done
