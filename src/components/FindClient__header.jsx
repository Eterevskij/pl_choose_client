import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { ReactComponent as Delete } from '../icons/Delete.svg';


const FindClientHeader = (props) => {

  const {id, name, phone, email} = props;

    return (

        <div className="findClient__block__header">

          <Row>
            <Col span={7} className='findClient__block__header__column'>
              <p className="findClient__block__header__column__name">ID {id}</p>
              <p className="findClient__block__header__column__value name">{name}</p>
            </Col>
            <Col span={7} className='findClient__block__header__column'>
              <p className="findClient__block__header__column__name">Телефон:</p>
              <p className="findClient__block__header__column__value">{phone}</p>
            </Col>
            <Col span={7} className='findClient__block__header__column'>
              <p className="findClient__block__header__column__name">E-mail:</p>
              <p className="findClient__block__header__column__value">{email}</p>
            </Col>
            <Col span={1} className='findClient__block__header__buttonWrapper' offset={2}>
              <Button className='findClient__block__header__button'><Delete /></Button>
            </Col>
          </Row>

          <Divider className='findClient__block__header__line' />
        </div>

    )
}

export default FindClientHeader; 