import React from 'react'
import './stylesheets/form.css';
const Form = () => {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="row">
                        <div class="col sm-6">
                        <input class="form-control" type="text" placeholder="Title" aria-label="default input example"/>
                        </div>
                        <div class="col-md-auto">
                        
                        </div>
                        <div class="col col-lg-4">
                        <div class="btn-group">
  <button type="button" menuVariant="dark"   class="btn btn-secondary dropdown-toggle col-sm-4" data-bs-toggle="dropdown" aria-expanded="false">
    Employment type(Choose Option)
  </button>
  <ul class="dropdown-menu dropdown-menu-end emp">
    <li><button class="dropdown-item emp" type="button">Full-time</button></li>
    <li><button class="dropdown-item emp" type="button">Part-time</button></li> 
    <li><button class="dropdown-item emp" type="button">Contract</button></li>
    <li><button class="dropdown-item emp" type="button">Volunteer</button></li>
    <li><button class="dropdown-item emp" type="button">Internship</button></li>
   
  </ul>
</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-3">
          <div class="col">
          <input class="form-control loc" type="text" placeholder="Location" aria-label="default input example"/>

          </div>
          <div class="col">
          
          <div class="btn-group">
  <button type="button"   class="btn btn-secondary dropdown-toggle col-sm-4" data-bs-toggle="dropdown" aria-expanded="false">
    Job Section(Choose Option)
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Business System <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Design <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Engineering <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Finance <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Human Resource <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Legal <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Marketing <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Operations <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Products <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Sales <hr></hr></button></li> 
    <li><button class="dropdown-item" type="button">Security <hr></hr></button></li>
    <li><button class="dropdown-item" type="button">Support <hr></hr></button></li>
  </ul>
</div>
          </div>
          <div class="col">
          <div class="btn-group">
  <button type="button"   class="btn btn-secondary dropdown-toggle col-sm-4" data-bs-toggle="dropdown" aria-expanded="false">
    Workplace Type(Choose Option)
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">On-Site<br/><p>Employees come to work in person</p></button></li>
    <li><button class="dropdown-item" type="button">Hybrid<br/><p>Employees come to work on site and off-site</p></button></li>
    <li><button class="dropdown-item" type="button">Remote<br/><p>Employees work off-site</p></button></li>
  </ul>
</div></div>
          <div class="col">
          <div class="btn-group">
  <button type="button"   class="btn btn-secondary dropdown-toggle col-sm-4" data-bs-toggle="dropdown" aria-expanded="false">
    Paid/Gretis(Choose Option)
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button">Paid</button></li>
    <li><button class="dropdown-item" type="button">Gretis</button></li>
   
  </ul>
</div>
</div>
          
        </div>
        <div class="col-sm-11.5 bg-light m-3">
        <input class="form-control" type="text" placeholder="Short Description(150 words)" aria-label="default input example"/>

</div>
        </div>
       
       
      
    )
}

export default Form