import { Review } from "../review/component"

export const ReviewList = ({reviews}) => {
    return (
        <li>
            Отзывы
            <ul>
                {reviews.map((review) =>
                    <Review review = {review} />
                )}
            </ul>
        </li>
    )
}