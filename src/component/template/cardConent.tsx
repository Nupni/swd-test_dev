import { Card } from 'antd';
import React, { FC } from 'react';

type CardConentProps = {
  title?: string;
  content?: string;
};

const CardConent: FC<CardConentProps> = ({ title, content }) => (
  <Card
    style={{ width: 300, height: 125 }}
    bodyStyle={{
      height: '100%',
      padding: '1rem 1.5rem',
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'space-between',
    }}
  >
    <strong className="w-full capitalize">{title}</strong>
    <p className="w-full capitalize">{content}</p>
  </Card>
);

export default CardConent;
