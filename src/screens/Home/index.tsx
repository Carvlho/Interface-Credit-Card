import React, {useState} from 'react';
import {Animated} from 'react-native';
import {StatusBar} from 'react-native';

import {
  ScrollView,
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  View,
  Button,
  TextButton,
} from './styles';

import {Card, Input} from '../../components';

import IconUser from '../../assets/icon-user.svg';
import IconNumber from '../../assets/icon-number.svg';
import IconDate from '../../assets/icon-date.svg';
import IconCode from '../../assets/icon-code.svg';

import {getBrand} from '../../components/Input/brand';

const Home = () => {
  const [widthAnimated, setWidthAnimated] = useState(new Animated.Value(310));
  const [backView, setBackView] = useState(false);

  const [icon, setIcon] = useState({
    icon: false,
  });

  const [data, setData] = useState({
    name: '',
    number: '',
    validate: '',
    ccv: '',
  });

  const animatedCard = (back: boolean) => {
    if (back && !backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 400,
          useNativeDriver: false,
        }).start();
        setBackView(true);
      }, 400);
    }
    if (!back && backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 400,
          useNativeDriver: false,
        }).start();
        setBackView(false);
      }, 400);
    }
  };

  return (
    <ScrollView>
      <Container>
        <StatusBar barStyle={'dark-content'} />
        <Header>
          <Title>Meu cartão</Title>
          <Subtitle>Insira os dados do cartão</Subtitle>
        </Header>

        <Content>
          <Animated.View style={{width: widthAnimated}}>
            <Card data={data} icon={icon?.icon} back={backView} />
          </Animated.View>
          <Input
            placeholder="Nome do titular"
            value={data.name}
            onChangeText={text => {
              setData({...data, name: text});
              animatedCard(false);
            }}
            icon={<IconUser fill="#6a1b91" width={16} height={16} />}
          />
          <Input
            value={data.number}
            onChangeText={text => {
              setData({...data, number: text});
              setIcon(getBrand(text));
              animatedCard(false);
            }}
            type="credit-card"
            mask
            placeholder="Número do cartão"
            icon={<IconNumber fill="#6a1b91" width={16} height={16} />}
          />
          <View>
            <Input
              value={data.validate}
              onChangeText={text => {
                setData({...data, validate: text});
                animatedCard(false);
              }}
              mask
              type="custom"
              options={{
                mask: '99/99',
              }}
              placeholder="Validade"
              width="45%"
              icon={<IconDate fill="#6a1b91" width={16} height={16} />}
            />
            <Input
              value={data.ccv}
              onChangeText={text => {
                setData({...data, ccv: text});
                animatedCard(true);
              }}
              mask
              type="custom"
              options={{
                mask: '9999',
              }}
              placeholder="CCV"
              width="45%"
              icon={<IconCode fill="#6a1b91" width={16} height={16} />}
            />
          </View>
        </Content>
        <Button>
          <TextButton>Cadastrar</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
};

export default Home;
