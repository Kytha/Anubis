import { sum, count, mean, min, max, noAggregation } from "./aggregators";
import { AGGREGATOR_TYPES } from "./constants";

export const aggregatorReducer = (aggregator, data, category, field, type) => {
  const {
    MEAN,
    MIN,
    MAX,
    SUM,
    STANDARD_DEVIATION,
    COUNT,
    NONE,
  } = AGGREGATOR_TYPES;
  switch (aggregator) {
    case MEAN.type:
      return mean(data, category, field, type);
    case SUM.type:
      return sum(data, category, field, type);
    case COUNT.type:
      return count(data, category, field, type);
    case MIN.type:
      return min(data, category, field, type);
    case MAX.type:
      return max(data, category, field, type);
    case NONE.type:
    default:
      return noAggregation(data, category, field, type);
  }
};
