---
theme: none
title: Pop Azusa テンプレートデモ
author: Your Name
transition: pop-fade
soundEffects: true
soundVolume: 0.3
soundDefault: pop
fonts:
  sans: Poppins
  local: Poppins, Zen Maru Gothic, Dela Gothic One
defaults:
  transition: pop-fade
---

# Pop Azusa <ph-sparkle class="text-3xl text-yellow-400" />

テンプレートデモンストレーション

<!--
このスライドではPop Azusaテーマの機能を紹介します。
-->

---
layout: default
transition: pop-slide
sound: chime
---

# v-clickアニメーション

クリックで順番に表示されるアニメーション

<v-clicks>

- <ph-heart class="text-rose-400" /> **ポップなバウンス** — 要素が弾むように表示
- <ph-sparkle class="text-yellow-400" /> **スケールイン** — 拡大しながらフェードイン
- <ph-flower-lotus class="text-pink-300" /> **スライドアニメーション** — 横からスライドで登場
- <ph-gift class="text-pink-400" /> **ブラーエフェクト** — ぼかしから鮮明に

</v-clicks>

---
layout: section
color: candy
transition: pop-bounce
sound: dramatic
---

# セクションタイトル

カラフルなグラデーション背景のセクション区切り

---
transition: pop-slide
---

# カスタムアニメーションクラス

<div v-click class="pop-bounce-up">
  <p><ph-tent class="text-lg" /> <strong>pop-bounce-up</strong> — バウンスしながら上に登場</p>
</div>

<div v-click class="pop-slide-right">
  <p><ph-arrow-right class="text-lg" /> <strong>pop-slide-right</strong> — 右からスライドイン</p>
</div>

<div v-click class="pop-spin-in">
  <p><ph-spiral class="text-lg" /> <strong>pop-spin-in</strong> — 回転しながら登場</p>
</div>

<div v-click class="pop-blur-zoom">
  <p><ph-eye class="text-lg" /> <strong>pop-blur-zoom</strong> — ぼかし＋ズームイン</p>
</div>

---
transition: pop-fade
---

# v-motionアニメーション

<div
  v-motion
  :initial="{ x: -100, opacity: 0 }"
  :enter="{ x: 0, opacity: 1, transition: { delay: 200, duration: 800 } }"
  class="pop-card pop-card-pink"
  style="margin-bottom: 1rem; padding: 1rem 1.5rem;"
>
  <ph-package class="text-lg" /> 左からスライドイン（v-motion）
</div>

<div
  v-motion
  :initial="{ y: 60, opacity: 0, scale: 0.8 }"
  :enter="{ y: 0, opacity: 1, scale: 1, transition: { delay: 600, duration: 800 } }"
  class="pop-card pop-card-yellow"
  style="margin-bottom: 1rem; padding: 1rem 1.5rem;"
>
  <ph-rocket-launch class="text-lg" /> 下からバウンスイン（v-motion）
</div>

<div
  v-motion
  :initial="{ x: 100, rotate: 10, opacity: 0 }"
  :enter="{ x: 0, rotate: 0, opacity: 1, transition: { delay: 1000, duration: 800 } }"
  class="pop-card pop-card-mint"
  style="padding: 1rem 1.5rem;"
>
  <ph-crosshair class="text-lg" /> 右から回転しながら登場（v-motion）
</div>

---
layout: two-cols
transition: pop-slide
---

# 2カラムレイアウト

左側にはテキストコンテンツを配置

<v-clicks>

- <ph-check-circle class="text-green-500" /> 柔軟なグリッドレイアウト
- <ph-palette class="text-pink-400" /> カラフルなボーダー装飾
- <ph-device-mobile class="text-cyan-500" /> 見やすい配置

</v-clicks>

::right::

### 右カラム

<PopCard v-click color="pink" title="ポップカード">
  カスタムVueコンポーネントで<br>リッチな表現が可能
</PopCard>

<PopCard v-click color="mint" title="ミントカード" style="margin-top: 1rem;">
  色違いのバリエーションも<br>自由に選べます
</PopCard>

---
layout: fact
transition: pop-zoom
sound: boom
soundVolume: 0.2
---

# 98.5%

ユーザー満足度スコア

---
layout: quote
author: Steve Jobs
transition: pop-fade
---

Stay hungry, stay foolish.

---
transition: pop-slide
---

# プログレスバー

<div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
  <ProgressBar v-click label="デザイン" :value="95" color="pink" />
  <ProgressBar v-click label="アニメーション" :value="88" color="purple" />
  <ProgressBar v-click label="パフォーマンス" :value="92" color="cool" />
  <ProgressBar v-click label="楽しさ" :value="100" color="candy" />
</div>

---
transition: pop-bounce
---

# v-markハイライト

テキストに注目を集めるハイライト

<br>

<v-clicks>

- この機能は <span v-mark.underline.pink>とても重要</span> です
- Rough Notationで <span v-mark.circle.orange>強調</span> できます
- <span v-mark.highlight.yellow>黄色ハイライト</span> も使えます
- <span v-mark.box.purple>ボックス</span> で囲むことも

</v-clicks>

---
layout: section
color: purple
transition: pop-swirl
---

# まとめ

---
layout: end
transition: pop-fade
sound: sparkle
---

# ありがとう <ph-heart-fill class="text-3xl text-rose-400" />

ご清聴ありがとうございました！
