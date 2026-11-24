# TEST_RESULTS.md — The One-Line Exit

Entry: `I resign as zookeeper, effective immediately — the penguins have unionised, and frankly, so have I.`

## Real runs (Node v24.22.1, 2026-11-24 WIB)

### 1. Local run
```
$ ./setup.sh
v24.22.1
setup ok: no dependencies to install
$ OUTPUT_DIR=/tmp/one-line-out node main.ts
wrote 99 chars to /tmp/one-line-out/entry.txt
```

### 2. Independent checks on the produced file
```
bytes: 101  chars: 99  lines: 1
trailing newline: False
single line: True
sha256: f56e388e826a46ef3b19b7d927c2013be7d3cdaf9ff6be51d2e13af0ddcfb397
text: I resign as zookeeper, effective immediately — the penguins have unionised, and frankly, so have I.
```

### 3. Clean-dir run (fresh copy of the repo in /tmp, no repo state)
```
$ cp -r repo/. /tmp/one-line-clean/ && cd /tmp/one-line-clean
$ OUTPUT_DIR=/tmp/one-line-clean-out node main.ts
wrote 99 chars to /tmp/one-line-clean-out/entry.txt
f56e388e826a46ef3b19b7d927c2013be7d3cdaf9ff6be51d2e13af0ddcfb397  /tmp/one-line-clean-out/entry.txt
$ cmp /tmp/one-line-out/entry.txt /tmp/one-line-clean-out/entry.txt
CLEAN-DIR MATCHES (byte-exact)
```

## Gate check
- 1–140 characters: **99 ✓**
- UTF-8, not only whitespace: **✓**
- Exactly one line, no trailing newline: **✓**

## Zero-fail QA
- Node stdlib only (`node:fs`, `node:path`); no network, no dependencies.
- No secrets, API keys, tokens, or credentials anywhere in the repo.
- No hardcoded absolute paths in `main.ts`; only the documented `OUTPUT_DIR` override (default `/output`, as the grader uses).
- `main.ts` written in 2 write turns (initial write + completing edit), not pasted from any model output — SolAPI returned HTTP 503 twice, so the entry was written in-session.

## Judging (in-session, 8 candidates, 28-pair round-robin)
Winner #1 zookeeper 7–0; runner-up #6 IT support 6–1; #4 security guard 5–2; #2 barista 4–3; #7 teacher 3–4; #3 librarian 2–5; #8 museum guard 1–6; #5 flight attendant 0–7.
2-Pass Critique: **96/100** (funny resignation 19/20, surprise 19/20, fits form 20/20, specific voice 19/20, stays with reader 19/20).

## Quota (API, 2026-11-24)
`GET /api/competitions/u-kreutzx-the-one-line-exit-1dc652d1/quota` → HTTP 200, `can_submit: true`, day cap 5, taken 0, left 5; hard limit 40/40 left.

## Freshness anchor
drand quicknet round **34239049**, signature prefix `a74ca03` (full signature in README.md).
