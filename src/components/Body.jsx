import React ,{useState}from 'react'
import './css/Body.css'

const Body1 = ({url,alt})=> {
  return (
    <div className='body-1'>
      <img className='flag-name' src={url} alt={alt}/>
    </div>
    );
}

const Body2 = ({options,setOptions})=> {

  const handleOptions = (id) => {
      let new_options = [];
      options.map(option => {
        new_options.push({
          id : option.id,
          name : option.name,
          select : false
        })
      })
      setOptions(new_options);
      let update_options=[]
      new_options.map(option => {
        if(option.id === id)update_options.push({
          id : option.id,
          name : option.name,
          select : true
        })
        else update_options.push({
          id : option.id,
          name : option.name,
          select : false
        })
      })

      setOptions(update_options);
      
  }

  return (
    <div className='body-2'>
      <ul>
        {options.map(option => 
          <li onClick={()=>handleOptions(option.id)} key={option.id} className={option.select?"options select-option" : "options"}>{option.name}</li>
        )}
      </ul>
    </div>
    );
}

function Body() {
  const flagImage={
    url : "https://countryflagsapi.com/png/br",
    alt : "Brazil"
  }
  const [options,setOptions]=useState([
    {
      id :'A',
      name : "Option 1",
      select : false

    },
    {
      id :'B',
      name : "Option 2",
      select : false
    },
    {
      id :'C',
      name : "Option 3",
      select : false
    },
    {
      id :'D',
      name : "Option 4",
      select : false
    }
    ]);
  return (
    <div className='body'>
      <Body1 url={flagImage.url} alt={flagImage.alt} />
      <Body2 options={options} setOptions={setOptions}/>
    </div>
  )
}

export default Body