export const classesExtractor = (classesObj, classNames) => {
	return classNames.map((name) => classesObj[name]).join(' ');
};

export const generateKey = () => new Date().getTime() + Math.random();
