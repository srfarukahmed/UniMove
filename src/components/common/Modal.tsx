import type { ReactNode } from 'react';
import { X } from 'lucide-react';
export default function Modal({ open, title, children, onClose, width = 620 }: { open: boolean; title: string; children: ReactNode; onClose: () => void; width?: number }) {
  if (!open) return null;
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" style={{maxWidth: width}} onMouseDown={e=>e.stopPropagation()}><div className="modal-head"><h3>{title}</h3><button className="icon-btn" onClick={onClose} aria-label="Close"><X size={18}/></button></div><div className="modal-body">{children}</div></div></div>;
}
