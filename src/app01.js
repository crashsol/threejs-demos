import * as THREE from "three";

//创建一个场景

const scene = new THREE.Scene();

//创建一个相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

//创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

//讲渲染器加入到dom
document.body.appendChild(renderer.domElement);

//创建一个盒子
const geometry = new THREE.BoxGeometry(1, 1, 1);

//创建一个材料
const material = new THREE.MeshBasicMaterial({ color: "0x00ff00" });

//讲材料和盒子组合起来
const cube = new THREE.Mesh(geometry, material);

//在场景中加入 正方体
scene.add(cube);

//设置相机位置
camera.position.z = 5;

function animate() {
  //浏览器刷新动画
  requestAnimationFrame(animate);
  //调整正方体位置

  cube.rotateX += 0.01;
  cube.rotateY += 0.01;
  //重新渲染场景 、相机，讲调整的内容进行展示
  renderer.render(scene, camera);
}

animate();
