import React from "react";
import "./App.css";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
  orientation: "landscape",
};

function App() {
  return (
    <>
      <div className="text-center mt-2">
        <Pdf targetRef={ref} options={options} filename="rhodin-invoice.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="btn btn-lg btn-primary">
              Download invoice
            </button>
          )}
        </Pdf>
      </div>

      <div className="container mt-3 mb-3" ref={ref}>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <div className="card">
              <div className="d-flex flex-row p-2">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/crane-cloud/frontend/develop/public/favicon.png"
                  width="48"
                />
                <div className="d-flex flex-column p-1 header">
                  {" "}
                  <span className="font-weight-bold">
                    Crane Cloud Project Invoice
                  </span>{" "}
                  <span>INV-001</span>{" "}
                </div>
              </div>
              <hr />
              <div className="table-responsive p-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="add">
                      <td>For</td>
                      <td>Project ID</td>
                    </tr>
                    <tr className="content">
                      <td className="font-weight-bold">
                        Rhodin Emmanuel Nagwere
                      </td>
                      <td>54164f54-ebd2-42d0-9289-7a1165b560e0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="products p-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="add">
                      <td>Date generated</td>
                      <td>Project Name</td>
                      <td>Total amout due</td>
                      <td>Total paid</td>
                      <td className="text-center">Balance due</td>
                    </tr>
                    <tr className="content">
                      <td>31-02-2022</td>
                      <td>Rhodin-Apps</td>
                      <td>$200</td>
                      <td>$0</td>
                      <td className="text-center">$200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="table-responsive p-2">
                <table className="table table-borderless">
                  <tbody>
                    <tr className="add">
                      <td>Contact Details</td>
                    </tr>
                    <tr className="content">
                      <td className="font-weight-bold">
                        Software Center, Level 3, Block B
                        <br />
                        College of Computing and Information Sciences
                        <br />
                        Makerere University
                        <br />
                        Kampala, Uganda
                        <br />
                        <a href="https://cranecloud.io">
                          https://cranecloud.io
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
