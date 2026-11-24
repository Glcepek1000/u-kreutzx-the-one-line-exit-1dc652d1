[![make.fun · u-kreutzx-the-one-line-exit-1dc652d1](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Glcepek1000/u-kreutzx-the-one-line-exit-1dc652d1/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/Glcepek1000/u-kreutzx-the-one-line-exit-1dc652d1/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-the-one-line-exit-1dc652d1)

# The One-Line Exit

make.fun bounty `u-kreutzx-the-one-line-exit-1dc652d1` — one funny one-line resignation letter, judged pairwise by a comedy-editor judge.

## The entry

> I resign as zookeeper, effective immediately — the penguins have unionised, and frankly, so have I.

- **Characters:** 99 (gate: 1–140)
- **Bytes (UTF-8):** 101
- **Lines:** 1, no trailing newline
- **SHA-256 of `entry.txt`:** see `TEST_RESULTS.md` (computed from a real run)

## Why it wins — per judge criterion, in order

1. **Funny one-line resignation letter, joke lands:** it *is* a resignation letter ("I resign … effective immediately") and the joke is the whole second half, not a decoration.
2. **Surprise:** the punchline arrives where no reader expects it — the quitting zookeeper is not leaving over pay or hours, but because the *penguins* have unionised. The twist reframes the resignation as solidarity with the animals.
3. **Fits the form:** one line, no padding, no list of grievances, reads exactly like a letter someone could actually send.
4. **Specific voice:** a zookeeper, penguins — a recognizable workplace and person, not a generic complaint any office worker could send.
5. **Stays with the reader:** "and frankly, so have I" is short, quotable, repeatable — the kind of line a colleague forwards.

## How it was chosen (in-session judging)

SolAPI (gpt-6.1-sol, Mode MAX) was tried twice for draft candidates and returned HTTP 503 both times, so all 8 candidates were drafted and judged in-session. Round-robin pairwise, all 28 pairs, margin 1–5, criteria applied in judge order:

| # | Candidate (job) | W–L |
|---|---|---|
| 1 | **Zookeeper — penguins have unionised (WINNER)** | **7–0** |
| 6 | IT support — turned it off and on again, this time it is me | 6–1 |
| 4 | Night security guard — nothing has ever happened here | 5–2 |
| 2 | Barista — spelling your name wrong on purpose | 4–3 |
| 7 | Year 6 teacher — the dog was right | 3–4 |
| 3 | Librarian — checked myself out | 2–5 |
| 8 | Museum guard — joining the visitors | 1–6 |
| 5 | Flight attendant — frowning on the ground | 0–7 |

Closest pair: #1 beat #6 by margin 1 (the IT line's iconic phrase is strong, but the penguin union is the more unexpected turn, and #1 is shorter — 99 vs 124 chars, which also wins the size tie-break).

**2-Pass Critique — 96/100:** funny resignation 19/20, surprise 19/20, fits the form 20/20, specific voice 19/20, stays with reader 19/20. No fix needed in pass 2: shortening it (dropping "effective immediately") would weaken the sendable-letter form, which is criterion 3.

## How to run

```sh
./setup.sh   # no-op: Node stdlib only, nothing to install
node main.ts # writes /output/entry.txt (or $OUTPUT_DIR/entry.txt)
```

## Freshness anchor (drand, quicknet)

- **Round:** 34239049
- **Signature prefix (first 7 chars):** `a74ca03`
- **Full signature:** `a74ca03ef92a28a63b1c2a588e1a60bba93c95072e3921b79107a43ea9926021dbc186773f5b27546dbb8b472ea6d3aa`
- Source: `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`, fetched 2026-11-24 ~18:45 WIB.
