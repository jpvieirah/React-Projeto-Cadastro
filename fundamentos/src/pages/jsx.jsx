import Layout from "../components/Layout"
export default function Jsx() {

           
    const titulo =  <h1>JSX é um conceito central.</h1>

    function subtitulo() {
        return <h2>{"Muito legal".toUpperCase() }</h2>
    }

    return (
       <Layout title="Entendendo o JSX">

        <div>
            {titulo}
            {subtitulo()}
        </div>
        </Layout>
    )
}