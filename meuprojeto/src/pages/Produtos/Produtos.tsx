
import './Produto.css';
import { useEffect, useState } from 'react'
import type { BurguerStation } from '../../src/types/BurguerStation'
import type { Burguer } from '../../types/Burguer'
import { getBurguerStation } from '../../src/services/burguerStationService';
import '../../assets/Logo Menu.png'

export default function Produtos() {

    const [burguer, setBurguer] = useState<BurguerStation[]>([]);

    const fetchBurguer = async () => {
        try {
            const dados = await getBurguerStation();
            console.log("lista de burguer vinda da API: ", dados);
            setBurguer(dados);
        } catch (error) {
            console.error("Erro ao executar getBurguer: ", error);
        }

    }

    useEffect(() => {
        fetchBurguer();
    }, [])



    return (
        <main className="iconedefundo_cardapio">
            <section>
                <div>
                    <img className="img_logo" src="../Menu/assets/Logo Menu.png" alt="" />
                </div>
            </section>

            <h1>LANCHES DE FRANGO</h1>

            <section className="cards">
                {
                    burguer.map((b: Burguer) => (
                        <div className="card_produto">
                            <img src={`http://localhost:3000/static/${b.imagens[0]}`} alt={"Imagen do produto: " + b.descricao} />
                            <h2>{b.nome}</h2>
                            <p className='descricao'>{b.descricao}</p>
                            <span>{b.preco}</span>
                        </div>
                    ))
                }

            </section>

        </main>
    )
}
