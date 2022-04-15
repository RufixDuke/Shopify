import Image from 'next/image'

function JeweleryOne({ jewelery }) {
    return (
        <>
            <div>Hiiiiiiiii</div>
            <div key={jewelery.id}>
                <Image src={jewelery.image} width={75} height={67} alt="image" />
                <h3>{jewelery.title}</h3>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then(res => res.json())
        .then(data => data.map(jewelery => ({
            params: {
                id: jewelery.id.toString()
            }
        }
        )))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id
    const data = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then(res => res.json())
        .then(res => res.filter(item => (item.id == id))[0])

    return {
        props: {
            jewelery: data,
        }
    }
}

export default JeweleryOne;