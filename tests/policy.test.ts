function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
