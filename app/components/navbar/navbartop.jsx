import "./navbartop.css"

export default function Navbartop() {

    return (
        
        <div className="Navbartop">
            <div className="navbartop-left">
                <h2>free shipping on all u.s orders over $50</h2>
            </div>

            <div className="navbartop-right">
                <select>
                    <option value="">currency</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <hr />
                <select>
                    <option value="">English</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <hr />

                <select>
                    <option value="">My account</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    );
  }