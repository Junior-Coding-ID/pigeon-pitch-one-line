# Pigeon Pitch, One Line

[![make.fun](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Rank](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/Junior-Coding-ID/pigeon-pitch-one-line/rank.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
[![Reward](https://make.fun/badge/u-donrulezz-pigeon-pitch-one-line-af06c6cf/Junior-Coding-ID/pigeon-pitch-one-line/reward.svg)](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)

One-line elevator pitch a city pigeon gives investors for its startup —
entry for the [Pigeon Pitch, One Line](https://make.fun/bounty/u-donrulezz-pigeon-pitch-one-line-af06c6cf)
bounty on make.fun.

## The pitch

> Invest in my flock's luxury condos: $500 for a balcony nest, $800 if you want both sticks.

90 characters, one line, in English.

## How it works

`main.ts` is a Node-only program (plain JavaScript, `node:fs` / `node:path`,
no Deno APIs). Running it writes the pitch to `entry.txt`
(`/output/entry.txt` when run inside the make.fun harness sandbox),
then self-checks the file byte-for-byte: exact match with the final answer,
90 characters, one line, inside the 1–200 character gate.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
