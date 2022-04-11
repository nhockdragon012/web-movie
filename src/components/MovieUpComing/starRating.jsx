function StarRating({star}) {
    const newStar = Math.ceil(star/2);
    const reviewStarOn = Array.from({length: newStar}, () => '🟊')
    const reviewStarOff = Array.from({length: 5-newStar}, () => '🟊')
    return (
        <p className="start" >
            <span style={{color: '#f0a700'}}>{reviewStarOn}</span>
            <span>{reviewStarOff}</span>
        </p>
    )
}
export default StarRating