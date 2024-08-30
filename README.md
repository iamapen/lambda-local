# lambdaをローカルで簡易版


# インストール
## aws-cli
https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/getting-started-install.html

設定
```bash
 aws configure --profile localstack

## 以下になるよう入力
AWS Access Key ID [None]: dummy
AWS Secret Access Key [None]: dummy
Default region name [None]: us-east-1
```

# lambda
## 簡易デプロイスクリプト
アーカイブ、デプロイ、実行までを行うスクリプト
```bash
cd /PATH/TO/function-dir
/PATH/TO/bin/deploy.sh
```

## 関数を実行
```bash
aws lambda invoke --profile localstack --endpoint-url http://localhost:4566 \
  --function-name func01 \
  --cli-binary-format raw-in-base64-out \
  --payload '{"key1": "value1", "key2": "value2", "key3": "value3"}' \
  response.json
```
## 関数を一覧
```bash
aws lambda list-functions --profile localstack --endpoint-url http://localhost:4566
```

## 関数の状態を取得
```bash
aws lambda get-function --profile localstack --endpoint-url http://localhost:4566 \
  --function-name func01
```
