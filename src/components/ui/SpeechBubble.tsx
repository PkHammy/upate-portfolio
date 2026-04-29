interface SpeechBubbleProps {
  children: React.ReactNode;
  ink: string;
  paper: string;
  className?: string;
}

export default function SpeechBubble({
  children,
  className,
}: SpeechBubbleProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[18px_18px_18px_4px] border-[3px] border-(--ink) bg-(--paper) p-3 px-4 font-['Permanent_Marker'] text-xs leading-relaxed tracking-wide text-(--ink) uppercase sm:p-3.5 sm:px-5 sm:text-sm">
        {children}
      </div>
      {/* Tail */}
      <div className="absolute -bottom-3.25 left-5 z-[-1] h-0 w-0 border-t-13 border-l-12 border-t-(--ink) border-l-(--ink)" />
      <div className="absolute -bottom-2.25 left-6 z-0 h-0 w-0 border-t-10 border-l-9 border-t-(--paper) border-l-(--paper)" />
    </div>
  );
}
