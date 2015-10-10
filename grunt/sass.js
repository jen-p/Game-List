module.exports = {
	dev: {
		options: {
			style: 'expanded'
		},
		files: [
	        {
	            expand: true,
	            cwd: 'assets/sass',
	            src: ['**/*.scss'],
	            dest: 'assets/css',
	            ext: '.css'
	        }
        ]
	}
}