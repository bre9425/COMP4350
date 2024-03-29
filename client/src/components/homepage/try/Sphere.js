import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import PopupWin from './PopupWin';

const serverURL = process.env.REACT_APP_SERVER_URL;
const serverPort = process.env.REACT_APP_SERVER_PORT;

const Sphere = () => {
  const [matches, setMatches] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const mountRef = useRef(null);

  useEffect(() => {
    const retrieveMatches = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${serverURL}:${serverPort}/api/user/getMatches/`, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
        });
        const data = await res.json();
        const users = data.listUsers.map(user => ({
          id: user._id,
          username: user.username,
          interests: user.interests,
          pictures: user.pictures,
          bio: user.bio && user.bio.trim().length > 0 ? user.bio : 'User is lazy, no bio yet :)',
          commonInterestsCount: user.commonInterestsCount
        }));
        setMatches(users);
      } catch (err) {
        console.error("Error retrieving matches:", err);
      }
    };
    retrieveMatches();
  }, []);

  useEffect(() => {
    var aboveNavBar = document.querySelector('.above-navigation-bar');
    var navBar = document.querySelector('.navigation-bar');
    var totalHeight = aboveNavBar.offsetHeight + navBar.offsetHeight;
    var sphereHeight = window.innerHeight - totalHeight + 1;

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / sphereHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    var mountRefCurr = mountRef.current;

    renderer.setSize(window.innerWidth, sphereHeight);
    mountRefCurr.appendChild(renderer.domElement);

    let group = new THREE.Group();
    scene.add(group);
    camera.position.z = 10;

    const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const labels = [];

    matches.forEach((match, index) => {
      const materialColor = match.commonInterestsCount === 0 ? 0xff0000 : 0xabcdef;
      const material = new THREE.MeshBasicMaterial({ color: materialColor });
      const node = new THREE.Mesh(nodeGeometry, material);
      node.userData = match;

      const phi = Math.acos(-1 + (2 * index) / matches.length);
      const theta = Math.sqrt(matches.length * Math.PI) * phi;
      node.position.x = 4.5 * Math.cos(theta) * Math.sin(phi);
      node.position.y = 4.5 * Math.sin(theta) * Math.sin(phi);
      node.position.z = 4.5 * Math.cos(phi);

      group.add(node);

      const spriteMaterial = new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(generateSpriteCanvas(match.username)),
        depthTest: false
      });

      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.userData = match;
      sprite.position.copy(node.position).add(new THREE.Vector3(0, -0.25, 0));
      sprite.scale.set(1, 0.5, 1);
      group.add(sprite);
      labels.push(sprite);
    });

    const onWindowResize = () => {
      var aboveNavBar = document.querySelector('.above-navigation-bar');
      var navBar = document.querySelector('.navigation-bar');
      var totalHeight = aboveNavBar.offsetHeight + navBar.offsetHeight;
      var sphereHeight = window.innerHeight - totalHeight + 1;
      camera.aspect = window.innerWidth / sphereHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, sphereHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      if (isModalOpen) {
        return;
      } else {
        event.preventDefault();
      
        mouse.x = ((event.clientX - renderer.domElement.offsetLeft) / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = -((event.clientY - renderer.domElement.offsetTop) / renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(group.children, true);
  
        if (intersects.length > 0) {
          const userData = {
            id: intersects[0].object.userData.id,
            username: intersects[0].object.userData.username,
            interests: intersects[0].object.userData.interests,
            pictures: intersects[0].object.userData.pictures,
            bio: intersects[0].object.userData.bio
          };
          setSelectedUser(userData);
          setIsModalOpen(true);
        }
      }
    };

    renderer.domElement.addEventListener('click', onMouseClick, false);
    
    const drag = {
      isDragging: false,
      previousMousePosition: { x: 0, y: 0 },
      rotationVelocity: { x: 0, y: 0 },
      autoRotateSpeed: { x: 0.001, y: 0.001 }
    };

    const onMouseDown = (event) => {
      if (isModalOpen) {
        return;
      } else {
        drag.isDragging = true;
        drag.previousMousePosition.x = event.clientX;
        drag.previousMousePosition.y = event.clientY;
      }
    };

    const onMouseMove = (event) => {
      if (isModalOpen) {
        return;
      } else {
        if (drag.isDragging) {
          const deltaMove = {
            x: event.clientX - drag.previousMousePosition.x,
            y: event.clientY - drag.previousMousePosition.y,
          };
  
          const rotateSpeed = 0.005;
          group.rotation.y += deltaMove.x * rotateSpeed;
          group.rotation.x += deltaMove.y * rotateSpeed;
  
          drag.rotationVelocity.x = deltaMove.x * rotateSpeed;
          drag.rotationVelocity.y = deltaMove.y * rotateSpeed;
  
          drag.previousMousePosition.x = event.clientX;
          drag.previousMousePosition.y = event.clientY;
        }
      }
    };

    const onMouseUp = () => {
      if (isModalOpen) {
        return;
      } else {
        drag.isDragging = false;
      }
    };

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    const animate = () => {
      requestAnimationFrame(animate);
      if (!drag.isDragging) {
        group.rotation.y += drag.autoRotateSpeed.y;
        group.rotation.x += drag.autoRotateSpeed.x;
        group.rotation.y += drag.rotationVelocity.x;
        group.rotation.x += drag.rotationVelocity.y;
        drag.rotationVelocity.x *= 0.95;
        drag.rotationVelocity.y *= 0.95;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      renderer.domElement.removeEventListener('click', onMouseClick, false);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      
      group.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          child.material.dispose();
        } else if (child instanceof THREE.Sprite) {
          child.material.map.dispose();
          child.material.dispose();
        }
      });
    
      if (mountRefCurr) {
        mountRefCurr.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };

  }, [matches, isModalOpen]);

  function generateSpriteCanvas(text) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    context.fillStyle = '#FFFFFF';
    context.font = '40px Arial';
    context.fillText(text, 0, 48);
    return canvas;
  }

  const handleModalClose = async () => {
  
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${serverURL}:${serverPort}/api/user/likeDislike`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          '_id': selectedUser['id'],
          'like': false
        }),
      })
      .then(res => res.json());
      console.log(res);
    } catch (err) {
  }
    setIsModalOpen(false);
  };

  const handleLike = async () => { 
  
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${serverURL}:${serverPort}/api/user/likeDislike`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          '_id': selectedUser['id'],
          'like': true
        }),
      })
      .then(res => res.json());
      console.log(res);
    } catch (err) {
  }
  setIsModalOpen(false);
};

  return (
    <div>
      <div ref={mountRef} style={{ width: '100%', height: '100%'}}></div>
      <PopupWin 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        userData={selectedUser}
        onLike={handleLike}
      />
    </div>
  );
};

export default Sphere;
