const program = require('commander');
const convert = require('./components/commands/convert');

program
    .version('0.0.1')
    .description('A set of useful tools for frontend developers');

program
    .command('convert <source> <output>')
    .description(
        'Specify image to convert, also works on entire directories of images'
    )
    .option('-w --width <width>', 'Change the width of the image')
    .option('-h --height <height>', 'Change the height of the image')
    .action((source, output, options) => {
        const { width, height } = options;
        convert(
            source,
            { key: 'resize', value: { width: +width, height: +height } },
            { key: 'toFile', value: output }
        );
    });

program.parse(process.argv);
