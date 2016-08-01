var gulp = require("gulp"),
    sourceMaps = require("gulp-sourcemaps"),
    sass = require("gulp-sass"),
    plumber = require("gulp-plumber");

/*| dir list |*/
var dir = {
    "src":"./src",
    "pre":"./pre",
    "pub":"./pub",
    "test":"./test"
}
var lst = {
    "jade":"/**/*.jade",
    "scss":"/**/*.scss",
    "ts":"/**/*.ts"
}
gulp.task('default',['sass']);

/*|scss compiler options |*/
gulp.task('scss', function() {
    var scssRes = 
         gulp.src(dir.src + "/scss" + lst.scss)
         .pipe(sourceMap.init())
    return merge([
        //this is the preview [pre] version..
        scssRes.pipe(sass().on('error', sass.logError)).pipe(sourceMap.write('./source')).pipe(gulp.dest(dir.pre + "/css")),
        //their is the main publish [pub] version
        scssRes.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).pipe(gulp.dest(dir.pub + "/css"))
    ])
});