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
            <ul>
            <li className="listing"><a className = "item" href={"/portfolio/catowen_calculus3_notes.pdf"} target="_blank"> MA-UY 2114 Calculus 3 Written Notes    *Click to Download* </a></li>
            <li className="listing"><a className = "item" href={"/portfolio/catowen_discrete_notes.pdf"} target="_blank"> MA-UY 2314 Discrete Math Written Notes </a></li>
            </ul>
            <div className="wrapper_center">
            <a className="section_header"> Usable </a>
            <img src={usable}
                alt= "usable"
                className = 'image'
            />
            </div>
            <ul>
            <li className="listing"><a className = "item" href={"/portfolio/catowen_chemistry_notes.pdf"} target="_blank"> CM-UY 1003 Chemistry Written Notes </a></li>
            <li className="listing"><a className = "item" href={"/portfolio/catowen_oop_notes.pdf"} target="_blank"> CS-UY 2124 Object Oriented Programming Written Notes </a></li>
            <li className="listing"><a className = "item" href={"/portfolio/catowen_circuits_notes.pdf"} target="_blank"> ECE-UY 2004 Circuits Written Notes </a></li>
            </ul>
            <div className="wrapper_center">
            <a className="section_header"> Pretty Bad </a>
            <img src={bad}
                alt= "usable"
                className = 'image'
            />
            </div>
            <ul>
                <li className="listing"> <a>placeholder</a> </li>
            </ul>
        </div>
    );
};
  
export default Notes;