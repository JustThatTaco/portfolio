import "./Notes.css";
import good from '../assets/thumb.png';
import usable from '../assets/slant.png';
import bad from '../assets/F.png';
import sorry from '../assets/sorry.png'

const Notes = () => {
    return (
        <div className = "notes_body">
            <p className="center"> These are some notes for various courses I
            took during college. These notes weren't originally intended to be
            read by others. I'll try to make my notes more organized in the future.  </p>
            <div className="wrapper_center">
            <div>
            <img src={sorry}
                alt= "sorry uwu"
                style = {{width: '20vw', height: 'auto'}}
            />
            </div>
            <a className="section_header"> Good </a> 
            <img src={good}
                alt= "good"
                className = 'image'
            />
            </div>
            <a className = "item" href={"/portfolio/catowen_calculus3_notes.pdf"} target="_blank"> MA-UY 2114 Calculus 3 Written Notes </a>
            <div className="wrapper_center">
            <a className="section_header"> Usable </a>
            <img src={usable}
                alt= "usable"
                className = 'image'
            />
            </div><div className="wrapper_center">
            <a className="section_header"> Pretty Bad </a>
            <img src={bad}
                alt= "usable"
                className = 'image'
            />
            </div>
        </div>
    );
};
  
export default Notes;