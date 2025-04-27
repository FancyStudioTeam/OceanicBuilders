export const normalizeArray = <Type>(array: RestOrArray<Type>): Type[] => {
  if (Array.isArray(array[0])) {
    return [...array[0]];
  }

  return array as Type[];
};

export type RestOrArray<Type> = Type[] | [Type[]];
