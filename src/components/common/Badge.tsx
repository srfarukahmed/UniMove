export default function Badge({ value }: { value:string }) { return <span className={`badge ${value.toLowerCase().replace(/\s+/g,'-')}`}>{value}</span>; }
