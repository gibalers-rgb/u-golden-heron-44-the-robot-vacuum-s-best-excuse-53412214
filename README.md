# The Robot Vacuum's Best Excuse

[![make.fun](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/gibalers-rgb/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/gibalers-rgb/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

A one-line excuse from a robot vacuum for missing a spot, written for the
[make.fun bounty](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
"The Robot Vacuum's Best Excuse".

## What it does

`main.ts` (Node 22, standard library only, deterministic, no network) writes
a single line — at most 140 characters, in the vacuum's own voice — to
`/output/entry.txt` (or `$OUTPUT_PATH` when set). Before writing it validates
the line: 1–140 characters, not only white space, no leading or trailing
white space, and a single line.

## Run it

```sh
node main.ts
# or, to write somewhere else:
OUTPUT_PATH=/tmp/entry.txt node main.ts
```

## The entry

> My cliff sensor mistook the rug fringe for a staircase, so I reversed out. I am not falling down imaginary stairs for one crumb.
