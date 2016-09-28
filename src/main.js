import RTLTask from './RTLTask';

/*
 |----------------------------------------------------------------
 | Less Compilation Task
 |----------------------------------------------------------------
 |
 | This task will compile your Less, including minification, rtl
 | and auto-prefixing. Less is one of the CSS pre-processors
 | supported by Elixir, along with the Sass CSS processor.
 |
 */

Elixir.config.css.rtlless = {
    folder: 'less',

    search: '/**/*.less',

    plugin: require('gulp-less'),

    // https://github.com/plus3network/gulp-less#options
    pluginOptions: {}
};

Elixir.extend('rtlless', function(src, output, baseDir, options) {
    new RTLTask('rtlless', getPaths(src, baseDir, output), options);
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  baseDir
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
function getPaths(src, baseDir, output) {
    return new Elixir.GulpPaths()
        .src(src, baseDir || Elixir.config.get('assets.css.less.folder'))
        .output(output || Elixir.config.get('public.css.outputFolder'), 'app.css');
};