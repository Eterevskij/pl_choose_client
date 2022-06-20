import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Row, Col, Input } from 'antd';

import { ReactComponent as Info } from './icons/Info.svg';
import { ReactComponent as Search } from './icons/Search.svg';


import House from './photo/House.jpg';


import TabSlider from './components/TabSlider';
import FindClientHeader from './components/FindClient__header';
import FindClientHouse from './components/FindClient__house';

function App() {
  return (
    <div className="App" >
      <div className="container">

        <div className="selectClient">
          <h5 className="selectClient__title">Выбрать клиента</h5>
          <p className="selectClient__subtitle">Укажите телефон клиента на которого будет оформлена заявка. Если этого клиента нет в нашей базе данных, добавьте его вручную, перейдя на вкладку “Добавить клиента”.</p>
          <TabSlider>
            <FindClient tabName='Найти клиента' />
            <p tabName='Добавить клиента'>123</p>
          </TabSlider>
        </div>

      </div>
    </div>
  );
}

export default App;

const FindClient = () => {
  return (
    <div className="findClient">

      <div className="findClient__phone">
        <Row justify='space-between'>
          <Col>
            <p className="findClient__phone__topText">Номер телефона</p>
            <Input className="findClient__input" defaultValue='+7 (960) 468-40-73' placeholder='Тут должен быть номер телефона' />
          </Col>
          <Col className="findClient__button">
            <Search />
          </Col>
        </Row>
      </div>
      <div className="findClient__block">

        <FindClientHeader id='492932320' name='Гущин Данил' phone='+7 (341) 279-71-77' email='danilgushchin1@gmail.com' />

        <div className="findClient__block__textInfo">
          <Info className="findClient__block__textInfo__icon" />
          <p className="findClient__block__textInfo__text">
            У клиента есть другие заявки, вы можете привязать одну из них к ипотечной заявке, данные автоматически подставяться.</p>
        </div>

        <div className="findClient__block__cards">

          <FindClientHouse photo={House} title='Дом, 34 м², 34 гектар' adress='г Солнечногорск, Московская обл, деревня Рекино-Кресты' id='492932320' tags={['Аренда', 'Дом']} wasBinded={true} />
          <FindClientHouse photo={House} title='Дом, 34 м², 34 гектар' adress='г Солнечногорск, Московская обл, деревня Рекино-Кресты' id='492932320' tags={['Аренда', 'Дом']} wasBinded={false} />

        </div>

      </div>
    </div>
  )
}