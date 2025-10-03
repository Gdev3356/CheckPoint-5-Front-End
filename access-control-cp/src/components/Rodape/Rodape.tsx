import { Link } from 'react-router-dom';

export default function Rodape(){
    return(
        <footer className="rodape">
            <div className="footer-small">
                &copy; Gdev3356/FIAP 2025
                <p className='categoria'><Link to="/criador">Criador</Link></p>
            </div>
        </footer>
    );
}