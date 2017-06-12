var vid = document.createElement('video');
vid.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
vid.muted = true;
vid.playsinline = true;
vid.crossOrigin = 'anonymous';
vid.play();

 
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);
var texture = new THREE.VideoTexture(vid);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(0, 0, 30);
var geometry = new THREE.PlaneBufferGeometry(50, 20, 1, 1);
var material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});
var mesh = new THREE.Mesh(geometry, material); 
scene.add(mesh); 

function update(){
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}
update();