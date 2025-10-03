import { criadorData } from '../../data/criadorData';
import type { TipoCriador } from '../../types/Criador';
 
function CardCriador({ criador }: { criador: TipoCriador }) {
    return (
        <div className="card_criador">
            <img src={criador.imageUrl} alt={`Foto de ${criador.nome}`} />
        <p>
            <strong>{criador.nome}</strong><br />
            {criador.rm}<br />
            {criador.turma}
        </p>
            <a className="button" href={criador.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="button" href={criador.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    );
}
 
export default function Criador() {
    return (
    <main>
        <div className="criador">
            {criadorData.map(criador => (
            <CardCriador key={criador.rm} criador={criador} />
            ))}
        </div>
    </main>
    );
}
