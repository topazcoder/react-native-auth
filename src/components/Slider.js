import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
// import { Colors } from '../../../core';

const carouselItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];

const renderItem = () => {
  return (
    <View style={styles.slide}>
      <Image
        source={require('../assets/bitcoin.png')}
        style={styles.image}
      />
    </View>
  );
};

export const Slider = () => {
  const [entries, setEntries] = useState([]);
  const [ activeSlide, setActiveSlide ] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(carouselItems);
  }, []);

  return (
    <View>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
        hasParallaxImages={true}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 0 }}
        dotStyle={{
          width: scale(12),
          height: scale(12),
          borderRadius: 50,
          backgroundColor: "black",
        }}
        inactiveDotStyle={
          {
            backgroundColor: "#C4C4C4",
            width: scale(8),
          height: scale(8),
          }
        }
        inactiveDotOpacity={0.9}
        inactiveDotScale={0.9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: scale(301),
    height: verticalScale(116),
    borderRadius: moderateScale(13),
    paddingHorizontal: 20,
    marginVertical:15
    
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
   
    borderRadius:5
  },
});
