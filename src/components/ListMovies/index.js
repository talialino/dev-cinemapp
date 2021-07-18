/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text, Image} from 'react-native';

import {StarInative} from '..';

import styles from './styles';

export function ListMovies({data, favoritesImdbIDs}) {
  return (
    <View>
      {data?.map((item) => (
        <View key={item.imdbID} style={styles.Container}>
          <Image style={styles.Poster} source={{uri: item.Poster}} />
          <View style={styles.Info}>
            <Text style={styles.Title}>{item.Title}</Text>
            <Text style={styles.Title}>Ano: {item.Year}</Text>
          </View>
          <StarInative imdbID={item.imdbID} statePressed={favoritesImdbIDs} />
        </View>
      ))}
    </View>
  );
}
