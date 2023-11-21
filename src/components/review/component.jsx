export const Review = ({review}) => {
    if (!review) {
        return null;
    }

    return (
        <div>
            <div>
                {review.user} - {review.text}
            </div>
        </div>
    )
}