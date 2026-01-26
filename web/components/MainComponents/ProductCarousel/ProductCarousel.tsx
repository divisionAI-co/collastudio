'use client';

import React from 'react';
import styles from './ProductCarousel.module.css';

// Figma asset URLs (Phase 1 - will be replaced with local assets in Phase 2)
const imgImage = 'https://www.figma.com/api/mcp/asset/24e1474b-ac4d-4ced-ac90-e403aa73643a';
const imgCardTravel = '/assets/Card/figma/CardTravel/imgIconLable1.jpg';
const imgHeartOff = '/assets/icons/figma/ServiceIcon/HeartOff.svg';
const imgStarEasy = 'https://www.figma.com/api/mcp/asset/508ec965-f4b6-4d32-aeb8-249885ce1380';
const imgStarMild = 'https://www.figma.com/api/mcp/asset/59f95f72-a144-44eb-b521-e557a53024d6';
const imgStarHard = 'https://www.figma.com/api/mcp/asset/0ebcf552-2dbe-488b-b32e-530a57bd8845';
const imgChevronRight = 'https://www.figma.com/api/mcp/asset/d953ee59-e2ed-4b46-b887-0e9e960ccca7';
const imgChevronLeft = 'https://www.figma.com/api/mcp/asset/84f9025e-5f87-4527-bd5b-6d8edb29b47b';
const imgDotActive = 'https://www.figma.com/api/mcp/asset/e723b7dd-ae2c-46b6-9142-6c0ad9e1264a';
const imgDotInactive = 'https://www.figma.com/api/mcp/asset/fc12db18-8891-486d-ab69-230f6ba1040e';

export interface TravelCard {
  destination: string;
  title: string;
  price: string;
  difficulty: 'Easy' | 'Mild' | 'Hard';
  days: string;
  km: string;
  imageUrl?: string;
}

export interface ProductCarouselProps {
  title?: string;
  showNavigationButtons?: boolean;
  cards?: TravelCard[];
  className?: string;
}

// Local Difficulty Rating Component (self-contained within MainComponents layer)
// Duplicated from Icon/DifficultyRating to maintain layer isolation
const DifficultyRating: React.FC<{ difficulty: 'Easy' | 'Mild' | 'Hard'; className?: string }> = ({ difficulty, className }) => {
  const classes = [styles.difficultyRating, className].filter(Boolean).join(' ');
  
  const renderStars = () => {
    switch (difficulty) {
      case 'Hard':
        return (
          <>
            <div className={styles.star}>
              <img src={imgStarHard} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarHard} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarHard} alt="Filled star" className={styles.starImage} />
            </div>
          </>
        );
      case 'Mild':
        return (
          <>
            <div className={styles.star}>
              <img src={imgStarHard} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarHard} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarMild} alt="Empty star" className={styles.starImage} />
            </div>
          </>
        );
      case 'Easy':
        return (
          <>
            <div className={styles.star}>
              <img src={imgStarEasy} alt="Filled star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarMild} alt="Empty star" className={styles.starImage} />
            </div>
            <div className={styles.star}>
              <img src={imgStarMild} alt="Empty star" className={styles.starImage} />
            </div>
          </>
        );
      default:
        return null;
    }
  };
  
  return <div className={classes}>{renderStars()}</div>;
};

// Local Specs Travel Component (self-contained within MainComponents layer)
// Duplicated from Labels/SpecsTravel to maintain layer isolation (Property 1: On variant - showEasy=false)
const SpecsTravel: React.FC<{ difficulty: 'Easy' | 'Mild' | 'Hard'; days: string; km: string; className?: string }> = ({ difficulty, days, km, className }) => {
  return (
    <div className={className} data-name="Specs Travel" data-node-id="2084:3977">
      <div className={styles.difficulty} data-name="Difficulty" data-node-id="2084:3967">
        <DifficultyRating difficulty={difficulty} className={styles.difficultyRatingWrapper} />
      </div>
      <div className={styles.duration} data-name="Duration" data-node-id="2084:3969">
        <p className={styles.specText} data-node-id="2084:3970">
          {days}
        </p>
      </div>
      <div className={styles.distance} data-name="Distance" data-node-id="2084:3971">
        <p className={styles.specText} data-node-id="2084:3972">
          {km}
        </p>
      </div>
    </div>
  );
};

// Local Heart Icon Component (self-contained within MainComponents layer)
// Duplicated from Icon/ServiceIcon to maintain layer isolation
const HeartIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className} data-name="Animation/Favorite icon" data-node-id="2084:4402">
      <div className={styles.heartIconLabel} data-name="Icon lable" data-node-id="I2084:4402;3644:21897">
        <img alt="" className={styles.heartIconImage} src={imgHeartOff} />
      </div>
    </div>
  );
};

// Local Travel Card Component (self-contained within MainComponents layer)
// Duplicated from Card/CardTravel (Property 1: On variant) to maintain layer isolation
const TravelCard: React.FC<{ card: TravelCard; index: number }> = ({ card, index }) => {
  const imageUrl = card.imageUrl || imgCardTravel;
  const nodeId = index === 0 ? '2084:4393' : index === 1 ? '2084:4532' : index === 2 ? '2084:4560' : index === 3 ? '2084:4587' : index === 4 ? '2105:5102' : '2105:9770';
  
  return (
    <div
      className={styles.cardTravel}
      data-name="Card travel"
      data-node-id={nodeId}
    >
      <div
        className={styles.image}
        data-name="Image"
        data-node-id={`I${nodeId};2084:4394`}
      >
        <div className={styles.imageOverlay} aria-hidden="true">
          <img className={styles.imageElement} alt="" src={imageUrl} />
          <div className={styles.gradientOverlay} />
        </div>
      </div>
      <div
        className={styles.topContainer}
        data-name="Container"
        data-node-id={`I${nodeId};2084:4395`}
      >
        <SpecsTravel
          difficulty={card.difficulty}
          days={card.days}
          km={card.km}
          className={styles.specsTravel}
        />
      </div>
      <div
        className={styles.bottomContainer}
        data-name="Container"
        data-node-id={`I${nodeId};2084:4397`}
      >
        <div
          className={styles.title}
          data-name="Title"
          data-node-id={`I${nodeId};2084:4398`}
        >
          <div
            className={styles.destinationBadge}
            data-node-id={`I${nodeId};2580:36557`}
          >
            <p
              className={styles.destinationText}
              data-node-id={`I${nodeId};2084:4399`}
            >
              {card.destination}
            </p>
          </div>
          <p
            className={styles.titleText}
            data-node-id={`I${nodeId};2084:4356`}
          >
            {card.title}
          </p>
        </div>
        <div
          className={`${styles.priceContainer} ${styles.priceContainerOn}`}
          data-name="Container"
          data-node-id={`I${nodeId};2084:4401`}
        >
          <HeartIcon
            className={styles.favoriteIcon}
            data-name="Animation/Favorite icon"
            data-node-id={`I${nodeId};2084:4402`}
          />
          <div
            className={`${styles.pricing} ${styles.pricingOn}`}
            data-name="Container"
            data-node-id={`I${nodeId};2084:4403`}
          >
            <p
              className={styles.startingFrom}
              data-node-id={`I${nodeId};2084:4404`}
            >
              Starting from
            </p>
            <div
              className={styles.price}
              data-name="Pricing"
              data-node-id={`I${nodeId};2084:4405`}
            >
              <p className={styles.priceAmount} data-node-id={`I${nodeId};2084:4362`}>
                {card.price}
              </p>
              <p
                className={styles.priceCurrency}
                data-node-id={`I${nodeId};2084:4407`}
              >
                €
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Local Difficulty Selector Component (self-contained within MainComponents layer)
const DifficultySelector: React.FC<{ selected: 'Easy' | 'Mild' | 'Hard'; onSelect: (difficulty: 'Easy' | 'Mild' | 'Hard') => void; className?: string }> = ({ selected, onSelect, className }) => {
  return (
    <div className={className} data-name="Difficult selector" data-node-id="2089:7140">
      <button
        className={`${styles.difficultyButton} ${selected === 'Easy' ? styles.difficultyButtonActive : ''}`}
        onClick={() => onSelect('Easy')}
        data-node-id="I2089:7140;2079:2579"
      >
        <DifficultyRating difficulty="Easy" className={styles.difficultyRating} />
        <p className={styles.difficultyLabel} data-node-id="I2089:7140;2079:2581">
          Easy
        </p>
      </button>
      <button
        className={`${styles.difficultyButton} ${selected === 'Mild' ? styles.difficultyButtonActive : ''}`}
        onClick={() => onSelect('Mild')}
        data-node-id="I2089:7140;2079:2582"
      >
        <DifficultyRating difficulty="Mild" className={styles.difficultyRating} />
        <p className={styles.difficultyLabel} data-node-id="I2089:7140;2084:3814">
          Mild
        </p>
      </button>
      <button
        className={`${styles.difficultyButton} ${selected === 'Hard' ? styles.difficultyButtonActive : ''}`}
        onClick={() => onSelect('Hard')}
        data-node-id="I2089:7140;2079:2585"
      >
        <DifficultyRating difficulty="Hard" className={styles.difficultyRating} />
        <p className={styles.difficultyLabel} data-node-id="I2089:7140;2084:3825">
          Hard
        </p>
      </button>
    </div>
  );
};

// Local Carousel Dots Component (self-contained within MainComponents layer)
const CarouselDots: React.FC<{ count: number; activeIndex: number; className?: string }> = ({ count, activeIndex, className }) => {
  return (
    <div className={className} data-name="Difficulty rating" data-node-id="2089:7220">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={styles.dot}
          data-name="Star"
          data-node-id={index === 0 ? '3558:79352' : index === 1 ? '3558:79353' : '3558:79354'}
        >
          <img alt="" className={styles.dotImage} src={index === activeIndex ? imgDotActive : imgDotInactive} />
        </div>
      ))}
    </div>
  );
};

// Local Chevron Icon Component (self-contained within MainComponents layer)
// Circular button style duplicated from Button/RoundedCTA
const ChevronIcon: React.FC<{ direction: 'left' | 'right'; className?: string; onClick?: () => void }> = ({ direction, className, onClick }) => {
  const buttonClasses = direction === 'left' 
    ? `${className} ${styles.navButtonPrev}` 
    : className;
  
  return (
    <button 
      className={`${styles.navButton} ${buttonClasses || ''}`} 
      onClick={onClick} 
      data-name={`Service icon/Chevron ${direction}`}
    >
      <div className={styles.chevronIconLabel} data-name="Icon lable">
        <img alt="" className={styles.chevronIconImage} src={imgChevronRight} />
      </div>
    </button>
  );
};

export function ProductCarousel({
  title = 'Not sure how far you can walk? Choose your trail based on your experience',
  showNavigationButtons = true,
  cards,
  className,
}: ProductCarouselProps) {
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<'Easy' | 'Mild' | 'Hard'>('Easy');
  const [activeDotIndex, setActiveDotIndex] = React.useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const defaultCards: TravelCard[] = [
    {
      destination: 'ST.JAMES WAY',
      title: 'The Portuguese Way: From Vigo to Santiago and back',
      price: '515',
      difficulty: 'Easy',
      days: '8 Days',
      km: '102 km',
    },
    {
      destination: 'IRELAND',
      title: 'The bauty of fiords and hills between sheeps and sea',
      price: '515',
      difficulty: 'Easy',
      days: '8 Days',
      km: '102 km',
    },
    {
      destination: 'FRANCE',
      title: 'The French Way: along the landes beaches',
      price: '515',
      difficulty: 'Easy',
      days: '8 Days',
      km: '102 km',
    },
    {
      destination: 'Italy',
      title: 'The Francigena way: From siena to Pienza and back',
      price: '515',
      difficulty: 'Easy',
      days: '8 Days',
      km: '102 km',
    },
    {
      destination: 'ST.JAMES WAY',
      title: 'The Portuguese Way: From Vigo to Santiago and back',
      price: '515',
      difficulty: 'Easy',
      days: '8 Days',
      km: '102 km',
    },
    {
      destination: 'ST.JAMES WAY',
      title: 'The Portuguese Way: From Vigo to Santiago and back',
      price: '515',
      difficulty: 'Easy',
      days: '8 Days',
      km: '102 km',
    },
  ];

  const displayCards = cards || defaultCards;
  const filteredCards = displayCards.filter(card => card.difficulty === selectedDifficulty);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 266 + 30; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveDotIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 266 + 30; // card width + gap
      carouselRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardWidth = 266 + 30;
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardWidth = 266 + 30;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div
      className={`${styles.productCarousel} ${className || ''}`}
      data-name="Product carousel"
      data-node-id="2089:8425"
    >
      <div className={styles.container}>
        <div className={styles.header} data-name="Container" data-node-id="2089:7179">
          <div className={styles.titleContainer} data-node-id="2089:7177">
            <p className={styles.title}>{title}</p>
          </div>
          <DifficultySelector selected={selectedDifficulty} onSelect={setSelectedDifficulty} className={styles.difficultySelector} />
        </div>
        <div className={styles.carouselWrapper} data-name="Container" data-node-id="2089:9226">
          <div
            ref={carouselRef}
            className={styles.carousel}
            data-name="Container"
            data-node-id="2084:4559"
          >
            {filteredCards.map((card, index) => (
              <TravelCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
        <div className={styles.footer} data-name="Difficulty rating" data-node-id="2089:7220">
          <button className={styles.viewAllButton} data-name="CTA" data-node-id="2105:5598">
            <p className={styles.viewAllText} data-node-id="I2105:5598;2273:30679">
              Wiew all travel
            </p>
            <div className={styles.viewAllChevron} data-name="Service icon/Chevron right" data-node-id="I2105:5598;2273:30680">
              <div className={styles.viewAllChevronLabel} data-name="Icon lable" data-node-id="I2105:5598;2273:30680;2419:28964">
                <img alt="" className={styles.viewAllChevronImage} src={imgChevronRight} />
              </div>
            </div>
          </button>
          <CarouselDots count={Math.ceil(filteredCards.length / 3)} activeIndex={activeDotIndex} className={styles.carouselDots} />
          {showNavigationButtons && (
            <div className={styles.navigationButtons} data-name="Navigation Buttons" data-node-id="2202:13360">
              <ChevronIcon direction="left" onClick={scrollLeft} />
              <ChevronIcon direction="right" onClick={scrollRight} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCarousel;
