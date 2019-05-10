import React, { Component } from 'react'


class AboutMe extends Component {
    state = {
        titulo: '<_Meus_Projetos>',
    }
    
    render() {
        const {imgurl, descricao, titulo} = this.state;
        return(
            <section>
                <div className="section-title">
                    <h3>{titulo}</h3>
                </div>
                <div className="section-content">
                    <div className="headshot">
                        <h3>{imgurl}</h3>
                       
                    </div>
                    <div className="texto">
                        {descricao}
                    </div>
                </div>
                
            </section>
        )
    }
}

export default AboutMe