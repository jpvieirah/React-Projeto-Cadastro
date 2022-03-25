// [] no nome do arquivo pode tornar a url dinamica
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function ClientByCode() {
    const router = useRouter()

    return (
        <Layout title="Navegação Dinamica" >
            <div>Codigo = {router.query.Code}</div>
            <div>filial = {router.query.filial}</div>
        </Layout>
    )
}