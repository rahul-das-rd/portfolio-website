class CyberBackground {
    constructor() {
        this.init();
        this.createParticles();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('cyberCanvas').appendChild(this.renderer.domElement);

        this.camera.position.z = 5;
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    }

    createParticles() {
        this.geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        
        for(let i = 0; i < 5000; i++) {
            positions.push(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
            
            colors.push(
                0.1 + Math.random() * 0.4,  // R (blue/purple range)
                0.1 + Math.random() * 0.2,  // G
                0.8 + Math.random() * 0.2   // B
            );
        }

        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        this.material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        this.particles = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.particles);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.particles.rotation.x += 0.0001;
        this.particles.rotation.y += 0.0001;
        this.renderer.render(this.scene, this.camera);
    }
}

new CyberBackground(); 