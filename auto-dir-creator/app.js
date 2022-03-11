const fsp = require('fs').promises;

const sep = require('path').sep;

const FILENAME = './dir.list';
const OUTDIR = 'out';

(async () => {
  try {
    const dirs = (await fsp.readFile(FILENAME, 'binary')).split('\n');

    let i = 1;
    for (const dir of dirs) {
      if (dir && !dir.startsWith('#')) {
        await fsp.mkdir(
          OUTDIR + sep + `${i > 9 ? i : '0' + i} ${dir.replace(':', ' -')}`,
          { recursive: true }
        );
        i++;
      }
    }

    console.log(`created ${i - 1} directories :-)`);
  } catch (error) {
    console.error(`there was an error: ${error.message}`);
  }
})();
