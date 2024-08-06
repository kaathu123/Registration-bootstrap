import React from 'react'
import Card from 'react-bootstrap/Card';

const RegistrationForm = () => {
  return (
    <div className=" d-flex flex-column  justify-content-center mt-5 " style={{height:'150vh'}}>
  <div className="d-flex flex-column mx-auto align-self-center justify-content-center " >  
            <Card style={{ width: '140vh',height: '160vh' }}  className="card text-bg-light mb-3" >

                <div className="d-flex flex-column mx-auto gap-3  " style={{ width: '700px', height: '270px' }} >
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
</div>

      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone number</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone number"/>
</div>
<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Address</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<select class="form-select form-select-lg mb-3" aria-label="Large select example">
  <option selected>select District</option>
  <option value="1">TVM</option>
  <option value="2">Ernakulam</option>
  <option value="3">Kottayam</option>
</select>

<select class="form-select form-select-sm" aria-label="Small select example">
  <option selected>select Place</option>
  <option value="1">Muvattupuzha</option>
  <option value="2">Thodupuzha</option>
  <option value="3">Thripunithara</option>
</select>
<div class="mb-3">
  <label for="formFile" class="form-label">Choose File</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
<label for="exampleFormControlInput1" class="form-label">SKILLS</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Decision Making

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1"> Hardworking</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">  Communication</label>
</div>
  </label>
</div>
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
    </div>
    </Card>
    </div>
    </div>
   
  )
}

export default RegistrationForm