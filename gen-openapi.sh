#!/usr/bin/env bash

rm swagger.yaml
cp ~/src/github.com/cosmos/cosmos-sdk/client/docs/swagger-ui/swagger.yaml ./swagger.yaml

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/openapi/ --skip-validate-spec

rm swagger.yaml
