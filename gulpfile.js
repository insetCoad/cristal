var gulp = require("gulp"),
    sourceMap = require("gulp-sourcemaps"),
    sass = require("gulp-sass"),
    merge = require("merge2"),
    jade = require("gulp-jade"),
    ts  =  require("gulp-typescript"),
    uglify = require("gulp-uglify"),
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
    "ts":"/**/*.ts",
    "js":"/**/*.js"
}
gulp.task('default',["tsc",'scss',"jade","watch"]);
gulp.task('watch', function() {
    gulp.watch(dir.src + "/scss" + lst.scss, ['scss']);
    gulp.watch(dir.src + "/jade" + lst.jade, ['jade']);
    gulp.watch(dir.src + "/script" + lst.ts, ['tsc']);

});

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
/*| compiling jade |*/
gulp.task('jade', function() {
    return gulp.src(dir.src + "/jade" + lst.jade)
	        .pipe(jade({pretty:true}))
            .pipe(gulp.dest(dir.pre))
            .pipe(gulp.dest(dir.pub));
});
/*|Compiling TypeScript |*/

gulp.task('tsc', function() {
    var tsResult = gulp.src(dir.src + "/script" + lst.ts)
        .pipe(sourceMap.init()) 
        .pipe(ts({
            declaration: true,
            noExternalResolve: true
        }));
    return merge([
        tsResult.dts.pipe(gulp.dest("./typings/cus")),
        tsResult.js.pipe(sourceMap.write("./source/")).pipe(gulp.dest(dir.pre + "/scripts/")),
        tsResult.js.pipe(gulp.dest(dir.pub + "/scripts/"))
    ]);
});
gulp.task('tst', function() {
    var tsResult = gulp.src(dir.test + lst.ts)
        .pipe(sourceMap.init()) 
        .pipe(ts());
    return merge([
        tsResult.js.pipe(sourceMap.write("./source/")).pipe(gulp.dest(dir.pre + "/test/")),
    ]);
});