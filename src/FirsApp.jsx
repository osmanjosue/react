//RAFTC PARA SNIPET
const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando',
}

const fnctn = ()=>{
   return 5 + 5;
}
/* const newMessage = [1,2,3,4,5,6,7,8,9]; */

export const FirsApp = () => {
return (
        <>
            <h1>{fnctn()}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>Soy un subtitulo</p>
        </>
/*  <Fragment>
            <h1>Osman Herrera</h1>
            <p>Spy un subtitulo</p>
        </Fragment> */
)
}