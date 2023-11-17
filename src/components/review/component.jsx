export const Review = ({review}) => {
    return (<li id={review.id}>{review.user} - {review.text}</li>)
}