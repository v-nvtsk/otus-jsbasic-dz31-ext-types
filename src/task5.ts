/* eslint-disable max-len */
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME<T> = T extends { defaultProps: infer D } ? D : unknown;

// Hint: infer
export const getDefaultProps = <T>(component: React.ComponentType<T>): FIXME<React.ComponentType<T>> => {
  return component.defaultProps;
};
