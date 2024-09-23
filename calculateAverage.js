let studentGrades = [85, 90, 78, 92, 88, "A"];

/**
 * @param {any[]} studentGrades
 */
function calculateAverage(studentGrades) {
	const sum = studentGrades.reduce((acc, grade) => {
		if (typeof grade !== "number") {
			throw new Error(`Оцінка ${grade} не є числом`);
		} else if (grade < 0) {
			throw new Error(`Оцінка ${grade} менше за 0`);
		} else if (grade > 100) {
			throw new Error(`Оцінка ${grade} більша за 100`);
		}

		return acc + grade;
	}, 0);

	return sum / studentGrades.length;
}

const avg = calculateAverage(studentGrades);
console.log(avg);