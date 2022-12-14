import './App.css';
import Customer from './components/Customer';

function App() {
  const customers =  [
    {
      'id' : 1,
      'image' : 'https://placeimg.com/64/64/any',
      'name' : '나동빈',
      'birthday' : '961222',
      'gender' : '남자',
      'job' : '대학생'
    },
    {
      'id' : 2,
      'image' : 'https://placeimg.com/64/64/any',
      'name' : '이순신',
      'birthday' : '951223',
      'gender' : '여자',
      'job' : '회사원'
    },
    {
      'id' : 3,
      'image' : 'https://placeimg.com/64/64/any',
      'name' : '홍길동',
      'birthday' : '931120',
      'gender' : '남자',
      'job' : '알바생'
    }
  ]

  return (
    <>
      {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
    </>
  );
}

export default App;
