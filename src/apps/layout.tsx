import React, { useEffect, useState } from 'react';
import '../App.css';
import SelectButton from '../component/template/selectButton';
import _langData from '../assets/mockLang';
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';
import { Col, Divider, Row } from 'antd';
import ControlCard from '../component/template/controlCard';

const geometry = [
  'square',
  'circle',
  'oval',
  'trapezoid',
  'rectangle',
  'parallelogram',
];

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
  alignContent: 'center',
  justifyContent: 'center',
};

function Layout() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const location = useLocation().pathname.replace('/', '');
  const [lang, setLang] = useState<string>('en');
  const watchLang = () => {
    return _langData.find((data) => data.lang === lang);
  };
  const [langData, setlangData] = useState<any>(watchLang());
  const [geometrys, setGeometrys] = useState<string[]>(geometry);
  const [updown, setUpdown] = useState<boolean>(true);
  const [countParallelogram, setCountParallelogram] = useState<number>(0);

  const getHead = () => {
    return langData.card.text.find(
      (text: { content: string; page: string }) => text.page === location
    ).content;
  };

  const ctlLR = (from: number, to: number) => {
    const newGeometrys = [...geometrys];
    newGeometrys.splice(to, 0, newGeometrys.splice(from, 1)[0]);
    setGeometrys(newGeometrys);
  };

  const ctlGeometry = (geometry: string) => {
    const newGeometrys = [...geometrys];
    const circle = newGeometrys.indexOf('circle');
    const square = newGeometrys.indexOf('square');
    const oval = newGeometrys.indexOf('oval');
    const trapezoid = newGeometrys.indexOf('trapezoid');
    const rectangle = newGeometrys.indexOf('rectangle');
    const parallelogram = newGeometrys.indexOf('parallelogram');

    switch (geometry) {
      case 'circle': {
        swap(newGeometrys, circle, rectangle);
        swap(newGeometrys, square, oval);

        break;
      }
      case 'rectangle': {
        const t = newGeometrys.indexOf(geometry);
        const i = [t + 1, t - 1, t + 3, t + 2, t - 2, t + 0];
        reIndex(newGeometrys, i);

        break;
      }
      case 'parallelogram': {
        const t = newGeometrys.indexOf(geometry);
        let i: number[];
        if (countParallelogram == 0) {
          i = [t - 2, t - 3, t + 1, t + 2, t + 0, t - 1];
          setCountParallelogram(countParallelogram + 1);
        } else {
          i = [t - 1, t + 0, t - 2, t + 2, t + 1, t - 3];
        }
        reIndex(newGeometrys, i);

        break;
      }
      case 'square': {
        const t = newGeometrys.indexOf(geometry);
        const i = [t + 1, t - 2, t + 2, t - 1, t + 0, t + 3];
        reIndex(newGeometrys, i);

        break;
      }
    }
    setGeometrys(newGeometrys);
  };

  const reIndex = (newGeometrys: string[], i: number[]) => {
    const newGeo = [...newGeometrys];
    newGeo.map((geometry: string, index: number) => {
      newGeometrys.splice(i[index], 1, geometry);
    });
  };

  const swap = (newGeometrys: string[], from: number, to: number) => {
    return (newGeometrys[from] = newGeometrys.splice(
      to,
      1,
      newGeometrys[from]
    )[0]);
  };

  useEffect(() => {
    !!langData && setIsLoading(false);
  }, [lang, geometrys]);

  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className="App">
          <div className="LangBtn">
            <SelectButton
              lists={langData.select}
              defaultValue={
                langData.select.find((select: any) => select.lang === lang).lang
              }
              setLang={setLang}
            />
          </div>
          <main>
            <h1 className="p-4 capitalize" style={{ textAlign: 'left' }}>
              {getHead()}
            </h1>
            <section className="mx-auto" style={{ maxWidth: '78rem' }}>
              <div className="LayoutContainer grid-cols-4">
                <ControlCard
                  direction={['left']}
                  badgeText={langData.control.shape}
                  onClick={() => {
                    ctlLR(0, geometrys.length - 1);
                  }}
                />
                <ControlCard
                  direction={['up', 'down']}
                  badgeText={langData.control.position}
                  onClick={() => {
                    setUpdown(!updown);
                  }}
                />
                <ControlCard
                  direction={['right']}
                  badgeText={langData.control.shape}
                  onClick={() => {
                    ctlLR(geometrys.length - 1, 0);
                  }}
                />
              </div>
              <Divider orientation="left"></Divider>
              <div className="LayoutContainer">
                {geometrys.map((geometry: string, index: number) => (
                  <Card
                    className="hover-bg-orange"
                    key={index}
                    style={{
                      ...cardStyle,
                      gridColumn:
                        index == 0
                          ? `${updown ? 3 : 2} / span 2`
                          : index == 3
                          ? `${updown ? 2 : 3} / span 2`
                          : 'span 2 / span 2',
                    }}
                    bodyStyle={cardBodyStyle}
                    onClick={() => {
                      ctlGeometry(geometry);
                    }}
                  >
                    <div className={geometry}></div>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}

export default Layout;
