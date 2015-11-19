require.config({
    paths: {
        imagediff: 'lib/imagediff',
		jquery: 'lib/jquery'
    }
});

require(["imagediff"],function(imagediff){
	imagediff.alertFunction();
});