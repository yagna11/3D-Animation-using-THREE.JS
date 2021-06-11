let container;
let camera;
let renderer;
let scene;
let car;

function init() {
  container = document.querySelector(".scene");

  //create scene
  scene = new THREE.Scene();

  const fov = 15;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 2000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 15, 300);

  //Light

  const ambient = new THREE.AmbientLight(0x404040, 9);
  scene.add(ambient);

  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./house_scene/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    car = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  car.rotation.z += 0.003;
  renderer.render(scene, camera);
}

init();
