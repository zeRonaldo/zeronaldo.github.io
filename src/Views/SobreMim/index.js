import React, { Component } from 'react'


class AboutMe extends Component {
    state = {
        imgurl : 'url_da_imagem',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar eleifend cursus. Aenean iaculis rutrum dui. Nunc neque enim, luctus ac purus a, lacinia hendrerit quam. Morbi sed venenatis lorem, sit amet consectetur enim. Cras finibus rhoncus elit, quis pellentesque elit elementum eu. Donec id iaculis augue, in pellentesque enim. Morbi porttitor in sapien convallis tristique. Maecenas eu tortor in dolor consequat sodales id vel ante. Sed vel mauris et eros aliquet hendrerit.',
        titulo: '<_Sobre_mim>'
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