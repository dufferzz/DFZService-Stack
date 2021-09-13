import chalk from "chalk";
import dayjs from "dayjs";

const log = (text: string) => {
	console.log(
		chalk.blue(dayjs().format("HH:mm:ss") + " =>"),
		chalk.green(text)
	);
};

const trace = (text: string) => {
	console.log(
		chalk.blue(dayjs().format("HH:mm:ss") + " =>"),
		chalk.yellowBright(text)
	);
};

const logError = (text: string) => {
	console.log(chalk.blue(dayjs().format("HH:mm:ss") + " =>"), chalk.red(text));
};

export { log, trace, logError };
