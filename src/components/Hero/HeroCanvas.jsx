import React, { useEffect, useRef } from 'react';

const HeroCanvas = () => {
    const canvasRef = useRef(null);
    const dots = useRef([]);
    const mousePosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const dotCount = 300;
    const dotSpeed = 0.35;
    const opacityFocusDistance = 600;
    const colors = [
        'rgba(187, 134, 252, 1)',
        'rgba(169, 169, 169, 1)',
        'rgba(255, 255, 255, 1)',
    ];

    const createDot = () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * dotSpeed, 
        vy: (Math.random() - 0.5) * dotSpeed, 
        radius: Math.random() * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
    });

    const drawDots = (ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        for (const dot of dots.current) {
            const distance = Math.hypot(dot.x - mousePosition.current.x, dot.y - mousePosition.current.y);
            const opacity = Math.max(0, 1 - distance / opacityFocusDistance);

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
            ctx.fillStyle = dot.color.replace(/rgba\((.*?),\s*\d+\.?\d*\)/, `rgba($1, ${opacity})`);
            ctx.fill();
            ctx.closePath();

            dot.x += dot.vx;
            dot.y += dot.vy;

            if (dot.x < 0 || dot.x > ctx.canvas.width) dot.vx *= -1;
            if (dot.y < 0 || dot.y > ctx.canvas.height) dot.vy *= -1;
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < dotCount; i++) {
            dots.current.push(createDot());
        }

        const animate = () => {
            drawDots(ctx);
            requestAnimationFrame(animate);
        };
        animate();

        const handleMouseMove = (event) => {
            mousePosition.current = { x: event.clientX, y: event.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} />;
};

export default HeroCanvas;
