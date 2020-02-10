export const classesExtractor = (classesObj, classNames) => {
	return classNames.map((name) => classesObj[name]).join(' ');
};
