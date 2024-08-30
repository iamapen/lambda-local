#!/usr/bin/env bash

####
# func01 という名前で Lambda関数を上書きデプロイして、実行するスクリプト
# SAM(CloudFormation) を使わないライトなもの
###

echo 'archiving...'
zip function.zip *.mjs

echo 'deploying...'
echo 'deleting old function...'
aws --endpoint-url http://localhost:4566 --profile localstack \
  lambda delete-function \
  --function-name func01
echo 'creating new function...'
aws --endpoint-url http://localhost:4566 --profile localstack \
  lambda create-function \
  --function-name func01 \
  --runtime nodejs20.x \
  --handler index.handler \
  --zip-file fileb://function.zip \
  --role arn:aws:iam::000000000000:role/lambda-role \
  --timeout 30 \
  --no-cli-pager

rm -f function.zip
echo 'deploy done'

echo 'executing...'
aws lambda invoke --endpoint-url http://localhost:4566 --profile localstack \
  --function-name func01 \
  response.json
echo 'execute done.'
echo 'response:'
cat response.json
echo
rm -f response.json
