import banner_1 from '../../assets/card frango 5.png'
import banner_2 from '../../assets/card frango 2.png'
import banner_3 from '../../assets/card frango 3.png'
import banner_4 from '../../assets/transferir (3) 1.png'
import whatsapp from '../../assets/Ícone Whatsapp Menu.png'
import './Produto.css';

<main className="iconedefundo_cardapio"> 
        <section>
            <div>
                <img className="img_logo" src="../Menu/assets/Logo Menu.png" alt="" />
            </div>
        </section>

        <h1>LANCHES DE FRANGO</h1>

        <section className="cards">

            <section className="container">
                <div className="sessao_card1">
                    <div className="div_img">
                        <img src={banner_1} alt="" />
                    </div>
                    <div className="descricao">
                        <h2>CHEDDAR A VAPOR </h2>
                        <p> Pão com gergelim, dois frangos, molho cremoso sabor queijo cheddar, maionese e alface</p>
                        <span> R$ 45,80</span>
                    </div>
                </div>
                <div className="sessao_card2">
                    <div className="div_img">
                        <img src={banner_2} alt="" />
                    </div>
                    <div className="descricao">
                        <h2>EXPRESSO DUO </h2>
                        <p> Um suculento hambúrguer de frango, alface, tomate e um delicioso molho furioso de alho.
                        </p>
                        <span> R$46,99</span>
                    </div>
                </div>

                <div className="sessao_card3">
                    <div className="div_img">
                        <img src={banner_3} alt="" />
                    </div>
                    <div className="descricao">
                        <h2>PLATAFORMA CHICKEN </h2>
                        <p> Um delicioso e suculento filé de frango crocante, maionese e alface.</p>
                        <span> R$43,30</span>
                    </div>
                </div>

                <div className="sessao_card4">
                    <div className="div_img">
                        <img src={banner_4} alt="" />
                    </div>
                    <div className="descricao">
                        <h2>COMBO FERROVIA</h2>
                        <p> Maionese, alface, tomate, cebola, ketchup, picles e fritas</p>
                        <span> R$58,70 </span>
                    </div>
                </div>
            </section>
        </section>

        <section>
            <a className="whatsaap" href="">
                <img src={whatsapp} alt="" />
            </a>


        </section>

    </main>