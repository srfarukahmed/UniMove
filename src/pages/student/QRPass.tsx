import { Download, Printer } from 'lucide-react';
import PageHeader from '../../components/common/PageHeader';
import QRBoardingCard from '../../components/qr/QRBoardingCard';
import { reservations } from '../../data/mock';
export default function QRPass(){ return <><PageHeader title="QR Boarding Pass" subtitle="Scan this pass when boarding your reserved shuttle." action={<div className="toolbar-group"><button className="btn secondary" onClick={()=>window.print()}><Printer size={15}/> Print</button><button className="btn secondary"><Download size={15}/> Save pass</button></div>}/><QRBoardingCard reservation={reservations[0]}/></> }
