import Google from '../../public/google2.0.0.jpg'
import Coursera from '../../public/63a8149d-79fd-4c15-8241-2a3d73c0445b-1607995671294.png'
import Airbnb from '../../public/234-2340842_airbnb-logo.png'
import Microsoft from '../../public/Microsoft-Redesigns-Its-Logo-for-the-First-Time-in-25-Years-Here-It-Is-3.png'
import Duolingo from '../../public/wp4278815.png'
import Udemy from '../../public/Udemy_1000x667.jpg'
import PluralSight from '../../public/pluralsight_logo.png'
import Airtable from '../../public/airtable.png'

import classes from './Sponsors.module.css'

import Image from 'next/image'

function Sponsors() {
    return (
        <>
            <div className={classes.Sponsors}>
                <h2>Our Partners & Sponsors</h2>
                <div>
                    <Image src={Google} alt="Google" width={170} height={100} />
                </div>
            </div>
        </>
    )
}

export default Sponsors;