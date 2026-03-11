"""
デザイン性のあるQRコード生成スクリプト
URL: https://portfolio.tubone-project24.xyz/
カラー: セージグリーン (#A8C5B8) / コーラルピンク (#D4918F)
出力: PNG, 約120x120px

依存ライブラリ:
    pip install "qrcode[pil]"
"""

import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer
from qrcode.image.styles.colormasks import RadialGradiantColorMask
from PIL import Image

URL = "https://portfolio.tubone-project24.xyz/"

# --- カラー定義 ---
# セージグリーン: #A8C5B8 → (168, 197, 184)
SAGE_GREEN = (168, 197, 184)

# コーラルピンク: #D4918F → (212, 145, 143)
CORAL_PINK = (212, 145, 143)

# 背景: 白
BACKGROUND = (255, 255, 255)


def generate_styled_qr(
    url: str,
    output_path: str,
    target_size: int = 360,
    final_size: int = 120,
) -> None:
    """
    スタイル付きQRコードを生成して保存する。

    Parameters
    ----------
    url         : エンコードするURL
    output_path : 出力ファイルパス (.png)
    target_size : 生成時の一辺ピクセル数（高品質のため大きめに生成してからリサイズ）
    final_size  : 最終的なリサイズ後の一辺ピクセル数
    """

    # box_size と border はリサイズ前のサイズを調整するために使用
    # target_size ≒ (version_modules + 2*border) * box_size
    # version=None で fit=True にすると自動でバージョンが決まる
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,  # 高エラー訂正（スタイル付きQR向け）
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    # RadialGradiantColorMask:
    #   back_color  : 背景色
    #   center_color: 中心部の前景色
    #   edge_color  : 外周部の前景色
    img = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        color_mask=RadialGradiantColorMask(
            back_color=BACKGROUND,
            center_color=CORAL_PINK,   # 中心: コーラルピンク
            edge_color=SAGE_GREEN,     # 外周: セージグリーン
        ),
    )

    # StyledPilImage は PIL.Image を継承しているので .convert() で操作可能
    pil_img = img.convert("RGBA")

    # 高解像度で生成してから LANCZOS でダウンスケールし品質を保つ
    # まず target_size に合わせる
    pil_img = pil_img.resize((target_size, target_size), Image.LANCZOS)

    # 最終サイズにリサイズ
    pil_img = pil_img.resize((final_size, final_size), Image.LANCZOS)

    pil_img.save(output_path, format="PNG")
    print(f"QRコードを保存しました: {output_path}  ({final_size}x{final_size}px)")


def generate_transparent_qr(
    url: str,
    output_path: str,
    target_size: int = 360,
    final_size: int = 120,
) -> None:
    """
    背景透明バージョンのQRコードを生成する。
    白ピクセルをアルファ0（完全透明）に変換する。

    Parameters
    ----------
    url         : エンコードするURL
    output_path : 出力ファイルパス (.png)
    target_size : 生成時の一辺ピクセル数
    final_size  : 最終的なリサイズ後の一辺ピクセル数
    """

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(
        image_factory=StyledPilImage,
        module_drawer=RoundedModuleDrawer(),
        color_mask=RadialGradiantColorMask(
            back_color=BACKGROUND,
            center_color=CORAL_PINK,
            edge_color=SAGE_GREEN,
        ),
    )

    # RGBA に変換して白ピクセルを透明化
    pil_img = img.convert("RGBA")
    pixels = pil_img.load()
    width, height = pil_img.size

    WHITE_THRESHOLD = 240  # この値以上の明度をもつピクセルを透明にする

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if r >= WHITE_THRESHOLD and g >= WHITE_THRESHOLD and b >= WHITE_THRESHOLD:
                pixels[x, y] = (r, g, b, 0)  # 透明

    pil_img = pil_img.resize((target_size, target_size), Image.LANCZOS)
    pil_img = pil_img.resize((final_size, final_size), Image.LANCZOS)

    pil_img.save(output_path, format="PNG")
    print(f"透明背景QRコードを保存しました: {output_path}  ({final_size}x{final_size}px)")


if __name__ == "__main__":
    # 白背景バージョン
    generate_styled_qr(
        url=URL,
        output_path="qrcode_portfolio.png",
        target_size=360,
        final_size=120,
    )

    # 透明背景バージョン
    generate_transparent_qr(
        url=URL,
        output_path="qrcode_portfolio_transparent.png",
        target_size=360,
        final_size=120,
    )
