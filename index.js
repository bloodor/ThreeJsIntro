// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
 const scene = new THREE.Scene()
 const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
 const renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#f25287")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 8
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
     let width = window.innerWidth
     let height = window.innerHeight
     renderer.setSize( width, height )
     camera.aspect = width / height
     camera.updateProjectionMatrix()
 })
 
 // basic cube
 var geometry = new THREE.BoxGeometry( 1, 1, 1)
 var material = new THREE.MeshStandardMaterial( { color: 0xf7d9d9, flatShading: true, metalness: 0, roughness: 1 })
 var cube = new THREE.Mesh ( geometry, material )
 scene.add( cube )

 var geometry = new THREE.BoxGeometry( 1.5, 0.01, 1.5)
 var material = new THREE.MeshStandardMaterial( { color: 0xfffff, flatShading: true, metalness: 0, roughness: 1 })
 var cube2 = new THREE.Mesh ( geometry, material )
 cube2.position.y = -1;
 scene.add( cube2 )

 var geometry = new THREE.BoxGeometry( 1.5, 0.01, 1.5)
 var material = new THREE.MeshStandardMaterial( { color: 0xfffff, flatShading: true, metalness: 0, roughness: 1 })
 var cube3 = new THREE.Mesh ( geometry, material )
 cube3.position.y = 1;
 scene.add( cube3 )

 var geometry = new THREE.BoxGeometry( 0.01, 1.5, 1.5)
 var material = new THREE.MeshStandardMaterial( { color: 0xfffff, flatShading: true, metalness: 0, roughness: 1 })
 var cube4 = new THREE.Mesh ( geometry, material )
 cube4.position.x = -1;
 scene.add( cube4 )

 var geometry = new THREE.BoxGeometry( 0.01, 1.5, 1.5)
 var material = new THREE.MeshStandardMaterial( { color: 0xfffff, flatShading: true, metalness: 0, roughness: 1 })
 var cube5 = new THREE.Mesh ( geometry, material )
 cube5.position.x = 1;
 scene.add( cube5 )
 
 // wireframe cube
 var geometry = new THREE.BoxGeometry( 2, 2, 2)
 var material = new THREE.MeshBasicMaterial( {
     color: "#dddddd", wireframe: true, transparent: true
 })
 var wireframeCube = new THREE.Mesh ( geometry, material )
 scene.add( wireframeCube )

 // wireframe cube
 var geometry = new THREE.BoxGeometry( 3, 3, 3)
 var material = new THREE.MeshBasicMaterial( {
     color: "#222222", wireframe: true, transparent: true
 })
 var wireframeCube2 = new THREE.Mesh ( geometry, material )
 scene.add( wireframeCube2 )
 
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
 //scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
 pointLight.position.set( 25, 50, 25 );
 //scene.add( pointLight );
 
 //spotlight
 const spotLight = new THREE.SpotLight( 0xffffff );
 spotLight.position.set( 0, 5, 5 );
spotLight.lookAt(0, -2.5, 0);

spotLight.angle = 20;
spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 0;
spotLight.shadow.camera.far = 8000;
spotLight.shadow.camera.fov = 60;

scene.add( spotLight );

 function animate() {
     requestAnimationFrame( animate )
     cube.rotation.x += 0.04;
     cube.rotation.y += 0.04;
     wireframeCube.rotation.x -= 0.01;
     wireframeCube.rotation.y -= 0.01;
     wireframeCube2.rotation.x -= 0.02;
     wireframeCube2.rotation.y -= 0.02;
     camera.position.z -= .005;
     camera.rotation.z -= 0.01;
     renderer.render( scene, camera )
 }
 animate()