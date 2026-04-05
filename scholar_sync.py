#!/usr/bin/env python3
"""
Google Scholar Sync for Arshia Hemmat's website.

Usage:
    pip install scholarly
    python3 scholar_sync.py

What it does:
    1. Fetches citation stats (total, h-index, i10-index) from Google Scholar.
    2. Writes the result to scholar_data.json (loaded by index.html at runtime).

Run this locally before pushing, or let the GitHub Action (scholar_sync.yml) run it weekly.
"""

import json
import sys
import os
from datetime import datetime, timezone

SCHOLAR_ID = "lASBGvMAAAAJ"
OUTPUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "scholar_data.json")


def fetch_scholar_data(scholar_id: str) -> dict:
    try:
        from scholarly import scholarly, ProxyGenerator
    except ImportError:
        print("✗  'scholarly' not installed. Run: pip install scholarly")
        sys.exit(1)

    print(f"  Fetching Google Scholar profile: {scholar_id} ...")

    author = scholarly.search_author_id(scholar_id)
    author = scholarly.fill(author, sections=["basics", "indices", "counts"])

    citations   = author.get("citedby", 0)
    hindex      = author.get("hindex", 0)
    i10index    = author.get("i10index", 0)
    name        = author.get("name", "")
    affiliation = author.get("affiliation", "")

    # Citation history per year
    cites_per_year = author.get("cites_per_year", {})

    print(f"  ✓ {name} | Citations: {citations} | h-index: {hindex} | i10: {i10index}")

    return {
        "last_updated": datetime.now(timezone.utc).isoformat(),
        "scholar_id": scholar_id,
        "name": name,
        "affiliation": affiliation,
        "citations": citations,
        "hindex": hindex,
        "i10index": i10index,
        "cites_per_year": cites_per_year,
        "verified": True,
    }


def save(data: dict, path: str) -> None:
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print(f"  ✓ Saved → {path}")


def main():
    print("\n╔══════════════════════════════════════════╗")
    print("║   Google Scholar Sync — Arshia Hemmat   ║")
    print("╚══════════════════════════════════════════╝\n")

    data = fetch_scholar_data(SCHOLAR_ID)
    save(data, OUTPUT_PATH)

    print("\n  Done! Push scholar_data.json to update the live site.\n")


if __name__ == "__main__":
    main()
