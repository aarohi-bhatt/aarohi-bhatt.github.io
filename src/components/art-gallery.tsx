"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, RefreshCw, X } from "lucide-react";
import { ArtPiece } from "@/data/art";

interface SketchInstance {
  reseed: () => void;
  remove: () => void;
}

declare global {
  interface Window {
    ArtSketches?: { mount: (el: HTMLElement, key: string) => SketchInstance };
  }
}

// p5 and the sketches are plain scripts in public/art; load them once.
let loading: Promise<void> | null = null;
function loadSketches(): Promise<void> {
  if (window.ArtSketches) return Promise.resolve();
  if (loading) return loading;
  const add = (src: string) =>
    new Promise<void>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error(`Could not load ${src}`));
      document.body.appendChild(s);
    });
  loading = add("/art/p5.min.js").then(() => add("/art/sketches.js"));
  return loading;
}

function useSketch(id: string, active = true) {
  const ref = useRef<HTMLDivElement>(null);
  const inst = useRef<SketchInstance | null>(null);
  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    loadSketches().then(() => {
      if (cancelled || !ref.current || !window.ArtSketches) return;
      inst.current = window.ArtSketches.mount(ref.current, id);
    });
    return () => {
      cancelled = true;
      inst.current?.remove();
      inst.current = null;
    };
  }, [id, active]);
  const reseed = useCallback(() => inst.current?.reseed(), []);
  return { ref, reseed };
}

const buttonClass =
  "inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors";

function Piece({
  piece,
  onOpen,
}: {
  piece: ArtPiece;
  onOpen: () => void;
}) {
  const { ref, reseed } = useSketch(piece.id);
  return (
    <article
      id={piece.id}
      className={`scroll-mt-10 ${piece.wide ? "sm:col-span-2" : ""}`}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open ${piece.title} larger`}
        className="group relative block w-full rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
      >
        <div
          ref={ref}
          className={`w-full ${piece.wide ? "aspect-[3/2]" : "aspect-square"} [&_canvas]:!w-full [&_canvas]:!h-full`}
        />
        <span className="absolute top-3 right-3 rounded-md bg-[#FFFCF8]/90 p-1.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 size={14} />
        </span>
      </button>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-base text-zinc-900">{piece.title}</h3>
        <div className="flex gap-4 shrink-0">
          <button type="button" onClick={reseed} className={buttonClass}>
            <RefreshCw size={12} /> New version
          </button>
          <button type="button" onClick={onOpen} className={buttonClass}>
            <Maximize2 size={12} /> Enlarge
          </button>
        </div>
      </div>
      <p className="font-serif text-sm leading-relaxed text-zinc-700 mt-1">
        {piece.description}
      </p>
    </article>
  );
}

function Enlarged({ piece, onClose }: { piece: ArtPiece; onClose: () => void }) {
  const { ref, reseed } = useSketch(piece.id);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const box = piece.wide
    ? "w-[min(92vw,calc(70vh*1.5))] aspect-[3/2]"
    : "w-[min(92vw,70vh)] aspect-square";
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={piece.title}
      className="fixed inset-0 z-50 bg-[#FFFCF8] overflow-y-auto"
    >
      <div className="max-w-screen-lg mx-auto px-8 py-8 flex flex-col items-center gap-5">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-serif text-xl text-zinc-900">{piece.title}</h2>
          <button type="button" onClick={onClose} className={buttonClass}>
            <X size={14} /> Close
          </button>
        </div>
        <div
          ref={ref}
          className={`${box} rounded-lg overflow-hidden [&_canvas]:!w-full [&_canvas]:!h-full`}
        />
        <div className="w-full max-w-prose flex flex-col items-center gap-3 text-center">
          <button type="button" onClick={reseed} className={buttonClass}>
            <RefreshCw size={12} /> New version
          </button>
          {piece.details && (
            <p className="font-serif text-sm leading-relaxed text-zinc-700">
              {piece.details}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function ArtGallery({ pieces }: { pieces: ArtPiece[] }) {
  const [open, setOpen] = useState<ArtPiece | null>(null);
  const close = useCallback(() => setOpen(null), []);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
        {pieces.map((piece) => (
          <Piece key={piece.id} piece={piece} onOpen={() => setOpen(piece)} />
        ))}
      </div>
      {open && <Enlarged piece={open} onClose={close} />}
    </>
  );
}
