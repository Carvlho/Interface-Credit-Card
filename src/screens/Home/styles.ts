import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 100%;
  height: ${height}px;
  flex: 1;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
`;
export const Header = styled.View`
  width: 100%;
  margin-top: 50px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #4e455e;
`;
export const Subtitle = styled.Text`
  font-weight: 300;
  color: #4e455e;
`;
export const Content = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: #ffffff;
  align-items: center;
`;
export const View = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #6a1b9a;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const TextButton = styled.Text`
  color: #fff;
`;
