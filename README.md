# Maison Noir — Meridian Chronograph

A single-file luxury product page with a working semiprime authentication mechanic,
plus standalone semiprime implementations in TypeScript, Python, and Java.

## What actually runs where

| File            | Runs in            | How to run                         |
|-----------------|--------------------|-------------------------------------|
| `index.html`    | Browser            | Double-click it. Done.              |
| `semiprime.ts`  | Node / TS runtime  | `npx ts-node semiprime.ts` (import) |
| `semiprime.py`  | Python 3           | `python3 semiprime.py`              |
| `Semiprime.java`| JVM                | `javac Semiprime.java && java Semiprime` |
| `server.ts`     | Node + Express     | `npm i express && npx ts-node server.ts` |

The HTML file is self-contained: HTML, CSS, and JavaScript in one document.
The Python, Java, and backend TypeScript files are separate because browsers
do not execute Python, Java, or server-side TypeScript. Any claim otherwise
would be false.

## The semiprime mechanic

A semiprime is a natural number that is the product of exactly two primes
(possibly equal). Examples: 4 = 2×2, 46 = 2×23, 1679 = 23×73.

The page uses this as an authenticity proof: every genuine Maison Noir serial
is semip
