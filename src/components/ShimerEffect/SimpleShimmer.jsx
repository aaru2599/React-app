import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import "./style.css";

const SampleShimmer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const renderMovieCard = () => {
    if (isLoading) {
      return (
        <div className="products">
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>

          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
          <ContentLoader>
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="156" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="156" height="10" />
          </ContentLoader>
        </div>
      );
    }

    return (
      <div className="products">
        <div className="product-container">
          <div className="image-block"></div>
          <div className="product-details">
            <p className="product-title">Apple (From Kashmir)</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione quidem, laborum magnam, officiis dolorem
              ducimus blanditiis asperiores fuga quibusdam sequi hic labore
              reprehenderit dignissimos minus velit et laudantium ut!
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="image-block"></div>
          <div className="product-details">
            <p className="product-title">Apple (From Kashmir)</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione quidem, laborum magnam, officiis dolorem
              ducimus blanditiis asperiores fuga quibusdam sequi hic labore
              reprehenderit dignissimos minus velit et laudantium ut!
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="image-block"></div>
          <div className="product-details">
            <p className="product-title">Apple (From Kashmir)</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione quidem, laborum magnam, officiis dolorem
              ducimus blanditiis asperiores fuga quibusdam sequi hic labore
              reprehenderit dignissimos minus velit et laudantium ut!
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="image-block"></div>
          <div className="product-details">
            <p className="product-title">Apple (From Kashmir)</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione quidem, laborum magnam, officiis dolorem
              ducimus blanditiis asperiores fuga quibusdam sequi hic labore
              reprehenderit dignissimos minus velit et laudantium ut!
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="image-block"></div>
          <div className="product-details">
            <p className="product-title">Apple (From Kashmir)</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione quidem, laborum magnam, officiis dolorem
              ducimus blanditiis asperiores fuga quibusdam sequi hic labore
              reprehenderit dignissimos minus velit et laudantium ut!
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="image-block"></div>
          <div className="product-details">
            <p className="product-title">Apple (From Kashmir)</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione quidem, laborum magnam, officiis dolorem
              ducimus blanditiis asperiores fuga quibusdam sequi hic labore
              reprehenderit dignissimos minus velit et laudantium ut!
            </p>
          </div>
        </div>
        <div className="product-container">
          <div className="image-block"></div>
          <div className="product-details">
            <p className="product-title">Apple (From Kashmir)</p>
            <p className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ratione quidem, laborum magnam, officiis dolorem
              ducimus blanditiis asperiores fuga quibusdam sequi hic labore
              reprehenderit dignissimos minus velit et laudantium ut!
            </p>
          </div>
        </div>
      </div>
    );
  };
  return renderMovieCard();
};

export default SampleShimmer;