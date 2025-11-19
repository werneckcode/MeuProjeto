import './CardProduto.css';

import type { CardProdutoProps } from '../../../types/CardProdutoProps';
import { FormatosService } from '../../services/burguerStationService';

export default function CardProduto() {
  return (
    <div>   <div className="card_produto">
                            <img src={`http://localhost:3000/static/${b.imagens[0]}`} alt={"Imagen do produto: " + b.descricao} />
                            <h2>{b.nome}</h2>
                            <p className='descricao'>{b.descricao}</p>
                            <span>{b.preco}</span>
                        </div></div>
  )
}
