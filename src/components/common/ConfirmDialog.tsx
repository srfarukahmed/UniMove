import Modal from './Modal';
export default function ConfirmDialog({ open, title='Confirm action', message, onConfirm, onCancel }: { open:boolean; title?:string; message:string; onConfirm:()=>void; onCancel:()=>void }) {
  return <Modal open={open} title={title} onClose={onCancel}><p className="muted">{message}</p><div className="form-actions"><button className="btn secondary" onClick={onCancel}>Cancel</button><button className="btn danger" onClick={onConfirm}>Confirm</button></div></Modal>;
}
