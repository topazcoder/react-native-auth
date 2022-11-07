import { Dimensions, StyleSheet, View,Text ,Image} from 'react-native';
import React, { useEffect, useRef, useState} from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import { Chat } from '../../../core/icons/Chat';
// import { Colors, InterText } from '../../../core';


const { width: screenWidth } = Dimensions.get('window');

const carouselItems = [
  'Dim Exchange will be giving out 5,000,000 DIM to lucky winners',
  'ETH was up as much as 5% over the past 24 hours, compared with a 2% rise in BTC',
  'Crypto Yields Attract Corporate Treasuries',
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      {/* <Chat /> */}
      <Image source={require('../assets/Shape.png')}/>
      <Text style={styles.heading} fontWeight='regular' numberOfLines={1}  >{item}

      </Text>
    </View>
  );
};

export const NewsSlider = () => {
  const [entries, setEntries] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(carouselItems);
  }, []);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor:'#C4C4C4',opacity:0.6,padding:18}}>
      <View style={{ display: 'flex', zIndex: 0}}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth - 65}
          sliderHeight={screenWidth - 65}
          itemWidth={screenWidth - 65}
          data={entries}
          loop={true}
          autoplay={true}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveSlide(index)}
          hasParallaxImages={true}
        />
      </View>
      <View style={{ zIndex: 3, flex: 0, display: 'flex', }}>
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          dotContainerStyle={{ paddingHorizontal: 0, marginHorizontal: 2}}
          containerStyle={{ paddingVertical: 0,marginHorizontal: 0, paddingHorizontal: 0, justifyContent: 'flex-start' }}
          dotStyle={{
            width: scale(4),
            height: scale(4),
            borderRadius: 5,
            marginHorizontal: 0,
            paddingHorizontal: 0,
            backgroundColor: "black",
          }}
          inactiveDotStyle={{
            backgroundColor: "black",
            width: scale(4),
            height: scale(4),
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flexDirection: 'row',
    flexGrow: 1,
    // backgroundColor:'rgba(0,0,0,0.3)',
    paddingRight: 10
  },
  heading: {
    fontSize: scale(9),
    marginLeft: moderateScale(15),
    marginRight: moderateScale(15)
  }
});
