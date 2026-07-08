"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

interface AudioCoordinatorValue {
  activeId: string | null;
  requestPlay: (id: string) => void;
  release: (id: string) => void;
}

const AudioCoordinatorContext = createContext<AudioCoordinatorValue | null>(null);

/**
 * Ensures only one voice recording plays at a time across the whole page —
 * mirrors how Apple Voice Memos silences the previous clip when a new one starts.
 */
export function AudioCoordinatorProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const requestPlay = useCallback((id: string) => setActiveId(id), []);
  const release = useCallback(
    (id: string) => setActiveId((current) => (current === id ? null : current)),
    []
  );

  const value = useMemo(() => ({ activeId, requestPlay, release }), [activeId, requestPlay, release]);

  return (
    <AudioCoordinatorContext.Provider value={value}>
      {children}
    </AudioCoordinatorContext.Provider>
  );
}

export function useAudioCoordinator() {
  const ctx = useContext(AudioCoordinatorContext);
  if (!ctx) {
    throw new Error("useAudioCoordinator must be used within AudioCoordinatorProvider");
  }
  return ctx;
}
