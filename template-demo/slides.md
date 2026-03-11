---
theme: none
title: 全レイアウト＆コンポーネント確認デモ
author: Demo
transition: pop-fade
soundEffects: true
soundVolume: 0.3
soundDefault: pop
fonts:
  sans: Zen Maru Gothic
  local: Zen Maru Gothic, M PLUS Rounded 1c
defaults:
  transition: pop-fade
---

# 全レイアウト確認デモ

18種類のレイアウト + コンポーネントをチェック

---
layout: profile
image: /profile-mugi.jpg
name: 大坪 悠
nameEn: Yu Otsubo
title: ソフトウェアエンジニア
qrcode: /qrcode-portfolio.png
qrcodeLabel: Portfolio
bannerImage: https://sottome.digital/ogp.png
bannerLabel: SottoMe
transition: pop-slide
sound: chime
zoom: 0.8
---

### 経歴

新潟県出身。2016年KDDI新卒入社。通信設備の運用、社内データ基盤構築のPM、Webチャットボット開発などを経験。スタートアップへの転職を経て2024年にKAG入社。生成AIを活用したアプリケーション開発に従事。

### 著書

- **K.A.G Tech Book**（KDDIアジャイル開発センター）
- **やさしいMCP入門**（秀和システム）

### SNS

- <ph-twitter-logo class="text-lg" style="color: var(--pop-sage)" /> @tubone24
- <ph-globe class="text-lg" style="color: var(--pop-sage)" /> tubone-project24.xyz
- <ph-instagram-logo class="text-lg" style="color: var(--pop-sage)" /> [mugimugi.cutedog](https://www.instagram.com/mugimugi.cutedog/)

<div class="hobby-bubble">趣味: 犬と遊ぶこと 🐕</div>

### モットー

「早く小さく失敗する」

---
layout: toc
transition: pop-slide
sound: chime
zoom: 0.9
---

# もくじ

1. カバー & 基本
2. セクション区切り
3. ステートメント
4. 2カラム & センター
5. 画像レイアウト
6. 円形画像レイアウト
7. 数値 & 引用
8. アイコングリッド
9. 3カラム特徴
10. 証言 & 連絡先
11. コンポーネント
12. エンド

---
layout: section
color: pink
transition: pop-bounce
sound: whoosh
---

# セクション区切り

5色のカラーバリエーション

---
layout: section
color: yellow
transition: pop-swirl
sound: whoosh
---

# section（yellow）

---
layout: section
color: cyan
transition: pop-flip
sound: pop
---

# section（cyan）

---
layout: section
color: green
transition: pop-bounce
sound: boom
soundVolume: 0.2
---

# section（green）

---
layout: section
color: candy
transition: pop-zoom
sound: chime
---

# section（candy）

---
layout: statement
color: dark
transition: pop-zoom
sound: dramatic
---

# まずはレイアウトを見ていこう

---
layout: statement
color: green
transition: pop-slide
sound: false
---

# シンプルに伝えよう

---
layout: statement
color: pink
transition: pop-slide
sound: sparkle
---

# statement（pink）

---
layout: statement
color: coral
transition: pop-bounce
sound: false
---

# 数字には力がある

---
layout: statement
color: cyan
transition: pop-slide
sound: false
---

# statement（cyan）

---
layout: statement
color: warm
transition: pop-bounce
sound: pop
---

# statement（warm）

---
layout: statement
color: light
transition: pop-fade
sound: false
---

# statement（light）

---
layout: default
transition: pop-slide
sound: chime
---

# default レイアウト

通常のコンテンツ表示に使うデフォルトレイアウト

<v-clicks>

- <ph-check-circle class="text-lg" style="color: var(--pop-sage)" /> リストアイテムは `v-clicks` で段階表示
- <ph-text-bolder class="text-lg" style="color: var(--pop-sage)" /> **太字**テキストや *強調* も使える
- <ph-code class="text-lg" style="color: var(--pop-sage)" /> `インラインコード` の表示もチェック

</v-clicks>

---
layout: center
transition: pop-bounce
sound: pop
---

# center レイアウト

コンテンツを中央に配置するシンプルなレイアウト

<ph-crosshair class="text-4xl" style="color: var(--pop-rose)" />

---
layout: two-cols
transition: pop-slide
sound: sparkle
---

# two-cols レイアウト

左カラムにテキストを配置

<v-clicks>

- 柔軟なグリッドレイアウト
- カラフルなボーダー装飾
- 見やすい2分割配置

</v-clicks>

::right::

### 右カラム

<PopCard color="pink" title="ピンクカード">
  左右の比較・対比に最適
</PopCard>

<PopCard color="mint" title="ミントカード" style="margin-top: 0.8rem;">
  色バリエーションも豊富
</PopCard>

---
layout: image-right
image: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800
transition: pop-slide
sound: click
---

# image-right

右側に画像を自動配置（四角フレーム）

<v-clicks>

- <ph-image class="text-lg" style="color: var(--pop-rose)" /> 左側にテキストコンテンツ
- <ph-frame-corners class="text-lg" style="color: var(--pop-rose)" /> 右側に画像を表示
- <ph-link class="text-lg" style="color: var(--pop-rose)" /> URLでもローカルファイルでもOK

</v-clicks>

---
layout: image-left
image: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800
transition: pop-slide
sound: boom
soundVolume: 0.2
---

# image-left

左側に画像を自動配置（四角フレーム）

<v-clicks>

- <ph-arrow-left class="text-lg" style="color: var(--pop-rose)" /> 画像を左に配置
- <ph-text-align-left class="text-lg" style="color: var(--pop-rose)" /> テキストは右側に表示
- <ph-arrows-left-right class="text-lg" style="color: var(--pop-rose)" /> image-rightの逆

</v-clicks>

---
layout: image-circle-right
image: https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600
transition: pop-slide
sound: pop
---

# image-circle-right

円形に切り抜かれた画像を右側に配置

<v-clicks>

- <ph-circle class="text-lg" style="color: var(--pop-rose)" /> ローズカラーのボーダー付き
- <ph-user-circle class="text-lg" style="color: var(--pop-rose)" /> 人物写真に最適

</v-clicks>

---
layout: image-circle-left
image: https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600
transition: pop-slide
sound: pop
---

# image-circle-left

円形画像が左側に配置されるレイアウト

ポートレートや人物紹介に最適なデザイン。

---
layout: fact
transition: pop-zoom
sound: dramatic
soundVolume: 0.5
---

# 98.5%

ユーザー満足度スコア

---
layout: quote
author: Steve Jobs
transition: pop-fade
sound: chime
---

Stay hungry, stay foolish.

---
layout: grid-icons
transition: pop-bounce
sound: sparkle
zoom: 0.9
---

# 活動内容

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.8rem; margin-top: 1rem;">

<div style="text-align: center;">
<ph-cooking-pot class="text-3xl" style="color: var(--pop-rose)" />

### ワークショップ

<p class="text-sm">手作りおもちゃ作り、料理教室など</p>
</div>

<div style="text-align: center;">
<ph-chat-circle-dots class="text-3xl" style="color: var(--pop-rose)" />

### 子育て情報交換会

<p class="text-sm">毎週のオンライン交流</p>
</div>

<div style="text-align: center;">
<ph-book-open class="text-3xl" style="color: var(--pop-rose)" />

### 趣味グループ

<p class="text-sm">読書会、手芸会など</p>
</div>

<div style="text-align: center;">
<ph-megaphone class="text-3xl" style="color: var(--pop-rose)" />

### ママ向けセミナー

<p class="text-sm">子育ての悩み解決、健康管理</p>
</div>

</div>

---
layout: three-features
transition: pop-zoom
sound: whoosh
zoom: 0.85
---

# コミュニティーの特徴

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-top: 1rem;">

<div style="text-align: center;">
<img src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=300" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%; border: 3px solid var(--pop-rose-light); margin: 0 auto 0.8rem; display: block;" />

<h3 class="text-sm" style="font-weight: 700;">経験豊富なママ講師の<br/>ワークショップ</h3>
</div>

<div style="text-align: center;">
<img src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%; border: 3px solid var(--pop-rose-light); margin: 0 auto 0.8rem; display: block;" />

<h3 class="text-sm" style="font-weight: 700;">子供と参加できる<br/>活動多数</h3>
</div>

<div style="text-align: center;">
<img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300" style="width: 130px; height: 130px; object-fit: cover; border-radius: 50%; border: 3px solid var(--pop-rose-light); margin: 0 auto 0.8rem; display: block;" />

<h3 class="text-sm" style="font-weight: 700;">参加者同士の情報交換や<br/>支え合いの場</h3>
</div>

</div>

---
layout: testimonial
transition: pop-bounce
sound: chime
zoom: 0.9
---

# 会員様の声

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-top: 1rem;">

<div style="text-align: center;">
<img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%; border: 3px solid var(--pop-rose-light); margin: 0 auto 0.8rem; display: block;" />

### Aさん

<p class="text-sm">「このコミュニティーでたくさんの友達ができました。子育ての悩みも共有できて心強いです。」</p>
</div>

<div style="text-align: center;">
<img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300" style="width: 100px; height: 100px; object-fit: cover; border-radius: 50%; border: 3px solid var(--pop-rose-light); margin: 0 auto 0.8rem; display: block;" />

### Bさん

<p class="text-sm">「趣味グループで自分の時間を楽しむことができ、リフレッシュできました。」</p>
</div>

</div>

---
layout: contact
transition: pop-fade
sound: sparkle
---

## <ph-clipboard-text class="text-xl" style="color: var(--pop-rose)" /> お申し込み

<div style="margin-top: 0.8rem;">
<div style="width: 100px; height: 100px; background: var(--pop-bg); border: 2px solid var(--pop-rose-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.8rem;">
<ph-qr-code class="text-3xl" style="color: var(--pop-rose-light)" />
</div>

<p class="text-sm">お申し込みは上記のコードの<br/>フォームよりお願いいたします。</p>
</div>

::right::

## <ph-envelope class="text-xl" style="color: var(--pop-rose)" /> お問い合わせ

<div style="margin-top: 0.8rem;">

**hello@example.com**

<p class="text-sm">ご不明点はいつでもお気軽に<br/>ご連絡ください。</p>
</div>

---
layout: default
transition: pop-slide
sound: pop
---

# コンポーネント紹介 (1/2)

<div style="margin-top: 0.8rem;">
<ProgressBar label="満足度" :value="95" color="pink" />
<ProgressBar label="リピート率" :value="80" color="cool" style="margin-top: 0.5rem;" />
</div>

<StepList :steps="['お申し込み', '初回参加', '定期参加']" color="pink" style="margin-top: 0.8rem;" />

---
layout: default
transition: pop-slide
sound: pop
---

# コンポーネント紹介 (2/2)

<div style="display: flex; gap: 3rem; align-items: center; margin-top: 0.8rem;">
<div style="text-align: center;">
<span class="text-huge"><CountUp :to="500" suffix="+" /></span>
<p class="text-sm">参加者数</p>
</div>
<div style="text-align: center;">
<span class="text-huge"><CountUp :to="30" /></span>
<p class="text-sm">イベント/月</p>
</div>
</div>

<PopTimeline :items="[
  { year: '2024', title: 'コミュニティ設立', desc: '10名でスタート' },
  { year: '2025', title: '会員100名突破', desc: 'オンライン活動開始' },
  { year: '2026', title: '全国展開', desc: '500名規模に成長' },
]" style="margin-top: 1rem;" />

---
layout: end
transition: pop-fade
sound: dramatic
soundVolume: 0.4
---

# ありがとう

全レイアウト確認完了!
