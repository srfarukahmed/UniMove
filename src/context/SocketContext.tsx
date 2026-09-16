import { createContext, useMemo, useState, type ReactNode } from 'react';
import type { Socket } from 'socket.io-client';

export const SocketContext = createContext<{ socket: Socket | null; connected: boolean }>({ socket: null, connected: false });

export function SocketProvider({ children }: { children: ReactNode }) {
  const [socket] = useState<Socket | null>(null);
  const value = useMemo(() => ({ socket, connected: !!socket?.connected }), [socket]);
  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}
