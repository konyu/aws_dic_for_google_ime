# AWSサービスIME辞書生成スクリプト

AWSのサービスの正式名称のGoogle日本語入力向けの辞書ファイルを生成する

## Input
辞書ファイルのもととなるデータは
input/aws_services_name_base.tsv にあるTSVファイル

TSV内のフォーマット例

|AWS接頭語|サービス名|読み方1|読み方2|読み方N番目|
|---|---|---|---|---|
|Amazon|ElastiCache|えらすてぃっくきゃっしゅ|えらすてぃっきゃっしゅ||	

複数の読み方がある場合はタブ区切りで右に追記していく

## Output

辞書ファイル生成するにはRubyのスクリプトを実行する

```
ruby aws_services_name_base.tsv
```

outputディレクトリに辞書ファイルが生成される

### 詳細辞書 aws_dic_detail.txt
AWSのサービスのAmazonまたはAWS接頭語のついた正式サービス名バージョン

|読み|単語|品詞|
|---|---|---|
|えすすりーぐれーしゃー|Amazon S3 Glacier|名詞|

### シンプル辞書 aws_dic_simple.txt
普段使いの接頭語のつかないシンプルなサービス名バージョン

|読み|単語|品詞|
|---|---|---|
|えすすりーぐれーしゃー|S3 Glacier|名詞|

## Demo
辞書をインストールしないで試せるようにデモサイトはこちら

https://konyu.github.io/aws_dic_for_google_ime/ 