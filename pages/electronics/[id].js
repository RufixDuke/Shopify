import Image from 'next/image'
import { useRouter } from 'next/router';

function OneElectronic({ electronic }) {
    const router = useRouter();

    const electId = router.query.id;
    return (
        <>
            <div>Hiiiiiiiii</div>
                        <div key={electronic.id}>
                <Image src={electronic.image} width={75} height={67} alt="image" />
                <h3>{electronic.title}</h3>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then(res => res.json())
        .then(data => data.map(electronic => ({
            params: {
                id: electronic.id.toString()
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
    const data = await fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then(res => res.json())
        .then(res => res.filter(item=> (item.id==id))[0])

    return {
        props: {
            electronic: data,
        }
    }
}

export default OneElectronic