import React, { useEffect, useRef, useState } from "react";
import * as skinview3d from "skinview3d";
import { X, RotateCw, Pause, Play } from "lucide-react";

interface Skin3DViewerProps {
    skinUrl: string;
    onClose: () => void;
}

export function Skin3DViewer({ skinUrl, onClose }: Skin3DViewerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const viewerRef = useRef<skinview3d.SkinViewer | null>(null);
    const [isRotating, setIsRotating] = useState(false);

    useEffect(() => {
        if (!canvasRef.current) return;

        const viewer = new skinview3d.SkinViewer({
            canvas: canvasRef.current,
            width: 300,
            height: 360,
            skin: skinUrl,
        });

        viewer.camera.position.z = 70;

        viewer.controls.enableZoom = true;
        viewer.controls.enableRotate = true;
        viewer.controls.enablePan = false;

        viewer.autoRotate = isRotating;
        viewer.autoRotateSpeed = 2;

        viewer.animation = new skinview3d.WalkingAnimation();

        viewerRef.current = viewer;

        const handleResize = () => {
            if (canvasRef.current?.parentElement) {
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            viewer.dispose();
        };
    }, []);

    useEffect(() => {
        if (viewerRef.current) {
            viewerRef.current.loadSkin(skinUrl);
        }
    }, [skinUrl]);

    useEffect(() => {
        if (viewerRef.current) {
            viewerRef.current.autoRotate = isRotating;
        }
    }, [isRotating]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative max-w-sm w-full flex flex-col items-center">

                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    <button
                        onClick={() => setIsRotating(!isRotating)}
                        className="p-2 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full transition-colors backdrop-blur-md"
                        title={isRotating ? "Pause Rotation" : "Auto Rotate"}
                    >
                        {isRotating ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 bg-zinc-800/50 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 rounded-full transition-colors backdrop-blur-md"
                    >
                        <X className="w-5 h-5 fill-current" />
                    </button>
                </div>

                <div className="w-full aspect-[4/5] bg-zinc-950/50 flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <canvas ref={canvasRef} className="cursor-move relative z-10" />

                    <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                        <span className="text-xs text-zinc-600 font-medium uppercase tracking-widest bg-zinc-950/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            Drag to Rotate • Scroll to Zoom
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
