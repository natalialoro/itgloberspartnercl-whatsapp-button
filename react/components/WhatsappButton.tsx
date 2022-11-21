import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string    //Whatsapp.png
    phone: string   //3507064545
    message: string //Estás comunicándote con VTEX University, por favor ingresa tu duda.
    width: number //80px
    height: number //80px
}
const WhatsappButton = ({ logo, phone, message, width, height  }: Props) => {
    const formattedMessage = message.replace(/ /g, " ")
    console.log("Mi mensaje formateado es", formattedMessage, logo)
    return <>
        <div className='fixed bottom-2 right-2 flex flexColumn' >
            <a
                href={`https://wa.me/${phone}?text=${formattedMessage}`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img 
                src={logo} 
                width={width} 
                height={height} 
                alt="Logo de WhatsApp" 
                />
            </a>
        </div>
    </>
}
WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}
WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3144073033",
    message: "Si tienes alguna inquietud comunicate con nosotros",
    width: 80,
    height: 80,
}
WhatsappButton.schema = {
    title: "Botón de Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de Whatsapp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Teléfono",
            description: "Agrega por favor el número de télefono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega por favor el mensaje que se verá para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Teléfono",
            description: "Agrega por favor el número de télefono",
            type: "number",
        },
        height: {
            title: "Teléfono",
            description: "Agrega por favor el número de télefono",
            type: "number",
        }
    }
}

export default WhatsappButton;