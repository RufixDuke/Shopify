import Link from 'next/link'

function PageNotFound() {
    return <>
        <h2>Page could not be found</h2>
        You can go back to <Link href='/'>Home</Link>
    </>

}

export default PageNotFound