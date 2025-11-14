"use client";

import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export default function NeatBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const config = {
      colors: [
        {
          color: '#FFFFFF',
          enabled: true,
        },
        {
          color: '#DCD6CD',
          enabled: true,
        },
        {
          color: '#D4E2E2',
          enabled: true,
        },
        {
          color: '#E4E4E4',
          enabled: true,
        },
        {
          color: '#F6FFFF',
          enabled: true,
        },
      ],
      speed: 2,
      horizontalPressure: 4,
      verticalPressure: 5,
      waveFrequencyX: 3,
      waveFrequencyY: 3,
      waveAmplitude: 2,
      shadows: 4,
      highlights: 7,
      colorBrightness: 1,
      colorSaturation: 0,
      wireframe: false,
      colorBlending: 7,
      backgroundColor: '#00A2FF',
      backgroundAlpha: 1,
      grainScale: 100,
      grainSparsity: 0,
      grainIntensity: 0.05,
      grainSpeed: 0.3,
      resolution: 0.5,
      yOffset: 0,
    }


    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    neat.speed = 6;

    return () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="gradient"
      className="fixed inset-0 w-screen h-screen -z-50"
    />
  );
}
