"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Packet = { edge: [Node, Node]; t: number };

export function SignalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const N = 60;
    const maxDist = 150 * dpr;

    function resize() {
      w = canvas!.width = window.innerWidth * dpr;
      h = canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + "px";
      canvas!.style.height = window.innerHeight + "px";
    }
    resize();
    window.addEventListener("resize", resize);

    nodes = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.18 * dpr,
      vy: (Math.random() - 0.5) * 0.18 * dpr,
      r: Math.random() * 1.4 + 0.6,
    }));

    let packet: Packet | null = null;

    function pickPacket() {
      const edges: [Node, Node][] = [];
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < maxDist) edges.push([nodes[i], nodes[j]]);
        }
      }
      if (edges.length) packet = { edge: edges[Math.floor(Math.random() * edges.length)], t: 0 };
    }

    let raf = 0;

    function frame(t: number) {
      ctx!.clearRect(0, 0, w, h);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx!.strokeStyle = `rgba(107,212,189,${(1 - dist / maxDist) * 0.14})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      nodes.forEach((n, i) => {
        const pulse = 1 + Math.sin(t / 900 + i) * 0.3;
        ctx!.fillStyle = "rgba(255,180,84,0.4)";
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r * dpr * pulse, 0, Math.PI * 2);
        ctx!.fill();
      });

      if (packet) {
        packet.t += 0.01;
        if (packet.t >= 1) {
          packet = null;
        } else {
          const [a, b] = packet.edge;
          const px = a.x + (b.x - a.x) * packet.t;
          const py = a.y + (b.y - a.y) * packet.t;
          ctx!.fillStyle = "rgba(236,236,228,0.85)";
          ctx!.beginPath();
          ctx!.arc(px, py, 2 * dpr, 0, Math.PI * 2);
          ctx!.fill();
        }
      } else if (Math.random() < 0.015) {
        pickPacket();
      }

      raf = requestAnimationFrame(frame);
    }

    if (reduced) {
      frame(0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
