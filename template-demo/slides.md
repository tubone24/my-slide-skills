---
theme: none
title: レイアウト全確認デモ
author: Demo
transition: pop-fade
soundEffects: true
soundVolume: 1
soundDefault: pop
fonts:
  sans: Poppins
  local: Poppins, Zen Maru Gothic, Dela Gothic One
defaults:
  transition: pop-fade
---

# 全レイアウト確認デモ ✨

11種類のレイアウト + 効果音プリセットをチェック

<FloatingEmoji emojis="✨🌿🍀💚" :count="6" />

---
layout: statement
color: dark
transition: pop-zoom
sound: dramatic
---

# まずはレイアウトを見ていこう

🔊 効果音: **dramatic**（ジャーン）

---
layout: default
transition: pop-slide
sound: chime
---

# default レイアウト

通常のコンテンツ表示に使うデフォルトレイアウト

🔊 効果音: **chime**（チャイム）

<v-clicks>

- 💚 リストアイテムは `v-clicks` で段階表示
- 🌿 **太字**テキストや *強調* も使える
- 🍀 `インラインコード` の表示もチェック

</v-clicks>

---
layout: center
transition: pop-bounce
sound: pop
---

# center レイアウト

コンテンツを中央に配置するシンプルなレイアウト

🔊 効果音: **pop**（ポップ）

テキストが中央寄せで表示されます

---
layout: two-cols
transition: pop-slide
sound: sparkle
---

# two-cols レイアウト

左カラムにテキストを配置

🔊 効果音: **sparkle**（キラキラ）

<v-clicks>

- 柔軟なグリッドレイアウト
- カラフルなボーダー装飾
- 見やすい2分割配置

</v-clicks>

::right::

### 右カラム

<PopCard color="pink" icon="💖" title="ピンクカード">
  左右の比較・対比に最適
</PopCard>

<PopCard color="mint" icon="🌿" title="ミントカード" style="margin-top: 1rem;">
  色バリエーションも豊富
</PopCard>

---
layout: statement
color: green
transition: pop-zoom
sound: whoosh
---

# シンプルに伝えよう

🔊 効果音: **whoosh**（シュッ）

---
layout: image-right
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800
transition: pop-slide
sound: click
---

# image-right レイアウト

右側に画像を自動配置

🔊 効果音: **click**（カチッ）

<v-clicks>

- 左側にテキストコンテンツ
- 右側に画像を表示
- URLでもローカルファイルでもOK

</v-clicks>

---
layout: image-left
image: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800
transition: pop-slide
sound: boom
soundVolume: 0.2
---

# image-left レイアウト

左側に画像を自動配置

🔊 効果音: **boom**（ドーン / 音量0.2）

<v-clicks>

- 画像を左に配置したいとき
- テキストは右側に表示
- image-right の逆バージョン

</v-clicks>

---
layout: statement
color: coral
transition: pop-bounce
sound: false
---

# 数字には力がある

🔇 効果音: **無効**（`sound: false`）

---
layout: fact
transition: pop-zoom
sound: dramatic
soundVolume: 0.5
---

# 98.5%

ユーザー満足度スコア

🔊 効果音: **dramatic**（音量0.5）

---
layout: quote
author: Steve Jobs
transition: pop-fade
sound: chime
---

Stay hungry, stay foolish.

---
layout: section
color: pink
transition: pop-bounce
sound: sparkle
---

# section（pink）

セクション区切りのピンクバージョン

🔊 効果音: **sparkle**

---
layout: section
color: yellow
transition: pop-swirl
sound: whoosh
---

# section（yellow）

セクション区切りのイエローバージョン

🔊 効果音: **whoosh**

---
layout: section
color: cyan
transition: pop-flip
sound: pop
---

# section（cyan）

セクション区切りのシアンバージョン

🔊 効果音: **pop**

---
layout: section
color: green
transition: pop-bounce
sound: boom
soundVolume: 0.2
---

# section（green）

セクション区切りのグリーンバージョン

🔊 効果音: **boom**（音量0.2）

---
layout: section
color: candy
transition: pop-zoom
sound: chime
---

# section（candy）

セクション区切りのキャンディバージョン

🔊 効果音: **chime**

---
layout: statement
color: dark
transition: pop-fade
sound: click
---

# statement（dark）

白抜き文字の確認

🔊 効果音: **click**

---
layout: statement
color: cyan
transition: pop-slide
sound: false
---

# statement（cyan）

🔇 効果音: **無効**

---
layout: statement
color: pink
transition: pop-slide
sound: sparkle
---

# statement（pink）

🔊 効果音: **sparkle**

---
layout: statement
color: warm
transition: pop-bounce
sound: pop
---

# statement（warm）

🔊 効果音: **pop**

---
layout: statement
color: light
transition: pop-fade
sound: false
---

# statement（light）

背景が明るいバージョン

🔇 効果音: **無効**

---
layout: end
transition: pop-fade
sound: dramatic
soundVolume: 0.4
---

# ありがとう 💚

全レイアウト確認完了！

🔊 効果音: **dramatic**（フィナーレ）
