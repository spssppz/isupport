import svgSprite from 'gulp-svg-sprite'

export const svgSpriter = () => {
	return app.gulp.src(app.path.src.svgicons) // например: 'src/icons/*.svg'
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SVG',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../sprite.svg',
					example: !app.isBuild
				}
			}
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`))
}
