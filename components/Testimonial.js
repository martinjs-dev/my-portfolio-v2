"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";
import { reviews } from "@/utility/reviews";
import { useState } from "react";

const Testimonial = () => {
  const MAX_LENGTH = 150;
  const MAX_LENGTH2 = 1;

  return (
    <div className="client-feedback">
      <h2 className="main-common-title">Ils en parlent..</h2>
      <Slider
        {...sliderProps.testimonialSlider}
        className="row client-feedback-slider"
      >
        {reviews.map((review, index) => {
          const [isExpanded, setIsExpanded] = useState(false);
          const [isExpanded2, setIsExpanded2] = useState(false);
          const isLong = review.commentaire.length > MAX_LENGTH;
          const isLong2 = String(review.seller_response).length > MAX_LENGTH2;
          const displayedText = isExpanded
            ? review.commentaire
            : review.commentaire.slice(0, MAX_LENGTH) + (isLong ? "... " : " ");

          const displayedResponse = isExpanded2 ? review.seller_response : "";

          return (
            <div className="col-lg-6" key={index}>
              <div className="feedback-item">
                <div className="feedback-top-info">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star${
                          review.positive || i < 4 ? "" : "-o"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="website">
                    <a
                      href={review.service_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ComeUp
                      <svg
                        className="arrow-up"
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.91634 4.5835L4.08301 10.4168"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.66699 4.5835H9.91699V9.8335"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="details">
                  <p>
                    "{displayedText}"
                    {isLong && (
                      <span
                        className="toggle-text"
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{ color: "blue", cursor: "pointer" }}
                      >
                        {isExpanded ? " Voir moins" : "  Voir plus"}
                      </span>
                    )}
                  </p>
                  {(
                    <p
                      className="seller-response"
                      style={{
                        paddingLeft: "10px",
                        marginTop: "10px",
                        fontStyle: "italic",
                        borderRadius: "5px",
                      }}
                    >
                      <small>
                        {/* <b>Réponse : </b> */}
                        <p>
                          {displayedResponse}
                          {
                            <span
                              className="toggle-text"
                              onClick={() => setIsExpanded2(!isExpanded2)}
                              style={{ color: "black", cursor: "pointer" }}
                            >
                              {isExpanded2 ? " Voir moins" : "  > Réponse"}
                            </span>
                          }
                        </p>
                      </small>
                    </p>
                  )}
                </div>
                <div className="designation">
                  <p>
                    <span>{review.client}</span> - {review.date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonial;
