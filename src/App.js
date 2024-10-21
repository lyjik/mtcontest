import { useState, useEffect } from 'react';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section3_1 from './components/Section3-1';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section1_ch from './components/chinese/Section1';
import Section2_ch from './components/chinese/Section2';
import Section3_ch from './components/chinese/Section3';
import Section3_1_ch from './components/chinese/Section3-1';
import Section4_ch from './components/chinese/Section4';
import Section5_ch from './components/chinese/Section5';
import Section6_ch from './components/chinese/Section6';

function App() {

  // 언어 선택(현재 웹사이트에 맞게 적용 필요)
  const [language , setLanguage] = useState('english')

  useEffect(() => {
    // 아래 코드 주석 처리 해제 시 중문 페이지
    // setLanguage('chinese')
  }, [])

  return (
    <div className="App">
      {language === 'chinese' ?
        <main className='chinese'>
          <Section1_ch/>
          <Section2_ch/>
          <Section3_ch/>
          <Section3_1_ch/>
          <Section4_ch/>
          <Section5_ch/>
          <Section6_ch/>
        </main> :
        <main className='english'>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section3_1/>
          <Section4/>
          <Section5/>
          <Section6/>
        </main>
      }
    </div>
  );
}

export default App;
