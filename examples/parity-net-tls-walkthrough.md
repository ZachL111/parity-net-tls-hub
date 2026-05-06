# Parity Net TLS Hub Walkthrough

I use this file as a small checklist before changing the TypeScript implementation.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 217 | ship |
| stress | retry pressure | 146 | ship |
| edge | route drift | 142 | ship |
| recovery | socket risk | 146 | ship |
| stale | packet span | 158 | ship |

Start with `baseline` and `edge`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around retry pressure and socket risk.
