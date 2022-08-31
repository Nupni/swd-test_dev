import React, { useEffect, useState } from 'react';
import '../App.css';
import SelectButton from '../component/template/selectButton';
import CardConent from '../component/template/cardConent';
import _langData from '../assets/mockLang';
import { Link } from 'react-router-dom';

function Home() {
  const [lang, setLang] = useState<string>('en');
  const watchLang = () => {
    return _langData.find((data) => data.lang === lang);
  };
  const [langData, setlangData] = useState<any>(watchLang());

  useEffect(() => {
    setlangData(watchLang());
  }, [lang]);

  return (
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
      <main className="h-full cardContainer container mx-auto p-8">
        {langData.card.text.map(
          (text: { content: string; page: string }, index: number) => (
            <Link key={index} to={`/${text.page ? text.page : ''}`}>
              <CardConent
                title={`${langData.card.title} ${index + 1}`}
                content={text.content}
              />
            </Link>
          )
        )}
      </main>
    </div>
  );
}

export default Home;
