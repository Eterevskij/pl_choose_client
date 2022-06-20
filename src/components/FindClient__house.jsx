import React, { useState } from 'react';
import { Row, Col, Button, Tag } from 'antd';

const FindClientHouse = (props) => {

    const {title, photo, adress, id, tags, wasBinded} = props;

    const [isBinded, setBind] = useState(wasBinded);

    return (

        <div className="findClient__block__cards__item">
        <Row justify='space-between' align='middle'>

          <Col span={12}>
            <div className="findClient__block__cards__item__left">
              <Row gutter={24}>
                <Col span={6}>
                  <img className="findClient__block__cards__item__left__photo" src={photo} alt="" />
                </Col>

                <Col span={16}>
                  <h5 className="findClient__block__cards__item__left__title">{title}</h5>
                  <p className="findClient__block__cards__item__left__adress">{adress}</p>
                  <div className="findClient__block__cards__item__left__tags">
                    <Tag className="findClient__block__cards__item__left__tags__item" closable={false}>ID {id}</Tag>
                    {
                        tags.map(tag => {
                            return <Tag className="findClient__block__cards__item__left__tags__item" closable={false}>{tag}</Tag>
                        })
                    }
                  </div>
                </Col>

              </Row>
            </div>
          </Col>

          <Col className="findClient__block__cards__item__right">
            <Button onClick={()=> setBind(!isBinded)} className={`findClient__block__cards__item__right__button ${isBinded && 'active'}`}>{isBinded ? 'Отвязать' : 'Привязать'}</Button>
          </Col>

        </Row>
      </div>

    )
}

export default FindClientHouse; 