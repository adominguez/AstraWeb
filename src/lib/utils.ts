import clsx from 'clsx';

function mergeClasses(defaultClasses: string, propClasses: string): string {
  const defaultClassList = defaultClasses.split(' ');
  const propClassList = propClasses.split(' ');

  const mergedClasses = propClassList.reduce((acc, propClass) => {
    const [propClassPrefix] = propClass.split('-');
    const filteredClasses = acc.filter(
      (defaultClass) => !defaultClass.startsWith(`${propClassPrefix}-`)
    );
    return [...filteredClasses, propClass];
  }, defaultClassList);

  return clsx(mergedClasses);
}

export { mergeClasses };