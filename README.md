# parity-net-tls-hub

`parity-net-tls-hub` is a TypeScript project in networking. Its focus is to design a TypeScript verification harness for tls systems, covering state machine modeling, transition tables, and failure-oriented tests.

## Project Rationale

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Parity Net TLS Hub Review Notes

For a quick review, compare `packet span` with `route drift` before reading the middle cases.

## Feature Set

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/parity-net-tls-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `route drift`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The TypeScript implementation avoids hidden state so fixture changes are easy to reason about.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

The same command runs the local verification path. The highest-scoring domain case is `baseline` at 217, which lands in `ship`. The most cautious case is `edge` at 142, which lands in `ship`.

## Next Improvements

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
