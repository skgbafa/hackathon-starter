import commander from 'commander';
import config from '/config';

commander
  .version('1.0.0')
  .option('-o, --option [id]', 'An option')
  .parse(process.argv);

const executeProgram = async (program) => {
  const { option } = program;
  if (option) {
    console.log(option);
  }
};

executeProgram(commander)
  .then(() => {
    console.log("Program Complete");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
