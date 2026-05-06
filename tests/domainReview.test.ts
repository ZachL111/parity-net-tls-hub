function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 73, slack: 34, drag: 9, confidence: 64 };
equal(domainReviewScore(item), 217);
equal(domainReviewLane(item), "ship");
