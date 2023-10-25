//RAFTC PARA SNIPET

import PropTypes from 'prop-types'

export const FirstApp = ( { title, subTitle } ) => {

    /* console.log(props); */
    if (!title) {
        throw new Error ('El title no existe');
    }

return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{ subTitle }</p>
        </>

)


}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
}
