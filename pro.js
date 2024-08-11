import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a cube to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

async function renderAsync(scene, camera, renderer) {
    function renderFrame() {
        return new Promise(resolve => {
            // Render the scene
            renderer.render(scene, camera);

            // Use requestAnimationFrame to schedule the next frame
            requestAnimationFrame(() => {
                resolve();
            });
        });
    }

    while (true) {
        await renderFrame();
    }
}

// Start rendering
renderAsync(scene, camera, renderer);
