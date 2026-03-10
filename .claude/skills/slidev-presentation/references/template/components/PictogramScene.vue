<script setup>
/**
 * PictogramScene - SVGベースのピクトグラムシーン
 *
 * 棒人間/シルエット風の人物図を使って、困っているシチュエーションを表現。
 * 参考: 非常口マークや案内標識のようなシンプルで明快なピクトグラムスタイル。
 *
 * Usage:
 *   <PictogramScene scene="expense" />
 *   <PictogramScene scene="confused" size="small" />
 */

defineProps({
  scene: { type: String, required: true },
  size: { type: String, default: 'normal' },
})
</script>

<template>
  <div
    class="pictogram-scene"
    :class="[`size-${size}`]"
    aria-hidden="true"
  >
    <!-- ========== EXPENSE: 経費精算に困っている ========== -->
    <!-- 左: PCで作業する人（ストレス線付き）、右: 書類・レシートの山 -->
    <svg v-if="scene === 'expense'" class="scene-svg" viewBox="0 0 520 180" fill="none">
      <!-- 左側: PCの前で困っている人 -->
      <g class="person-at-desk">
        <!-- ストレス線 -->
        <line x1="88" y1="8" x2="88" y2="30" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" stroke-linecap="round" />
        <line x1="100" y1="4" x2="100" y2="28" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" stroke-linecap="round" />
        <line x1="112" y1="8" x2="112" y2="30" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" stroke-linecap="round" />
        <line x1="124" y1="12" x2="124" y2="32" stroke="var(--pop-rose-light, #E8B4B8)" stroke-width="2" stroke-linecap="round" />
        <line x1="76" y1="12" x2="76" y2="32" stroke="var(--pop-rose-light, #E8B4B8)" stroke-width="2" stroke-linecap="round" />
        <!-- 頭 -->
        <circle cx="100" cy="50" r="16" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" />
        <!-- 体 -->
        <line x1="100" y1="66" x2="100" y2="110" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 腕（机に手をつく） -->
        <path d="M100 80 L70 100" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M100 80 L130 95" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 足 -->
        <path d="M100 110 L80 150" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M100 110 L120 150" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- ノートPC -->
        <rect x="55" y="100" width="50" height="5" rx="2" fill="var(--pop-text, #3D3D3D)" opacity="0.7" />
        <path d="M60 100 L68 80 L100 80 L105 100" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" fill="var(--pop-bg-alt, #FAF6F2)" />
      </g>

      <!-- 右側: 書類・レシートの山 -->
      <g class="document-pile">
        <!-- 書類1 -->
        <rect x="200" y="60" width="48" height="62" rx="3" stroke="var(--pop-sage, #A8C5B8)" stroke-width="2.5" fill="var(--pop-bg-alt, #FAF6F2)" />
        <line x1="210" y1="75" x2="238" y2="75" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1.5" opacity="0.6" />
        <line x1="210" y1="85" x2="234" y2="85" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1.5" opacity="0.6" />
        <line x1="210" y1="95" x2="230" y2="95" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1.5" opacity="0.6" />

        <!-- 書類2（重なり） -->
        <rect x="220" y="50" width="48" height="62" rx="3" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="2.5" fill="var(--pop-bg-alt, #FAF6F2)" transform="rotate(5, 244, 81)" />
        <line x1="230" y1="67" x2="258" y2="67" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.5" />
        <line x1="230" y1="77" x2="254" y2="77" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.5" />

        <!-- レシート -->
        <rect x="280" y="70" width="32" height="70" rx="2" stroke="var(--pop-sage, #A8C5B8)" stroke-width="2" fill="var(--pop-bg-alt, #FAF6F2)" />
        <line x1="287" y1="82" x2="305" y2="82" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1" opacity="0.5" />
        <line x1="287" y1="90" x2="305" y2="90" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1" opacity="0.5" />
        <line x1="287" y1="98" x2="305" y2="98" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1" opacity="0.5" />
        <line x1="287" y1="106" x2="305" y2="106" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1" opacity="0.5" />
        <line x1="287" y1="118" x2="305" y2="118" stroke="var(--pop-rose, #D4918F)" stroke-width="1.5" />

        <!-- Excel表アイコン -->
        <rect x="330" y="55" width="52" height="42" rx="3" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="2.5" fill="var(--pop-bg-alt, #FAF6F2)" />
        <!-- 格子線 -->
        <line x1="330" y1="69" x2="382" y2="69" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.5" />
        <line x1="330" y1="83" x2="382" y2="83" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.5" />
        <line x1="348" y1="55" x2="348" y2="97" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.5" />
        <line x1="364" y1="55" x2="364" y2="97" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.5" />

        <!-- ¥マーク -->
        <text x="356" y="132" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="28" font-weight="bold" font-family="var(--pop-font-heading, sans-serif)">¥</text>
      </g>
    </svg>

    <!-- ========== DOCUMENT: 資料作成に困っている ========== -->
    <!-- 左: 白紙のプレゼン画面、右: 締切時計と困った人 -->
    <svg v-else-if="scene === 'document'" class="scene-svg" viewBox="0 0 520 180" fill="none">
      <!-- 左側: 白紙の画面 -->
      <g class="blank-screen">
        <!-- モニター -->
        <rect x="30" y="30" width="110" height="80" rx="6" stroke="var(--pop-sage, #A8C5B8)" stroke-width="3" fill="var(--pop-bg-alt, #FAF6F2)" />
        <!-- 空白を示す点線 -->
        <line x1="55" y1="60" x2="115" y2="60" stroke="var(--pop-text-muted, #9B9B9B)" stroke-width="1.5" stroke-dasharray="4 4" />
        <line x1="55" y1="75" x2="105" y2="75" stroke="var(--pop-text-muted, #9B9B9B)" stroke-width="1.5" stroke-dasharray="4 4" />
        <line x1="55" y1="90" x2="95" y2="90" stroke="var(--pop-text-muted, #9B9B9B)" stroke-width="1.5" stroke-dasharray="4 4" />
        <!-- スタンド -->
        <line x1="85" y1="110" x2="85" y2="130" stroke="var(--pop-sage, #A8C5B8)" stroke-width="3" />
        <line x1="65" y1="130" x2="105" y2="130" stroke="var(--pop-sage, #A8C5B8)" stroke-width="3" stroke-linecap="round" />
        <!-- カーソル点滅表現 -->
        <line x1="55" y1="55" x2="55" y2="68" stroke="var(--pop-rose, #D4918F)" stroke-width="2" />
      </g>

      <!-- 中央: 困っている人 -->
      <g class="confused-person">
        <!-- クエスチョンマーク -->
        <text x="265" y="28" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="24" font-weight="bold">?</text>
        <text x="285" y="18" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="18" font-weight="bold">?</text>
        <!-- 頭 -->
        <circle cx="270" cy="50" r="16" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" />
        <!-- 体 -->
        <line x1="270" y1="66" x2="270" y2="110" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 腕（頭を抱える） -->
        <path d="M270 82 L248 62" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M270 82 L292 62" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 足 -->
        <path d="M270 110 L252 150" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M270 110 L288 150" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
      </g>

      <!-- 右側: 締め切り時計 -->
      <g class="deadline-clock">
        <!-- 時計 -->
        <circle cx="420" cy="70" r="36" stroke="var(--pop-rose, #D4918F)" stroke-width="3" fill="var(--pop-bg-alt, #FAF6F2)" />
        <circle cx="420" cy="70" r="2" fill="var(--pop-text, #3D3D3D)" />
        <!-- 針 -->
        <line x1="420" y1="70" x2="420" y2="46" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <line x1="420" y1="70" x2="444" y2="62" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" stroke-linecap="round" />
        <!-- 12時の目盛り -->
        <line x1="420" y1="38" x2="420" y2="42" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" />
        <line x1="452" y1="70" x2="448" y2="70" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" />
        <line x1="420" y1="102" x2="420" y2="98" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" />
        <line x1="388" y1="70" x2="392" y2="70" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" />
        <!-- 警告マーク -->
        <text x="420" y="140" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="16" font-weight="bold" font-family="var(--pop-font-heading, sans-serif)">DEADLINE</text>
      </g>
    </svg>

    <!-- ========== INQUIRY: 問い合わせが多すぎる ========== -->
    <!-- 左: PCで対応する人（ストレス線）、右: 質問する複数の人物 -->
    <svg v-else-if="scene === 'inquiry'" class="scene-svg" viewBox="0 0 560 180" fill="none">
      <!-- 左側: PCで対応する人 -->
      <g class="support-person">
        <!-- ストレス線 -->
        <line x1="68" y1="6" x2="68" y2="28" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" stroke-linecap="round" />
        <line x1="80" y1="2" x2="80" y2="26" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" stroke-linecap="round" />
        <line x1="92" y1="6" x2="92" y2="28" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" stroke-linecap="round" />
        <line x1="104" y1="10" x2="104" y2="30" stroke="var(--pop-rose-light, #E8B4B8)" stroke-width="2" stroke-linecap="round" />
        <line x1="56" y1="10" x2="56" y2="30" stroke="var(--pop-rose-light, #E8B4B8)" stroke-width="2" stroke-linecap="round" />
        <!-- 頭 -->
        <circle cx="80" cy="48" r="16" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" />
        <!-- ヘッドセット -->
        <path d="M64 48 Q64 36 80 34 Q96 36 96 48" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" fill="none" />
        <rect x="58" y="44" width="8" height="12" rx="3" fill="var(--pop-text, #3D3D3D)" opacity="0.6" />
        <!-- 体 -->
        <line x1="80" y1="64" x2="80" y2="108" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 腕 -->
        <path d="M80 78 L55 98" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M80 78 L110 92" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 足 -->
        <path d="M80 108 L62 148" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M80 108 L98 148" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- ノートPC -->
        <rect x="38" y="98" width="50" height="5" rx="2" fill="var(--pop-text, #3D3D3D)" opacity="0.7" />
        <path d="M43 98 L51 78 L83 78 L88 98" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" fill="var(--pop-bg-alt, #FAF6F2)" />
      </g>

      <!-- 区切り線 -->
      <line x1="160" y1="30" x2="160" y2="160" stroke="var(--pop-rose-light, #E8B4B8)" stroke-width="1" stroke-dasharray="4 4" opacity="0.5" />

      <!-- 右側: 質問する人物たち -->
      <!-- 人物1（手を挙げて質問） -->
      <g transform="translate(200, 10)">
        <!-- 吹き出し -->
        <rect x="30" y="0" width="28" height="22" rx="4" fill="var(--pop-rose, #D4918F)" />
        <polygon points="36,22 40,30 44,22" fill="var(--pop-rose, #D4918F)" />
        <text x="44" y="16" text-anchor="middle" fill="white" font-size="14" font-weight="bold">?</text>
        <!-- 頭 -->
        <circle cx="30" cy="48" r="12" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <!-- 体 -->
        <line x1="30" y1="60" x2="30" y2="98" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <!-- 腕（片手上げ） -->
        <path d="M30 72 L12 88" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M30 72 L50 50" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <!-- 足 -->
        <path d="M30 98 L18 130" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M30 98 L42 130" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
      </g>

      <!-- 人物2 -->
      <g transform="translate(290, 30)">
        <rect x="24" y="0" width="28" height="22" rx="4" fill="var(--pop-rose, #D4918F)" />
        <polygon points="30,22 34,30 38,22" fill="var(--pop-rose, #D4918F)" />
        <text x="38" y="16" text-anchor="middle" fill="white" font-size="14" font-weight="bold">?</text>
        <circle cx="24" cy="48" r="12" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <line x1="24" y1="60" x2="24" y2="98" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M24 72 L6 88" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M24 72 L44 52" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M24 98 L12 130" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M24 98 L36 130" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
      </g>

      <!-- 人物3 -->
      <g transform="translate(370, 15)">
        <rect x="28" y="0" width="28" height="22" rx="4" fill="var(--pop-rose-light, #E8B4B8)" />
        <polygon points="34,22 38,30 42,22" fill="var(--pop-rose-light, #E8B4B8)" />
        <text x="42" y="16" text-anchor="middle" fill="white" font-size="14" font-weight="bold">?</text>
        <circle cx="28" cy="48" r="12" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <line x1="28" y1="60" x2="28" y2="98" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M28 72 L10 86" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M28 72 L48 52" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M28 98 L16 130" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M28 98 L40 130" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
      </g>

      <!-- 人物4（小さめ、奥） -->
      <g transform="translate(440, 50)" opacity="0.6">
        <rect x="22" y="0" width="24" height="18" rx="3" fill="var(--pop-rose-light, #E8B4B8)" />
        <polygon points="28,18 31,24 34,18" fill="var(--pop-rose-light, #E8B4B8)" />
        <text x="34" y="14" text-anchor="middle" fill="white" font-size="12" font-weight="bold">?</text>
        <circle cx="22" cy="38" r="10" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" />
        <line x1="22" y1="48" x2="22" y2="78" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M22 58 L8 72" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M22 58 L38 42" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M22 78 L12 105" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M22 78 L32 105" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
      </g>

      <!-- 人物5（小さめ、奥） -->
      <g transform="translate(495, 40)" opacity="0.45">
        <rect x="18" y="0" width="22" height="16" rx="3" fill="var(--pop-rose-light, #E8B4B8)" />
        <polygon points="24,16 27,22 30,16" fill="var(--pop-rose-light, #E8B4B8)" />
        <text x="29" y="12" text-anchor="middle" fill="white" font-size="10" font-weight="bold">?</text>
        <circle cx="18" cy="34" r="9" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" />
        <line x1="18" y1="43" x2="18" y2="70" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M18 53 L6 65" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M18 53 L32 40" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M18 70 L10 95" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
        <path d="M18 70 L26 95" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" stroke-linecap="round" />
      </g>
    </svg>

    <!-- ========== CONFUSED: 難しくてわからない ========== -->
    <svg v-else-if="scene === 'confused'" class="scene-svg" :class="{ 'scene-svg-small': size === 'small' }" :viewBox="size === 'small' ? '0 0 120 120' : '0 0 200 160'" fill="none">
      <template v-if="size === 'small'">
        <!-- コンパクト版 -->
        <text x="28" y="22" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="18" font-weight="bold">?</text>
        <text x="92" y="18" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="14" font-weight="bold">?</text>
        <!-- 頭（×目） -->
        <circle cx="60" cy="42" r="16" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <line x1="52" y1="38" x2="58" y2="44" stroke="var(--pop-rose, #D4918F)" stroke-width="2" />
        <line x1="58" y1="38" x2="52" y2="44" stroke="var(--pop-rose, #D4918F)" stroke-width="2" />
        <line x1="62" y1="38" x2="68" y2="44" stroke="var(--pop-rose, #D4918F)" stroke-width="2" />
        <line x1="68" y1="38" x2="62" y2="44" stroke="var(--pop-rose, #D4918F)" stroke-width="2" />
        <!-- 口 -->
        <path d="M55 50 Q60 54 65 50" stroke="var(--pop-text, #3D3D3D)" stroke-width="1.5" fill="none" />
        <!-- 体 -->
        <line x1="60" y1="58" x2="60" y2="85" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <!-- 腕 -->
        <path d="M60 68 L42 80" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M60 68 L78 80" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <!-- 足 -->
        <path d="M60 85 L48 110" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <path d="M60 85 L72 110" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" stroke-linecap="round" />
        <!-- 汗 -->
        <circle cx="82" cy="34" r="3" fill="var(--pop-rose, #D4918F)" opacity="0.6" />
      </template>
      <template v-else>
        <!-- ノーマル版 -->
        <text x="58" y="28" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="24" font-weight="bold">?</text>
        <text x="145" y="22" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="20" font-weight="bold">?</text>
        <text x="38" y="70" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="16" font-weight="bold">?</text>
        <!-- 頭（×目） -->
        <circle cx="100" cy="48" r="20" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" />
        <line x1="90" y1="43" x2="96" y2="49" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" />
        <line x1="96" y1="43" x2="90" y2="49" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" />
        <line x1="104" y1="43" x2="110" y2="49" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" />
        <line x1="110" y1="43" x2="104" y2="49" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" />
        <!-- 口 -->
        <path d="M93 56 Q100 62 107 56" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" fill="none" />
        <!-- 体 -->
        <line x1="100" y1="68" x2="100" y2="110" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 腕 -->
        <path d="M100 82 L72 98" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M100 82 L128 98" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 足 -->
        <path d="M100 110 L82 148" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <path d="M100 110 L118 148" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" stroke-linecap="round" />
        <!-- 汗 -->
        <circle cx="128" cy="36" r="4" fill="var(--pop-rose, #D4918F)" opacity="0.6" />
        <circle cx="138" cy="50" r="3" fill="var(--pop-rose-light, #E8B4B8)" opacity="0.5" />
        <!-- 渦巻き -->
        <path d="M160 70 Q165 60 170 65 Q175 72 168 76 Q158 78 156 68" stroke="var(--pop-rose-light, #E8B4B8)" stroke-width="2" fill="none" opacity="0.6" />
      </template>
    </svg>
  </div>
</template>

<style scoped>
.pictogram-scene {
  pointer-events: none;
  user-select: none;
}

.size-normal {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}

.size-small {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.scene-svg {
  width: 100%;
  max-width: 480px;
  height: auto;
}

.scene-svg-small {
  max-width: 100px;
  width: 100px;
}
</style>
