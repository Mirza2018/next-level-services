"use server"
import React from 'react';

const PersonDataForm = (params) => {
const {personData}=params
    console.log(params.personData);
    
    return (
        <form onSubmit={()=>personData()} className="card-body">


        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" required name="name" />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name="email" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="date" className="input input-bordered" required name="date" />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <textarea type="" placeholder="Type your address" className="textarea textarea-bordered textarea-md" required name="address" />
        </div>







        <div className="form-control mt-6">
          <button className="btn btn-primary">Buy</button>
        </div>
      </form>
    // <div>lala</div>
      
    );
};

export default PersonDataForm;