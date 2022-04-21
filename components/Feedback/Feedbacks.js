import { FeedbackObject } from '../Feedback/feedbacksObject';
import Feedback from './Feedback/Feedback';

function Feedbacks() {
    console.log(FeedbackObject)
    return (
        <>
            {FeedbackObject.map((feedback) => <Feedback key={feedback.id} feedback={feedback} />
            )}
        </>
    )
}

export default Feedbacks;