import React, {ReactElement} from 'react';

import {
  Container,
  Content,
  Strip,
  TextCCV,
  ViewInformation,
  View,
  Text,
} from './styles';

interface propsCard {
  data: {
    number: string;
    name: string;
    validate: string;
    ccv: string;
  };
  back: boolean;
  icon: ReactElement | boolean;
}

const Card: React.FC<propsCard> = ({data, back, icon}) => {
  return (
    <Container>
      <Content>
        {back ? (
          <Strip>
            <TextCCV>{data.ccv}</TextCCV>
          </Strip>
        ) : (
          <ViewInformation>
            <View>
              <Text bold fontSize="18px">
                {data.number}
              </Text>
              <Text fontSize="16px">{data.name}</Text>
              <Text fontSize="12px">{data.validate}</Text>
            </View>
            {icon && icon}
          </ViewInformation>
        )}
      </Content>
    </Container>
  );
};

export default Card;
