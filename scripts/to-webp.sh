#!/usr/bin/env bash
#
# PNG from Figma -> WebP for src/assets/projects.
#
# There is no single right cwebp setting for this project. A flat UI screenshot
# is mostly large areas of one colour, and lossy WebP is worse than the PNG it
# came from — it invents gradient noise where there was none and still spends
# bytes on it. A 3D render or a photograph is the other way round: lossless
# WebP is far bigger than the PNG, lossy is a third of it.
#
# So encode both ways and keep whichever came out smaller, per file. That
# decides by content instead of by guess, and costs a second per image.
#
# Usage: scripts/to-webp.sh <source.png> <destination.webp>

set -euo pipefail

src=${1:?source png}
dst=${2:?destination webp}

command -v cwebp >/dev/null || {
  echo "cwebp not found — install with: brew install webp" >&2
  exit 1
}

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

cwebp -quiet -q 85 "$src" -o "$tmp/lossy.webp"
cwebp -quiet -lossless -q 100 "$src" -o "$tmp/lossless.webp"

lossy=$(stat -f%z "$tmp/lossy.webp")
lossless=$(stat -f%z "$tmp/lossless.webp")

if [ "$lossless" -le "$lossy" ]; then
  cp "$tmp/lossless.webp" "$dst"
  mode=lossless
  kept=$lossless
else
  cp "$tmp/lossy.webp" "$dst"
  mode=lossy
  kept=$lossy
fi

orig=$(stat -f%z "$src")
printf '%-46s %s  %5dK -> %5dK\n' "$(basename "$dst")" "$mode" $((orig / 1024)) $((kept / 1024))
