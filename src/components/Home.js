import portrait from '../assets/cato_portrait.png';

const Homepage = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
        <img src={portrait}
             alt="Picture of Me"
             style={{ width: `${windowSize.width * 0.5}px`, height: 'auto' }}
        />
    );
  };
  
  export default Homepage;

