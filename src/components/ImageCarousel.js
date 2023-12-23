import React, { useRef, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

const ImageCarousel = ({ images, autoScrollInterval }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const SCREEN_WIDTH = Dimensions.get("window").width;

  const handleScroll = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / SCREEN_WIDTH); // Assuming SCREEN_WIDTH is your screen's width
    setCurrentIndex(index);
  };

  const scrollToNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    flatListRef.current.scrollToIndex({ index: nextIndex });
  };

  useEffect(() => {
    if (autoScrollInterval) {
      const interval = setInterval(scrollToNextImage, autoScrollInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.images }}
            style={{ width: SCREEN_WIDTH, height: 220 }}
            resizeMode="stretch"
          />
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: -20,
        }}
      >
        {images?.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => flatListRef.current.scrollToIndex({ index })}
          >
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor:
                  index === currentIndex ? COLORS.primary : "lightgrey",
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
