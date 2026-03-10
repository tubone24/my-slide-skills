<script setup>
/**
 * PictogramScene - 塗りつぶしシルエット風ピクトグラム
 *
 * 参考: 案内標識やピクトグラムのようなソリッドな人物シルエット。
 * 棒人間ではなく、塗りつぶし（fill）で表現する太い人物像。
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
    <svg v-if="scene === 'expense'" class="scene-svg" viewBox="-10 -25 620 250" fill="none">
      <!-- 左: PCの前で困っている人 -->
      <g>
        <!-- 汗（しずく形） -->
        <ellipse cx="178" cy="22" rx="5" ry="9" transform="rotate(25, 178, 22)" fill="var(--pop-rose, #D4918F)" />
        <ellipse cx="194" cy="12" rx="4.5" ry="8" transform="rotate(40, 194, 12)" fill="var(--pop-rose, #D4918F)" />
        <ellipse cx="206" cy="28" rx="4" ry="7" transform="rotate(50, 206, 28)" fill="var(--pop-rose, #D4918F)" opacity="0.7" />
        <!-- 頭 -->
        <circle cx="140" cy="52" r="28" fill="var(--pop-text, #3D3D3D)" />
        <!-- 体（上半身、台形） -->
        <path d="M108 84 Q108 78 118 78 L162 78 Q172 78 172 84 L178 140 Q178 148 170 148 L110 148 Q102 148 102 140 Z" fill="var(--pop-text, #3D3D3D)" />
        <!-- 腕（左、キーボードへ） -->
        <path d="M108 95 L78 128 Q74 132 78 136 L90 140" fill="var(--pop-text, #3D3D3D)" />
        <path d="M108 95 C98 110 82 122 78 130 C74 138 80 140 90 140" fill="var(--pop-text, #3D3D3D)" />
        <!-- ノートPC本体 -->
        <path d="M56 142 L96 102 Q100 98 104 102 L106 106" stroke="var(--pop-text, #3D3D3D)" stroke-width="3" fill="var(--pop-bg-card, #FFFBF8)" />
        <rect x="42" y="142" width="120" height="8" rx="3" fill="var(--pop-text, #3D3D3D)" />
        <!-- ノートPC画面枠 -->
        <path d="M60 140 L94 106 L150 106 L158 140 Z" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-text, #3D3D3D)" stroke-width="2" />
      </g>

      <!-- 右: 書類の山 -->
      <g>
        <!-- 書類1 -->
        <rect x="270" y="48" width="68" height="88" rx="4" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-sage, #A8C5B8)" stroke-width="3" />
        <line x1="284" y1="68" x2="324" y2="68" stroke="var(--pop-sage, #A8C5B8)" stroke-width="2" opacity="0.5" />
        <line x1="284" y1="82" x2="318" y2="82" stroke="var(--pop-sage, #A8C5B8)" stroke-width="2" opacity="0.5" />
        <line x1="284" y1="96" x2="310" y2="96" stroke="var(--pop-sage, #A8C5B8)" stroke-width="2" opacity="0.5" />
        <line x1="284" y1="110" x2="322" y2="110" stroke="var(--pop-sage, #A8C5B8)" stroke-width="2" opacity="0.5" />

        <!-- 書類2（少しずらして重ねる） -->
        <rect x="295" y="36" width="68" height="88" rx="4" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="3" transform="rotate(6, 329, 80)" />
        <line x1="309" y1="58" x2="349" y2="58" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="2" opacity="0.4" transform="rotate(6, 329, 80)" />
        <line x1="309" y1="72" x2="343" y2="72" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="2" opacity="0.4" transform="rotate(6, 329, 80)" />

        <!-- レシート（長い紙） -->
        <rect x="390" y="52" width="44" height="100" rx="3" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-sage, #A8C5B8)" stroke-width="2.5" />
        <line x1="400" y1="70" x2="424" y2="70" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1.5" opacity="0.4" />
        <line x1="400" y1="82" x2="424" y2="82" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1.5" opacity="0.4" />
        <line x1="400" y1="94" x2="424" y2="94" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1.5" opacity="0.4" />
        <line x1="400" y1="106" x2="424" y2="106" stroke="var(--pop-sage, #A8C5B8)" stroke-width="1.5" opacity="0.4" />
        <line x1="398" y1="126" x2="426" y2="126" stroke="var(--pop-rose, #D4918F)" stroke-width="2" />

        <!-- Excel格子 -->
        <rect x="460" y="44" width="72" height="58" rx="4" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="3" />
        <line x1="460" y1="62" x2="532" y2="62" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.4" />
        <line x1="460" y1="80" x2="532" y2="80" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.4" />
        <line x1="484" y1="44" x2="484" y2="102" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.4" />
        <line x1="508" y1="44" x2="508" y2="102" stroke="var(--pop-sage-dark, #8FB8A0)" stroke-width="1.5" opacity="0.4" />

        <!-- ¥マーク -->
        <text x="496" y="158" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="36" font-weight="bold" font-family="var(--pop-font-heading, sans-serif)">¥</text>
      </g>
    </svg>

    <!-- ========== DOCUMENT: 資料作成に困っている ========== -->
    <svg v-else-if="scene === 'document'" class="scene-svg" viewBox="-10 -25 620 250" fill="none">
      <!-- 左: 白紙のモニター -->
      <g>
        <rect x="20" y="24" width="150" height="110" rx="8" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-sage, #A8C5B8)" stroke-width="3" />
        <!-- 空白を示す点線 -->
        <line x1="50" y1="58" x2="140" y2="58" stroke="var(--pop-text-muted, #9B9B9B)" stroke-width="2" stroke-dasharray="6 5" />
        <line x1="50" y1="78" x2="125" y2="78" stroke="var(--pop-text-muted, #9B9B9B)" stroke-width="2" stroke-dasharray="6 5" />
        <line x1="50" y1="98" x2="108" y2="98" stroke="var(--pop-text-muted, #9B9B9B)" stroke-width="2" stroke-dasharray="6 5" />
        <!-- カーソル -->
        <line x1="50" y1="50" x2="50" y2="68" stroke="var(--pop-rose, #D4918F)" stroke-width="2.5" />
        <!-- スタンド -->
        <rect x="80" y="134" width="30" height="16" rx="2" fill="var(--pop-sage, #A8C5B8)" opacity="0.6" />
        <rect x="60" y="150" width="70" height="6" rx="3" fill="var(--pop-sage, #A8C5B8)" opacity="0.6" />
      </g>

      <!-- 中央: 困っている人 -->
      <g>
        <!-- ?マーク -->
        <text x="290" y="34" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="16" font-weight="bold">?</text>
        <text x="310" y="28" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="12" font-weight="bold">?</text>
        <!-- 汗 -->
        <ellipse cx="320" cy="52" rx="5" ry="9" transform="rotate(30, 320, 52)" fill="var(--pop-rose, #D4918F)" />
        <ellipse cx="334" cy="42" rx="4" ry="7" transform="rotate(45, 334, 42)" fill="var(--pop-rose, #D4918F)" opacity="0.7" />
        <!-- 頭 -->
        <circle cx="280" cy="62" r="28" fill="var(--pop-text, #3D3D3D)" />
        <!-- 体 -->
        <path d="M248 94 Q248 88 258 88 L302 88 Q312 88 312 94 L318 155 Q318 163 310 163 L250 163 Q242 163 242 155 Z" fill="var(--pop-text, #3D3D3D)" />
        <!-- 腕（頭を抱える） -->
        <path d="M250 100 C238 90 236 72 248 58" fill="var(--pop-text, #3D3D3D)" stroke="var(--pop-text, #3D3D3D)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M310 100 C322 90 324 72 312 58" fill="var(--pop-text, #3D3D3D)" stroke="var(--pop-text, #3D3D3D)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
      </g>

      <!-- 右: 締め切り時計 -->
      <g>
        <circle cx="470" cy="82" r="50" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-rose, #D4918F)" stroke-width="4" />
        <circle cx="470" cy="82" r="3" fill="var(--pop-text, #3D3D3D)" />
        <!-- 針 -->
        <line x1="470" y1="82" x2="470" y2="48" stroke="var(--pop-text, #3D3D3D)" stroke-width="4" stroke-linecap="round" />
        <line x1="470" y1="82" x2="502" y2="72" stroke="var(--pop-rose, #D4918F)" stroke-width="3.5" stroke-linecap="round" />
        <!-- 目盛り -->
        <line x1="470" y1="36" x2="470" y2="42" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <line x1="516" y1="82" x2="510" y2="82" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <line x1="470" y1="128" x2="470" y2="122" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <line x1="424" y1="82" x2="430" y2="82" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <!-- DEADLINE -->
        <text x="470" y="156" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="13" font-weight="bold" font-family="var(--pop-font-heading, sans-serif)" letter-spacing="1">DEADLINE</text>
      </g>
    </svg>

    <!-- ========== INQUIRY: 問い合わせが多すぎる ========== -->
    <svg v-else-if="scene === 'inquiry'" class="scene-svg" viewBox="-10 -25 680 250" fill="none">
      <!-- 左: PCで対応する人 -->
      <g>
        <!-- 汗（しずく形） -->
        <ellipse cx="168" cy="12" rx="6" ry="11" transform="rotate(25, 168, 12)" fill="var(--pop-rose, #D4918F)" />
        <ellipse cx="186" cy="4" rx="5" ry="9" transform="rotate(40, 186, 4)" fill="var(--pop-rose, #D4918F)" />
        <ellipse cx="198" cy="20" rx="4.5" ry="8" transform="rotate(50, 198, 20)" fill="var(--pop-rose, #D4918F)" opacity="0.7" />
        <!-- 頭 -->
        <circle cx="130" cy="48" r="28" fill="var(--pop-text, #3D3D3D)" />
        <!-- ヘッドセット -->
        <path d="M100 42 Q100 20 130 18 Q160 20 160 42" stroke="var(--pop-text, #3D3D3D)" stroke-width="5" fill="none" />
        <rect x="92" y="36" width="14" height="18" rx="5" fill="var(--pop-text-light, #5A5A5A)" />
        <!-- 体 -->
        <path d="M98 80 Q98 74 108 74 L152 74 Q162 74 162 80 L168 142 Q168 150 160 150 L100 150 Q92 150 92 142 Z" fill="var(--pop-text, #3D3D3D)" />
        <!-- 腕（キーボード方向） -->
        <path d="M98 90 C82 105 70 120 68 132" stroke="var(--pop-text, #3D3D3D)" stroke-width="14" stroke-linecap="round" fill="none" />
        <!-- ノートPC -->
        <path d="M48 140 L82 100 L148 100 L155 140 Z" fill="var(--pop-bg-card, #FFFBF8)" stroke="var(--pop-text, #3D3D3D)" stroke-width="2.5" />
        <rect x="32" y="140" width="140" height="10" rx="4" fill="var(--pop-text, #3D3D3D)" />
      </g>

      <!-- 右: 質問する人物たち（塗りつぶしシルエット） -->
      <!-- 人物1 -->
      <g transform="translate(260, 10)">
        <!-- 吹き出し -->
        <rect x="42" y="0" width="36" height="28" rx="5" fill="var(--pop-rose, #D4918F)" />
        <polygon points="48,28 54,38 60,28" fill="var(--pop-rose, #D4918F)" />
        <text x="60" y="21" text-anchor="middle" fill="white" font-size="18" font-weight="bold">?</text>
        <!-- 頭 -->
        <circle cx="42" cy="60" r="20" fill="var(--pop-text, #3D3D3D)" />
        <!-- 体 -->
        <path d="M20 84 Q20 78 28 78 L56 78 Q64 78 64 84 L68 138 Q68 144 62 144 L22 144 Q16 144 16 138 Z" fill="var(--pop-text, #3D3D3D)" />
        <!-- 腕（片手上げ） -->
        <path d="M62 92 C74 80 78 62 72 48" stroke="var(--pop-text, #3D3D3D)" stroke-width="14" stroke-linecap="round" fill="none" />
        <path d="M20 92 C8 106 2 118 6 128" stroke="var(--pop-text, #3D3D3D)" stroke-width="12" stroke-linecap="round" fill="none" />
      </g>

      <!-- 人物2 -->
      <g transform="translate(370, 30)">
        <rect x="36" y="0" width="36" height="28" rx="5" fill="var(--pop-rose, #D4918F)" />
        <polygon points="42,28 48,38 54,28" fill="var(--pop-rose, #D4918F)" />
        <text x="54" y="21" text-anchor="middle" fill="white" font-size="18" font-weight="bold">?</text>
        <circle cx="36" cy="60" r="20" fill="var(--pop-text, #3D3D3D)" />
        <path d="M14 84 Q14 78 22 78 L50 78 Q58 78 58 84 L62 138 Q62 144 56 144 L16 144 Q10 144 10 138 Z" fill="var(--pop-text, #3D3D3D)" />
        <path d="M56 92 C68 80 72 62 66 48" stroke="var(--pop-text, #3D3D3D)" stroke-width="14" stroke-linecap="round" fill="none" />
        <path d="M14 92 C2 106 -2 118 2 128" stroke="var(--pop-text, #3D3D3D)" stroke-width="12" stroke-linecap="round" fill="none" />
      </g>

      <!-- 人物3（やや小さめ、奥） -->
      <g transform="translate(475, 20)" opacity="0.75">
        <rect x="32" y="0" width="32" height="24" rx="4" fill="var(--pop-rose-light, #E8B4B8)" />
        <polygon points="38,24 43,33 48,24" fill="var(--pop-rose-light, #E8B4B8)" />
        <text x="48" y="18" text-anchor="middle" fill="white" font-size="15" font-weight="bold">?</text>
        <circle cx="32" cy="52" r="17" fill="var(--pop-text, #3D3D3D)" />
        <path d="M14 72 Q14 67 20 67 L44 67 Q50 67 50 72 L53 118 Q53 123 48 123 L16 123 Q11 123 11 118 Z" fill="var(--pop-text, #3D3D3D)" />
        <path d="M48 80 C58 70 62 56 56 44" stroke="var(--pop-text, #3D3D3D)" stroke-width="12" stroke-linecap="round" fill="none" />
      </g>

      <!-- 人物4（小さめ、奥） -->
      <g transform="translate(565, 45)" opacity="0.5">
        <rect x="26" y="0" width="28" height="20" rx="4" fill="var(--pop-rose-light, #E8B4B8)" />
        <polygon points="32,20 36,28 40,20" fill="var(--pop-rose-light, #E8B4B8)" />
        <text x="40" y="15" text-anchor="middle" fill="white" font-size="13" font-weight="bold">?</text>
        <circle cx="26" cy="44" r="14" fill="var(--pop-text, #3D3D3D)" />
        <path d="M12 60 Q12 56 16 56 L36 56 Q40 56 40 60 L42 100 Q42 104 38 104 L14 104 Q10 104 10 100 Z" fill="var(--pop-text, #3D3D3D)" />
        <path d="M38 66 C46 58 48 46 44 38" stroke="var(--pop-text, #3D3D3D)" stroke-width="10" stroke-linecap="round" fill="none" />
      </g>
    </svg>

    <!-- ========== CONFUSED: 難しくてわからない ========== -->
    <svg v-else-if="scene === 'confused'" class="scene-svg" :class="{ 'scene-svg-small': size === 'small' }" :viewBox="size === 'small' ? '0 0 140 150' : '0 0 240 200'" fill="none">
      <template v-if="size === 'small'">
        <!-- コンパクト版 -->
        <text x="30" y="28" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="22" font-weight="bold">?</text>
        <text x="108" y="22" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="16" font-weight="bold">?</text>
        <!-- 汗 -->
        <ellipse cx="102" cy="42" rx="5" ry="8" transform="rotate(30, 102, 42)" fill="var(--pop-rose, #D4918F)" />
        <ellipse cx="114" cy="34" rx="4" ry="6.5" transform="rotate(45, 114, 34)" fill="var(--pop-rose, #D4918F)" opacity="0.7" />
        <!-- 頭 -->
        <circle cx="70" cy="48" r="22" fill="var(--pop-text, #3D3D3D)" />
        <!-- ×目（白抜き） -->
        <line x1="58" y1="42" x2="66" y2="50" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3" stroke-linecap="round" />
        <line x1="66" y1="42" x2="58" y2="50" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3" stroke-linecap="round" />
        <line x1="74" y1="42" x2="82" y2="50" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3" stroke-linecap="round" />
        <line x1="82" y1="42" x2="74" y2="50" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3" stroke-linecap="round" />
        <!-- 口 -->
        <path d="M62 58 Q70 64 78 58" stroke="var(--pop-bg, #F5EDE6)" stroke-width="2" fill="none" />
        <!-- 体 -->
        <path d="M46 74 Q46 68 54 68 L86 68 Q94 68 94 74 L98 126 Q98 132 92 132 L48 132 Q42 132 42 126 Z" fill="var(--pop-text, #3D3D3D)" />
      </template>
      <template v-else>
        <!-- ノーマル版 -->
        <text x="60" y="36" text-anchor="middle" fill="var(--pop-rose, #D4918F)" font-size="30" font-weight="bold">?</text>
        <text x="178" y="26" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="24" font-weight="bold">?</text>
        <text x="42" y="90" text-anchor="middle" fill="var(--pop-rose-light, #E8B4B8)" font-size="20" font-weight="bold">?</text>
        <!-- 汗 -->
        <ellipse cx="162" cy="50" rx="6" ry="11" transform="rotate(25, 162, 50)" fill="var(--pop-rose, #D4918F)" />
        <ellipse cx="178" cy="40" rx="5" ry="9" transform="rotate(40, 178, 40)" fill="var(--pop-rose, #D4918F)" opacity="0.7" />
        <ellipse cx="190" cy="56" rx="4.5" ry="8" transform="rotate(50, 190, 56)" fill="var(--pop-rose, #D4918F)" opacity="0.5" />
        <!-- 頭 -->
        <circle cx="120" cy="60" r="30" fill="var(--pop-text, #3D3D3D)" />
        <!-- ×目（白抜き） -->
        <line x1="104" y1="52" x2="114" y2="62" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3.5" stroke-linecap="round" />
        <line x1="114" y1="52" x2="104" y2="62" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3.5" stroke-linecap="round" />
        <line x1="126" y1="52" x2="136" y2="62" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3.5" stroke-linecap="round" />
        <line x1="136" y1="52" x2="126" y2="62" stroke="var(--pop-bg, #F5EDE6)" stroke-width="3.5" stroke-linecap="round" />
        <!-- 口 -->
        <path d="M110 72 Q120 80 130 72" stroke="var(--pop-bg, #F5EDE6)" stroke-width="2.5" fill="none" />
        <!-- 体 -->
        <path d="M84 96 Q84 90 92 90 L148 90 Q156 90 156 96 L162 172 Q162 180 154 180 L86 180 Q78 180 78 172 Z" fill="var(--pop-text, #3D3D3D)" />
        <!-- 腕（だらんと） -->
        <path d="M86 106 C68 118 58 138 62 154" stroke="var(--pop-text, #3D3D3D)" stroke-width="14" stroke-linecap="round" fill="none" />
        <path d="M154 106 C172 118 182 138 178 154" stroke="var(--pop-text, #3D3D3D)" stroke-width="14" stroke-linecap="round" fill="none" />
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
  padding: 10px 0 0 0;
  margin-top: auto;
}

.size-small {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.scene-svg {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.scene-svg-small {
  max-width: 110px;
  width: 110px;
}
</style>
