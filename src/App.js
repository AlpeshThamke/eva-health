import "./app.css";
import {useState,useRef} from "react";
import {Typography,Button,Modal,Box,TextField,Autocomplete,Checkbox,FormControlLabel} from "@mui/material";
import DateTimePicker from 'react-datetime-picker';
import toast, { Toaster } from 'react-hot-toast';
// import moment from "moment";
// import DateTimePicker from '@mui/lab/DateTimePicker';

const countryCode = [
  "IND","USA"
]
const options = [
  "Type one","Type two","Type three",'Type four'
]
const optionsHosp = [
  "Hospital One","Hospital Two","Hospital Three",'Hospital Four'
]
function App() {

  // console.log(options[0]);
  const [open,setOpen] = useState(false);
  const [countryname,setCountryname] = useState(countryCode[0])
  const [fieldno,setFieldno] = useState(3);
  const [startvalue, startonChange] = useState(new Date());
  const [endvalue, endonChange] = useState(new Date());
  const [checkboxstate,setCheckboxstate] =useState(false);
  const [speci,setSpeci] = useState(options[0])
  const [cocode,setCocode] = useState(countryCode[0]);
  const [clin,setClin] = useState(optionsHosp[0]);
  const [data,setData] = useState([]);
  const [fname,setFname] = useState('')
  const [femail,setFemail] = useState('')
  const [fmobile,setFmobile] = useState('')
  const [faddress,setFaddress] = useState('')
  const [fedu1,setFedu1] = useState('')
  const [fedu2,setFedu2] = useState('')
  const [fedu3,setFedu3] = useState('')
  const [fedu4,setFedu4] = useState('')
  const [fexp,setFexp] = useState('')
  const [fworkexp,setFworkexp] = useState('')
  const [fullname,setFullname] = useState('');

  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const expRef = useRef();
  const addressRef = useRef();
  const addworkexpRef  = useRef();
  const edu1Ref = useRef();
  const edu2Ref = useRef();
  const edu3Ref = useRef();
  const edu4Ref = useRef();

  const handlecheck = () =>{
    var fhh;
    if(checkboxstate===false)
    {
      // document.getElementById("etime").properties.disabled=true
      fhh=true;
    }
    else
    {
      // document.getElementById("etime").properties.disabled=false
      fhh=false;
    }
    // setCheckboxstate(event.target.checked);
    setCheckboxstate(fhh);
  }
  const handleCountry = (event,value ) =>{
    if(value===null)
    {
      alert("Select some country")
      // console.log("Select some country");
    }
    setCocode(value);
  }
  const handleClinic = (event,value) =>{
    if(value===null)
    {
      alert("Select some Clinic")
      // console.log("Select some Clinic");
    }
    setClin(value);
  }
  const handleSpeciality = (event,value) =>{
    if(value===null)
    {
      alert("Select some speicality")
      // console.log("Select some speciality");
    }
    setSpeci(value);
  }
  const check = (e) =>{
    e.preventDefault();
    var globalcheck=1;
    //for name checking
    var temp=nameRef.current.value
    if(temp==='')
    {
      globalcheck=-1;
      alert("Full Name is Mandatory");
      return;
    }
    

    //for email checking
    var emailtemp = emailRef.current.value
    var l=emailtemp.length
    if(l<=2 && emailtemp[0]=='@' && emailtemp[l-1]=='.')
    {
      // console.log("Incorrect email");
      globalcheck=-1;
      alert("Proper Email Id is Mandatory");
      return;
    }
    else
    {
      var te=-1;
      var check=-1;
      var et =-1;
      for(var i=0;i<l;i++)
      {
        if(te===-1 && emailtemp[i]==='@')
        {
          te=i;
        }
        else if(te!==-1 && emailtemp[i]==='@')
        {
          check=1;
          break;
        }
        else if(te===-1 && emailtemp[i]==='.')
        {
          check=1;
          break;
        }
        else if(te!==-1 && emailtemp[i]==='.')
        {
          if((i-te)<2)
          {
            et=i;
            check=1;
            break;
          }
          else
          {
            et=i;
          }
        }
      }
      if(check===-1 && et!==-1)
      {
        // console.log("correct email");
      }
      else
      {
        // console.log("Incorrect email");
        globalcheck=-1;
        alert("Proper Email Id is Mandatory");
        return;
      }
    }

    //for mobile number checking
    var numbertemp = parseInt(numberRef.current.value)
    if(numbertemp>=1111111111 && numbertemp<=9999999999)
    {
      // console.log(numbertemp);
    }
    else
    {
      // console.log("Incorrect Number");
      globalcheck=-1;
      alert("Proper Mobile Number is Mandatory");
      return;
    }

    //for experience checking
    var exptemp = parseInt(expRef.current.value)
    if(exptemp>=80)
    {
      // console.log("Incorrect Experience");
      globalcheck=-1;
      alert("Input a proper number for years of Experience");
      return;
    }
    else
    {
      // console.log("Correct Experience Number");
    }

    //for address checking
    var addresstemp = addressRef.current.value
    if(addresstemp.length<=4)
    {
      // console.log("Incorrect Address");
      globalcheck=-1;
      alert("Proper Address is Mandatory");
      return;
    }
    else
    {
      // console.log("Correct Address")
    }

    //for adding work experience checking
    var addworkexptemp = addworkexpRef.current.value
    if(addworkexptemp.length<=5)
    {
      // console.log("Incorrect Work Experience");
      globalcheck=-1;
      alert("Proper Work Experience is Mandatory");
      return;
    }
    else
    {
      // console.log("Correct Work Experience");
    }

    //for eudcation check
    var edu1temp = edu1Ref.current.value
    var edu2temp = edu2Ref.current.value
    var edu3temp = edu3Ref.current.value
    var edu4temp = edu4Ref.current.value
    // console.log(edu1temp,edu2temp,edu3temp,edu4temp);
    // console.log(document.getElementById("four").style.visibility);
    if(document.getElementById("four").style.visibility==='visible')
    {
      if(edu1temp!=='' && edu2temp!=='' && edu3temp!=='' && edu4temp!=='')
      {
        // console.log("All entries are correct");
      }
      else
      {
        // console.log("Some entries are wrong");
        globalcheck=-1;
        alert("Please fill the education fields in order");
        return;
      }
    }
    else if(document.getElementById("three").style.visibility==='visible')
    {
      if(edu1temp!=='' && edu2temp!=='' && edu3temp!=='')
      {
        // console.log("All entries are correct");
        
      }
      else
      {
        // console.log("Some entries are wrong");
        globalcheck=-1;
        alert("Please fill the education fields in order");
        return;
      }
    }
    else if(document.getElementById("three").style.visibility==='hidden')
    {
      if(edu1temp!=='' && edu2temp!=='')
      {
        // console.log("All entries are correct");
      }
      else
      {
        // console.log("Some entries are wrong");
        globalcheck=-1;
        alert("Please fill the education fields in order");
        return;
      }
    }

    var final_ans;
    if(globalcheck===1 && clin!==null && cocode!==null && speci!==null)
    {
      final_ans = {"Full Name":temp,"Speciality":speci,"Email":emailtemp,"Country Code":cocode,"Mobile Number":numbertemp,"Experience in Years":exptemp,"Clinic Name":clin,"Address":addresstemp,"Work Experience":addworkexptemp,"Start Date":startvalue,"End Date":endvalue,"Education 1":edu1temp,"Education 2":edu2temp,"Education 3":edu3temp,"Education 4":edu4temp}
      toast.success("Successfully Saved");
      handleClose();
      console.log(final_ans); // for just entered data
      console.log(data);  //for all the data

    }
    else
    {
      alert("Please fill the Form Properly");
      return;
    }
    var temp_data = data;
    temp_data.push(final_ans);
    setData(temp_data);
    setFemail(emailtemp);
    setFname(temp);
    setFmobile(numbertemp);
    setFaddress(addresstemp);
    setFedu1(edu1temp);
    setFedu2(edu2temp);
    setFedu3(edu3temp);
    setFedu4(edu4temp);
    setFexp(exptemp);
    setFworkexp(addworkexptemp);
    
  }
  const handleClose = () =>{
    setOpen(false);
  }
  const addmore = () =>{
    var temp=fieldno
    var nname;
    if(temp===3)
    {
      temp++;
      nname="three";
    }
    else
    {
      nname="four";
    }
    document.getElementById(`${nname}`).style.visibility='visible';
    document.getElementById(`${nname}`).style.border='1px solid black';

    if(nname==='four')
    {
      document.getElementById('addit').style.visibility="hidden"
      document.getElementById('removeit').style.visibility="visible"
    }
    else
    {
      document.getElementById('addit').style.visibility="visible"
      document.getElementById('removeit').style.visibility="visible"
    }
    setFieldno(temp);
  }
  const remove = () =>{
    var temp=fieldno;
    var nname;
    if(temp===4)
    {
      temp--;
      nname="four";
      edu4Ref.current.value=''
    }
    else
    {
      nname="three";
      edu3Ref.current.value=''
    }
    document.getElementById(`${nname}`).style.visibility="hidden"

    if(nname==="three")
    {
      document.getElementById('removeit').style.visibility="hidden"
      document.getElementById('addit').style.visibility="visible"
    }
    else
    {
      document.getElementById('addit').style.visibility="visible"
      document.getElementById('removeit').style.visibility="visible"
    }
    setFieldno(temp);
  }
  return (
    <div className="landing">
      <div>
          <div>
          <Toaster position="top-center" onClick={handleClose}/>
          </div>
          <Button style={{position:"absolute",width:129,height:45,left:122,top:55,textTransform:"none",blend:"pass-through"}}><Typography style={{fontFamily:"Poppins",fontSize:30,color:"white"}}><b>inspace</b></Typography></Button>
          <Button style={{position:"absolute",width:65,height:27,left:500,top:64,textTransform:"none",blend:"pass-through"}}><Typography style={{fontFamily:"Poppins",fontSize:18,color:"white"}}><b>About</b></Typography></Button>
          <Button style={{position:"absolute",width:75,height:27,left:650,top:64,textTransform:"none",blend:"pass-through"}}><Typography style={{fontFamily:"Poppins",fontSize:18,color:"white"}}><b>Events</b></Typography></Button>
          <Button style={{position:"absolute",width:125,height:27,left:800,top:64,textTransform:"none",blend:"pass-through"}}><Typography style={{fontFamily:"Poppins",fontSize:18,color:"white"}}><b>Contact Us</b></Typography></Button>
      </div>
      <div style={{position:"absolute",left:'112px',top:"216px",width:"731px",height:"174px"}}>
        <Typography style={{fontFamily:"Poppins",fontSize:58}}>Building a <b>community of Doctors</b> for the future</Typography>
      </div>
        <Button style={{position:"absolute",width:326,height:64,left:112,top:458,background:"#FF6868",color:"white"}} onClick={()=>{setOpen(true)}}><Typography style={{fontFamily:"Montserrat",fontSize:20}}><b>Join The Community</b></Typography></Button>
        <Button style={{position:"absolute",width:326,height:64,left:475,top:457,border:"1px solid #FFFFFF",blend:"pass-through",color:"white"}}><Typography style={{fontFamily:"Montserrat",fontSize:20}}><b>Explore</b></Typography></Button>
        <Modal 
          open={open}
          onClose={handleClose}
          hideBackdrop={true}
          style={{position:"absolute",marginLeft:"auto",marginRight:"auto",background:"white",marginTop:"4%",width:984,height:850,overflow:'scroll'}}
        >
   
          
          <form onSubmit={(e)=>check(e)}>
          <Button onClick={()=>handleClose()} variant="contained" style={{position:'fixed',marginLeft:870,marginTop:-60,background:"red",fontSize:18}}>X</Button>
          <Typography style={{fontFamily:"Poppins",fontSize:36,textAlign:"center",marginTop:84}}>Fill up the details to register</Typography>
          <Typography style={{position:"relative",fontFamily:"Poppins",fontSize:16,left:135,marginTop:70}}>Doctor Name*</Typography>
          <TextField inputRef={nameRef} variant="outlined" label='Full Name' style={{position:"relative",left:135,width:330,height:55,top:10}} />
          <Typography style={{position:"relative",fontFamily:"Poppins",fontSize:16,left:520,marginTop:-80}}>Speciality*</Typography>
          <Autocomplete
              disablePortal
              options={options}
              defaultValue={options[0]}
              onChange={handleSpeciality}
              style={{position:"relative",width:330,height:55,left:520,marginTop:10}}
              renderInput={(params) => <TextField {...params} label="Select Specialization" />}
          />
          <div style={{position:'absolute',marginLeft:135}}>
          <Typography style={{fontFamily:"Poppins",fontSize:16,marginTop:20}}>Email*</Typography>
          <TextField inputRef={emailRef} variant="outlined" label="you@example.com" style={{width:715,height:55,marginTop:10}} />
          <Typography style={{fontFamily:"Poppins",fontSize:16,marginTop:20}}>Mobile Number*</Typography>
          <Autocomplete
              disablePortal
              options={countryCode}
              defaultValue={countryCode[0]}
              onChange ={handleCountry}
              style={{width:100,height:55,marginTop:10}}
              renderInput={(params) => <TextField {...params} />}
          />
          <TextField variant="outlined" label="Eg. 6386432858" style={{width:615,height:55,marginTop:-55,marginLeft:100}} inputRef={numberRef}  type='number'/>
          <Typography style={{fontFamily:"Poppins",fontSize:16,marginTop:20}}>Experience*</Typography>
          <TextField variant="outlined" label="Write in Numbers" style={{width:715,height:55,marginTop:10}} type='number' inputRef={expRef}/>
          <Typography style={{position:"relative",fontFamily:"Poppins",fontSize:16,left:0,marginTop:20}}>Clinic Name*</Typography>
          <Autocomplete
              disablePortal
              options={optionsHosp}
              defaultValue={optionsHosp[0]}
              onChange ={handleClinic}
              style={{position:"relative",width:715,height:55,marginTop:10}}
              renderInput={(params) => <TextField {...params} label="Select Clinic Name" />}
          />
          <Typography style={{fontFamily:"Poppins",fontSize:16,marginTop:20}}>Address*</Typography>
          <TextField variant="outlined" label="Eg. Near Park Street, Calcutta, W.B." style={{width:715,height:55,marginTop:10}} inputRef={addressRef}/>
          <Typography style={{fontFamily:"Poppins",fontSize:16,marginTop:20}}>Add Work Experience*</Typography>
          <TextField variant="outlined" label="Eg. 2013-2014 Senior Registrar At Sahyadri Narayana Hrudayala" style={{width:715,height:55,marginTop:10}} inputRef = {addworkexpRef}/>
          <Typography style={{fontFamily:"Poppins",fontSize:16,marginTop:20}}>Start Date*</Typography>
          <div>
          <DateTimePicker onChange={startonChange} value={startvalue} style={{width:330,height:55,marginTop:10}}/>
          </div>
          <div style={{marginLeft:490,marginTop:-72}}>
          <Typography style={{fontFamily:"Poppins",fontSize:16,marginTop:20}}>End Date*</Typography>
          <DateTimePicker id="edate" onChange={endonChange} value={endvalue}  style={{width:330,height:55}}/>
          </div>
          <FormControlLabel control={<Checkbox  checked={checkboxstate} onChange={()=>handlecheck()}/>} label="Presently At This Position" style={{marginLeft:478,marginTop:10}}/>
          </div>
          <Typography style={{position:"absolute",fontFamily:"Poppins",fontSize:16,left:135,marginTop:800}}>Education*</Typography>
          <TextField  id="one" style={{width:715,height:55,marginTop:830,left:135}} inputRef ={edu1Ref}/>
          <TextField  id="two"  style={{width:715,height:55,marginTop:20,left:135}}  inputRef ={edu2Ref}/>
          <TextField  id="three"  style={{width:715,height:55,marginTop:20,left:135, visibility:"hidden"}}  inputRef ={edu3Ref}/>
          <TextField  id="four"  style={{width:715,height:55,marginTop:20,left:135, visibility:"hidden"}}  inputRef ={edu4Ref}/>
          <Button id="addit" style={{width:715,height:55,background:"white",color:'black',left:135,border:"1px solid black",fontFamily:"Poppins",textTransform:"none",marginTop:20}} onClick={()=>addmore()}>Add More+</Button>
          <Button id="removeit" style={{width:715,height:55,background:"white",color:'black',left:135,border:"1px solid black",fontFamily:"Poppins",textTransform:"none",marginTop:20,visibility:"hidden"}} onClick={()=>remove()}>Remove-</Button>
          <Button type="submit" style={{width:715,height:55,background:"#001D84",fontSize:"20px",left:135,border:"1px solid black",fontFamily:"Poppins",textTransform:"none",marginTop:20,color:"white",marginBottom:40}}>Complete Registration</Button>
          
          </form>
        </Modal>
      <Box
        sx={{
        position:"absolute",
        width: '500px',
        height: "640px",
        left:'1200px',
        top:'0px',
        backgroundColor: '#B4B8FF'
      }}
    >
    <Button style={{position:"absolute",width:100,height:43,left:370,top:35,background:"#000000"}}><Typography style={{fontFamily:"Poppins",fontSize:18,color:"white",blend:"pass-through"}}><b>LOG IN</b></Typography></Button>
    </Box>
      <img style={{position:"absolute",width:"540px",height:"670px",left:"1150px",top:"73px"}} src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png" alt="Doctor"/>
      <Box
        sx={{
        position:"absolute",
        width: '100%',
        height: "339px",
        left:'0px',
        top:'640px',
        backgroundColor: '#FFFFFF'
      }}
    >
    <Typography style={{position:"absolute",color:"#373B7B",left:"112px",top:"50px",fontFamily:"Poppins",fontSize:24,fontWeight:500}}>Our Community Comprises Graduates From</Typography>

    <div style={{position:"absolute",top:100}}>
      
        <Box style={{position:"absolute",left:"112px",border:"0.5px solid #DCDDD5",width:"320px",height:"180px"}}>
          <img style={{width:180,height:129,display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"10%",marginBottom:"auto"}} src="https://logowik.com/content/uploads/images/harvard-university8762.jpg" alt="Harvard University Logo"></img>
        </Box>

        <Box style={{position:"absolute",left:"432px",border:"0.5px solid #DCDDD5",width:"320px",height:"180px"}}>
          <img style={{width:235,height:168,display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"3%",marginBottom:"auto"}} src="https://logowik.com/content/uploads/images/university-of-oxford9718.jpg" alt="University of Oxford Logo"></img>
        </Box>

        <Box style={{position:"absolute",left:"752px",border:"0.5px solid #DCDDD5",width:"320px",height:"180px"}}>
          <img style={{width:160,display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"23%",marginBottom:"auto"}} src="https://www.pngkit.com/png/full/285-2857146_stanford-university-stanford-university.png" alt="Stanford University Logo"></img>
        </Box>


        <Box style={{position:"absolute",left:"1072px",border:"0.5px solid #DCDDD5",width:"320px",height:"180px"}}>
          <img style={{width:176,display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"15%",marginBottom:"auto"}} src="https://logos-world.net/wp-content/uploads/2022/01/Cornell-University-Logo.png"  alt="Cornell University Logo"></img>
        </Box>

        <Box style={{position:"absolute",left:"1392px",border:"0.5px solid #DCDDD5",width:"320px",height:"180px"}}>
          <img style={{width:65,display:"block",marginLeft:"25%",marginRight:"auto",marginTop:"20%",marginBottom:"auto"}} src="https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg" alt="IIT Delhi Logo"></img><Typography style={{color:"black",marginLeft:"160px",marginTop:-48,fontSize:18}}><b>IIT Delhi</b></Typography>
        </Box>      
    </div>
    </Box>
    </div>
  );
}

export default App;
