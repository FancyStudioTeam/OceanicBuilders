export const normalizeArray = <T>(array: RestOrArray<T>): T[] => {
  if (Array.isArray(array[0])) {
    return [...array[0]];
  }

  return array as T[];
};

export type RestOrArray<T> = T[] | [T[]];
