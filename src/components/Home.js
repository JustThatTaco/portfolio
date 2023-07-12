import portrait from './assets/cato_portrait.png';

const Homepage = () => {
    return (
        <img src={portrait}
             alt="Picture of Me"
             style={{ width: `${windowSize.width * 0.5}px`, height: 'auto' }}
        />
    );
  };
  
  export default Homepage;

