import "../scss/layout/_form-box.scss";
import form_ring from "../images/form-ring.png";
import santa_clause_form from "../images/santa-clause-form.png";

const FormBoxComp = () => {
  return (
    <div className="FormBoxComp-container">
      <h1>Let’s help you build</h1>
      <div className="form-box-container">
        <div className="form-ring">
          <img src={form_ring} alt="" />
        </div>
        <div className="img-form-side">
          <div className="santas-img">
            <img src={santa_clause_form} alt="" />
          </div>
          <div className="form-box">
            <div className="form-inputs">
              <div className="form-input">
                <label>Name</label>
                <input type="text" placeholder="Tom Holland" />
              </div>
              <div className="form-input">
                <label>Email</label>
                <input type="text" placeholder="info@gastrown.ng" />
              </div>
              <div className="form-input">
                <label>Mobile</label>
                <input type="text" placeholder="12345667" />
              </div>
              <div className="form-input">
                <label>Company</label>
                <input type="text" placeholder="Gastrown Limited" />
              </div>
              <div className="form-input">
                <label>Country/Region</label>
                <input type="text" placeholder="Tom Holland" />
              </div>
              <div className="form-input">
                <label>Industry</label>
                <input type="text" placeholder="Tom Holland" />
              </div>
            </div>
            <div className="form-selects">
              <div className="select-box">
                <label>How did you hear about us?</label>
                <select>
                  <option>Select an Option</option>
                </select>
              </div>
              <div className="select-box">
                <label>How would you like us to contact you?</label>
                <select>
                  <option>Select an Option</option>
                </select>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBoxComp;
