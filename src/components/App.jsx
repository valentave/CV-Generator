import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import LivePreview from './LivePreview.jsx'
import PersonalDetailsBox from './PersonalDetailsBox.jsx'
import EducationsBox from './EducationsBox.jsx';
import ExperiencesBox from './ExperiencesBox.jsx';
import StyleBox from './StyleBox.jsx';

function App() {
  const [layoutColor, setLayoutColor] = useState("#192657");
  const [textColor, setTextColor] = useState("#ffffff");
  const [layoutPosition, setLayoutPosition] = useState("top");
  const [liveFont, setLiveFont] = useState("sans-serif")
  const [personalData, setPersonalData] = useState({
    fullName: 'Example Name',
    email: 'example-email@email.com',
    phone: '+55 5555 555 555',
    address: 'Springfield, US',
  });
  const [educations, setEducations] = useState([
    {
      degree: 'Bachiller',
      school: 'EESO N° 209 Dr. Dalmacio Velez Sarsfield',
      location: 'Casilda, AR',
      startDate: '2012-01-01',
      endDate: '2016-12-31',
      id: uuidv4(),
    },
    {
      degree: 'Computer Science',
      school: 'Springfield University',
      location: 'Springfield, US',
      startDate: '2018-01-01',
      endDate: '',
      id: uuidv4(),
    },
  ])
  const [experiences, setExperiences] = useState([
    {
      company: 'Imaginary Inc.',
      position: 'Software Engineer',
      location: 'Springfield, US',
      description: 'Design and develop innovative software solutions, collaborate with cross-functional teams, implement cutting-edge technologies, enhance user experiences, and solve complex challenges as a software engineer.',
      startDate: '2023-09-01',
      endDate: '',
      id: uuidv4(),
    },
  ])

  function handleDetailsInput(e) {
    const newDetails = {...personalData};
    if (e.target.id === 'fullName') {
      newDetails.fullName = e.target.value;
    } else if (e.target.id === 'email') {
      newDetails.email = e.target.value;
    } else if (e.target.id === 'phone') {
      newDetails.phone = e.target.value;
    } else if (e.target.id === 'address') {
      newDetails.address = e.target.value;
    }

    setPersonalData(newDetails);
  }

  function handleEducationsInput(e) {
    const updatedEducations = educations.map(edu => {
      if (e.target.className === 'school-input' && e.target.id === edu.school + '-' + edu.id) {
        return { ...edu, school: e.target.value };
      } else if (e.target.className === 'degree-input' && e.target.id === edu.degree + '-' + edu.id) {
        return { ...edu, degree: e.target.value };
      } else if (e.target.className === 'location-input' && e.target.id === edu.location + '-' + edu.id) {
        return { ...edu, location: e.target.value };
      } else if (e.target.className === 'sdate-input' && e.target.id === edu.startDate + '-' + edu.id) {
        return { ...edu, startDate: e.target.value };
      } else if (e.target.className === 'edate-input' && e.target.id === edu.endDate + '-' + edu.id) {
        return { ...edu, endDate: e.target.value };
      }
      return edu;
    });
  
    setEducations(updatedEducations);
  }

  function handleExperiencesInput(e) {
    const updatedExperiences = experiences.map(exp => {
      if (e.target.className === 'company-input' && e.target.id === exp.company + '-' + exp.id) {
        return { ...exp, company: e.target.value };
      } else if (e.target.className === 'position-input' && e.target.id === exp.position + '-' + exp.id) {
        return { ...exp, position: e.target.value };
      } else if (e.target.className === 'location-input' && e.target.id === exp.location + '-' + exp.id) {
        return { ...exp, location: e.target.value };
      } else if (e.target.className === 'description-input' && e.target.id === exp.description + '-' + exp.id) {
        return { ...exp, description: e.target.value };
      } else if (e.target.className === 'sdate-input' && e.target.id === exp.startDate + '-' + exp.id) {
        return { ...exp, startDate: e.target.value };
      } else if (e.target.className === 'edate-input' && e.target.id === exp.endDate + '-' + exp.id) {
        return { ...exp, endDate: e.target.value };
      }
      return exp;
    });
  
    setExperiences(updatedExperiences);
  }

  function addEducation(){
    const newEducation = {
      degree: 'New Degree',
      school: 'New School',
      location: 'New City',
      startDate: '',
      endDate: '',
      id: uuidv4(),
    }

    setEducations([...educations, newEducation]);
  }

  function addExperience(){
    const newExperience = {
      company: 'New Company',
      position: 'New Position',
      location: 'New City',
      description: 'New Description',
      startDate: '',
      endDate: '',
      id: uuidv4(),
    }

    setExperiences([...experiences, newExperience]);
  }

  function deleteEducation(e){
    let target_id = e.target.parentNode.parentNode.id;
    let newEducations = educations.filter((edu) => edu.id + "school" != target_id);
    setEducations([...newEducations]);
  }

  function deleteExperience(e){
    let target_id = e.target.parentNode.parentNode.id;
    let newExperiences = experiences.filter((exp) => exp.id + "job" != target_id);
    setExperiences([...newExperiences]);
  }

  function changeColor(e){
    let targetColor = e.target.value;
    setLayoutColor(targetColor);

    if (esColorClaro(targetColor)) {
      setTextColor("#000000");
    } else {
      setTextColor("#ffffff");
    }
    
    let root = document.querySelector("#root");
    root.style.setProperty('--layout-color',  targetColor);
    root.style.setProperty('--text-color', textColor);
  }

  function esColorClaro(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
  
    const brillo = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    const umbral = 0.65;
  
    return brillo > umbral;
  }

  function changeLayout(e) {
    let layoutId = e.target.parentNode.parentNode.id;
    if(layoutId === "layout-top") {
      setLayoutPosition("top");
    } else if(layoutId === "layout-left") {
      setLayoutPosition("left");
    }
  }

  function changeFont(e) {
    let buttonId = e.target.parentNode.id;
    if (!buttonId) buttonId = e.target.id;
    if (buttonId === "buttonSerif") setLiveFont("serif");
    else if (buttonId === "buttonSans") setLiveFont("sans-serif");
    else if (buttonId === "buttonMono") setLiveFont("monospace");

    let buttons = document.querySelectorAll(".font-button");

    for (let i = 0; i < buttons.length; i++) {

      if (buttons[i].classList.contains("pressed")) {
          buttons[i].classList.remove("pressed");
      }

      if (buttons[i].id === buttonId) {
        buttons[i].classList.add("pressed");
      }
    }
  }

  return (
    <>
    <div className='boxes-container'>
        <PersonalDetailsBox 
        personalData = {personalData}
        onChange = {handleDetailsInput} />
        <EducationsBox
          educations = {educations}
          onChange = {handleEducationsInput}
          onClickAdd = {addEducation}
          onClickDelete = {deleteEducation}/>
        <ExperiencesBox
          layoutColor={layoutColor}
          experiences={experiences}
          onChange = {handleExperiencesInput}
          onClickAdd = {addExperience}
          onClickDelete ={deleteExperience}/>
        <StyleBox 
          onChangeFont = {changeFont}
          color = {layoutColor}
          onChangeColor = {changeColor}
          onClickLayout={changeLayout}/>
    </div>
    <LivePreview 
      font = {liveFont}
      layoutPosition = {layoutPosition}
      textColor = {textColor}
      layoutColor = {layoutColor}
      personalData = {personalData}
      educations = {educations}
      experiences = {experiences}/>
    </>
  )
}

export default App
