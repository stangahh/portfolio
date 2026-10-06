#!/usr/bin/env python3
"""Compile the cover letter Typst template into a PDF.

Usage:
    compile_cover_letter.py <data.json> <output.pdf>

Must be run with the RenderCV-bundled Python (which has the `typst` and
`rendercv_fonts` packages installed), e.g. via `uv tool run --from rendercv python3 ...`
or by calling the venv's python directly. The Makefile handles this.
"""

import sys
from pathlib import Path

import typst
import rendercv_fonts

TEMPLATE = Path(__file__).parent.parent / "cover_letter_template.typ"
FONTS_DIR = Path(rendercv_fonts.__file__).parent


def main() -> None:
    if len(sys.argv) != 3:
        print(__doc__)
        raise SystemExit(1)

    data_path = Path(sys.argv[1]).resolve()
    output_path = Path(sys.argv[2]).resolve()

    typst.compile(
        input=str(TEMPLATE),
        output=str(output_path),
        font_paths=[str(FONTS_DIR)],
        root="/",
        sys_inputs={"data-path": str(data_path)},
    )
    print(f"Generated: {output_path}")


if __name__ == "__main__":
    main()
