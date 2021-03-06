import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';

interface propsContainer {
  width: any;
}

export const Container = styled.View<propsContainer>`
  width: ${({width}) => (width ? width : '100%')};
  height: 50px;
  padding: 0 8px;
  background-color: #bdbdbd;
  opacity: 0.5;
  border-radius: 8px;
  margin-top: 14px;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  margin-left: 8px;
  font-weight: bold;
  color: #000;
`;

export const MaskTextInput = styled(TextInputMask)`
  width: 100%;
  margin-left: 8px;
  font-weight: bold;
  color: #000;
`;
