import { useRouter } from "next/router";
import Layout from "../../src/components/Layout";
import { connectToDatabase } from "../../mongodb/mongodb";

export default function PageLocais(properties) {
    const router = useRouter();
    const { locais } = router.query;

    console.log(properties);

    {properties.locais.map((dados) => {
        if(dados.name === locais){
            console.log(dados);
        }
    })}




    return (
        <>
            <Layout />
            <div></div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { db } = await connectToDatabase();
    const users = await db.collection("users").find({}).limit(25).toArray();
    const locais = await db.collection("locais").find({}).limit(25).toArray();
    const usersJson = JSON.parse(JSON.stringify(users));
    const locaisJson = JSON.parse(JSON.stringify(locais));
    const properties = {
        users: usersJson,
        locais: locaisJson,
    };
    return {
        props:  properties,
    };
}
