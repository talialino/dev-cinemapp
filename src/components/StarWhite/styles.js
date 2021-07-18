import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  IconStart: {
    marginTop: hp('2%'),
    alignItems: 'flex-end',
    width: wp('19%'),
    padding: 16,
  },
});
