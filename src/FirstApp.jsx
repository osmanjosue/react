//RAFTC PARA SNIPET

import PropTypes from 'prop-types'

export const FirstApp = ( { title, subTitle, name, } ) => {

    /* console.log(props); */

return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>

)


}

FirstApp.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
    name: 'Fernando Herrera',
    subTitle: 'No hay sub-titulo',
    title: 'no hay titulo',
}
