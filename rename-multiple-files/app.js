const fsp = require('fs').promises;

const sep = require('path').sep;

const path = '<PATH>'; // TODO: change according to your needs

(async () => {
    const filelist = await fsp.readdir(path);

    for (const file of filelist) {
        const oldFullFilePath = path + sep + file;
        const newFullFilePath = oldFullFilePath + '.jpg'; // TODO: change according to your needs

        await fsp.rename(
            oldFullFilePath,
            newFullFilePath);
    }
})();
