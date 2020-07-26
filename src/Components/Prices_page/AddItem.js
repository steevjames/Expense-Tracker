import React from 'react'
import "../../index.css"

function AddItem(props) {

    function submitItem() {
        var title = document.getElementById("expensetitle").value;
        var amount = document.getElementById("expenseamount").value;
        if (title === "") {
            alert("Enter Expense name");
            return;
        }
        if (amount === "" || amount === 0) {
            alert("Enter Amount");
            return;
        }
        console.log(title, amount);
        props["updateFunction"]({ "title": title, "desc": amount, "id": 5 });
        props["toggleFunction"]()
    }

    return (

        <div className="addItem"        >
            <div className="addItemChild">
                <span style={{ color: "#466", fontSize: "17px", }}>
                    Add New Expense
                    </span>
                <div onClick={props["toggleFunction"]} style={{ float: "right", fontSize: "25px", color: "#f00" }}>
                    X
                        </div>
                <hr style={{ borderTop: "1px solid #ccc" }} />
                <br />

                <div className="formItem">
                    Expense :
                     <input id="expensetitle" type="text" className="inputfield" />
                </div>
                <div className="formItem">
                    Amount :
                 <input id="expenseamount" type="number" className="inputfield" />
                </div>

                <button onClick={submitItem}
                    style={{
                        backgroundColor: "#446", color: "#fff", border: "0", padding: "10px 80px",
                        borderRadius: "50px", marginTop: "50px", outline: "0"
                    }}                >
                    Add
                        </button>
            </div>
        </div>
    )
}

export default AddItem
