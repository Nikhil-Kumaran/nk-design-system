const { exec } = require("child_process");

exec(
  `cd node_modules/nk-design-system && yarn build`,
  (npmErr, npmStdout, npmStderr) => {
    if (npmErr) {
      console.error(`Some error while building nk-design-system ${npmErr}`);
      console.error(npmStdout);
      console.error(npmStderr);
      return;
    }
  }
);
