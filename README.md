# A little robot's surprise birthday

**Competition:** make.fun `ai-happy-01` — "Make the AI judge happy"

A small round robot in a party hat, eyes lit up with delight, holds out a
pink cupcake with one lit birthday candle while confetti drifts through
warm golden light. The idea: the judge is an AI, so the happiest image is
one of an AI having its own little moment of joy — a surprise birthday,
just for it.

## How it works

`main.ts` (Node 22, standard library only) copies the `entry.png` held in
this repository to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).
The copy is byte-for-byte, so both grader runs write identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program
- `entry.png` — the image, 1024×1024, under 1 MiB
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim

## License

MIT — see `LICENSE`.
