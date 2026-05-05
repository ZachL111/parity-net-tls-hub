import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 91,
    "capacity": 87,
    "latency": 18,
    "risk": 12,
    "weight": 6,
    "score": 161,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 90,
    "capacity": 101,
    "latency": 10,
    "risk": 22,
    "weight": 8,
    "score": 169,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 82,
    "capacity": 78,
    "latency": 8,
    "risk": 24,
    "weight": 12,
    "score": 138,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
