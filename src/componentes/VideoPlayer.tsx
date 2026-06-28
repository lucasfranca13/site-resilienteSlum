import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

/**
 * Player leve: mostra um poster e só carrega o vídeo quando o usuário clica
 * (preload="none"). Toca com áudio a partir do gesto do usuário e oferece um
 * botão para ativar/desativar o som. Preenche o elemento pai — quem usa define
 * a proporção (ex.: aspect-video, aspect-[9/16] ou uma altura fixa).
 */
export function VideoPlayer({
  src,
  poster,
  className = "",
  active = true,
}: {
  src: string;
  poster?: string;
  className?: string;
  /** Quando false (ex.: o slide do carrossel saiu de cena), pausa o vídeo;
   * ao voltar a true, retoma de onde parou — só se o usuário já tinha dado play. */
  active?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || !playing) return;
    if (active) void v.play();
    else v.pause();
  }, [active, playing]);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    void v.play();
    setPlaying(true);
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className={`relative w-full h-full overflow-hidden bg-black ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        controls={playing}
        preload="none"
        className="w-full h-full object-contain"
        onEnded={() => setPlaying(false)}
      />

      {!playing && (
        <button
          onClick={start}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/30 hover:bg-background/15 transition-colors duration-300 group"
          aria-label="Assistir com áudio"
        >
          <span className="w-16 h-16 rounded-full bg-yellow flex items-center justify-center group-hover:scale-105 transition-transform">
            <Play size={26} className="text-primary-foreground ml-1" fill="currentColor" />
          </span>
          <span className="font-body text-[11px] text-foreground/90 uppercase tracking-[0.2em] flex items-center gap-1.5">
            <Volume2 size={13} className="text-yellow" /> Assistir com áudio
          </span>
        </button>
      )}

      {playing && (
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-foreground hover:text-yellow transition-colors"
          aria-label={muted ? "Ativar áudio" : "Desativar áudio"}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </div>
  );
}
