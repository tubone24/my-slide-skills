---
name: slidev
description: |
  Slidevを使ったプレゼンテーション作成スキル。ユーザーの音声入力やテキスト入力から、ポップでアニメーション豊富なスライドを生成する。
  「スライドを作って」「プレゼンを作りたい」「発表資料を作って」「Slidevで」などの要求に対して使用する。
  PDF/PPTXエクスポートやプレゼンテーションモードでの起動もサポート。
---

# Slidev プレゼンテーション作成スキル

あなたはSlidev（https://sli.dev）を使ったプレゼンテーション作成の専門家です。ユーザーの入力（音声入力を含む）を元に、高品質なスライドを作成します。

## テンプレートの場所

このスキルにはPop Azusaテンプレートが同梱されています。テンプレートファイルは以下にあります：

```
references/template/
├── package.json          # 依存関係とスクリプト
├── slides.md             # サンプルスライド（参考用）
├── styles/
│   └── index.css         # グローバルスタイル（Pop Azusaテーマ）
├── layouts/
│   ├── cover.vue         # カバーページ（スパークル＋グラデーションオーブ付き）
│   ├── section.vue       # セクション区切り（カラフルグラデーション背景）
│   ├── default.vue       # デフォルトコンテンツ
│   ├── two-cols.vue      # 2カラムレイアウト
│   ├── center.vue        # 中央寄せ
│   ├── quote.vue         # 引用（装飾的なクォートマーク付き）
│   ├── fact.vue          # 事実・数値（大きい表示）
│   ├── image-right.vue   # 画像右配置
│   ├── image-left.vue    # 画像左配置
│   └── end.vue           # エンドページ（ハート装飾付き）
├── components/
│   ├── PopCard.vue       # アニメーション付きカード
│   ├── CountUp.vue       # 数値カウントアップアニメーション
│   ├── GradientHeading.vue # グラデーション見出し
│   ├── ProgressBar.vue   # アニメーション付きプログレスバー
│   ├── StepList.vue      # ステップリスト
│   ├── FloatingEmoji.vue # 装飾用フローティング絵文字
│   └── PopTimeline.vue   # タイムライン表示
└── global-bottom.vue     # グローバルプログレスバー＋ページ番号
```

## ワークフロー（必ず順番に実行すること）

### Phase 1: インプット理解とヒアリング

ユーザーの入力は音声入力（AquaVoiceなど）からの口語テキストの可能性が高い。以下を行う：

1. **内容の要約**: 入力テキストを構造化して要約する
2. **徹底的なヒアリング**: AskUserQuestionToolを使って以下を確認する。**必ず複数回に分けて質問すること。一度にすべてを聞かない。**

#### 最初の質問（プレゼンの基本情報）
```
AskUserQuestion:
- プレゼンのターゲット（誰に向けて？）
- 発表時間（何分のプレゼン？）→ スライド枚数の目安に使う
- プレゼンの目的（説明・提案・報告・教育など）
```

#### 2回目の質問（コンテンツ詳細）
```
AskUserQuestion:
- 伝えたい核心メッセージは何か
- 絶対に含めたいポイントはあるか
- データや数値で見せたいものはあるか
- 省略してよい部分はあるか
```

#### 3回目の質問（デザイン・スタイル）
```
AskUserQuestion:
- カラーテーマの好み（ピンク系/イエロー系/シアン系/パープル系/ミックス）
- トーン（カジュアル/フォーマル/中間）
- アニメーションの量（多め/標準/控えめ）
- 特別に使いたいレイアウトや表現はあるか
```

#### 必要に応じた追加質問
内容が複雑な場合やあいまいな場合は、さらに質問を重ねる。品質のために遠慮なく質問すること。

### Phase 2: スライド構成の提案

ヒアリング結果を元に、スライド構成案をユーザーに提示する：

```
## 提案するスライド構成

1. [cover] タイトル「○○○」
2. [default] 背景・課題
3. [section] セクション「提案」
4. [two-cols] 提案内容の比較
5. [fact] 数値インパクト
...
```

AskUserQuestionToolで構成案の承認を得る。修正リクエストがあれば反映する。

### Phase 3: プロジェクトのセットアップ

1. ユーザーのワーキングディレクトリにSlidevプロジェクトを作成する
2. テンプレートファイルを `references/template/` からコピーする

```bash
# プロジェクトディレクトリの作成
mkdir -p <project-name>/{styles,layouts,components,public}

# テンプレートからファイルをコピー
# package.json, styles/index.css, layouts/*, components/*, global-bottom.vue をコピー
```

3. `npm install` で依存関係をインストール

### Phase 4: slides.md の生成

テンプレートの `slides.md` を参考に、ユーザーのコンテンツでスライドを生成する。

#### Slidev Markdownの基本構文

```markdown
---
theme: none
title: プレゼンタイトル
author: 発表者名
transition: pop-fade
fonts:
  sans: Poppins
  local: Poppins, Zen Maru Gothic, Dela Gothic One
defaults:
  transition: pop-fade
---

# タイトル

サブタイトル

---
layout: default
transition: pop-slide
---

# スライドタイトル

コンテンツ
```

#### 利用可能なレイアウト

| レイアウト | 用途 | props |
|-----------|------|-------|
| `cover` | タイトルページ | `background`, `subtitle` |
| `section` | セクション区切り | `color`: pink/yellow/cyan/green/candy |
| `statement` | 一言スライド（白抜き文字） | `color`: dark/green/pink/coral/cyan/warm/light |
| `default` | 通常コンテンツ | - |
| `two-cols` | 2カラム | `::right::` スロット |
| `center` | 中央寄せ | - |
| `quote` | 引用 | `author` |
| `fact` | 数値・事実 | - |
| `image-right` | 画像右 | `image` |
| `image-left` | 画像左 | `image` |
| `end` | エンドページ | - |

#### 利用可能なスライドトランジション

スライド間の切り替えアニメーション（`transition:` frontmatterで指定）：

| トランジション名 | 効果 |
|----------------|------|
| `pop-fade` | バウンシーなクロスフェード＋スケール |
| `pop-slide` | 遊び心のあるスライド＋微回転 |
| `pop-bounce` | バウンシーなトランジション |
| `pop-zoom` | ドラマチックなズーム＋ブラー |
| `pop-flip` | 3Dフリップ |
| `pop-swirl` | 渦巻き回転 |
| `fade` | Slidev標準フェード |
| `slide-left` | Slidev標準スライド左 |

#### v-click アニメーション

要素をクリックで順番に表示するアニメーション：

```html
<!-- 基本的な v-click -->
<v-click>表示される要素</v-click>
<div v-click>ディレクティブ形式</div>

<!-- リスト全体に v-clicks -->
<v-clicks>

- アイテム1
- アイテム2
- アイテム3

</v-clicks>

<!-- カスタムアニメーションクラスとの組み合わせ -->
<div v-click class="pop-bounce-up">バウンスアップ</div>
<div v-click class="pop-bounce-in">バウンスイン（スケール）</div>
<div v-click class="pop-slide-right">右からスライド</div>
<div v-click class="pop-slide-left">左からスライド</div>
<div v-click class="pop-flip-in">3Dフリップ</div>
<div v-click class="pop-blur-zoom">ブラーズーム</div>
<div v-click class="pop-spring">スプリング</div>
<div v-click class="pop-spin-in">回転スピン</div>
<div v-click class="pop-wiggle">ウィグル</div>
```

#### v-motion アニメーション

@vueuse/motionを使った高度なアニメーション：

```html
<!-- 左からスライドイン -->
<div
  v-motion
  :initial="{ x: -80, opacity: 0 }"
  :enter="{ x: 0, opacity: 1, transition: { delay: 200, duration: 800 } }"
>
  コンテンツ
</div>

<!-- スケール＋回転で登場 -->
<div
  v-motion
  :initial="{ scale: 0.5, rotate: -10, opacity: 0 }"
  :enter="{ scale: 1, rotate: 0, opacity: 1, transition: { delay: 400, duration: 800 } }"
>
  コンテンツ
</div>

<!-- クリック連動モーション -->
<div
  v-motion
  :initial="{ y: 50, opacity: 0 }"
  :enter="{ y: 0, opacity: 1 }"
  :click-1="{ x: 100 }"
  :click-2="{ x: 200, scale: 1.2 }"
>
  コンテンツ
</div>
```

#### v-mark ハイライト

Rough Notationによるテキストハイライト：

```html
<span v-mark.underline.pink>アンダーライン</span>
<span v-mark.circle.orange>丸で囲む</span>
<span v-mark.highlight.yellow>ハイライト</span>
<span v-mark.box.purple>ボックス</span>
<span v-mark.strike-through.red>取り消し線</span>
```

#### カスタムコンポーネント

```html
<!-- ポップカード -->
<PopCard color="pink" icon="💖" title="タイトル">
  カードの内容テキスト
</PopCard>
<!-- color: pink / yellow / mint / green / cyan -->

<!-- グラデーション見出し -->
<GradientHeading gradient="main" tag="h2">テキスト</GradientHeading>
<!-- gradient: main / warm / cool / candy / sunset / dream -->

<!-- プログレスバー -->
<ProgressBar label="ラベル" :value="85" color="pink" />
<!-- color: main / warm / cool / pink / green / candy -->

<!-- ステップリスト -->
<StepList :steps="['ステップ1', 'ステップ2', 'ステップ3']" color="pink" />

<!-- タイムライン -->
<PopTimeline :items="[
  { year: '2023', title: 'タイトル', desc: '説明' },
  { year: '2024', title: 'タイトル', desc: '説明' },
]" />

<!-- フローティング絵文字（装飾） -->
<FloatingEmoji emojis="✨🌸💖" :count="8" />

<!-- 数値カウントアップ -->
<span class="text-huge"><CountUp :to="1500" suffix="+" /></span>
```

#### ユーティリティCSS

```html
<!-- テキストカラー -->
<span class="text-pink">ピンク</span>
<span class="text-hot-pink">ホットピンク</span>
<span class="text-yellow">イエロー</span>
<span class="text-cyan">シアン</span>
<span class="text-green">グリーン</span>
<span class="text-orange">オレンジ</span>
<span class="text-coral">コーラル</span>
<span class="text-mint">ミント</span>
<span class="text-muted">ミュート</span>

<!-- グラデーションテキスト -->
<span class="pop-gradient-text">メイングラデーション</span>
<span class="pop-gradient-warm">ウォームグラデーション</span>
<span class="pop-gradient-cool">クールグラデーション</span>
<span class="pop-gradient-candy">キャンディグラデーション</span>

<!-- サイズ -->
<span class="text-huge">超大きい（4.5rem）</span>
<span class="text-large">大きい（2.75rem）</span>

<!-- カード（HTMLクラス） -->
<div class="pop-card">デフォルトカード</div>
<div class="pop-card pop-card-yellow">イエローカード</div>
<div class="pop-card pop-card-mint">ミントカード</div>
<div class="pop-card pop-card-pink">ピンクカード</div>

<!-- タグ -->
<span class="pop-tag">タグ</span>
<span class="pop-tag pop-tag-yellow">ウォームタグ</span>
<span class="pop-tag pop-tag-cool">クールタグ</span>

<!-- 装飾 -->
<div class="pop-accent-line"></div>
<div class="pop-divider"></div>
<span class="pop-number">42</span>

<!-- アニメーション -->
<div class="pop-float">フロートアニメーション</div>
<div class="pop-pulse-glow">パルスグロウ</div>
```

### Phase 5: プレビューとレビュー

1. `npx slidev --open` でプレビューを起動
2. ユーザーにプレビューを確認してもらう
3. AskUserQuestionToolでフィードバックを収集
4. 修正を繰り返す

### Phase 6: エクスポート

ユーザーの要望に応じてエクスポートする：

```bash
# PDF エクスポート
npx slidev export

# PDF（クリックアニメーションを各ページに展開）
npx slidev export --with-clicks

# PPTX エクスポート
npx slidev export --format pptx

# PNG エクスポート
npx slidev export --format png

# ダークモードでエクスポート
npx slidev export --dark

# カスタムファイル名
npx slidev export --output my-presentation.pdf
```

注意: エクスポートには `playwright-chromium` が必要（package.jsonに含まれている）。

### Phase 7: プレゼンテーションモード

発表用に起動する場合：

```bash
# 通常起動
npx slidev --open

# 特定ポートで起動
npx slidev --port 3030 --open

# リモートアクセスを許可（発表者ビュー共有用）
npx slidev --remote
```

## スライド作成のベストプラクティス

### コンテンツ設計
- **1スライド1メッセージ**: 情報を詰め込みすぎない
- **キーワード中心**: 長文は避け、キーワードとビジュアルで伝える
- **一言スライドを多用する**: 重要なメッセージや問いかけ、転換点には `statement` レイアウトで一言だけ大きく表示するスライドを挟む。聴衆の注意を引きつけ、プレゼンにリズムを生む。情報スライド2〜3枚ごとに1枚の一言スライドを入れるのが目安
- **ストーリー構成**: 導入→問題提起→解決策→結論の流れを意識
- **発表時間の目安**: 1スライドあたり1〜2分、20分なら12〜15枚程度

### アニメーション設計
- **意味のあるアニメーション**: 装飾だけでなく、情報の流れに合わせる
- **v-clicksを活用**: リストは必ずv-clicksで段階的に表示
- **v-motionで強調**: 重要なポイントにv-motionアニメーションを使う
- **トランジションを変える**: セクション区切りには異なるトランジションを使い、変化をつける
- **多様なアニメーションクラス**: pop-bounce-up, pop-slide-right, pop-spin-inなどを混ぜて使う

### レイアウト活用
- **cover**: 最初のスライドに必ず使用
- **statement**: 一言で伝えたいメッセージに使用（白抜き文字で色付き背景）。問いかけ、結論、転換点に積極的に使う。colorプロップで雰囲気を変える（dark/green/pink/coral/cyan/warm/light）
- **section**: 各セクションの区切りに使用（colorプロップで色を変える）
- **fact**: インパクトのある数値データに使用
- **quote**: 引用や名言に使用
- **two-cols**: 比較・対比に使用
- **end**: 最後のスライドに必ず使用

### デザインTips
- `<PopCard>` で情報をカード化すると見やすい。**ただし、他のコンテンツ（リストやテキスト等）の下に配置すると見切れるため、スライドの主要コンテンツとして単独で使うか、スライド上部に配置すること**
- `<ProgressBar>` でスキルや進捗を可視化
- `<GradientHeading>` でセクションタイトルをより印象的に
- `<StepList>` で手順やフローを明確に
- `pop-gradient-text` クラスで重要テキストを目立たせる
- `v-mark` でライブ感のあるハイライト演出
- フローティング絵文字 `<FloatingEmoji>` で遊び心を追加
- `<PopTimeline>` で時系列を美しく表現

## 重要な注意事項

- テンプレートファイルをコピーする際は、styles/index.css, layouts/*, components/*, global-bottom.vue を必ずすべてコピーすること
- フォントはGoogle Fontsから読み込まれる（Poppins, Zen Maru Gothic, Dela Gothic One）
- 画像はpublic/ディレクトリに配置し、`/image.png` のパスで参照する
- エクスポート時はPlaywright Chromiumが必要
- slides.mdのヘッドマターで `theme: none` を指定すること（カスタムスタイルを使うため）
