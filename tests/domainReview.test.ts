import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 73, slack: 34, drag: 9, confidence: 64 };
assert.equal(domainReviewScore(item), 217);
assert.equal(domainReviewLane(item), "ship");
