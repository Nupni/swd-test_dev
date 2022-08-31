import React from 'react';
import { Badge, Space, Card } from 'antd';

const ControlCard = ({
  direction,
  badgeText,
  onClick,
}: {
  direction: string[];
  badgeText: string;
  onClick: () => void;
}) => {
  const cardStyle = {
    width: 'auto',
    height: 125,
    borderRadius: '0.5rem',
  };

  const cardBodyStyle = {
    height: '100%',
    width: '100%',
    padding: '1rem 1.5rem',
    display: 'flex',
    placeContent: 'space-between',
  };

  return (
    <>
      <Card
        className="hover-bg-orange"
        style={{
          ...cardStyle,
          gridColumn:
            direction.length === 1 ? 'span 1 / span 1' : 'span 2 / span 2',
        }}
        bodyStyle={cardBodyStyle}
        onClick={onClick}
      >
        {direction.map((direction: string, index: number, array: string[]) => (
          <div key={index} className={`triangle-${direction}`}></div>
        ))}
        <Badge className="badge capitalize" title={badgeText}>
          {badgeText}
        </Badge>
      </Card>
    </>
  );
};

export default ControlCard;
