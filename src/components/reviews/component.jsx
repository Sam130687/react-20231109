import { Review } from "../review/component"

export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>Отзывы</h3>
            {reviews.map((review) =>
                <Review review = {review} />
            )}
        </div>
    )
}