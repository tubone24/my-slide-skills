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
│   ├── end.vue           # エンドページ（ハート装飾付き）
│   ├── toc.vue           # 目次ページ（白カード＋2カラム番号リスト）
│   ├── testimonial.vue   # 証言/声（円形写真＋引用）
│   ├── grid-icons.vue    # 2x2アイコングリッド（白カード）
│   ├── three-features.vue # 3カラム特徴（円形写真＋キャプション）
│   ├── contact.vue       # 連絡先（点線区切り2カラム）
│   ├── image-circle-right.vue  # 円形画像右配置
│   ├── image-circle-left.vue   # 円形画像左配置
│   └── image-bottom.vue    # 右下アクセント画像（テキスト主体＋右下に小さめ画像）
├── components/
│   ├── PopCard.vue       # アニメーション付きカード
│   ├── CountUp.vue       # 数値カウントアップアニメーション
│   ├── GradientHeading.vue # グラデーション見出し
│   ├── ProgressBar.vue   # アニメーション付きプログレスバー
│   ├── StepList.vue      # ステップリスト
│   ├── FloatingEmoji.vue # 装飾用フローティング絵文字
│   ├── PopTimeline.vue   # タイムライン表示
│   ├── OrganicDecorations.vue # ベージュテーマ用オーガニック装飾（ブロブ＋雨粒ドット）
│   ├── PictogramScene.vue # ピクトグラムシーン（アイコン組み合わせイラスト）
├── composables/
│   └── useSoundEffect.js # 効果音合成Composable（Web Audio API）
├── global-top.vue        # 効果音トリガー（スライド遷移検知）
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
- カラーテーマの好み（ベージュ系/ピンク系/セージグリーン系/ミックス）
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
| `toc` | 目次ページ | - |
| `testimonial` | 証言・会員の声 | - |
| `grid-icons` | 2x2アイコングリッド | - |
| `three-features` | 3カラム特徴紹介 | - |
| `contact` | 連絡先・お申し込み | `::right::` スロット |
| `image-circle-right` | 円形画像右 | `image` |
| `image-circle-left` | 円形画像左 | `image` |
| `image-bottom` | 右下アクセント画像（テキスト主体＋右下に小さめ画像） | `image` |

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

#### スライド切り替え効果音

スライド遷移時に効果音を鳴らす機能。Web Audio APIによる合成音をプリセットとして提供し、カスタム音声ファイルにも対応。

**グローバル設定**（headmatter / 最初のスライドのフロントマター）:
```yaml
---
soundEffects: true       # ON/OFF（デフォルト: false）
soundVolume: 0.3         # 音量 0.0-1.0（デフォルト: 0.3）
soundDefault: 'pop'      # デフォルト効果音（省略可）
---
```

**スライド個別設定**:
```yaml
---
sound: 'dramatic'        # プリセット名
soundVolume: 0.5         # 個別音量（グローバル設定を上書き）
sound: false             # このスライドだけ無効化
---
```

**カスタムファイル再生**:
```yaml
---
sound: 'custom'
soundFile: '/sounds/my-effect.mp3'  # public/sounds/ に配置
---
```

**プリセット一覧**:

| プリセット名 | 効果 | 用途の例 |
|-------------|------|---------|
| `dramatic` | ジャーン（低音+和音） | タイトル、重要な発表、フィナーレ |
| `pop` | ポップ（短いバウンス音） | 通常のスライド切り替え |
| `whoosh` | シュッ（風切り音） | セクション遷移、場面転換 |
| `chime` | チャイム（和音の連続） | 引用、良いニュース |
| `boom` | ドーン（低音インパクト） | 数値インパクト、驚き |
| `sparkle` | キラキラ（高音の連続） | まとめ、エンディング |
| `click` | カチッ（短いクリック音） | 軽い切り替え |
| `custom` | カスタムファイル再生 | `soundFile`と併用 |
| `none` | 無音 | 効果音なし |

**注意事項**:
- `soundEffects: true` をheadmatterに設定しない限り、効果音は鳴らない（デフォルトOFF）
- ブラウザのAutoplay Policy対策として、最初のクリック/キー操作後に音声が有効になる
- PDFエクスポート時は効果音は無視される（SSR/エクスポート環境では動作しない）

#### アイコンの使用

Slidevは[Iconify](https://iconify.design/)アイコンを標準サポート。絵文字の代わりにアイコンコンポーネントを使う。

**テンプレートに含まれるアイコンセット:**
- `ph` - [Phosphor Icons](https://phosphoricons.com/)（推奨・柔らかいスタイル）
- `mdi` - [Material Design Icons](https://pictogrammers.com/library/mdi/)（種類が豊富）

**基本構文:**
```html
<!-- コンポーネント構文（推奨） -->
<ph-heart />
<ph-chat-circle-dots />
<ph-book-open />
<mdi-account-circle />

<!-- サイズ・色の指定（UnoCSS/Tailwindクラス） -->
<ph-heart class="text-3xl text-rose-400" />
<ph-chat-circle-dots class="text-4xl" style="color: var(--pop-rose)" />

<!-- CSSクラス構文 -->
<div class="i-ph-heart text-3xl text-rose-400" />
```

**よく使うアイコン例:**

| 用途 | Phosphor Icons | Material Design Icons |
|------|---------------|----------------------|
| 料理/ワークショップ | `<ph-cooking-pot />` | `<mdi-silverware-fork-knife />` |
| 会話/交流 | `<ph-chat-circle-dots />` | `<mdi-forum />` |
| 読書/趣味 | `<ph-book-open />` | `<mdi-book-open-variant />` |
| セミナー/発表 | `<ph-megaphone />` | `<mdi-bullhorn />` |
| メール | `<ph-envelope />` | `<mdi-email />` |
| カレンダー | `<ph-calendar />` | `<mdi-calendar />` |
| チェック | `<ph-check-circle />` | `<mdi-check-circle />` |
| ハート/いいね | `<ph-heart />` | `<mdi-heart />` |
| ユーザー/人 | `<ph-user />` | `<mdi-account />` |
| 場所/地図 | `<ph-map-pin />` | `<mdi-map-marker />` |

**アイコン検索:** [Icones](https://icones.js.org/) でブラウザからアイコンを検索・プレビュー可能

**注意事項:**
- 絵文字ではなくアイコンコンポーネントを使うこと（PDF/PPTXエクスポート時の互換性向上）
- `@iconify-json/ph` と `@iconify-json/mdi` はpackage.jsonに含まれている
- 追加のアイコンセットが必要な場合は `npm install -D @iconify-json/{set-name}` でインストール

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

<!-- オーガニック装飾（自動表示） -->
<!-- OrganicDecorationsはbeige系レイアウトに自動的に含まれます -->
<!-- カスタムスライドで使いたい場合: -->
<OrganicDecorations />

<!-- ピクトグラムシーン（アイコン組み合わせイラスト） -->
<PictogramScene scene="expense" />
<!-- scene: expense / document / inquiry / confused -->
<!-- size: 'normal'（幅いっぱい、下部配置） / 'small'（コンパクト、コーナー配置） -->
<PictogramScene scene="confused" size="small" />
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
- **アイコンは絵文字より見栄えが良い**: `<ph-heart class="text-rose-400" />` のようにIconifyアイコンを活用する

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
- フローティング絵文字 `<FloatingEmoji>` で遊び心を追加（ただしプロフェッショナルなプレゼンではIconifyアイコンの使用を推奨）
- `<PopTimeline>` で時系列を美しく表現
- ベージュテーマの背景色は `#F5EDE6`。暖かく落ち着いた印象を与える
- `<OrganicDecorations />` がほとんどのレイアウトに自動で含まれ、角にセージグリーンの円やピンクのブロブ装飾が表示される
- `toc` レイアウトで目次ページを簡単に作成。番号付きリスト（`<ol>`）を使うと自動でスタイリングされる
- `testimonial` レイアウトでは `<img>` タグを使うと自動で円形切り抜きされる
- `contact` レイアウトは `::right::` スロットで2カラム分割（点線区切り付き）
- `image-circle-right` / `image-circle-left` で円形切り抜き写真付きスライドを作成
- `pop-dotted-underline` クラスでピンク点線アンダーラインを追加
- `pop-white-card` クラスで白いカード（ベージュ背景上で映える）を作成
- `pop-circle-image` クラスで画像を円形切り抜き＋ピンクボーダーに

### コンテンツがはみ出す場合の対処法

スライドの要素が多すぎて画面からはみ出す場合、以下の手段で対処する。**上から順に試すこと。**

#### 1. コンテンツを減らす・分割する（最優先）

根本的な解決策。1スライド1メッセージの原則に戻る。

```markdown
<!-- BAD: 1スライドに詰め込みすぎ -->
---
---
# トピック
- 項目1〜項目10（はみ出す）

<!-- GOOD: 2スライドに分割 -->
---
---
# トピック（1/2）
- 項目1〜5

---
---
# トピック（2/2）
- 項目6〜10
```

#### 2. `zoom` フロントマター（スライド単位の縮小）

最も簡単な方法。スライド全体を指定倍率に縮小する。

```yaml
---
zoom: 0.8
---
```

- `0.8` = 80%表示、`0.7` = 70%表示
- スライドごとに個別指定可能
- 他のスライドには影響しない
- **0.7未満は文字が小さくなりすぎるので非推奨**

#### 3. `<Transform>` コンポーネント（要素単位の縮小）

スライドのタイトルはそのままで、コンテンツ部分だけを縮小したい場合。

```html
# タイトルはそのままのサイズ

<Transform :scale="0.75" origin="top left">

ここの中身だけが75%に縮小される

- リスト項目1
- リスト項目2
- リスト項目3

</Transform>
```

#### 4. スコープ付きCSSスタイル（細かい調整）

特定スライドだけフォントサイズや余白を調整する。

```markdown
---
---

# コンテンツが多いスライド

- 項目1
- 項目2

<style>
.slidev-layout {
  font-size: 0.85em;
  padding: 1.5rem 2.5rem;
}
.slidev-layout h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.slidev-layout li {
  line-height: 1.4;
  margin-bottom: 0.2em;
}
</style>
```

#### 5. UnoCSS ユーティリティクラス

インラインでサイズやレイアウトを調整する。

```html
<!-- フォントサイズ縮小 -->
<div class="text-sm leading-tight">コンパクトなテキスト</div>

<!-- スクロール可能エリア -->
<div class="overflow-y-auto max-h-80">長いコンテンツ</div>

<!-- グリッドで2カラムに分割して省スペース化 -->
<div class="grid grid-cols-2 gap-4 text-sm">
  <div>左カラム</div>
  <div>右カラム</div>
</div>
```

#### よくあるはみ出しパターンと対処法

| パターン | 推奨対処 |
|---------|---------|
| リスト項目が多すぎる | `v-clicks` で段階表示 or 2スライドに分割 |
| カード系レイアウト内で要素が多い | `zoom: 0.8` or グリッド内の余白・フォントサイズを縮小 |
| 画像＋テキストが長い | テキストを短くする or `zoom: 0.85` |
| コンポーネントを複数配置 | 2スライドに分割 or `<Transform :scale="0.8">` |
| タイムライン項目が多い | 項目数を3以下に抑える or `zoom: 0.8` |
| 目次（toc）項目が多い | 10項目以下に抑える or `zoom: 0.9` |

### ピクトグラムシーンの使い方

`PictogramScene` コンポーネントを使って、**SVGベースの塗りつぶしシルエット風ピクトグラム**でシチュエーションを視覚的に表現する。写真の代わりに、案内標識のようなソリッドな人物ピクトグラムで状況を伝える。

**デザインスタイル:**
- 人物は**塗りつぶしシルエット**（棒人間ではない。頭=塗り円、体=塗り台形）
- 汗は**しずく形（ellipse）**で飛び散る表現
- アニメーションなし（完全に静的）
- テーマカラーと調和

#### プリビルトシーン

| シーン名 | 表現する状況 | 構成 |
|---------|------------|------|
| `expense` | 経費精算に困っている | 左: ヘッドセット人物+PC（汗付き）、右: 書類の山・レシート・Excel格子・¥マーク |
| `document` | 資料作成に困っている | 左: 白紙モニター（カーソル点滅）、中央: 頭を抱える人物（?マーク+汗）、右: 締切時計+DEADLINE |
| `inquiry` | 問い合わせが多すぎる | 左: PC対応する人物（ヘッドセット+汗）、右: 吹き出し「?」付きの複数人物（遠近法で4-5人） |
| `confused` | 難しくてわからない | ×目の人物シルエット + ?マーク + 汗 + 渦巻き（small/normalサイズ対応） |

#### 使用例

**重要: スライド下部いっぱいに大きく表示するには、`<style>`でflexレイアウトを指定すること。**

```markdown
---
transition: pop-fade
---

# 月末の経費精算、終わらない！

大量の書類、Excel、手作業…

<PictogramScene scene="expense" />

<style>
.slidev-layout { display: flex; flex-direction: column; }
</style>
```

この `<style>` ブロックにより、PictogramSceneの `margin-top: auto` が効いてスライド下部に自動的に押し下げられ、スライド中央下を大きく占領する表示になる。

**コーナーに小さく配置する場合（confused用）：**
```markdown
<div style="display: flex; gap: 1.5rem; align-items: flex-start;">
<div style="flex: 1;">
  メインコンテンツ
</div>
<div style="position: relative; width: 120px; flex-shrink: 0; align-self: flex-end;">
  <PictogramScene scene="confused" size="small" />
</div>
</div>
```

#### 新しいシーンの作り方

PictogramScene.vueに新しいSVGシーンを追加する手順：

1. **SVGの`viewBox`を設定**: normalサイズなら `viewBox="0 0 600 220"` 程度
2. **人物シルエットを描く**: 頭=`<circle fill="...">`, 体=`<path>` で台形、腕=太い`stroke-width="14"` のパス
3. **汗・ストレス表現**: `<ellipse>` をrotateして飛び散るしずく形
4. **状況オブジェクト**: 書類=`<rect>`+横線、時計=`<circle>`+針、吹き出し=`<rect rx>`+`<polygon>`
5. **遠近法**: 奥の人物はscale小さめ + `opacity` 低めで奥行き感を出す

**配色ルール:**
- 人物シルエット: `var(--pop-text, #3D3D3D)` fill
- 汗・ストレス: `var(--pop-rose, #D4918F)` fill
- 書類・ツール枠: `var(--pop-sage, #A8C5B8)` stroke
- 書類背景: `var(--pop-bg-card, #FFFBF8)` fill
- 吹き出し: `var(--pop-rose, #D4918F)` fill + 白文字
- ×目など白抜き: `var(--pop-bg, #F5EDE6)` stroke

#### インラインでのコードブロック/Notebook風デザイン

写真の代わりにターミナルやJupyter Notebookのモックアップをインラインで作る方法：

**ターミナル風:**
```html
<div style="background: #1E293B; border-radius: 12px; padding: 1rem 1.2rem; font-family: 'Courier New', monospace; font-size: 0.85rem; color: #A3E635; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
  <div style="color: #64748B; margin-bottom: 0.5rem; font-size: 0.75rem;">Terminal</div>
  <div style="color: #94A3B8;">$ python agent.py</div>
  <div style="color: #A3E635;">>>> 出力テキスト...</div>
</div>
```

**Jupyter Notebook風:**
```html
<div style="background: white; border-radius: 8px; border: 1px solid #E2E8F0; box-shadow: 0 2px 10px rgba(0,0,0,0.08); overflow: hidden;">
  <div style="background: #F8FAFC; padding: 0.5rem 0.8rem; border-bottom: 1px solid #E2E8F0; font-size: 0.7rem; color: #64748B; display: flex; align-items: center; gap: 0.5rem;">
    <span style="background: #EF4444; width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span>
    <span style="background: #F59E0B; width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span>
    <span style="background: #22C55E; width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span>
    <span style="margin-left: 0.5rem;">notebook.ipynb</span>
  </div>
  <div style="padding: 0.6rem 0.8rem; border-bottom: 1px solid #F1F5F9; display: flex; align-items: center; gap: 0.5rem;">
    <span style="background: #DBEAFE; color: #3B82F6; padding: 0.1rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-family: monospace;">In [1]:</span>
    <span style="font-family: monospace; font-size: 0.8rem; color: #334155;">コード内容</span>
  </div>
</div>
```

## 重要な注意事項

- テンプレートファイルをコピーする際は、styles/index.css, layouts/*, components/*, composables/*, global-bottom.vue, global-top.vue を必ずすべてコピーすること
- フォントはGoogle Fontsから読み込まれる（Poppins, Zen Maru Gothic, Dela Gothic One）
- 画像はpublic/ディレクトリに配置し、`/image.png` のパスで参照する
- エクスポート時はPlaywright Chromiumが必要
- slides.mdのヘッドマターで `theme: none` を指定すること（カスタムスタイルを使うため）
