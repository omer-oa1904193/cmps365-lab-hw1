export function Country() {

}


export async function getStaticPaths() {
    let facts = await fetchFacts();
    return {
        paths: facts.map(fact => ({ params: { cca2: fact.cca2 } }))

    }
}
export async function getStaticProps(context) {
    let facts = await fetchFacts();

    return {
        props: { facts },
    }
}