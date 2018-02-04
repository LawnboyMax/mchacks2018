Myo.connect();

var playerXPos = null;

function initMyo(){
	console.log("test");

	Myo.on('fingers_spread', function(){
		Myo.setLockingPolicy("none");
		console.log('Hello Myo!');
		this.vibrate();
		this.zeroOrientation();
		requestAnimationFrame(onRender);
		// console.log('starting...');
		// repaint()
		console.log('started');
		onUpdate();
		renderer.render(scene, camera);

	});

	Myo.on('imu', function(data){
		playerXPos = data.orientation.y / 0.35;
		if(data.orientation.z > 0.5){
			shootBullet();
		}
	});

	Myo.on('fist', function(data){
		started = true;
	})
}
