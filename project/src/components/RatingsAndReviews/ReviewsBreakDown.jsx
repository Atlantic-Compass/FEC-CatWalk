import React from 'react';
import ReviewsRatingBarGraph from "./ReviewsRatingBarGraph.jsx"

class ReviewsBreakDown extends React.Component {
  constructor(props) {
    super(props);
    let recommends = this.props.primaryProductMetadata.recommended;
    const recommendedPercentage = Math.round(
      (recommends[1] / (recommends[0] + recommends[1])) * 100
    );

    let reviewCount = 0;
    let aggregateTotal = 0;
    let modeRatings = 0;

    for (let i = 1; i <= 5; i++) {
      reviewCount += this.props.primaryProductMetadata.ratings[i];
      aggregateTotal += i * this.props.primaryProductMetadata.ratings[i];
      if (this.props.primaryProductMetadata.ratings[i] > modeRatings) {
        modeRatings = this.props.primaryProductMetadata.ratings[i]
      }
    }
    let overAllReviews = Math.round((aggregateTotal / reviewCount) * 10) / 10;

    this.state = {
      reviewCount: reviewCount,
      recommendedPercentage: recommendedPercentage,
      overAllReviews: overAllReviews,
      modeRatings: modeRatings,
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.overAllReviews}</div>
        <div>
          {this.state.recommendedPercentage}% of reviews recommend this product
        </div>
        <div>
        <ReviewsRatingBarGraph ratings={this.props.primaryProductMetadata.ratings} modeRatings={this.state.modeRatings}/>
        </div>
        <div>a pointer graph showing how the sizes compare</div>
      </div>
    );
  }
}

ReviewsBreakDown.prototypes = {};

export default ReviewsBreakDown;