import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string    //Whatsapp.png
    phone: string   //3507064545
    message: string //Estás comunicándote con VTEX University, por favor ingresa tu duda.
}
const WhatsappButton = ({ logo, phone, message }: Props) => {
    const formattedMessage = message.replace(/ /g, "20%")
    console.log("Mi mensaje formateado es", formattedMessage, logo)
    return <>
        <div className='fixed bottom-2 right-2 flex flexColumn' >
            <a
                href={`https://wa.me/${phone}?text=I'm%20inquiring%20about%20the%20apartment%20listing`}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img src={logo} alt="Logo de WhatsApp" />
            </a>
        </div>
    </>
}
WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
}
WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3004507575",
    message: "Estás comunicándote con VTEX University, por favor ingresa tu duda"
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