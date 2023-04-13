export const getDiffInDays = (createdAt) => {
    const dateLast = new Date(createdAt);
    const now = new Date();
	const difference = now.getTime() - dateLast.getTime()
	return Math.ceil(difference / (1000 * 3600 * 24))
}
