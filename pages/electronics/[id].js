import Image from 'next/image'
import {useRouter} from 'next/router';

function OneElectronic({ electronic }) {
    const router = useRouter();

    const electId = router.query.id;
    return (
        <>
            <div>Hiiiiiiiii</div>
            <div key={electronic.id}>
                <Image src={electronic.image} alt="image" />
                <h3>{electronic.title}</h3>
            </div>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const { id } = context.params;
//     const res = await fetch(`https://fakestoreapi.com/products/category/electronics/${id}`)
//     const data = await res.json(); 

//     console.log(`Fetched data: ${data.title}`);
//     return {
//         props: {
//             electronic: data,
//         }
//     }
// }

// export async function getStaticPaths() {
//     const response = await fetch('https://fakestoreapi.com/products/category/electronics')
//     const data = await response.json()

//     const paths = data.map((electronic) => {
//         return {
//             params: {
//                 id: electronic.id.toString()
//             }
//         }
//     })


//     return {
//         paths,
//         fallback: false,
//     }
// }

export async function getStaticProps(context) {
    const id = context.params.id;
    console.log(id)
    const response = await fetch(`https://fakestoreapi.com/products/category/electronics/${id}`)
    const data = await response.json()
    // console.log(data);

    return { 
        props: {
            electronic: data,
        }
    }
}





export default OneElectronic;