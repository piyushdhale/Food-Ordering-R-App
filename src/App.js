import './App.css';
import Header from './components/Header';
import Body from './components/Body';



const AppLayout = () =>{
  return (
    <div className='app'>
      <Header/>
      <marquee width="100%" height="25px" direction="right">
        WebSite under developement</marquee>
      <Body/>
    </div>
  )
}

export default AppLayout;
