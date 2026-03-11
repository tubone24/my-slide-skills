---
theme: none
title: AIエージェント開発運用入門
author: 御田稔 / 大坪悠 / 塚田真規
transition: pop-fade
soundEffects: false
fonts:
  sans: Zen Maru Gothic
  local: Zen Maru Gothic, M PLUS Rounded 1c
defaults:
  transition: pop-fade
---

# AIエージェント<br>開発運用入門

生成AI深掘りガイド

---
layout: profile
image: /profile-mugi.jpg
name: 大坪 悠
nameEn: Yu Otsubo
title: ソフトウェアエンジニア @ KAG
qrcode: /qrcode-portfolio.png
qrcodeLabel: Portfolio
transition: pop-slide
sound: chime
zoom: 0.8
---

### 経歴

新潟県出身。2016年KDDI新卒入社。通信設備の運用、社内データ基盤構築のPM、Webチャットボット開発などを経験。スタートアップへの転職を経て2024年にKAG入社。生成AIを活用したアプリケーション(A-BOSS)開発に従事。

### 著書

- **AIエージェント開発運用入門**（SBクリエイティブ）
- **やさしいMCP入門**（秀和システム）
- **K.A.G Tech Book**（KDDIアジャイル開発センター）

### SNS

- <ph-twitter-logo class="text-lg" style="color: var(--pop-sage)" /> @tubone24
- <ph-globe class="text-lg" style="color: var(--pop-sage)" /> tubone-project24.xyz
- <ph-instagram-logo class="text-lg" style="color: var(--pop-sage)" /> [mugimugi.cutedog](https://www.instagram.com/mugimugi.cutedog/)

<div class="hobby-bubble">趣味: 犬と遊ぶこと 🐕</div>

---
layout: statement
color: dark
transition: pop-slide
---

# 突然ですが

---
layout: statement
color: cyan
transition: pop-bounce
---

# 「AIエージェント」

---
layout: statement
color: dark
transition: pop-fade
---

# 聞いたこと<br>ありますよね？

---
transition: pop-slide
---

# バズワード化する<br>「AIエージェント」

<v-clicks>

- <ph-quotes class="text-lg" style="color: var(--pop-sage)" /> 「AIエージェントを活用しよう」
- <ph-quotes class="text-lg" style="color: var(--pop-sage)" /> 「AIエージェントで業務効率化」
- <ph-quotes class="text-lg" style="color: var(--pop-sage)" /> 「エージェンティックAIの時代」

</v-clicks>

<div v-click class="pop-bounce-up" style="margin-top: 1.5rem;">
  <span class="pop-gradient-cool" style="font-size: 1.4rem; font-weight: bold;">みんな言ってる。でも…</span>
</div>

---
layout: statement
color: green
transition: pop-zoom
---

# 2025年<br>「AIエージェント元年」

---
layout: section
color: cyan
transition: pop-bounce
---

# で、質問です

---
layout: statement
color: coral
transition: pop-zoom
---

# AIエージェント、<br>使えてますか？

---
layout: statement
color: cyan
transition: pop-slide
---

# コーディングエージェントは？

---
transition: pop-fade
---

# コーディングの世界では浸透中

<v-clicks>

- <ph-terminal class="text-lg" style="color: var(--pop-sage)" /> **Claude Code** — ターミナルで動くAIエージェント
- <ph-cursor-text class="text-lg" style="color: var(--pop-sage)" /> **Cursor** — AI搭載コードエディタ
- <ph-github-logo class="text-lg" style="color: var(--pop-sage)" /> **GitHub Copilot** — コーディングアシスタント

</v-clicks>

<div v-click class="pop-bounce-up" style="margin-top: 1.5rem;">
  <span style="color: var(--pop-sage); font-size: 1.2rem; font-weight: bold;">エンジニアの多くが既に活用中</span>
</div>

---
layout: statement
color: coral
transition: pop-bounce
---

# じゃあ、<br>それ以外の業務は？

---
layout: statement
color: warm
transition: pop-slide
---

# 事務処理は？

---
transition: pop-fade
---

# 月末の経費精算、終わらない！

大量の書類、Excel、手作業…

<PictogramScene scene="expense" />

<style>
.slidev-layout { display: flex; flex-direction: column; }
</style>

---
layout: statement
color: warm
transition: pop-slide
---

# 資料作成は？

---
transition: pop-fade
---

# 来週の報告資料、まだ白紙…

締め切りに追われる日々…

<PictogramScene scene="document" />

<style>
.slidev-layout { display: flex; flex-direction: column; }
</style>

---
layout: statement
color: warm
transition: pop-slide
---

# 営業支援は？

---
transition: pop-fade
---

# 問い合わせが多すぎる！

未読メッセージが溜まる一方…

<PictogramScene scene="inquiry" />

<style>
.slidev-layout { display: flex; flex-direction: column; }
</style>

---
layout: statement
color: dark
transition: pop-fade
---

# …正直、<br>まだまだこれから

---
layout: statement
color: green
transition: pop-zoom
---

# でも<br>「あなた専用の」<br>AIエージェントなら？

---
layout: statement
color: cyan
transition: pop-bounce
---

# 全部できる

---
layout: section
color: pink
transition: pop-swirl
---

# 問題は<br>「どう作るか」

---
layout: statement
color: dark
transition: pop-fade
---

# 既存のAIエージェント本

---
transition: pop-slide
---

# よくあるパターン

<div style="display: flex; gap: 1.5rem; align-items: flex-start;">
<div style="flex: 1;">
<div style="background: #1E293B; border-radius: 12px; padding: 1rem 1.2rem; font-family: 'Courier New', monospace; font-size: 0.85rem; color: #A3E635; box-shadow: 0 4px 20px rgba(0,0,0,0.15);">
  <div style="color: #64748B; margin-bottom: 0.5rem; font-size: 0.75rem;">Terminal</div>
  <div style="color: #94A3B8;">$ python agent.py</div>
  <div style="color: #A3E635;">>>> エージェント起動中...</div>
  <div style="color: #94A3B8;">>>> ツール実行: search_web</div>
  <div style="color: #A3E635;">>>> 結果を返しています...</div>
</div>
<p style="margin-top: 0.8rem; font-size: 1.1rem;">黒い画面に白い文字…ターミナルの世界</p>
</div>
</div>

<div style="position: absolute; right: 1.5rem; bottom: 2rem; width: 180px;">
  <PictogramScene scene="confused" />
</div>

---
transition: pop-slide
---

# もしくは…

<div style="display: flex; gap: 1.5rem; align-items: flex-start;">
<div style="flex: 1;">
<div style="background: white; border-radius: 8px; border: 1px solid #E2E8F0; box-shadow: 0 2px 10px rgba(0,0,0,0.08); overflow: hidden;">
  <div style="background: #F8FAFC; padding: 0.5rem 0.8rem; border-bottom: 1px solid #E2E8F0; font-size: 0.7rem; color: #64748B; display: flex; align-items: center; gap: 0.5rem;">
    <span style="background: #EF4444; width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span>
    <span style="background: #F59E0B; width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span>
    <span style="background: #22C55E; width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span>
    <span style="margin-left: 0.5rem;">notebook.ipynb</span>
  </div>
  <div style="padding: 0.6rem 0.8rem; border-bottom: 1px solid #F1F5F9; display: flex; align-items: center; gap: 0.5rem;">
    <span style="background: #DBEAFE; color: #3B82F6; padding: 0.1rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-family: monospace;">In [1]:</span>
    <span style="font-family: monospace; font-size: 0.8rem; color: #334155;">from langchain import Agent</span>
  </div>
  <div style="padding: 0.6rem 0.8rem; border-bottom: 1px solid #F1F5F9; display: flex; align-items: center; gap: 0.5rem;">
    <span style="background: #DBEAFE; color: #3B82F6; padding: 0.1rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-family: monospace;">In [2]:</span>
    <span style="font-family: monospace; font-size: 0.8rem; color: #334155;">agent.run("タスク実行")</span>
  </div>
  <div style="padding: 0.6rem 0.8rem; display: flex; align-items: center; gap: 0.5rem;">
    <span style="background: #FEF3C7; color: #D97706; padding: 0.1rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-family: monospace;">Out[2]:</span>
    <span style="font-family: monospace; font-size: 0.8rem; color: #334155;">'タスクが完了しました'</span>
  </div>
</div>
<p style="margin-top: 0.8rem; font-size: 1.1rem;">Jupyter Notebookで動くエージェント</p>
</div>
</div>

<div style="position: absolute; right: 1.5rem; bottom: 2rem; width: 180px;">
  <PictogramScene scene="confused" />
</div>

---
layout: statement
color: coral
transition: pop-zoom
---

# それで業務のイメージ、<br>湧きますか？

---
layout: section
color: candy
transition: pop-bounce
---

# そこで、この本です

---
layout: image-left
image: /images/book-cover.png
transition: pop-fade
---

# AIエージェント<br>開発運用入門

<span style="color: var(--pop-sage); font-weight: bold;">御田稔 / 大坪悠 / 塚田真規</span>

SBクリエイティブ

<span class="pop-tag pop-tag-cool">生成AI深掘りガイド</span>

<style>
.slidev-layout :deep(.image-frame img) {
  max-height: 50vh !important;
}
</style>

---
layout: fact
transition: pop-zoom
---

# ITエンジニア本大賞 2026

技術書部門 ベスト10選出<br>最終プレゼン大会進出

---
layout: statement
color: green
transition: pop-bounce
---

# とにかく<br>フルスタック

---
transition: pop-slide
---

# フルスタックだと？

<StepList :steps="[
  'Web画面がある — ブラウザで操作できるUI',
  'デプロイできる — ローカルPCだけじゃない',
  '誰でもアクセスできる — チームで共有可能'
]" color="pink" />

<div v-click class="pop-bounce-up" style="margin-top: 1.5rem;">
  <span class="pop-gradient-cool" style="font-size: 1.2rem; font-weight: bold;">業務で「実際に使える」AIエージェントアプリ</span>
</div>

---
layout: fact
transition: pop-zoom
---

# <CountUp :to="8" /> 章

体系的にAIエージェントを学べる構成

---
layout: fact
transition: pop-zoom
---

# <CountUp :to="13" /> ハンズオン

どの章からでも独立して完走できる

---
transition: pop-slide
---

# 豊富なフレームワーク対応

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">

<PopCard v-click color="pink" title="AWS">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s" style="width: 28px; height: 28px;" />
    <span>クラウドにデプロイ</span>
  </div>
</PopCard>

<PopCard v-click color="mint" title="Next.js">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <img src="https://img.icons8.com/color/1200/nextjs.jpg" style="width: 28px; height: 28px;" />
    <span>WebフレームワークでUI構築</span>
  </div>
</PopCard>

<PopCard v-click color="pink" title="Mastra">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <img src="https://mastra.ai/favicon/new-brand/icon-512.png" style="width: 28px; height: 28px;" />
    <span>TypeScript製AIフレームワーク</span>
  </div>
</PopCard>

<PopCard v-click color="mint" title="Strands Agent / LangGraph">
  <div style="display: flex; align-items: center; gap: 0.5rem;">
    <img src="https://avatars.githubusercontent.com/u/209155962?s=280&v=4" style="width: 28px; height: 28px;" />
    <span>最新エージェントフレームワーク</span>
  </div>
</PopCard>

</div>

---
layout: statement
color: cyan
transition: pop-bounce
---

# どの章からでも<br>ハンズオンOK

---
layout: statement
color: dark
transition: pop-fade
---

# 興味がある技術から<br>始められる

---
layout: statement
color: green
transition: pop-zoom
---

# 最短で動く<br>AIエージェントアプリが<br>手に入る

---
layout: section
color: green
transition: pop-swirl
---

# ところで…

---
layout: statement
color: coral
transition: pop-slide
---

# このスライド

---
layout: statement
color: green
transition: pop-zoom
---

# AIエージェントで<br>作りました

---
layout: image-right
image: https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800
transition: pop-slide
---

# コーディング<br>だけじゃない

<div v-click class="pop-bounce-up">
<div class="pop-card" style="padding: 1.2rem;">
  <p style="font-size: 1rem; font-weight: bold; margin-bottom: 0.3rem;">
    <ph-microphone class="text-lg" style="color: var(--pop-rose)" /> 音声入力
    <ph-arrow-right class="text-lg" style="color: var(--pop-sage)" /> AI
    <ph-arrow-right class="text-lg" style="color: var(--pop-sage)" /> スライド
  </p>
  <p class="text-muted text-sm">構成提案から生成まで自動化</p>
</div>
</div>

<div v-click class="pop-slide-right" style="margin-top: 0.8rem;">
  <span style="color: var(--pop-sage); font-size: 1rem; font-weight: bold;">資料作成もAIエージェントの時代</span>
</div>

---
layout: statement
color: cyan
transition: pop-bounce
---

# AIエージェントの可能性は<br>まだまだ広がる

---
layout: statement
color: cyan
transition: pop-slide
---

# 2025年は<br>「AIエージェント元年」<br>でした

---
layout: section
color: green
transition: pop-swirl
---

# 2026年は<br><span style="white-space: nowrap; font-weight: 900; background: linear-gradient(90deg, #FF6B6B, #FF9F43, #FECA57, #48DBFB, #FF6BCB); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; filter: drop-shadow(0 0 2px white) drop-shadow(0 0 4px white);">AIエージェントビルダー</span><br>元年にしましょう

---
layout: statement
color: dark
transition: pop-zoom
---

# 「使う」から「作る」へ

---
layout: statement
color: green
transition: pop-bounce
---

# まずは1つ、自分の手で<br>作ってみませんか

---
layout: image-left
image: /images/book-cover.png
transition: pop-fade
---

# ぜひお手に取ってください

<GradientHeading gradient="cool" tag="h3">AIエージェント開発運用入門</GradientHeading>

<span style="color: var(--pop-sage); font-weight: bold;">御田稔 / 大坪悠 / 塚田真規</span>

<p class="text-sm">SBクリエイティブ</p>

<span class="pop-tag pop-tag-cool">8章構成</span> <span class="pop-tag">13ハンズオン</span>

<p class="text-sm" style="margin-top: 0.5rem;">ITエンジニア本大賞 2026 ベスト10</p>

<style>
.slidev-layout :deep(.image-frame img) {
  max-height: 50vh !important;
}
</style>

---
layout: end
transition: pop-fade
---

# ありがとうございました

AIエージェント、一緒に「作る」時代へ
