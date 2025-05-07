import { useState, useEffect, useRef, useMemo, useCallback } from "react";

// Define types for component state and props
interface MousePosition {
  x: number;
  y: number;
}

interface Dimensions {
  width: number;
  height: number;
}

export default function EnhancedSpaceTimeGrid(): JSX.Element {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Example: shift wave origin with scroll
      setMousePos((prev) => ({
        x: prev.x,
        y: 300 + Math.sin(scrollY / 100) * 200, // adjust as needed
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const lastMoveTime = useRef<number>(0);
  const rafId = useRef<number | null>(null);
  const prevTimeRef = useRef<number>(0);
  const positionRef = useRef<MousePosition>({ x: 0, y: 0 });

  // Store mouse position in ref to avoid render cycles
  useEffect(() => {
    positionRef.current = mousePos;
  }, [mousePos]);

  // Initialize the component with debounced resize handler
  useEffect(() => {
    const updateDimensions = (): void => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;

        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
        });

        // Set initial mouse position to center of screen
        setMousePos({
          x: offsetWidth / 2,
          y: offsetHeight / 2,
        });
        positionRef.current = { x: offsetWidth / 2, y: offsetHeight / 2 };
      }
    };

    updateDimensions();

    // Debounced resize handler
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = (): void => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateDimensions, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Animate with requestAnimationFrame and timestamp-based animations
  const animate = useCallback(
    (timestamp: number): void => {
      // Calculate time difference for smooth animation
      if (!prevTimeRef.current) prevTimeRef.current = timestamp;
      const deltaTime = timestamp - prevTimeRef.current;

      prevTimeRef.current = timestamp;

      const now = Date.now();

      if (!isMoving && now - lastMoveTime.current > 1000) {
        // Use deltaTime for smoother transition
        const timeDiff = timestamp / 1000;
        // More subtle breathing animation
        const amplitudeFactor = 0.3; // Reduce movement amplitude
        const offsetX = Math.sin(timeDiff * 0.3) * 20 * amplitudeFactor;
        const offsetY = Math.cos(timeDiff * 0.2) * 20 * amplitudeFactor;

        if (containerRef.current && dimensions.width) {
          setMousePos((prev) => {
            // Smooth transition to prevent jumps
            const dx =
              (dimensions.width / 2 + offsetX - prev.x) *
              0.02 *
              (deltaTime / 16);
            const dy =
              (dimensions.height / 2 + offsetY - prev.y) *
              0.02 *
              (deltaTime / 16);

            return {
              x: prev.x + dx,
              y: prev.y + dy,
            };
          });
        }
      }

      rafId.current = requestAnimationFrame(animate);
    },
    [dimensions.width, dimensions.height, isMoving],
  );

  // Setup and cleanup animation frame
  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [animate]);

  // Optimized mouse move handler with throttling
  const lastMoveEventTime = useRef<number>(0);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      const now = performance.now();

      // Throttle move events to 60fps (approximately 16ms)
      if (now - lastMoveEventTime.current < 16) {
        return;
      }
      lastMoveEventTime.current = now;

      const rect = containerRef.current!.getBoundingClientRect();

      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

      setIsMoving(true);
      lastMoveTime.current = Date.now();

      // Debounce the movement stop detection
      clearTimeout(window.movementTimeout as ReturnType<typeof setTimeout>);
      window.movementTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 300);
    },
    [],
  );

  // Handle touch events for mobile with the same throttling
  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>): void => {
      const now = performance.now();

      if (now - lastMoveEventTime.current < 16) {
        return;
      }
      lastMoveEventTime.current = now;

      if (e.touches && e.touches[0]) {
        const rect = containerRef.current!.getBoundingClientRect();

        setMousePos({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        });

        setIsMoving(true);
        lastMoveTime.current = Date.now();

        clearTimeout(window.movementTimeout as ReturnType<typeof setTimeout>);
        window.movementTimeout = setTimeout(() => {
          setIsMoving(false);
        }, 300);
      }
    },
    [],
  );

  // Generate grid lines with improved performance
  const gridLines = useMemo(() => {
    const lines: JSX.Element[] = [];

    if (dimensions.width === 0 || dimensions.height === 0) return lines;

    // Optimize grid parameters
    const gridGap = 70; // Increase grid gap for better performance
    const distortionFactor = 18; // Slightly reduce distortion for smoother effect
    const distortionRadius = 300; // Radius of influence

    const movementIntensity = isMoving ? 1 : 0.6; // Reduce effect when not actively moving

    // Calculate grid boundaries with additional padding
    const minX = -100;
    const maxX = dimensions.width + 100;
    const minY = -100;
    const maxY = dimensions.height + 100;

    // Reduce number of grid lines
    const horizontalLinesCount = Math.min(
      18,
      Math.ceil(dimensions.height / 80),
    );
    const verticalLinesCount = Math.min(18, Math.ceil(dimensions.width / 80));

    // Create horizontal lines with perspective effect
    for (let i = 0; i <= horizontalLinesCount; i++) {
      // More natural perspective effect
      const perspectiveFactor = Math.pow(1.12, i);
      const baseY = dimensions.height / 2;
      const offsetY = (i * gridGap) / perspectiveFactor;

      const y = baseY + offsetY - 100;
      const y2 = baseY - offsetY + 100;

      // Improved opacity curve for better depth effect
      const opacity = Math.max(0.05, 0.7 - i * 0.08);
      const lineWidth = Math.max(0.5, 1.2 - i * 0.05);

      // Adaptive sampling - increase step size based on distance from center
      // This significantly reduces calculations for distant lines
      const stepSize = Math.max(4, Math.floor(i * 0.8) + 6);

      // Process grid lines that are visible
      if (y <= maxY) {
        const points: string[] = [];

        for (let x = minX; x <= maxX; x += stepSize) {
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          // Use squared distance for performance, avoid sqrt where possible
          const distanceSquared = dx * dx + dy * dy;
          const distance = Math.sqrt(distanceSquared);

          // Improved gravity effect with smoother falloff
          const gravityEffect = Math.max(0, 1 - distance / distortionRadius);
          // Apply easing function for more natural movement
          const easing =
            gravityEffect * gravityEffect * (3 - 2 * gravityEffect);
          const distortion = distortionFactor * easing * movementIntensity;

          // Apply distortion with improved physics model
          const distortedY =
            y + distortion * Math.sign(dy) * Math.min(1, Math.abs(dy) / 120);
          const distortedX =
            x +
            distortion * 0.25 * Math.sign(dx) * Math.min(1, Math.abs(dx) / 200);

          points.push(`${distortedX},${distortedY}`);
        }

        lines.push(
          <polyline
            key={`h-${i}-1`}
            fill="none"
            points={points.join(" ")}
            stroke={`rgba(200,230,255,${opacity})`}
            strokeWidth={lineWidth}
          />,
        );
      }

      if (y2 >= minY) {
        const points: string[] = [];

        for (let x = minX; x <= maxX; x += stepSize) {
          const dx = x - mousePos.x;
          const dy = y2 - mousePos.y;
          const distanceSquared = dx * dx + dy * dy;
          const distance = Math.sqrt(distanceSquared);

          const gravityEffect = Math.max(0, 1 - distance / distortionRadius);
          const easing =
            gravityEffect * gravityEffect * (3 - 2 * gravityEffect);
          const distortion = distortionFactor * easing * movementIntensity;

          const distortedY =
            y2 + distortion * Math.sign(dy) * Math.min(1, Math.abs(dy) / 120);
          const distortedX =
            x +
            distortion * 0.25 * Math.sign(dx) * Math.min(1, Math.abs(dx) / 200);

          points.push(`${distortedX},${distortedY}`);
        }

        lines.push(
          <polyline
            key={`h-${i}-2`}
            fill="none"
            points={points.join(" ")}
            stroke={`rgba(200,230,255,${opacity})`}
            strokeWidth={lineWidth}
          />,
        );
      }
    }

    // Create vertical lines with perspective effect
    for (let i = 0; i <= verticalLinesCount; i++) {
      const perspectiveFactor = Math.pow(1.12, i);
      const baseX = dimensions.width / 2;
      const offsetX = (i * gridGap) / perspectiveFactor;

      const x = baseX + offsetX - 100;
      const x2 = baseX - offsetX + 100;

      const opacity = Math.max(0.05, 0.7 - i * 0.08);
      const lineWidth = Math.max(0.5, 1.2 - i * 0.05);

      const stepSize = Math.max(4, Math.floor(i * 0.8) + 6);

      if (x <= maxX) {
        const points: string[] = [];

        for (let y = minY; y <= maxY; y += stepSize) {
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distanceSquared = dx * dx + dy * dy;
          const distance = Math.sqrt(distanceSquared);

          const gravityEffect = Math.max(0, 1 - distance / distortionRadius);
          const easing =
            gravityEffect * gravityEffect * (3 - 2 * gravityEffect);
          const distortion = distortionFactor * easing * movementIntensity;

          const distortedX =
            x + distortion * Math.sign(dx) * Math.min(1, Math.abs(dx) / 120);
          const distortedY =
            y +
            distortion * 0.25 * Math.sign(dy) * Math.min(1, Math.abs(dy) / 200);

          points.push(`${distortedX},${distortedY}`);
        }

        lines.push(
          <polyline
            key={`v-${i}-1`}
            fill="none"
            points={points.join(" ")}
            stroke={`rgba(200,230,255,${opacity})`}
            strokeWidth={lineWidth}
          />,
        );
      }

      if (x2 >= minX) {
        const points: string[] = [];

        for (let y = minY; y <= maxY; y += stepSize) {
          const dx = x2 - mousePos.x;
          const dy = y - mousePos.y;
          const distanceSquared = dx * dx + dy * dy;
          const distance = Math.sqrt(distanceSquared);

          const gravityEffect = Math.max(0, 1 - distance / distortionRadius);
          const easing =
            gravityEffect * gravityEffect * (3 - 2 * gravityEffect);
          const distortion = distortionFactor * easing * movementIntensity;

          const distortedX =
            x2 + distortion * Math.sign(dx) * Math.min(1, Math.abs(dx) / 120);
          const distortedY =
            y +
            distortion * 0.25 * Math.sign(dy) * Math.min(1, Math.abs(dy) / 200);

          points.push(`${distortedX},${distortedY}`);
        }

        lines.push(
          <polyline
            key={`v-${i}-2`}
            fill="none"
            points={points.join(" ")}
            stroke={`rgba(200,230,255,${opacity})`}
            strokeWidth={lineWidth}
          />,
        );
      }
    }

    return lines;
  }, [dimensions, mousePos, isMoving]);

  // Separate stars from grid rendering for better performance
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 2 + 1;
      const animationDuration = Math.random() * 5 + 3;

      return (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `twinkle ${animationDuration}s infinite`,
          }}
        />
      );
    });
  }, [dimensions.width]); // Only recalculate when canvas size changes

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-blue-950 relative overflow-hidden touch-action:none border border-neutral-200 dark:border-neutral-700"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Stars background layer - now memoized */}
      <div className="absolute inset-0">{stars}</div>

      {/* Main grid SVG with hardware acceleration */}
      <svg
        className="w-full h-full absolute top-0 left-0"
        style={{
          transform: "translateZ(0)", // Force GPU acceleration
          willChange: "transform", // Hint for browser optimization
        }}
      >
        <defs>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            id="cursorGlow"
            r="50%"
          >
            <stop offset="0%" stopColor="rgba(130,200,255,0.3)" />
            <stop offset="40%" stopColor="rgba(100,170,255,0.15)" />
            <stop offset="70%" stopColor="rgba(70,140,255,0.07)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>

          <filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
            <feGaussianBlur result="blur" stdDeviation="5" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter height="200%" id="softGlow" width="200%" x="-50%" y="-50%">
            <feGaussianBlur result="blur" stdDeviation="8" />
            <feComponentTransfer>
              <feFuncA intercept="0" slope="0.4" type="linear" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="blur" mode="screen" />
          </filter>
        </defs>

        {/* Center point - subtle galaxy effect */}
        <circle
          cx={dimensions.width / 2}
          cy={dimensions.height / 2}
          fill="url(#cursorGlow)"
          filter="blur(20px)"
          opacity="0.5"
          r="120"
        />

        {/* Enhanced cursor area visualization */}
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          fill="url(#cursorGlow)"
          filter="blur(15px)"
          opacity={isMoving ? "0.9" : "0.6"}
          r="180"
          style={{
            transition: "opacity 0.3s ease-out",
          }}
        />

        {/* Render the grid lines */}
        <g filter="url(#softGlow)">{gridLines}</g>
      </svg>

      {/* Main center glow */}
      <div
        className="absolute rounded-full bg-blue-400"
        style={{
          width: "240px",
          height: "240px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: "0.03",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      {/* Small helper text */}
      <div className="absolute bottom-4 right-4 text-blue-400 text-xs opacity-50 font-light">
        Move cursor to distort spacetime
      </div>

      {/* Add global animation keyframes */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

// Add a declaration for the window object to include the movementTimeout property
declare global {
  interface Window {
    movementTimeout: number | ReturnType<typeof setTimeout>;
  }
}
