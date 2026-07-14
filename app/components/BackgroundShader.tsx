'use client';

import React, { useEffect, useRef } from 'react';

export default function BackgroundShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeObserver: ResizeObserver | null = null;
    let animationFrameId: number;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vsSrc = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSrc = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
          vec2 uv = v_texCoord;
          
          // Normalized mouse coordinates
          vec2 normMouse = u_mouse / u_resolution;
          float distToMouse = distance(uv, normMouse);
          
          // Interactive ripple/light effect based on mouse distance
          float mouseForce = smoothstep(0.3, 0.0, distToMouse) * 0.08;
          
          float noise = sin(uv.x * 10.0 + u_time) * cos(uv.y * 10.0 - u_time) * 0.05;
          
          // Deep slate grey / obsidian background base
          vec3 color1 = vec3(0.06, 0.06, 0.06); 
          
          // Premium metallic gold highlight
          vec3 color2 = vec3(0.83, 0.68, 0.21); 
          
          // Moving golden wave shimmer
          float shimmer = smoothstep(0.42, 0.58, sin(uv.x * 2.5 + uv.y * 1.5 + u_time * 0.4) * 0.5 + 0.5);
          
          // Blend colors with shimmer, noise, and mouse interaction
          vec3 finalColor = mix(color1, color2 * 0.18, shimmer + noise + mouseForce);
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vsSrc);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(prog));
      return;
    }

    gl.useProgram(prog);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (t: number) => {
      if (!resizeObserver) syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 opacity-45 pointer-events-none" style={{ display: 'block' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
}
