import type { RouteParams } from "./types";

export function buildQueryString(params: RouteParams) {
  return Object.entries(params)
    .reduce<string[]>((results, [key, value]) => {
      if (Array.isArray(value))
        return [
          ...results,
          ...value.map((item) => [`${key}[]`, item].join("=")),
        ];

      return [...results, [key, value].join("=")];
    }, [])
    .join("&");
}
