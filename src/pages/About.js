import React from 'react'
import BannerAbout from '../../src/images/about/about-header.jpg'
import Member1 from '../../src/images/about/team1.jpg'
import Member2 from '../../src/images/about/team2.jpg'
import Member3 from '../../src/images/about/team3.jpg'

export default function About() {
    return (
        <div className="container about-container">
            <h1>Sobre Nosso Restaurante</h1>
            <img src={BannerAbout} alt="about us header" className="about-image"/>
           <div className="inside-wrapper-about">
                {/* <p>
                lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip 
                </p>
                <p>
                lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,lorem ipsum dolor sit amet, consectetur adip,
                </p> */}
                <div className="about-block-quote">
                    <h2>Criado por alunos do segundo ano de Analise e Desenvolvimento de Sistemas da FIAP, oferecemos um Menu digital para que voce, Dono de um restaurante, possa usufluir do nosso software para trazer benefícios ao seu estabelecimeto, como por exemplo: agilidade no preparo de pedidos, redução do número de funcionários diminuindo os gastos mensais do restaurante, e economia do papel, pois o software disponibiliza pagamento atraves de cartão, possibilitando o envio da nota fiscal por email. </h2>
                </div>
                <div className="team-header">
                    <h2>Nosso fantástico time</h2>
                </div>
           </div>
                <div className="team-members-wrapper">
                    <div className="team-member">
                        <img src={Member1} alt="Member 1" />
                        <h2>Catarina Henriques</h2>
                        <p>Chefe</p>
                    </div>
                    <div className="team-member">
                        <img src={Member2} alt="Member 2" />
                        <h2>João Otoni</h2>
                        <p>Chefe</p>
                    </div>
                    <div className="team-member">
                        <img src={Member3} alt="Member 3" />
                        <h2>Rafael Vinicius</h2>
                        <p>Chefe</p>
                    </div>
                </div>
        </div>
    )
}
