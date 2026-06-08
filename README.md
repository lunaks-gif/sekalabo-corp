# SEKALABÖ ｜ 株式会社L.S.A コーポレートサイト

「言語を超えて、世界を変える人を育てる。」
株式会社L.S.A（ブランド名 SEKALABÖ／札幌）のコーポレートサイトです。

- 静的サイト（HTML / CSS / Vanilla JS）。ビルド不要。
- `index.html` をそのまま配信すれば動作します。

## 構成
- ヒーロー（理念のキャッチ＋背景ビジュアル）
- OUR PHILOSOPHY（理念・大切にしている4つのこと）
- OUR BUSINESS（子ども向け／大人向けの事業＋プロダクト開発）
- MEMBERS（代表メッセージ）
- NEWS / COMPANY / CONTACT

## ローカル確認
```bash
python3 -m http.server 4321
# http://localhost:4321/
```

## デプロイ
静的サイトのため、Vercel では Framework Preset を「Other」、ビルドコマンド無し、出力ディレクトリはルートのままで配信できます。
