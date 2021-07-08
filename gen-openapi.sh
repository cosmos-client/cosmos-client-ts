#!/usr/bin/env bash

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/cosmos-sdk/client/docs/swagger-ui/swagger.yaml -o /local/src/openapi/
